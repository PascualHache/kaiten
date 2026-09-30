import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCalApi } from '@calcom/embed-react'
import { IconChevronDown } from '@tabler/icons-react'
import {
  ACTIVITIES,
  LEVEL_LABELS,
  type Level,
} from '../data/activities'
import { SERVICES } from '../data/services'
import { findTariff } from '../data/tariffs'
import ExperienceDetail from '../components/ExperienceDetail'
import Tag from '../components/Tag'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import './Reservas.css'

const CAL_USERNAME = 'aitor-bellver-abenoza-ofg9rm'

function getActivityPrice(activity: (typeof ACTIVITIES)[number]) {
  return findTariff(activity.calSlug)?.price ?? '—'
}

/* Same order as the Home carousel (SERVICES), laid out top-to-bottom.
   Activities missing from SERVICES keep their data order at the end. */
const HOME_ORDER = SERVICES.map((s) => s.reservasPath.replace('/reservas/', ''))

const ORDERED_ACTIVITIES = [...ACTIVITIES].sort((a, b) => {
  const ia = HOME_ORDER.indexOf(a.calSlug)
  const ib = HOME_ORDER.indexOf(b.calSlug)
  return (ia === -1 ? HOME_ORDER.length : ia) - (ib === -1 ? HOME_ORDER.length : ib)
})

const LEVEL_ORDER: Level[] = ['principiante', 'intermedio', 'avanzado']

const sortLevels = (levels: Level[]) =>
  [...levels].sort((a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b))

/** "Kids & Friends & Family" → "kids-friends-family" */
const slugifyTitle = (title: string) =>
  title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/* The URL hash may name an activity by its Cal.com slug, its id, or its
   title ("/reservas#safari", "#clases-privadas"). Anything else is ignored
   so a stale link just lands on the page with every row closed. */
function resolveHash(hash: string): string | null {
  if (!hash) return null
  const wanted = slugifyTitle(decodeURIComponent(hash.replace(/^#/, '')))
  if (!wanted) return null
  const match = ACTIVITIES.find(
    (a) =>
      slugifyTitle(a.calSlug) === wanted ||
      slugifyTitle(a.id) === wanted ||
      slugifyTitle(a.title) === wanted,
  )
  return match?.calSlug ?? null
}

export default function Reservas() {
  const location = useLocation()
  const navigate = useNavigate()
  const [openSlug, setOpenSlug] = useState<string | null>(() =>
    resolveHash(location.hash),
  )

  useEffect(() => {
    const fromHash = resolveHash(location.hash)
    if (fromHash) setOpenSlug(fromHash)
  }, [location.hash])

  const openActivity = ACTIVITIES.find((a) => a.calSlug === openSlug) ?? null

  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({})
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  useEffect(() => {
    if (!openActivity) return
    ;(async () => {
      const cal = await getCalApi({ namespace: openActivity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [openActivity])

  useEffect(() => {
    if (!openSlug) return
    /* Focus first (without scrolling: the browser would jump), then run our
       own smooth scroll. Keyboard and screen-reader users arriving from a
       hash link land on the row's toggle, which carries aria-expanded. */
    btnRefs.current[openSlug]?.focus({ preventScroll: true })
    rowRefs.current[openSlug]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [openSlug])

  /* The open row is reflected in the URL so the link can be copied and
     shared. replace(), not push(): otherwise every toggle adds a history
     entry and Back walks row by row instead of leaving the page. */
  const toggle = (slug: string) => {
    const next = openSlug === slug ? null : slug
    setOpenSlug(next)
    navigate(next ? `${location.pathname}#${next}` : location.pathname, {
      replace: true,
    })
  }

  /* Cal.com is initialised per activity, only once its button is pressed —
     never for the whole table at page load. */
  const openCal = async (slug: string) => {
    const cal = await getCalApi({ namespace: slug })
    cal('ui', { theme: 'light' })
    cal('modal', {
      calLink: `${CAL_USERNAME}/${slug}`,
      config: { layout: 'month_view' },
    })
  }

  return (
    <div className="reservas">
      <Navbar />
      <main className="reservas__main">
        <PageTitle eyebrow="Baqueira Beret">Elige tu experiencia</PageTitle>

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
              {ORDERED_ACTIVITIES.map((activity) => {
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
                        </span>
                        <span className="reservas__col-dur">{activity.summary.duration}</span>
                        <span className="reservas__col-pax reservas__hide-sm">
                          {activity.summary.people}
                        </span>
                        <span className="reservas__col-level reservas__hide-md">
                          {sortLevels(activity.levels).map((level) => (
                            <Tag key={level} variant={level} label={LEVEL_LABELS[level]} />
                          ))}
                        </span>
                        <span className="reservas__col-price">
                          {price !== '—' ? `Desde ${price}` : '—'}
                        </span>
                        <div className="reservas__actions">
                          <button
                            type="button"
                            className="reservas__book-btn"
                            onClick={() => openCal(activity.calSlug)}
                          >
                            Reservar
                          </button>
                          <button
                            type="button"
                            ref={(el) => {
                              btnRefs.current[activity.calSlug] = el
                            }}
                            className="reservas__expand-btn"
                            aria-expanded={isOpen}
                            onClick={() => toggle(activity.calSlug)}
                          >
                            <span className="reservas__expand-label">
                              {isOpen ? 'Cerrar' : 'Más info'}
                            </span>
                            <IconChevronDown
                              className={`reservas__expand-chevron${isOpen ? ' reservas__expand-chevron--open' : ''}`}
                              size={16}
                              stroke={2}
                            />
                          </button>
                        </div>
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
