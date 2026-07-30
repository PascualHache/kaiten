import { useState, useRef, useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import { ACTIVITIES } from '../data/activities'
import ExperienceDetail from './ExperienceDetail'
import './Experiences.css'

const PAGE_SIZE = 4
const PAGE_COUNT = Math.ceil(SERVICES.length / PAGE_SIZE)

function Experiences() {
  const [page, setPage] = useState(0)
  const [slideDir, setSlideDir] = useState<1 | -1>(1)
  const [activeIndex, setActiveIndex] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null)

  const activeService = SERVICES[activeIndex]
  const activeActivity =
    ACTIVITIES.find(
      (a) => a.calSlug === activeService.reservasPath.replace('/reservas/', ''),
    ) ?? null

  useEffect(() => {
    if (!activeActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: activeActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [activeActivity])

  const select = (i: number) => {
    setActiveIndex(i)
    rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goPage = (dir: number) => {
    setSlideDir(dir > 0 ? 1 : -1)
    const next = (page + dir + PAGE_COUNT) % PAGE_COUNT
    setPage(next)
    setActiveIndex(next * PAGE_SIZE)
  }

  const visible = SERVICES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section className="experiences">
      <header className="experiences__header">
        <div className="experiences__heading">
          <p className="experiences__eyebrow">Experiencias</p>
          <h2 className="experiences__title">
            Encuentra tu forma
            <br />
            de esquiar.
          </h2>
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
              aria-label="Página anterior"
              onClick={() => goPage(-1)}
            >
              <IconArrowLeft size={20} stroke={2} />
            </button>
            <span className="experiences__nav-count">
              {page + 1} / {PAGE_COUNT}
            </span>
            <button
              type="button"
              className="experiences__nav-btn experiences__nav-btn--primary"
              aria-label="Página siguiente"
              onClick={() => goPage(1)}
            >
              <IconArrowRight size={20} stroke={2} />
            </button>
          </div>
        </div>
      </header>

      <div className="experiences__row-wrap">
      <div
        className="experiences__row"
        key={page}
        ref={rowRef}
        style={{ '--slide-dir': slideDir } as React.CSSProperties}
      >
        {visible.map((service, localIndex) => {
          const i = page * PAGE_SIZE + localIndex
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
              />
              <span className="experience-card__number">
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

      {activeActivity && (
        <div className="experiences__detail" key={activeActivity.calSlug}>
          <ExperienceDetail activity={activeActivity} />
        </div>
      )}
    </section>
  )
}

export default Experiences
