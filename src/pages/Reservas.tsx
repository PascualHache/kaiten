import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  IconBrandWhatsapp,
  IconCalendarCheck,
  IconChevronDown,
  IconLock,
  IconMapPin,
  IconRotate,
  IconStairsUp,
  IconTicket,
} from '@tabler/icons-react'
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

const WHATSAPP_URL = 'https://wa.me/34699820954'
const PHONE_URL = 'tel:+34699820954'

/* Los tres pasos del flujo de Bookeo, anunciados antes de entrar al widget:
   el iframe no se puede previsualizar desde fuera, así que el único sitio
   donde contar lo que viene es la página que lo envuelve. */
const STEPS = [
  { n: '1', label: 'Elige experiencia' },
  { n: '2', label: 'Fecha y hora' },
  { n: '3', label: 'Datos y pago' },
]

const TRUST = [
  { Icon: IconLock, text: 'Pago seguro online' },
  { Icon: IconCalendarCheck, text: 'Confirmación inmediata por email' },
  {
    Icon: IconRotate,
    text: 'Cancelación con reembolso completo hasta 48 h antes',
  },
]

const INFO = [
  {
    Icon: IconMapPin,
    label: 'Punto de encuentro',
    text: 'Baqueira 1800, justo a la salida del telecabina. Te enviamos la ubicación con la confirmación.',
  },
  {
    Icon: IconTicket,
    label: 'Forfait y material',
    text: 'No incluidos. El forfait se compra en la estación u online; el material se alquila en Baqueira.',
  },
  {
    Icon: IconStairsUp,
    label: 'Tu nivel',
    text: 'Indícalo al reservar para que tu instructor prepare la sesión desde el primer minuto.',
  },
]

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
    .replace(/[̀-ͯ]/g, '')
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

  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({})
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
        {/* ─── Cabecera: título + los tres pasos del flujo ─── */}
        <div className="reservas__header">
          <PageTitle eyebrow="Reservas · Baqueira Beret">
            Reserva tu experiencia
          </PageTitle>
          <ol className="reservas__steps" aria-label="Pasos de la reserva">
            {STEPS.map((step) => (
              <li className="reservas__step" key={step.n}>
                <span className="reservas__step-num" aria-hidden="true">
                  {step.n}
                </span>
                {step.label}
              </li>
            ))}
          </ol>
        </div>

        {/* ─── Widget de Bookeo ───────────────────────────── */}
        <section
          className="reservas__booking"
          id="reserva"
          aria-label="Calendario de reservas"
        >
          {requestedActivity && (
            <p className="reservas__booking-note">
              {productId ? (
                <>
                  Reservando <strong>{requestedActivity.title}</strong>
                </>
              ) : (
                <>
                  Elige <strong>{requestedActivity.title}</strong> en el
                  calendario para ver las fechas disponibles
                </>
              )}
            </p>
          )}
          <BookeoWidget productId={productId} />
          <p className="reservas__booking-caption">
            Reserva gestionada por Bookeo
          </p>
        </section>

        <ul className="reservas__trust">
          {TRUST.map(({ Icon, text }) => (
            <li className="reservas__trust-item" key={text}>
              <Icon size={18} stroke={1.6} aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>

        {/* ─── Comparativa de experiencias ────────────────── */}
        <section className="reservas__compare" aria-labelledby="reservas-compare">
          <header className="reservas__section-header">
            <div>
              <p className="reservas__eyebrow">¿Dudas entre experiencias?</p>
              <h2 className="reservas__section-title" id="reservas-compare">
                Compáralas de un vistazo
              </h2>
            </div>
            <p className="reservas__section-lead">
              Cuando lo tengas claro, reserva desde el bloque de arriba. Si no
              sabes tu nivel, consulta la{' '}
              <Link className="reservas__inline-link" to="/niveles">
                guía de niveles
              </Link>
              .
            </p>
          </header>

          <div className="reservas__table-wrap">
            <table className="reservas__table" aria-label="Experiencias disponibles">
              <thead>
                <tr className="reservas__thead-row">
                  <th className="reservas__th reservas__th--name">Experiencia</th>
                  <th className="reservas__th">Duración</th>
                  <th className="reservas__th reservas__th--hide-sm">Personas</th>
                  <th className="reservas__th reservas__th--hide-md">Nivel</th>
                  <th className="reservas__th">Desde</th>
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
                            rowRefs.current[activity.slug] = el
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
                              <span className="reservas__price-value">{price}</span>
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
        </section>

        {/* ─── Lo que conviene saber antes de reservar ────── */}
        <section className="reservas__info" aria-label="Antes de reservar">
          {INFO.map(({ Icon, label, text }) => (
            <div className="reservas__info-item" key={label}>
              <span className="reservas__info-icon" aria-hidden="true">
                <Icon size={20} stroke={1.6} />
              </span>
              <div className="reservas__info-body">
                <strong className="reservas__info-label">{label}</strong>
                <p className="reservas__info-text">{text}</p>
              </div>
            </div>
          ))}
        </section>

        {/* ─── Grupos grandes / a medida ──────────────────── */}
        <section className="reservas__custom" aria-labelledby="reservas-custom">
          <div className="reservas__custom-copy">
            <h2 className="reservas__custom-title" id="reservas-custom">
              ¿Sois más de 6 o buscas algo a medida?
            </h2>
            <p className="reservas__custom-text">
              Grupos grandes, varios días o fechas especiales: escríbenos y lo
              preparamos contigo.
            </p>
          </div>
          <div className="reservas__custom-actions">
            <a
              className="reservas__custom-btn reservas__custom-btn--primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp size={18} stroke={1.8} aria-hidden="true" />
              WhatsApp
            </a>
            <a
              className="reservas__custom-btn reservas__custom-btn--secondary"
              href={PHONE_URL}
            >
              Llámanos
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
