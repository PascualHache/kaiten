import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import heroImage from '../assets/images/kaiten_bg.png'
import './Experiences.css'

function Experiences() {
  const [activeIndex, setActiveIndex] = useState(0)

  const go = (dir: number) =>
    setActiveIndex((i) => (i + dir + SERVICES.length) % SERVICES.length)

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
              aria-label="Experiencia anterior"
              onClick={() => go(-1)}
            >
              <IconArrowLeft size={20} stroke={2} />
            </button>
            <button
              type="button"
              className="experiences__nav-btn experiences__nav-btn--primary"
              aria-label="Experiencia siguiente"
              onClick={() => go(1)}
            >
              <IconArrowRight size={20} stroke={2} />
            </button>
          </div>
        </div>
      </header>

      <div className="experiences__row">
        {SERVICES.map((service, i) => {
          const isActive = i === activeIndex
          return (
            <article
              key={service.id}
              className={`experience-card${isActive ? ' experience-card--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveIndex(i)
                }
              }}
            >
              <img
                className="experience-card__img"
                src={heroImage}
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
                  <Link
                    to={service.reservasPath}
                    className="experience-card__cta"
                    tabIndex={isActive ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Reservar
                    <IconArrowRight size={18} stroke={2} />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experiences
