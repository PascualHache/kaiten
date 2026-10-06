import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import './BookingBand.css'

/* Franja de reservas de la portada: explica de dónde sale la disponibilidad
 * antes de mandar a /reservas. El enlace es <Link> y no <a>: no preselecciona
 * actividad, así que no necesita recargar el documento para Bookeo. */

const STEPS = [
  { n: '01', label: 'Elige la experiencia' },
  { n: '02', label: 'Consulta disponibilidad y elige fecha y hora' },
  { n: '03', label: 'Completa tus datos y paga online' },
]

export default function BookingBand() {
  return (
    <section className="booking-band" aria-labelledby="booking-band-title">
      <div className="booking-band__card" data-reveal="">
        <div className="booking-band__copy">
          <p className="booking-band__eyebrow">Reservas</p>
          <h2 className="booking-band__title" id="booking-band-title">
            Todas las experiencias, una sola reserva
          </h2>
          <p className="booking-band__text">
            Consulta la disponibilidad real de cada experiencia, elige fecha y
            hora y paga online en el mismo sitio
          </p>
        </div>

        <div className="booking-band__side">
          <ol className="booking-band__steps">
            {STEPS.map((step) => (
              <li className="booking-band__step" key={step.n}>
                <span className="booking-band__step-num" aria-hidden="true">
                  {step.n}
                </span>
                {step.label}
              </li>
            ))}
          </ol>
          <Link className="booking-band__btn" to="/reservas">
            Ver disponibilidad
            <IconArrowRight size={18} stroke={2} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
