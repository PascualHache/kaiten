import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import './ServiceAccordion.css'

interface Props {
  selectedId: string
  onSelect: (id: string) => void
}

function ServiceAccordion({ selectedId, onSelect }: Props) {
  return (
    <div className="service-accordion">
      {SERVICES.map((service) => {
        const isExpanded = service.id === selectedId
        return (
          <div
            key={service.id}
            className={`service-accordion__item${isExpanded ? ' service-accordion__item--expanded' : ''}`}
            style={{
              backgroundColor: service.backgroundColor,
              color: service.textColor,
            }}
            onClick={() => onSelect(service.id)}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect(service.id)
              }
            }}
          >
            <span className="service-accordion__title">{service.title}</span>
            <div className="service-accordion__content">
              <p className="service-accordion__description">{service.description}</p>
              <Link
                to={service.reservasPath}
                className="service-accordion__cta"
                tabIndex={isExpanded ? 0 : -1}
              >
                Reserva
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ServiceAccordion
