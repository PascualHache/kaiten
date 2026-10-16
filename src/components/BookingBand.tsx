import { IconBrandWhatsapp } from '@tabler/icons-react'
import { useUi } from '../i18n'
import { RichText } from '../i18n/RichText'
import './BookingBand.css'

/* Franja de reservas de la portada. El CTA no va a /reservas: aquí la reserva
 * se cierra por WhatsApp, con el mensaje ya redactado. wa.me es el mismo
 * enlace que usan el navbar, el footer y la píldora — en escritorio abre
 * WhatsApp Web y en móvil la app, sin tener que mantener dos URLs. */

const WHATSAPP_BASE = 'https://wa.me/34699820954'

export default function BookingBand() {
  const ui = useUi()
  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    ui.common.waBooking,
  )}`

  return (
    <section className="booking-band" aria-labelledby="booking-band-title">
      <div className="booking-band__card" data-reveal="">
        <div className="booking-band__copy">
          <p className="booking-band__eyebrow">{ui.bookingBand.eyebrow}</p>
          <h2 className="booking-band__title" id="booking-band-title">
            {ui.bookingBand.title}
          </h2>
          <p className="booking-band__text">
            <RichText text={ui.bookingBand.text} />
          </p>
        </div>

        <div className="booking-band__side">
          <ol className="booking-band__steps">
            {ui.bookingBand.steps.map((label, i) => (
              <li className="booking-band__step" key={label}>
                <span className="booking-band__step-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {label}
              </li>
            ))}
          </ol>
          <a
            className="booking-band__btn"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={18} stroke={2} aria-hidden="true" />
            {ui.bookingBand.button}
          </a>
        </div>
      </div>
    </section>
  )
}
