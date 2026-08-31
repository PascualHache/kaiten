import { useState, useRef, useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import { SERVICES, type Service } from '../data/services'
import { ACTIVITIES } from '../data/activities'
import ExperienceDetail from './ExperienceDetail'
import './Experiences.css'

const PAGE_SIZE = 5
const MAX_START = Math.max(0, SERVICES.length - PAGE_SIZE)
const DETAIL_EXIT_MS = 200

interface Slide {
  items: Service[]
  dir: 1 | -1
}

function Experiences() {
  const [start, setStart] = useState(0)
  const [slide, setSlide] = useState<Slide | null>(null)
  const [shifted, setShifted] = useState(false)
  const [noTransition, setNoTransition] = useState(false)
  const [lockCardTransition, setLockCardTransition] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [detailActivity, setDetailActivity] = useState<
    (typeof ACTIVITIES)[number] | null
  >(null)
  const [detailClosing, setDetailClosing] = useState(false)
  const rowRef = useRef<HTMLDivElement>(null)

  const activeService = activeIndex !== null ? SERVICES[activeIndex] : null
  const activeActivity = activeService
    ? (ACTIVITIES.find(
        (a) =>
          a.calSlug === activeService.reservasPath.replace('/reservas/', ''),
      ) ?? null)
    : null

  useEffect(() => {
    if (!activeActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: activeActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [activeActivity])

  // Keep the detail panel mounted for a moment after it's deselected so its
  // exit animation can play instead of the panel just vanishing.
  useEffect(() => {
    if (activeActivity) {
      setDetailActivity(activeActivity)
      setDetailClosing(false)
      return
    }
    setDetailClosing(true)
    const t = window.setTimeout(() => {
      setDetailActivity(null)
      setDetailClosing(false)
    }, DETAIL_EXIT_MS)
    return () => window.clearTimeout(t)
  }, [activeActivity])

  const select = (i: number) => {
    if (i === activeIndex) {
      setActiveIndex(null)
      return
    }
    setActiveIndex(i)
    rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const isPrevDisabled = start <= 0
  const isNextDisabled = start >= MAX_START
  const isSliding = slide !== null

  // Minimalist carousel shift by exactly one card: a 6th card (the one
  // entering or leaving) is rendered alongside the usual 5, then the whole
  // row eases across by one card's width — nothing is unmounted or faded
  // out mid-shift, it only ever slides.
  const shift = (dir: 1 | -1) => {
    if (isSliding) return
    if (dir < 0 && isPrevDisabled) return
    if (dir > 0 && isNextDisabled) return
    setActiveIndex(null)
    setLockCardTransition(true)

    if (dir > 0) {
      // Append the incoming card at the end; the row starts at its resting
      // position (no visual change yet) and eases left by one slot.
      setSlide({ items: SERVICES.slice(start, start + PAGE_SIZE + 1), dir })
      setNoTransition(false)
      setShifted(false)
      requestAnimationFrame(() => requestAnimationFrame(() => setShifted(true)))
    } else {
      // Prepend the incoming card, pre-shift the row left by one slot
      // instantly (so the visible cards don't jump), then ease back to 0 —
      // which reveals the new card from the left.
      setSlide({ items: SERVICES.slice(start - 1, start + PAGE_SIZE), dir })
      setNoTransition(true)
      setShifted(true)
      requestAnimationFrame(() => {
        rowRef.current?.getBoundingClientRect()
        requestAnimationFrame(() => {
          setNoTransition(false)
          setShifted(false)
        })
      })
    }
  }

  const handleRowTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== rowRef.current || e.propertyName !== 'transform') return
    if (!slide) return
    // Dropping the 6-card list back to the plain 5-card one also resets the
    // transform value (shifted -> 0), which lands on an identical visual —
    // but only if it happens instantly. With the row's transition still
    // enabled that reset would itself animate as an unwanted second slide,
    // so it's snapped in with transitions locked, then released once
    // everything has settled.
    setStart((s) => s + slide.dir)
    setSlide(null)
    setShifted(false)
    setNoTransition(true)
    requestAnimationFrame(() => {
      rowRef.current?.getBoundingClientRect()
      requestAnimationFrame(() => {
        setNoTransition(false)
        setLockCardTransition(false)
      })
    })
  }

  const visible = slide ? slide.items : SERVICES.slice(start, start + PAGE_SIZE)
  const baseIndex = slide ? (slide.dir > 0 ? start : start - 1) : start
  const rowClassName = [
    'experiences__row',
    isSliding && 'experiences__row--sliding',
    shifted && 'experiences__row--shifted',
    noTransition && 'experiences__row--no-transition',
    lockCardTransition && 'experiences__row--lock-card-transition',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className="experiences">
      <header className="experiences__header">
        <div className="experiences__heading">
          <p className="experiences__eyebrow">Experiencias</p>
          <h2 className="experiences__title">Elige tu experiencia</h2>
        </div>
        <div className="experiences__aside">
          <p className="experiences__lead">
            Vivencias diseñadas para cada tipo de esquiador. Elige la tuya y
            empieza.
          </p>
          <div className="experiences__nav">
            <button
              type="button"
              className="experiences__nav-btn"
              aria-label="Actividad anterior"
              onClick={() => shift(-1)}
              disabled={isPrevDisabled || isSliding}
            >
              <IconArrowLeft size={20} stroke={2} />
            </button>
            <button
              type="button"
              className="experiences__nav-btn experiences__nav-btn--primary"
              aria-label="Siguiente actividad"
              onClick={() => shift(1)}
              disabled={isNextDisabled || isSliding}
            >
              <IconArrowRight size={20} stroke={2} />
            </button>
          </div>
        </div>
      </header>

      <div className="experiences__row-wrap">
      <div
        className={rowClassName}
        ref={rowRef}
        onTransitionEnd={handleRowTransitionEnd}
      >
        {visible.map((service, localIndex) => {
          const i = baseIndex + localIndex
          const isActive = i === activeIndex
          return (
            <article
              key={service.id}
              className={`experience-card${isActive ? ' experience-card--active' : ''}`}
              onClick={() => select(i)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  select(i)
                }
              }}
            >
              <img
                className="experience-card__img"
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
              <span className="experience-card__number" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="experience-card__body">
                <h3 className="experience-card__title">{service.title}</h3>
                <p className="experience-card__tagline">{service.tagline}</p>
                <div className="experience-card__reveal">
                  <p className="experience-card__summary">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      </div>

      {detailActivity && (
        <div
          className={`experiences__detail${detailClosing ? ' experiences__detail--closing' : ''}`}
          key={detailActivity.calSlug}
        >
          <ExperienceDetail activity={detailActivity} />
        </div>
      )}
    </section>
  )
}

export default Experiences
