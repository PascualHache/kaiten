import { IconArrowRight, IconChevronUp } from '@tabler/icons-react'
import { type Activity, type Level } from '../data/activities'
import { formatPrice } from '../data/tariffs'
import { bookingHref } from '../data/booking'
import { useTariffs } from '../i18n/content'
import { fill, useUi } from '../i18n'
import InfoIcon from './InfoIcon'
import Tag from './Tag'

const LEVEL_ORDER: Level[] = ['principiante', 'intermedio', 'avanzado']

const sortLevels = (levels: Level[]) =>
  [...levels].sort((a, b) => LEVEL_ORDER.indexOf(a) - LEVEL_ORDER.indexOf(b))

interface Props {
  activity: Activity
  /**
   * "full" — la ficha entera: rasgos, información rápida y formatos. Es la
   * que se despliega en /reservas, donde la fila ya es la unidad de detalle.
   *
   * "compact" — la de la portada: rasgos y una tira con duración, personas,
   * nivel y el botón de cerrar. Deja fuera la información rápida y los
   * formatos para no convertir la home en una segunda /reservas.
   */
  variant?: 'full' | 'compact'
  /** Solo en "compact": colapsa la ficha y devuelve el foco al carrusel. */
  onClose?: () => void
}

export default function ExperienceDetail({
  activity,
  variant = 'full',
  onClose,
}: Props) {
  const ui = useUi()
  const tariffs = useTariffs()
  const compact = variant === 'compact'

  return (
    <div className={`exp-detail${compact ? ' exp-detail--compact' : ''}`}>
      <header className="exp-detail__head">
        <div className="exp-detail__heading">
          {compact && (
            <Tag
              variant={activity.experienceType}
              label={ui.common.experienceTypes[activity.experienceType]}
            />
          )}
          <h3 className="exp-detail__title">{activity.title}</h3>
          {!compact && activity.subtitle && (
            <p className="exp-detail__subtitle">{activity.subtitle}</p>
          )}
        </div>
        <div className="exp-detail__actions">
          {compact ? (
            <span className="exp-detail__price-block">
              <span className="exp-detail__price-label">{ui.common.from}</span>
              <strong className="exp-detail__price-value">
                {formatPrice(tariffs, activity.slug)}
              </strong>
            </span>
          ) : (
            <span className="exp-detail__price">
              {`${ui.common.from} ${formatPrice(tariffs, activity.slug)}`}
            </span>
          )}
          {/* <a> y no <Link>: el widget de Bookeo hornea el producto al cargar
              su script, así que /reservas necesita una carga completa. */}
          <a className="exp-detail__reserve" href={bookingHref(activity)}>
            {activity.cta.buttonText}
            {compact && <IconArrowRight size={16} stroke={2} aria-hidden="true" />}
          </a>
        </div>
      </header>

      <div className="exp-detail__body">
        <div className="exp-detail__features">
          {activity.features.map((f, i) => (
            <div key={i} className="exp-detail__feature">
              <span className="exp-detail__feature-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className="exp-detail__feature-title">{f.title}</h4>
              {Array.isArray(f.desc) ? (
                f.desc.map((line, j) => (
                  <p key={j} className="exp-detail__feature-desc">
                    {line}
                  </p>
                ))
              ) : (
                <p className="exp-detail__feature-desc">{f.desc}</p>
              )}
            </div>
          ))}
        </div>

        {!compact && (
          <div className="exp-detail__info">
            <h4 className="exp-detail__info-title">{ui.expDetail.quickInfo}</h4>
            <ul className="exp-detail__info-list">
              {activity.info.map((item, i) => (
                <li key={i} className="exp-detail__info-item">
                  <InfoIcon
                    emoji={item.emoji}
                    className="exp-detail__info-icon"
                  />
                  <div>
                    <p className="exp-detail__info-label">{item.label}</p>
                    {typeof item.content === 'string' ? (
                      <p className="exp-detail__info-content">{item.content}</p>
                    ) : (
                      item.content.map((line, j) => (
                        <p key={j} className="exp-detail__info-content">
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {compact && (
        <div className="exp-detail__meta">
          <div className="exp-detail__meta-cell">
            <span className="exp-detail__meta-label">{ui.common.duration}</span>
            <strong className="exp-detail__meta-value">
              {activity.summary.duration}
            </strong>
          </div>
          <div className="exp-detail__meta-cell">
            <span className="exp-detail__meta-label">{ui.common.people}</span>
            <strong className="exp-detail__meta-value">
              {activity.summary.people}
            </strong>
          </div>
          <div className="exp-detail__meta-cell">
            <span className="exp-detail__meta-label">{ui.common.level}</span>
            <span className="exp-detail__meta-levels">
              {sortLevels(activity.levels).map((level) => (
                <Tag key={level} variant={level} label={ui.common.levels[level]} />
              ))}
            </span>
          </div>
          {onClose && (
            <div className="exp-detail__meta-cell exp-detail__meta-cell--link">
              <button
                type="button"
                className="exp-detail__meta-link exp-detail__meta-close"
                onClick={onClose}
              >
                {ui.common.close}
                <IconChevronUp size={16} stroke={2} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}

      {!compact && activity.formats && (
        <div className="exp-detail__formats">
          <h4 className="exp-detail__formats-title">
            {fill(ui.expDetail.formatsTitle, { n: activity.formats.length })}
          </h4>
          <div className="exp-detail__formats-grid">
            {activity.formats.map((f, i) => (
              <div
                key={i}
                className={`exp-format${f.featured ? ' exp-format--featured' : ''}`}
              >
                {f.featured && (
                  <span className="exp-format__badge">
                    {ui.expDetail.mostChosen}
                  </span>
                )}
                <h5 className="exp-format__name">{f.name}</h5>
                <p className="exp-format__schedule">{f.schedule}</p>
                <p className="exp-format__label">{f.label}</p>
                <p className="exp-format__hours">{f.hours}</p>
                {f.note && <p className="exp-format__note">{f.note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
