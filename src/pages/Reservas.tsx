import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import {
  IconArrowUp,
  IconBrandWhatsapp,
  IconCalendarCheck,
  IconLock,
  IconMapPin,
  IconStairsUp,
  IconTicket,
  IconX,
} from '@tabler/icons-react'
import { ACTIVITIES, LEVEL_LABELS, type Level } from '../data/activities'
import { SERVICES } from '../data/services'
import { findTariff } from '../data/tariffs'
import {
  BOOKEO_CATALOG,
  BOOKING_PARAM,
  bookeoCardFor,
  bookeoProductIdFor,
} from '../data/booking'
import BookeoWidget from '../components/BookeoWidget'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import './Reservas.css'

const WHATSAPP_URL = 'https://wa.me/34699820954'
const PHONE_URL = 'tel:+34699820954'

const TRUST = [
  { Icon: IconLock, text: 'Pago seguro online' },
  { Icon: IconCalendarCheck, text: 'Confirmación inmediata por email' },
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

/* La frase corta de cada fila es la misma que la de su tarjeta en Home: el
   visitante llega desde allí y reconoce la experiencia por ella. */
const TAGLINES = new Map(
  SERVICES.map((s) => [s.reservasPath.replace('/reservas/', ''), s.tagline]),
)

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
   so a stale link just lands on the page with nothing marked. */
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

  const bookingRef = useRef<HTMLElement>(null)
  const noticeRef = useRef<HTMLDivElement>(null)

  /* ?actividad=<slug> es el enlace "Reservar" de una experiencia. Mientras
     ninguna tenga `bookeoProductId`, el widget abre el catálogo completo: el
     parámetro ya no preselecciona nada, así que lo tratamos como lo que de
     hecho es — una petición de "enséñame cuál tengo que pulsar". */
  const requestedSlug = searchParams.get(BOOKING_PARAM)
  const requestedActivity =
    ACTIVITIES.find((a) => a.slug === requestedSlug) ?? null
  const productId = bookeoProductIdFor(requestedActivity?.slug ?? null)

  const [locatedSlug, setLocatedSlug] = useState<string | null>(
    () => requestedActivity?.slug ?? resolveHash(location.hash),
  )

  const located = ACTIVITIES.find((a) => a.slug === locatedSlug) ?? null
  const locatedCard = bookeoCardFor(locatedSlug)

  // Enlaces de fuera: /reservas#safari (Tarifas, Footer, ficha de experiencia).
  useEffect(() => {
    const fromHash = resolveHash(location.hash)
    if (fromHash) setLocatedSlug(fromHash)
  }, [location.hash])

  /* Marcada una actividad, lo que hay que mirar es el widget, no la fila:
     llevamos ahí la vista y el foco. Con teclado o lector, el aviso dice qué
     tarjeta buscar, y oírlo al pulsar "Localizar" es justo el punto. */
  useEffect(() => {
    if (!locatedSlug) return
    noticeRef.current?.focus({ preventScroll: true })
    bookingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [locatedSlug])

  /* La actividad marcada va en la URL para poder compartir el enlace.
     replace(), no push(): si no, cada "Localizar" deja una entrada y Atrás
     recorre la tabla fila a fila en vez de salir de la página. */
  const locate = (slug: string) => {
    setLocatedSlug(slug)
    navigate(`${location.pathname}${location.search}#${slug}`, { replace: true })
  }

  const clearLocated = () => {
    setLocatedSlug(null)
    navigate(`${location.pathname}${location.search}`, { replace: true })
  }

  return (
    <div className="reservas">
      <main className="reservas__main">
        <PageTitle eyebrow="Reservas · Baqueira Beret">
          Reserva tu experiencia
        </PageTitle>

        {/* ─── Widget de Bookeo, con el aviso de qué tarjeta pulsar ─── */}
        <section
          className="reservas__booking"
          id="reserva"
          ref={bookingRef}
          aria-label="Calendario de reservas"
        >
          {located && (
            <div
              className="reservas__locator"
              role="status"
              ref={noticeRef}
              tabIndex={-1}
            >
              {/* Esquema de la rejilla del catálogo: ocho tarjetas con la
                  buscada encendida. No reproduce el iframe al píxel; sitúa. */}
              <div className="reservas__minimap" aria-hidden="true">
                {BOOKEO_CATALOG.map((card) => (
                  <span
                    key={card.slug}
                    className={`reservas__minimap-cell${
                      card.slug === locatedSlug
                        ? ' reservas__minimap-cell--on'
                        : ''
                    }`}
                  />
                ))}
              </div>

              <p className="reservas__locator-text">
                {locatedCard ? (
                  <>
                    <strong>{located.title}</strong> aparece en la reserva como{' '}
                    <strong>«{locatedCard.cardName}»</strong>. Pulsa
                    &ldquo;Reservar&rdquo; en esa tarjeta.
                  </>
                ) : (
                  <>
                    Busca <strong>{located.title}</strong> en el calendario y
                    pulsa &ldquo;Reservar&rdquo; en su tarjeta.
                  </>
                )}
              </p>

              <button
                type="button"
                className="reservas__locator-close"
                aria-label="Cerrar el aviso"
                onClick={clearLocated}
              >
                <IconX size={18} stroke={2} aria-hidden="true" />
              </button>
            </div>
          )}

          <BookeoWidget productId={productId} />
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
              &ldquo;Localizar&rdquo; te lleva a la reserva y te marca qué
              tarjeta pulsar. ¿No sabes tu nivel?{' '}
              <Link className="reservas__inline-link" to="/niveles">
                Guía de niveles
              </Link>
              .
            </p>
          </header>

          <div className="reservas__table-wrap">
            <table className="reservas__table" aria-label="Experiencias disponibles">
              <thead>
                <tr className="reservas__row reservas__row--head">
                  <th className="reservas__th reservas__th--name">Experiencia</th>
                  <th className="reservas__th">Duración</th>
                  <th className="reservas__th">Personas</th>
                  <th className="reservas__th">Nivel</th>
                  <th className="reservas__th">Desde</th>
                  <th className="reservas__th">
                    <span className="reservas__sr-only">Acciones</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ORDERED_ACTIVITIES.map((activity) => {
                  const isLocated = activity.slug === locatedSlug
                  const price = getActivityPrice(activity)
                  const tagline =
                    TAGLINES.get(activity.slug) ?? activity.subtitle ?? ''
                  return (
                    <tr
                      key={activity.id}
                      className={`reservas__row${
                        isLocated ? ' reservas__row--located' : ''
                      }`}
                      data-reveal=""
                    >
                      <td className="reservas__col-name">
                        <span className="reservas__name-text">
                          {activity.title}
                        </span>
                        {tagline && (
                          <span className="reservas__name-desc">{tagline}</span>
                        )}
                      </td>
                      <td className="reservas__col-dur">
                        {activity.summary.duration}
                      </td>
                      <td className="reservas__col-pax">
                        {activity.summary.people}
                      </td>
                      <td className="reservas__col-level">
                        {sortLevels(activity.levels).map((level) => (
                          <Tag
                            key={level}
                            variant={level}
                            label={LEVEL_LABELS[level]}
                          />
                        ))}
                      </td>
                      <td className="reservas__col-price">
                        {price !== '—' ? (
                          <span className="reservas__price-value">{price}</span>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td className="reservas__col-action">
                        <button
                          type="button"
                          className="reservas__locate-btn"
                          aria-pressed={isLocated}
                          onClick={() => locate(activity.slug)}
                        >
                          <IconArrowUp size={15} stroke={2} aria-hidden="true" />
                          Localizar
                          <span className="reservas__sr-only">
                            {' '}
                            {activity.title}
                          </span>
                        </button>
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
