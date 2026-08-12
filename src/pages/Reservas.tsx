import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import { IconChevronDown } from '@tabler/icons-react'
import {
  ACTIVITIES,
  EXPERIENCE_TYPE_LABELS,
  LEVEL_LABELS,
} from '../data/activities'
import { TARIFFS } from '../data/tariffs'
import ExperienceDetail from '../components/ExperienceDetail'
import Tag from '../components/Tag'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Reservas.css'

function getActivityPrice(activity: (typeof ACTIVITIES)[number]) {
  return TARIFFS.find((t) => t.slug === activity.calSlug)?.price ?? '—'
}

export default function Reservas() {
  const location = useLocation()
  const [openSlug, setOpenSlug] = useState<string | null>(
    location.hash ? location.hash.slice(1) : null,
  )

  useEffect(() => {
    if (location.hash) setOpenSlug(location.hash.slice(1))
  }, [location.hash])

  const openActivity = ACTIVITIES.find((a) => a.calSlug === openSlug) ?? null

  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({})

  useEffect(() => {
    if (!openActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: openActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [openActivity])

  useEffect(() => {
    if (!openSlug) return
    rowRefs.current[openSlug]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [openSlug])

  const toggle = (slug: string) =>
    setOpenSlug((prev) => (prev === slug ? null : slug))

  return (
    <div className="reservas">
      <Navbar />
      <main className="reservas__main">
        <p className="reservas__eyebrow">Baqueira Beret</p>
        <h1 className="reservas__titulo">Elige tu experiencia</h1>

        <div className="reservas__table-wrap">
          <table className="reservas__table" aria-label="Experiencias disponibles">
            <thead>
              <tr className="reservas__thead-row">
                <th className="reservas__th reservas__th--name">Experiencia</th>
                <th className="reservas__th">Duración</th>
                <th className="reservas__th reservas__th--hide-sm">Personas</th>
                <th className="reservas__th reservas__th--hide-md">Nivel</th>
                <th className="reservas__th">Precio</th>
                <th className="reservas__th" />
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map((activity) => {
                const isOpen = activity.calSlug === openSlug
                const price = getActivityPrice(activity)
                return (
                  <tr key={activity.id}>
                    {/* colspan trick: we wrap data + detail in a single column cell */}
                    <td colSpan={6} className="reservas__outer-cell">
                      {/* Summary row */}
                      <div
                        ref={(el) => {
                          rowRefs.current[activity.calSlug] = el as unknown as HTMLTableRowElement
                        }}
                        className={`reservas__summary${isOpen ? ' reservas__summary--open' : ''}`}
                        style={{ scrollMarginTop: 'calc(var(--navbar-height) + 1rem)' }}
                      >
                        <span className="reservas__col-name">
                          <span className="reservas__name-text">{activity.title}</span>
                          <Tag
                            variant={activity.experienceType}
                            label={EXPERIENCE_TYPE_LABELS[activity.experienceType]}
                          />
                        </span>
                        <span className="reservas__col-dur">{activity.summary.duration}</span>
                        <span className="reservas__col-pax reservas__hide-sm">
                          {activity.summary.people}
                        </span>
                        <span className="reservas__col-level reservas__hide-md">
                          {activity.levels.map((level) => (
                            <Tag key={level} variant={level} label={LEVEL_LABELS[level]} />
                          ))}
                        </span>
                        <span className="reservas__col-price">
                          {price !== '—' ? `Desde ${price}` : '—'}
                        </span>
                        <button
                          type="button"
                          className="reservas__expand-btn"
                          aria-expanded={isOpen}
                          onClick={() => toggle(activity.calSlug)}
                        >
                          <span className="reservas__expand-label">
                            {isOpen ? 'Cerrar' : 'Conocer más'}
                          </span>
                          <IconChevronDown
                            className={`reservas__expand-chevron${isOpen ? ' reservas__expand-chevron--open' : ''}`}
                            size={16}
                            stroke={2}
                          />
                        </button>
                      </div>

                      {/* Inline detail */}
                      <div className={`reservas__detail${isOpen ? ' reservas__detail--open' : ''}`}>
                        <div className="reservas__detail-inner">
                          {isOpen && <ExperienceDetail activity={activity} />}
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  )
}
