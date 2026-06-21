import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import type { Activity } from '../data/activities'
import './ActivitySection.css'

const CAL_USERNAME = 'aitor-bellver-abenoza-ofg9rm'

interface Props {
  activity: Activity
}

export default function ActivitySection({ activity }: Props) {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: activity.calSlug })
      cal('ui', { theme: 'light' })
    })()
  }, [activity.calSlug])

  return (
    <section className={`actividad actividad--${activity.color}`}>
      <div className="actividad__inner">
        <h2 className="actividad__titulo">{activity.title}</h2>

        <div className="actividad__features">
          {activity.features.map((feature, i) => (
            <div key={i} className="actividad__feature">
              <h3 className="actividad__feature-titulo">
                <span>{feature.emoji}</span> {feature.title}
              </h3>
              {Array.isArray(feature.desc) ? (
                <div className="actividad__feature-desc">
                  {feature.desc.map((line, j) => (
                    <p key={j}>{line}</p>
                  ))}
                </div>
              ) : (
                <p className="actividad__feature-desc">{feature.desc}</p>
              )}
            </div>
          ))}
        </div>

        <div className="actividad__info">
          <h3 className="actividad__info-titulo">Información rápida</h3>
          <ul className="actividad__info-lista">
            {activity.info.map((item, i) => (
              <li key={i} className="actividad__info-item">
                <p className="actividad__info-header">
                  <span>{item.emoji}</span>{' '}
                  <strong className="actividad__info-label">{item.label}</strong>
                  {typeof item.content === 'string' && (
                    <span> {item.content}</span>
                  )}
                </p>
                {Array.isArray(item.content) && (
                  <ul className="actividad__info-sublist">
                    {item.content.map((line, j) => (
                      <li key={j}>{line}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="actividad__cta">
          <h3 className="actividad__cta-titulo">{activity.cta.headline}</h3>
          {activity.cta.subline && (
            <p className="actividad__cta-subline">{activity.cta.subline}</p>
          )}
          <p className="actividad__cta-precio">Desde XX €</p>
          <button
            className="actividad__boton"
            data-cal-namespace={activity.calSlug}
            data-cal-link={`${CAL_USERNAME}/${activity.calSlug}`}
            data-cal-config='{"theme":"light"}'
          >
            {activity.cta.buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}
