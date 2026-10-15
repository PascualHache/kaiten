import { IconBrandWhatsapp } from '@tabler/icons-react'
import './BookingBand.css'

/* Franja de reservas de la portada. El CTA no va a /reservas: aquí la reserva
 * se cierra por WhatsApp, con el mensaje ya redactado. wa.me es el mismo
 * enlace que usan el navbar, el footer y la píldora — en escritorio abre
 * WhatsApp Web y en móvil la app, sin tener que mantener dos URLs. */

const WHATSAPP_URL = `https://wa.me/34699820954?text=${encodeURIComponent(
  'Hola, quiero reservar una experiencia',
)}`

const STEPS = [
  { n: '01', label: 'Escríbenos y cuéntanos qué buscas' },
  { n: '02', label: 'Te proponemos experiencia, fecha y horario' },
  { n: '03', label: 'Cerramos la reserva y te damos el punto de encuentro' },
]

export default function BookingBand() {
  return (
    <section className="booking-band" aria-labelledby="booking-band-title">
      <div className="booking-band__card" data-reveal="">
        <div className="booking-band__copy">
          <p className="booking-band__eyebrow">Reservas</p>
          <h2 className="booking-band__title" id="booking-band-title">
            Resuélvelo por WhatsApp en dos mensajes
          </h2>
          <p className="booking-band__text">
            Si quieres <strong>agilizar tu reserva</strong>,{' '}
            <strong>consultarnos cualquier duda</strong> o recibir una{' '}
            <strong>atención más personalizada</strong>, escríbenos: hablas
            directamente con nosotros, te ayudamos a elegir la experiencia que
            encaja con tu nivel y lo dejamos cerrado sin formularios
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
          <a
            className="booking-band__btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} stroke={2} aria-hidden="true" />
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
