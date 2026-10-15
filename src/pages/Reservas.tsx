import { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrandWhatsapp,
  IconLayoutGrid,
  IconLock,
  IconMailCheck,
  IconMapPin,
  IconStairsUp,
  IconTable,
  IconTicket,
} from '@tabler/icons-react'
import { ACTIVITIES, type Level } from '../data/activities'
import { findTariff } from '../data/tariffs'
import { BOOKING_PARAM, bookeoProductIdFor, bookingHref } from '../data/booking'
import { getActivities, getServices, getTariffs } from '../i18n/content'
import { useLang, useUi, type Lang, type UiDict } from '../i18n'
import BookeoWidget from '../components/BookeoWidget'
import Tag from '../components/Tag'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import './Reservas.css'

const WHATSAPP_URL = 'https://wa.me/34699820954'
const PHONE_URL = 'tel:+34699820954'

const LEVEL_ORDER: Level[] = ['principiante', 'intermedio', 'avanzado']

/* Una fila por experiencia, con todo lo que las dos vistas necesitan ya
   resuelto. Las fuentes siguen separadas (cada una manda en lo suyo) y aquí
   solo se juntan: ACTIVITIES el detalle, SERVICES la foto y la frase corta,
   TARIFFS el precio y booking.ts el producto de Bookeo. */
interface Experience {
  slug: string
  name: string
  tagline: string
  description: string
  image: string
  imagePosition?: string
  promo?: string
  duration: string
  people: string
  levels: Level[]
  price: string
  /** `type=` del widget de Bookeo. `null` → catálogo completo, sin preselección. */
  productId: string | null
  href: string
}

/* El orden es el del carrusel de la portada: el visitante llega desde allí y
   reconoce las experiencias por su posición. Las que no estén en SERVICES
   quedan al final, en el orden de ACTIVITIES.

   Se arma por idioma: el texto sale de la traducción activa, el slug y el
   producto de Bookeo son los mismos en los tres. */
function buildExperiences(lang: Lang): Experience[] {
  const serviceBySlug = new Map(
    getServices(lang).map((s) => [s.reservasPath.replace('/reservas/', ''), s]),
  )
  const homeOrder = [...serviceBySlug.keys()]
  const tariffs = getTariffs(lang)

  return [...getActivities(lang)]
    .sort((a, b) => {
      const ia = homeOrder.indexOf(a.slug)
      const ib = homeOrder.indexOf(b.slug)
      return (ia === -1 ? homeOrder.length : ia) - (ib === -1 ? homeOrder.length : ib)
    })
    .map((activity) => {
      const service = serviceBySlug.get(activity.slug)
      return {
        slug: activity.slug,
        name: activity.title,
        tagline: service?.tagline ?? activity.subtitle ?? '',
        description: service?.description ?? '',
        image: service?.image ?? '',
        imagePosition: service?.imagePosition,
        promo: service?.promo,
        duration: activity.summary.duration,
        people: activity.summary.people,
        levels: [...activity.levels].sort(
          (a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b),
        ),
        price: findTariff(tariffs, activity.slug)?.price ?? '—',
        productId: bookeoProductIdFor(activity.slug),
        href: bookingHref(activity),
      }
    })
}

/** "Kids & Friends & Family" → "kids-friends-family" */
const slugifyTitle = (title: string) =>
  title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/* Enlaces antiguos: /reservas#safari, #clases-privadas. Siguen abriendo la
   ficha de esa experiencia; cualquier otra cosa se ignora y se queda en la
   lista. Los enlaces nuevos usan ?actividad=<slug>. */
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
  const [searchParams] = useSearchParams()
  const { lang } = useLang()
  const ui = useUi()
  const experiences = buildExperiences(lang)

  const selectedSlug =
    searchParams.get(BOOKING_PARAM) ?? resolveHash(location.hash)
  const selected = experiences.find((e) => e.slug === selectedSlug) ?? null

  return (
    <div className="reservas">
      {selected ? (
        <Detail experience={selected} experiences={experiences} ui={ui} />
      ) : (
        <Catalog experiences={experiences} ui={ui} />
      )}
      <Footer />
    </div>
  )
}

interface ViewProps {
  experiences: Experience[]
  ui: UiDict
}

/* ─── Paso 1 · Elegir ─────────────────────────────────────── */

type View = 'cards' | 'compare'

function Catalog({ experiences, ui }: ViewProps) {
  const [view, setView] = useState<View>('cards')

  return (
    <main className="reservas__main">
      <div className="reservas__head">
        <div className="reservas__head-copy">
          <PageTitle eyebrow={ui.reservas.eyebrow}>
            {ui.reservas.title}
          </PageTitle>
          <p className="reservas__lead">{ui.reservas.lead}</p>
        </div>

        <div
          className="reservas__views"
          role="tablist"
          aria-label={ui.reservas.viewAria}
        >
          {(
            [
              { id: 'cards', label: ui.reservas.viewCards, Icon: IconLayoutGrid },
              { id: 'compare', label: ui.reservas.viewCompare, Icon: IconTable },
            ] as const
          ).map(({ id, label, Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`reservas-tab-${id}`}
              aria-selected={view === id}
              aria-controls={`reservas-panel-${id}`}
              className={`reservas__view-btn${
                view === id ? ' reservas__view-btn--on' : ''
              }`}
              onClick={() => setView(id)}
            >
              <Icon size={16} stroke={1.8} aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div
        role="tabpanel"
        id={`reservas-panel-${view}`}
        aria-labelledby={`reservas-tab-${view}`}
      >
        {view === 'cards' ? (
          <CardGrid experiences={experiences} ui={ui} />
        ) : (
          <CompareTable experiences={experiences} ui={ui} />
        )}
      </div>

      <section className="reservas__custom" aria-labelledby="reservas-custom">
        <div className="reservas__custom-copy">
          <h2 className="reservas__custom-title" id="reservas-custom">
            {ui.reservas.customTitle}
          </h2>
          <p className="reservas__custom-text">{ui.reservas.customText}</p>
        </div>
        <div className="reservas__custom-actions">
          <a
            className="k-btn k-btn--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} stroke={1.8} aria-hidden="true" />
            WhatsApp
          </a>
          <a className="k-btn k-btn--secondary" href={PHONE_URL}>
            {ui.reservas.call}
          </a>
        </div>
      </section>
    </main>
  )
}

function CardGrid({ experiences, ui }: ViewProps) {
  return (
    <ul className="reservas__grid">
      {experiences.map((e, i) => (
        <li key={e.slug} data-reveal="">
          {/* <a href>, nunca <Link>: el widget de Bookeo hornea el producto al
              cargar su script, así que la ficha exige carga de documento. */}
          <a className="reservas__card" href={e.href}>
            <img
              className="reservas__card-img"
              src={e.image}
              alt=""
              style={e.imagePosition ? { objectPosition: e.imagePosition } : undefined}
              loading="lazy"
              decoding="async"
            />
            <span className="reservas__card-scrim" aria-hidden="true" />
            <span className="reservas__card-num" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            {e.promo && <span className="reservas__card-promo">{e.promo}</span>}

            <div className="reservas__card-body">
              <div className="reservas__card-head">
                <h2 className="reservas__card-title">{e.name}</h2>
                {e.tagline && (
                  <span className="reservas__card-tagline">{e.tagline}</span>
                )}
              </div>
              <div className="reservas__card-foot">
                <div className="reservas__card-meta">
                  <span className="reservas__card-dur">{e.duration}</span>
                  <span>
                    {ui.common.from} <strong>{e.price}</strong>
                  </span>
                </div>
                <span className="k-btn k-btn--primary k-btn--sm" aria-hidden="true">
                  {ui.common.reserve}
                  <IconArrowRight size={15} stroke={2} />
                </span>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

/* La maqueta dibuja la comparativa con una rejilla de divs; aquí es una tabla
   de verdad. Se ve igual y, a diferencia de la rejilla, un lector de pantalla
   puede recorrerla por columnas — que es justo para lo que sirve comparar. */
function CompareTable({ experiences, ui }: ViewProps) {
  return (
    <div className="reservas__table-wrap">
      <table className="reservas__table" aria-label={ui.reservas.tableAria}>
        <thead>
          <tr>
            <th scope="col" className="reservas__th">{ui.reservas.colExperience}</th>
            <th scope="col" className="reservas__th">{ui.common.duration}</th>
            <th scope="col" className="reservas__th">{ui.common.people}</th>
            <th scope="col" className="reservas__th">{ui.common.level}</th>
            <th scope="col" className="reservas__th">{ui.common.from}</th>
            <th scope="col" className="reservas__th">
              <span className="reservas__sr-only">{ui.reservas.colActions}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {experiences.map((e) => (
            <tr key={e.slug} className="reservas__row" data-reveal="">
              <th scope="row" className="reservas__col-name">
                <img
                  className="reservas__row-img"
                  src={e.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <span className="reservas__row-text">
                  <strong className="reservas__row-name">{e.name}</strong>
                  {e.tagline && (
                    <span className="reservas__row-tagline">{e.tagline}</span>
                  )}
                </span>
              </th>
              <td className="reservas__col-muted">{e.duration}</td>
              <td className="reservas__col-muted">{e.people}</td>
              <td className="reservas__col-levels">
                {e.levels.map((level) => (
                  <Tag key={level} variant={level} label={ui.common.levels[level]} />
                ))}
              </td>
              <td className="reservas__col-price">
                <strong>{e.price}</strong>
              </td>
              <td className="reservas__col-action">
                <a className="k-btn k-btn--primary k-btn--sm" href={e.href}>
                  {ui.common.reserve}
                  <IconArrowRight size={15} stroke={2} aria-hidden="true" />
                  <span className="reservas__sr-only"> {e.name}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Paso 2 · Reservar ───────────────────────────────────── */

function Detail({
  experience,
  experiences,
  ui,
}: ViewProps & { experience: Experience }) {
  const e = experience
  const trust = [
    { Icon: IconLock, text: ui.reservas.trustPayment },
    { Icon: IconMailCheck, text: ui.reservas.trustConfirmation },
  ]

  return (
    <main className="reservas__main reservas__main--detail">
      {/* La lista no monta widget, así que volver sí puede ser <Link>. */}
      <Link className="reservas__back" to="/reservas">
        <IconArrowLeft size={16} stroke={1.8} aria-hidden="true" />
        {ui.reservas.back}
      </Link>

      <div className="reservas__detail">
        <div className="reservas__detail-main">
          <div className="reservas__detail-photo">
            <img
              src={e.image}
              alt=""
              style={e.imagePosition ? { objectPosition: e.imagePosition } : undefined}
            />
          </div>

          <div className="reservas__detail-intro">
            <PageTitle eyebrow={ui.reservas.detailEyebrow}>{e.name}</PageTitle>
            <span className="reservas__rule" aria-hidden="true" />
            {e.description && (
              <p className="reservas__detail-desc">{e.description}</p>
            )}
          </div>

          <dl className="reservas__specs">
            <div className="reservas__spec">
              <dt>{ui.common.duration}</dt>
              <dd>{e.duration}</dd>
            </div>
            <div className="reservas__spec">
              <dt>{ui.common.people}</dt>
              <dd>{e.people}</dd>
            </div>
            <div className="reservas__spec">
              <dt>{ui.common.level}</dt>
              <dd className="reservas__spec-levels">
                {e.levels.map((level) => (
                  <Tag key={level} variant={level} label={ui.common.levels[level]} />
                ))}
              </dd>
            </div>
            <div className="reservas__spec">
              <dt>{ui.common.from}</dt>
              <dd className="reservas__spec-price">{e.price}</dd>
            </div>
          </dl>

          <div className="reservas__info">
            <div className="reservas__info-item">
              <IconMapPin size={22} stroke={1.6} aria-hidden="true" />
              <strong>{ui.reservas.meetingTitle}</strong>
              <span>{ui.reservas.meetingText}</span>
            </div>
            <div className="reservas__info-item">
              <IconTicket size={22} stroke={1.6} aria-hidden="true" />
              <strong>{ui.reservas.passTitle}</strong>
              <span>{ui.reservas.passText}</span>
            </div>
            <div className="reservas__info-item">
              <IconStairsUp size={22} stroke={1.6} aria-hidden="true" />
              <strong>{ui.reservas.levelTitle}</strong>
              <span>
                {ui.reservas.levelText}{' '}
                <Link to="/niveles">{ui.reservas.levelLink}</Link>
              </span>
            </div>
          </div>

          <nav className="reservas__switch" aria-label={ui.reservas.switch}>
            <span className="reservas__switch-label">{ui.reservas.switch}</span>
            <ul className="reservas__chips">
              {experiences.map((other) => {
                const current = other.slug === e.slug
                return (
                  <li key={other.slug}>
                    <a
                      className={`reservas__chip${
                        current ? ' reservas__chip--on' : ''
                      }`}
                      href={other.href}
                      aria-current={current ? 'page' : undefined}
                    >
                      {other.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        <aside className="reservas__aside" aria-labelledby="reservas-when">
          <h2 className="reservas__aside-title" id="reservas-when">
            {ui.reservas.whenTitle}
          </h2>

          {/* El widget abre ya en este producto: el `type=` va horneado en la
              URL del script, de ahí que llegar aquí sea una carga completa. */}
          <BookeoWidget productId={e.productId} />

          <ul className="reservas__trust">
            {trust.map(({ Icon, text }) => (
              <li key={text}>
                <Icon size={16} stroke={1.6} aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>

          <p className="reservas__help">
            {ui.reservas.help}{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              {ui.reservas.helpLink}
            </a>
          </p>
        </aside>
      </div>
    </main>
  )
}
