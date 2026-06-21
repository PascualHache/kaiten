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
      'Una jornada completa o media jornada de esquí intensivo en Baqueira Beret. Técnica, práctica y recorrido de estación, siempre acompañado por un profesional adaptado a tu ritmo.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/full-day-half-day-en-baqueira',
  },
  {
    id: 'particulares',
    title: 'Particulares',
    description:
      'Atención total y corrección constante. Trabajamos contigo en cada bajada para que progreses rápido, ganes confianza y mejores tu técnica desde el primer momento.',
    backgroundColor: 'var(--color-lavender)',
    textColor: 'var(--color-lime)',
    reservasPath: '/reservas/clases-particulares-en-baqueira',
  },
  {
    id: 'safari',
    title: 'Safari',
    description:
      'Explora Baqueira como un local. Te guiamos por los mejores rincones y zonas de la estación según las condiciones del día, sin colas ni tiempo perdido.',
    backgroundColor: 'var(--color-cream)',
    textColor: '#333',
    reservasPath: '/reservas/safari-en-baqueira',
  },
  {
    id: 'kaiten-2-5',
    title: 'KAITEN 2.5',
    description:
      'El sello Kaiten en un formato de 2 horas y media. Una sesión intensiva para sacar el máximo partido a tu tiempo en la nieve con seguimiento personalizado.',
    backgroundColor: 'var(--color-forest)',
    textColor: 'var(--color-vermillion)',
    reservasPath: '/reservas/experiencia-kaiten-2.5',
  },
  {
    id: 'freeride',
    title: 'Freeride',
    description:
      'Descubre Baqueira más allá de las pistas. Aprende a leer la montaña, elegir líneas y moverte con criterio en nieve no pisada, siempre acompañado por profesionales.',
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
