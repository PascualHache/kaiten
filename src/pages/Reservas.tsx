import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import { IconChevronDown } from '@tabler/icons-react'
import { ACTIVITIES } from '../data/activities'
import ExperienceDetail from '../components/ExperienceDetail'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Reservas.css'

export default function Reservas() {
  const location = useLocation()
  const [openSlug, setOpenSlug] = useState<string | null>(
    location.hash ? location.hash.slice(1) : null,
  )

  useEffect(() => {
    if (location.hash) setOpenSlug(location.hash.slice(1))
  }, [location.hash])

  const openActivity = ACTIVITIES.find((a) => a.calSlug === openSlug) ?? null

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({})

  useEffect(() => {
    if (!openActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: openActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [openActivity])

  useEffect(() => {
    if (!openSlug) return
    itemRefs.current[openSlug]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [openSlug])

  return (
    <div className="reservas">
      <Navbar />
      <main className="reservas__main">
        <p className="reservas__eyebrow">Reservas</p>
        <h1 className="reservas__titulo">Elige tu experiencia</h1>

        <ul className="reservas__lista">
          {ACTIVITIES.map((activity) => {
            const isOpen = activity.calSlug === openSlug
            return (
              <li
                key={activity.id}
                ref={(el) => {
                  itemRefs.current[activity.calSlug] = el
                }}
                className={`reservas__item${isOpen ? ' reservas__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="reservas__row"
                  aria-expanded={isOpen}
                  onClick={() => setOpenSlug(isOpen ? null : activity.calSlug)}
                >
                  <span className="reservas__row-titulo">{activity.title}</span>
                  <span className="reservas__row-feature">
                    {activity.features[0].title}
                  </span>
                  <IconChevronDown
                    className="reservas__row-chevron"
                    size={20}
                    stroke={2}
                  />
                </button>

                <div
                  className={`reservas__panel${isOpen ? ' reservas__panel--open' : ''}`}
                >
                  <div className="reservas__panel-inner">
                    {isOpen && <ExperienceDetail activity={activity} />}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </main>
      <Footer />
    </div>
  )
}
