import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ServiceAccordion.css'

interface Service {
  id: string
  title: string
  description: string
  backgroundColor: string
  textColor: string
  reservasPath: string
}

const SERVICES: Service[] = [
  {
    id: 'full-half-day',
    title: 'Full o half day',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/full-day-half-day-en-baqueira',
  },
  {
    id: 'colectivas',
    title: 'Colectivas',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-lavender)',
    textColor: 'var(--color-lime)',
    reservasPath: '/reservas',
  },
  {
    id: 'particulares',
    title: 'Particulares',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-lavender)',
    textColor: 'var(--color-lime)',
    reservasPath: '/reservas/clases-particulares-en-baqueira',
  },
  {
    id: 'safari',
    title: 'Safari',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/safari-en-baqueira',
  },
  {
    id: 'kaiten-2-5',
    title: 'KAITEN 2.5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-forest)',
    textColor: 'var(--color-vermillion)',
    reservasPath: '/reservas/experiencia-kaiten-2.5',
  },
  {
    id: 'freeride',
    title: 'Freeride',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/freeride-en-baqueira',
  },
]

function ServiceAccordion() {
  const [expandedId, setExpandedId] = useState<string>('kaiten-2-5')

  return (
    <div className="service-accordion">
      {SERVICES.map((service) => {
        const isExpanded = service.id === expandedId
        return (
          <div
            key={service.id}
            className={`service-accordion__item${isExpanded ? ' service-accordion__item--expanded' : ''}`}
            style={{
              backgroundColor: service.backgroundColor,
              color: service.textColor,
            }}
            onClick={() => setExpandedId(service.id)}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setExpandedId(service.id)
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
