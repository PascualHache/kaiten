import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IconChevronDown } from '@tabler/icons-react'
import {
  ACTIVITIES,
  LEVEL_LABELS,
  type Level,
} from '../data/activities'
import { SERVICES } from '../data/services'
import { findTariff } from '../data/tariffs'
import { BOOKING_PARAM, bookeoProductIdFor, bookingHref } from '../data/booking'
import BookeoWidget from '../components/BookeoWidget'
import ExperienceDetail from '../components/ExperienceDetail'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import { refreshScrollTriggers } from '../hooks/useScrollAnimations'
import './Reservas.css'

function getActivityPrice(activity: (typeof ACTIVITIES)[number]) {
  return findTariff(activity.slug)?.price ?? '—'
}

/* Same order as the Home carousel (SERVICES), laid out top-to-bottom.
   Activities missing from SERVICES keep their data order at the end. */
const HOME_ORDER = SERVICES.map((s) => s.reservasPath.replace('/reservas/', ''))

const ORDERED_ACTIVITIES = [...ACTIVITIES].sort((a, b) => {
  const ia = HOME_ORDER.indexOf(a.slug)
  const ib = HOME_ORDER.indexOf(b.slug)
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

/* The URL hash may name an activity by its slug, its id, or its
   title ("/reservas#safari", "#clases-privadas"). Anything else is ignored
   so a stale link just lands on the page with every row closed. */
function resolveHash(hash: string): string | null {
  if (!hash) return null
  const wanted = slugifyTitle(decodeURIComponent(hash.replace(/^#/, '')))
  if (!wanted) return null
  const match = ACTIVITIES.find(
    (a) =>
      slugifyTitle(a.slug) === wanted ||
      slugifyTitle(a.id) === wanted ||
      slugifyTitle(a.title) === wanted,
  )
  return match?.slug ?? null
}

export default function Reservas() {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [openSlug, setOpenSlug] = useState<string | null>(() =>
    resolveHash(location.hash),
  )

  /* ?actividad=<slug> preselecciona el producto en el widget de Bookeo.
     Va en la query y no en el hash a propósito: los enlaces que lo usan
     recargan el documento, porque el widget no sabe cambiar de producto. */
  const requestedSlug = searchParams.get(BOOKING_PARAM)
  const requestedActivity =
    ACTIVITIES.find((a) => a.slug === requestedSlug) ?? null
  const productId = bookeoProductIdFor(requestedActivity?.slug ?? null)

  useEffect(() => {
    const fromHash = resolveHash(location.hash)
    if (fromHash) setOpenSlug(fromHash)
  }, [location.hash])

  const rowRefs = useRef<Record<string, HTMLTableRowElement | null>>({})
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})

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
    // La fila cambia de alto: las posiciones de scroll calculadas antes
    // dejan de valer. Esperamos a que termine la animación de apertura.
    window.setTimeout(refreshScrollTriggers, 550)
  }

  return (
    <div className="reservas">
      <main className="reservas__main">
        <PageTitle eyebrow="Baqueira Beret">Elige tu experiencia</PageTitle>

        <section className="reservas__booking" aria-labelledby="reservas-widget">
          <h2 className="reservas__section-title" id="reservas-widget">
            {requestedActivity
              ? `Reservar · ${requestedActivity.title}`
              : 'Reserva tu plaza'}
          </h2>
          {requestedActivity && !productId && (
            <p className="reservas__booking-note">
              Elige <strong>{requestedActivity.title}</strong> en el calendario
              para ver las fechas disponibles
            </p>
          )}
          <BookeoWidget productId={productId} />
        </section>

        <h2 className="reservas__section-title">Todas las experiencias</h2>

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
                const isOpen = activity.slug === openSlug
                const price = getActivityPrice(activity)
                return (
                  <tr key={activity.id}>
                    {/* colspan trick: we wrap data + detail in a single column cell */}
                    <td colSpan={6} className="reservas__outer-cell" data-reveal="">
                      {/* Summary row */}
                      <div
                        ref={(el) => {
                          rowRefs.current[activity.slug] = el as unknown as HTMLTableRowElement
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
                          {price !== '—' ? (
                            <>
                              Desde{' '}
                              <span className="reservas__price-value">
                                {price}
                              </span>
                            </>
                          ) : (
                            '—'
                          )}
                        </span>
                        <div className="reservas__actions">
                          <a
                            className="reservas__book-btn"
                            href={bookingHref(activity)}
                          >
                            Reservar
                          </a>
                          <button
                            type="button"
                            ref={(el) => {
                              btnRefs.current[activity.slug] = el
                            }}
                            className="reservas__expand-btn"
                            aria-expanded={isOpen}
                            onClick={() => toggle(activity.slug)}
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
