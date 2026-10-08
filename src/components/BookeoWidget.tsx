import { useEffect, useRef, useState } from 'react'
import { bookeoWidgetSrc } from '../data/booking'
import './BookeoWidget.css'

/* Widget de reservas de Bookeo.
 *
 * widget.js no es un embed pensado para SPAs y tiene tres trampas que este
 * componente absorbe (todo verificado leyendo el propio widget.js):
 *
 * 1. Arranca con `$bookeo.documentReady()`, que SOLO engancha DOMContentLoaded
 *    y load. Inyectado desde React esos eventos ya han pasado y el widget no
 *    arrancaría jamás → hay que llamar a `window.bookeo_start()` a mano.
 * 2. Monta su iframe dentro de un div con un id fijo, `bookeo_position`. Si lo
 *    creamos nosotros, aparece ahí; si no, se cuela junto al <script>.
 * 3. Solo admite UNA instancia por documento: un segundo `bookeo_start()` sin
 *    limpiar antes lanza un alert("Multiple copies..."). De ahí el teardown y
 *    el guard sobre `bookeo_start` — widget.js se arranca también a sí mismo.
 *
 * El `type=` (producto preseleccionado) se hornea en la URL del script, así que
 * cambiar de actividad exige recargar el documento — ver `bookingHref`.
 *
 * Y dos decisiones sobre la espera, que no son cosméticas:
 *
 * - No se pide nada hasta que el hueco del widget se acerca al viewport. Cada
 *   visita a /reservas levanta un socket y un iframe nuevos (al desmontar se
 *   destruyen), así que arrancar con la página gastaba una petición a Bookeo
 *   en cada paso del visitante, llegara a reservar o no.
 * - Si el iframe no da señales en START_TIMEOUT_MS, se ofrece una salida. El
 *   bloqueo anti-bot de Bookeo no devuelve ningún error: el iframe se queda
 *   girando para siempre. Sin esto, el visitante ve una caja vacía sin saber
 *   si está cargando o roto.
 */

declare global {
  interface Window {
    bookeo_start?: GuardedStart
    bookeo_topOffsetDesktop?: number
    bookeo_topOffsetMobile?: number
    easyXDM?: unknown
    axiomct_project?: { easyXDM?: unknown } | null
    axiomct_socket?: { destroy?: () => void } | null
    axiomct_div?: unknown
    axiomct_iframe?: unknown
    axiomct_spinner?: unknown
  }
}

type GuardedStart = (() => void) & { __kaitenGuarded?: boolean }

/** Id que widget.js busca para decidir dónde montar el iframe. */
const POSITION_ID = 'bookeo_position'

/** Altura de la navbar sticky si no podemos medirla (--navbar-height: 3.25rem). */
const FALLBACK_NAVBAR_PX = 52

/** Margen con el que se adelanta la carga antes de que el hueco entre en pantalla. */
const PRELOAD_MARGIN = '400px 0px'

/** Sin señales del iframe pasado este tiempo, se ofrece la salida por WhatsApp. */
const START_TIMEOUT_MS = 12_000

/** Cada cuánto se comprueba si el iframe ya tiene contenido con alto real. */
const POLL_MS = 400

/** Tope del sondeo: pasado esto, si no ha montado, no va a montar. */
const POLL_MAX_MS = 120_000

/** Alto a partir del cual damos el iframe por montado y no por un spinner. */
const READY_MIN_PX = 240

const WHATSAPP_URL = 'https://wa.me/34699820954'

type Status = 'waiting' | 'starting' | 'ready' | 'slow' | 'failed'

let loadPromise: Promise<void> | null = null
let loadedProductId: string | null = null

function loadWidgetScript(productId: string | null): Promise<void> {
  if (loadPromise) return loadPromise
  loadedProductId = productId
  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = bookeoWidgetSrc(productId)
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('widget.js no se pudo cargar'))
    document.body.appendChild(script)
  })
  return loadPromise
}

/* widget.js no se limita a esperar a que lo arranquemos: al ejecutarse se
 * registra a sí mismo en DOMContentLoaded y en load (`$bookeo.documentReady`).
 * Si lo inyectamos antes de que la página termine de cargar — lo habitual en
 * /reservas, con el hero todavía bajando — ese listener dispara un SEGUNDO
 * bookeo_start() después del nuestro y Bookeo saca el alert de "Multiple
 * copies". Quién gana la carrera depende del peso de la página, así que no
 * vale con ordenar nuestra llamada: envolvemos bookeo_start para que ignore
 * cualquier arranque que no proceda, venga de donde venga.
 */
function guardStart() {
  const native = window.bookeo_start
  if (!native || native.__kaitenGuarded) return

  const guarded: GuardedStart = () => {
    // Ya hay un widget vivo, o nos han desmontado y no queda sitio donde
    // montarlo (widget.js lo colgaría del <body> al final de la página).
    if (window.axiomct_project) return
    if (!document.getElementById(POSITION_ID)) return
    native()
  }
  guarded.__kaitenGuarded = true
  window.bookeo_start = guarded
}

/* La navbar es sticky y taparía la parte alta del iframe cuando Bookeo hace
   scroll a un paso del flujo. Estos globals son los mismos que el campo
   "Floating menu height" del panel; definidos aquí, mandan sobre él.
 *
 * Los medimos en vivo en lugar de fijar una constante: la barra cambia de
 * alto entre breakpoints. widget.js relee estos globals en cada scroll. */
function watchNavbarOffset(): () => void {
  const navbar = document.querySelector('.navbar')

  const sync = () => {
    const measured = navbar?.getBoundingClientRect().height
    const offset = Math.round(measured && measured > 0 ? measured : FALLBACK_NAVBAR_PX)
    window.bookeo_topOffsetDesktop = offset
    window.bookeo_topOffsetMobile = offset
  }

  sync()
  if (!navbar || typeof ResizeObserver === 'undefined') return () => {}

  const observer = new ResizeObserver(sync)
  observer.observe(navbar)
  return () => observer.disconnect()
}

/* Devuelve widget.js a su estado inicial para poder rearrancarlo.
   `bookeo_start` hace `easyXDM.noConflict(...)`, que deja window.easyXDM en
   undefined; sin restaurarlo, el segundo arranque reventaría. */
function teardownWidget() {
  try {
    const easyXDM = window.axiomct_project?.easyXDM
    window.axiomct_socket?.destroy?.()
    if (easyXDM) window.easyXDM = easyXDM
  } catch {
    /* widget a medio arrancar: nada que destruir */
  }
  window.axiomct_project = null
  window.axiomct_socket = null
  window.axiomct_div = null
  window.axiomct_iframe = null
  window.axiomct_spinner = null
}

interface Props {
  /** Producto de Bookeo a preseleccionar. `null` → catálogo completo. */
  productId: string | null
}

export default function BookeoWidget({ productId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>('waiting')

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let cancelled = false
    let stopObserving: (() => void) | undefined
    let stopOffsetWatch: (() => void) | undefined
    let mount: HTMLDivElement | undefined
    let watchdog: number | undefined
    let poll: number | undefined

    /* El iframe lo inyecta widget.js cuando quiere y no podemos mirar dentro
       (es cross-origin), así que la señal de "ya hay algo" es su alto: el
       spinner de Bookeo ocupa poco, el calendario no. */
    function watchForContent() {
      const until = Date.now() + POLL_MAX_MS
      poll = window.setInterval(() => {
        const frame = mount?.querySelector('iframe')
        const height = frame?.getBoundingClientRect().height ?? 0
        if (height < READY_MIN_PX) {
          // Si a los dos minutos sigue sin montar, no va a montar: dejamos de
          // sondear y el aviso de 'slow' se queda como única salida.
          if (Date.now() > until) window.clearInterval(poll)
          return
        }
        window.clearInterval(poll)
        window.clearTimeout(watchdog)
        if (!cancelled) setStatus('ready')
      }, POLL_MS)
    }

    function start(host: HTMLDivElement) {
      // El producto está horneado en el script ya cargado: para mostrar otro
      // distinto no hay API, solo una carga limpia del documento.
      if (loadPromise && loadedProductId !== productId) {
        window.location.reload()
        return
      }

      setStatus('starting')
      stopOffsetWatch = watchNavbarOffset()

      mount = document.createElement('div')
      mount.id = POSITION_ID
      host.appendChild(mount)

      watchForContent()
      watchdog = window.setTimeout(() => {
        // No se cancela nada: el widget sigue intentándolo y, si llega tarde,
        // el poll lo pasa a 'ready' y el aviso desaparece solo.
        if (!cancelled) setStatus((s) => (s === 'ready' ? s : 'slow'))
      }, START_TIMEOUT_MS)

      loadWidgetScript(productId)
        .then(() => {
          if (cancelled) return
          if (typeof window.bookeo_start !== 'function') {
            throw new Error('bookeo_start no está definido')
          }
          guardStart()
          teardownWidget()
          window.bookeo_start()
        })
        .catch(() => {
          if (cancelled) return
          window.clearInterval(poll)
          window.clearTimeout(watchdog)
          setStatus('failed')
        })
    }

    // Nada se pide hasta que el hueco se acerca al viewport. Sin
    // IntersectionObserver (navegador viejo), se arranca sin más.
    if (typeof IntersectionObserver === 'undefined') {
      start(container)
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return
          io.disconnect()
          start(container)
        },
        { rootMargin: PRELOAD_MARGIN },
      )
      io.observe(container)
      stopObserving = () => io.disconnect()
    }

    return () => {
      cancelled = true
      stopObserving?.()
      window.clearInterval(poll)
      window.clearTimeout(watchdog)
      stopOffsetWatch?.()
      teardownWidget()
      mount?.remove()
    }
  }, [productId])

  const pending = status === 'waiting' || status === 'starting'

  return (
    <div className="bookeo">
      <div className="bookeo__mount" ref={containerRef} />

      {pending && (
        <div className="bookeo__skeleton" aria-hidden="true">
          <span className="bookeo__skeleton-bar" />
          <span className="bookeo__skeleton-grid">
            {Array.from({ length: 14 }, (_, i) => (
              <span key={i} />
            ))}
          </span>
        </div>
      )}

      {status === 'slow' && (
        <div className="bookeo__notice" role="status">
          <p>
            El calendario está tardando más de lo normal. Puedes seguir
            esperando — aparecerá en cuanto responda — o escribirnos y lo
            reservamos contigo.
          </p>
          <p>
            <button
              type="button"
              className="bookeo__retry"
              onClick={() => window.location.reload()}
            >
              Reintentar
            </button>{' '}
            ·{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Reservar por WhatsApp
            </a>
          </p>
        </div>
      )}

      {status === 'failed' && (
        <p className="bookeo__notice" role="alert">
          No hemos podido cargar el sistema de reservas.{' '}
          <button
            type="button"
            className="bookeo__retry"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>{' '}
          o{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            escríbenos por WhatsApp
          </a>{' '}
          y lo gestionamos contigo.
        </p>
      )}
    </div>
  )
}
