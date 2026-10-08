import { useEffect, useRef, useState } from 'react'
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
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
 * Con solo ratón (sin trackpad) la rueda no genera delta horizontal y el
 * track quedaba inmóvil: de ahí los botones de paso junto a la barra de
 * progreso. No se mapea la rueda vertical a horizontal a propósito, porque eso
 * sí secuestraría el scroll de la página.
 *
 * Al pulsar una tarjeta se despliega debajo su ficha completa
 * (ExperienceDetail), la misma que usa /reservas. El CTA de la ficha lleva a
 * /reservas con la actividad preseleccionada; aquí no se carga nada de Bookeo.
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
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const activeService = SERVICES.find((s) => s.id === activeId) ?? null
  const activeActivity = activeService
    ? (ACTIVITIES.find(
        (a) =>
          a.slug === activeService.reservasPath.replace('/reservas/', ''),
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
      // 1px de holgura: el scroll subpíxel nunca llega al extremo exacto
      setCanPrev(track.scrollLeft > 1)
      setCanNext(max > 1 && track.scrollLeft < max - 1)
    }

    update()
    track.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      track.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  // Mantiene la ficha montada mientras dura la animación de salida.
  useEffect(() => {
    if (activeActivity) {
      setDetailSlug(activeActivity.slug)
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

  // Un paso = una tarjeta. El gap sale del hueco real entre las dos primeras,
  // así no hay que replicar el clamp() del CSS aquí.
  function step(dir: 1 | -1) {
    const track = trackRef.current
    if (!track) return
    const tiles = track.children
    const first = tiles[0] as HTMLElement | undefined
    if (!first) return
    const second = tiles[1] as HTMLElement | undefined
    const gap = second ? second.offsetLeft - (first.offsetLeft + first.offsetWidth) : 0
    track.scrollBy({
      left: dir * (first.offsetWidth + gap),
      behavior: 'smooth',
    })
  }

  const detailActivity = detailSlug
    ? (ACTIVITIES.find((a) => a.slug === detailSlug) ?? null)
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

      <div
        className="experiences__track"
        id="experiences-track"
        data-exp-track=""
        ref={trackRef}
      >
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

      <div className="experiences__controls">
        <div className="experiences__progress" aria-hidden="true">
          <span data-exp-progress="" ref={progressRef} />
        </div>
        <div className="experiences__nav">
          <button
            type="button"
            className="experiences__nav-btn"
            aria-label="Ver experiencias anteriores"
            aria-controls="experiences-track"
            disabled={!canPrev}
            onClick={() => step(-1)}
          >
            <IconChevronLeft size={20} stroke={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="experiences__nav-btn"
            aria-label="Ver más experiencias"
            aria-controls="experiences-track"
            disabled={!canNext}
            onClick={() => step(1)}
          >
            <IconChevronRight size={20} stroke={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      {detailActivity && (
        <div
          key={detailActivity.slug}
          ref={detailRef}
          className={`experiences__detail${
            detailClosing ? ' experiences__detail--closing' : ''
          }`}
        >
          <ExperienceDetail activity={detailActivity} variant="compact" />
        </div>
      )}
    </section>
  )
}

export default Experiences
