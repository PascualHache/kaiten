import { useEffect, useRef, useState } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { IconChevronDown } from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import { ACTIVITIES } from '../data/activities'
import ExperienceDetail from './ExperienceDetail'
import './Experiences.css'

/* Carrusel horizontal de experiencias.
 *
 * El track es un scroller horizontal nativo con scroll-snap, a cualquier
 * ancho. No hay pin ni scrub: anclar la sección y conducir el track con GSAP
 * secuestraba el scroll vertical de la página al llegar aquí.
 *
 * Al pulsar una tarjeta se despliega debajo su ficha completa
 * (ExperienceDetail), la misma que usa /reservas. Cal.com se inicializa solo
 * para la actividad abierta, nunca para las ocho de golpe.
 */

// Tiempo que la ficha sigue montada tras cerrarse, para que le dé tiempo a
// animar la salida en lugar de desaparecer de golpe.
const DETAIL_EXIT_MS = 200

function Experiences() {
  const trackRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLSpanElement>(null)
  const detailRef = useRef<HTMLDivElement>(null)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [detailSlug, setDetailSlug] = useState<string | null>(null)
  const [detailClosing, setDetailClosing] = useState(false)

  const activeService = SERVICES.find((s) => s.id === activeId) ?? null
  const activeActivity = activeService
    ? (ACTIVITIES.find(
        (a) =>
          a.calSlug === activeService.reservasPath.replace('/reservas/', ''),
      ) ?? null)
    : null

  // La barra de progreso sigue al scroll del track.
  useEffect(() => {
    const track = trackRef.current
    const bar = progressRef.current
    if (!track || !bar) return

    function update() {
      if (!track || !bar) return
      const max = track.scrollWidth - track.clientWidth
      const p = max > 0 ? track.scrollLeft / max : 0
      bar.style.transform = `scaleX(${p})`
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Cal.com, solo para la actividad abierta.
  useEffect(() => {
    if (!activeActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: activeActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [activeActivity])

  // Mantiene la ficha montada mientras dura la animación de salida.
  useEffect(() => {
    if (activeActivity) {
      setDetailSlug(activeActivity.calSlug)
      setDetailClosing(false)
      return
    }
    if (!detailSlug) return
    setDetailClosing(true)
    const t = window.setTimeout(() => {
      setDetailSlug(null)
      setDetailClosing(false)
    }, DETAIL_EXIT_MS)
    return () => window.clearTimeout(t)
  }, [activeActivity, detailSlug])

  const detailActivity = detailSlug
    ? (ACTIVITIES.find((a) => a.calSlug === detailSlug) ?? null)
    : null

  function select(id: string) {
    const opening = id !== activeId
    setActiveId(opening ? id : null)
    if (!opening) return
    // La ficha se monta en el mismo frame que el cambio de estado, así que
    // el desplazamiento espera al siguiente para encontrarla ya en el DOM.
    requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    })
  }

  return (
    <section className="experiences" id="experiencias">
      <header className="experiences__header" data-reveal="">
        <div className="experiences__heading">
          <p className="experiences__eyebrow">Experiencias</p>
          <h2 className="experiences__title">Elige tu experiencia</h2>
        </div>
        <p className="experiences__lead">
          Ocho formas de vivir Baqueira, todas con instructor titulado y
          atención personalizada
        </p>
      </header>

      <div className="experiences__track" data-exp-track="" ref={trackRef}>
        {SERVICES.map((service, i) => {
          const isActive = service.id === activeId
          return (
            <button
              key={service.id}
              type="button"
              className={`experiences__tile${
                isActive ? ' experiences__tile--active' : ''
              }`}
              data-exp-tile=""
              aria-expanded={isActive}
              onClick={() => select(service.id)}
            >
              <img
                className="experiences__tile-img"
                src={service.image}
                alt=""
                loading="lazy"
                decoding="async"
                style={
                  service.imagePosition
                    ? { objectPosition: service.imagePosition }
                    : undefined
                }
              />
              <span className="experiences__tile-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="experiences__tile-body">
                <span className="experiences__tile-title">{service.title}</span>
                <span className="experiences__tile-tagline">
                  {service.tagline}
                </span>
                <span className="experiences__tile-more">
                  {isActive ? 'Cerrar' : 'Ver experiencia'}
                  <IconChevronDown size={16} stroke={2} aria-hidden="true" />
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="experiences__progress" aria-hidden="true">
        <span data-exp-progress="" ref={progressRef} />
      </div>

      {detailActivity && (
        <div
          key={detailActivity.calSlug}
          ref={detailRef}
          className={`experiences__detail${
            detailClosing ? ' experiences__detail--closing' : ''
          }`}
        >
          <ExperienceDetail activity={detailActivity} />
        </div>
      )}
    </section>
  )
}

export default Experiences
