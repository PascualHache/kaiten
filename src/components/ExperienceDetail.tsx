import type { Activity } from '../data/activities'
import InfoIcon from './InfoIcon'

const CAL_USERNAME = 'aitor-bellver-abenoza-ofg9rm'

interface Props {
  activity: Activity
}

export default function ExperienceDetail({ activity }: Props) {
  return (
    <div className="exp-detail">
      <header className="exp-detail__head">
        <div>
          <h3 className="exp-detail__title">{activity.title}</h3>
          {activity.subtitle && (
            <p className="exp-detail__subtitle">{activity.subtitle}</p>
          )}
        </div>
        <div className="exp-detail__actions">
          <span className="exp-detail__price">Desde XX €</span>
          <button
            type="button"
            className="exp-detail__reserve"
            data-cal-namespace={activity.calSlug}
            data-cal-link={`${CAL_USERNAME}/${activity.calSlug}`}
            data-cal-config='{"theme":"light"}'
          >
            {activity.cta.buttonText}
          </button>
        </div>
      </header>

      <div className="exp-detail__body">
        <div className="exp-detail__features">
          {activity.features.map((f, i) => (
            <div key={i} className="exp-detail__feature">
              <span className="exp-detail__feature-num">
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

        <div className="exp-detail__info">
          <h4 className="exp-detail__info-title">Información rápida</h4>
          <ul className="exp-detail__info-list">
            {activity.info.map((item, i) => (
              <li key={i} className="exp-detail__info-item">
                <InfoIcon emoji={item.emoji} className="exp-detail__info-icon" />
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
      </div>

      {activity.formats && (
        <div className="exp-detail__formats">
          <h4 className="exp-detail__formats-title">
            {activity.formats.length} formatos para ti
          </h4>
          <div className="exp-detail__formats-grid">
            {activity.formats.map((f, i) => (
              <div
                key={i}
                className={`exp-format${f.featured ? ' exp-format--featured' : ''}`}
              >
                {f.featured && (
                  <span className="exp-format__badge">Más elegido</span>
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
