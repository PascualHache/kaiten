import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconPhone,
} from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import logoText from '../assets/logos/logo_text.png'
import './Footer.css'

function Footer() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const consentRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!consentRef.current?.checked) {
      setError('Debes aceptar la política de privacidad para suscribirte.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link to="/" className="footer__brand-logo">
          <img src={logoText} alt="Kaiten" className="footer__brand-logo-img" />
        </Link>
        <p className="footer__brand-sub">Escuela de esquí · Valle de Arán</p>
      </div>

      <div className="footer__top">
        <div className="footer__newsletter">
          <p className="footer__newsletter-text">
            Suscríbete para recibir novedades, ofertas y partes de nieve antes
            que nadie.
          </p>
          {submitted ? (
            <p className="footer__newsletter-success">
              ¡Apuntado! Te avisaremos pronto.
            </p>
          ) : (
            <>
              <form className="footer__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="footer__input"
                  placeholder="Correo electrónico *"
                  aria-label="Correo electrónico"
                  required
                />
                <button
                  type="submit"
                  className="footer__submit"
                  aria-label="Suscribirse"
                >
                  <IconArrowRight size={18} stroke={2} />
                </button>
              </form>
              <label className="footer__consent">
                <input
                  ref={consentRef}
                  type="checkbox"
                  className="footer__consent-check"
                />
                <span className="footer__consent-text">
                  Acepto la{' '}
                  <Link to="/privacidad" className="footer__consent-link">
                    política de privacidad
                  </Link>
                </span>
              </label>
              {error && <p className="footer__newsletter-error">{error}</p>}
            </>
          )}
        </div>

        <div className="footer__help">
          <span className="footer__col-title">¿Hablamos?</span>
          <div className="footer__help-contact">
            <span className="footer__help-number">+34 699 820 954</span>
            <div className="footer__help-actions">
              <a
                href="https://wa.me/34699820954"
                className="footer__help-action"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <IconBrandWhatsapp size={18} stroke={1.5} />
              </a>
              <a
                href="tel:+34699820954"
                className="footer__help-action"
                aria-label="Llamar por teléfono"
              >
                <IconPhone size={18} stroke={1.5} />
              </a>
            </div>
          </div>
        </div>

        <nav className="footer__col" aria-label="Experiencias">
          <span className="footer__col-title">Experiencias</span>
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={service.reservasPath.replace('/reservas/', '/reservas#')}
              className="footer__link"
            >
              {service.title}
            </Link>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Kaiten">
          <span className="footer__col-title">Kaiten</span>
          <Link to="/nosotros" className="footer__link">Nosotros</Link>
          <Link to="/tarifas" className="footer__link">Tarifas</Link>
          <Link to="/niveles" className="footer__link">Niveles</Link>
          <Link to="/faq" className="footer__link">Preguntas frecuentes</Link>
          <Link to="/reservas" className="footer__link">Reservas</Link>
        </nav>
      </div>

      <div className="footer__cta">
        <p className="footer__cta-text">¿Listo para empezar?</p>
        <Link to="/reservas" className="footer__cta-btn">
          Reservar
          <IconArrowRight size={16} stroke={2} />
        </Link>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal-row">
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} Kaiten</span>
            <Link to="/terminos">Términos y condiciones</Link>
            <Link to="/privacidad">Política de privacidad</Link>
            <Link to="/aviso-legal">Aviso legal</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
          <div className="footer__socials">
            <a
              href="https://instagram.com/kaiten"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={20} stroke={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
