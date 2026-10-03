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
 * Los medimos en vivo en lugar de fijar una constante: el PromoBanner vive
 * dentro de <header class="navbar">, así que la altura cae ~44px cuando el
 * visitante lo cierra. widget.js relee estos globals en cada scroll. */
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
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // El producto está horneado en el script ya cargado: para mostrar otro
    // distinto no hay API, solo una carga limpia del documento.
    if (loadPromise && loadedProductId !== productId) {
      window.location.reload()
      return
    }

    const stopOffsetWatch = watchNavbarOffset()

    const mount = document.createElement('div')
    mount.id = POSITION_ID
    container.appendChild(mount)

    let cancelled = false
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
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      stopOffsetWatch()
      teardownWidget()
      mount.remove()
    }
  }, [productId])

  return (
    <div className="bookeo">
      <div className="bookeo__mount" ref={containerRef} />
      {failed && (
        <p className="bookeo__fallback" role="alert">
          No hemos podido cargar el sistema de reservas.{' '}
          <button
            type="button"
            className="bookeo__retry"
            onClick={() => window.location.reload()}
          >
            Reintentar
          </button>{' '}
          o escríbenos por WhatsApp y lo gestionamos contigo.
        </p>
      )}
    </div>
  )
}
