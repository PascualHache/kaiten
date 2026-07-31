import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconPhone,
} from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import './Footer.css'

function Footer() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="footer">
      <div className="footer__brand">
        <Link to="/" className="footer__brand-logo">KAITEN</Link>
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
            <form
              className="footer__form"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
            >
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
          )}
        </div>

        <div className="footer__help">
          <span className="footer__col-title">¿Hablamos?</span>
          <a
            href="https://wa.me/34699820954"
            className="footer__help-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__help-icon">
              <IconBrandWhatsapp size={20} stroke={1.5} />
            </span>
            +34 699 820 954
          </a>
          <a href="tel:+34699820954" className="footer__help-item">
            <span className="footer__help-icon">
              <IconPhone size={20} stroke={1.5} />
            </span>
            +34 699 820 954
          </a>
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
          <Link to="/historia" className="footer__link">Historia</Link>
          <Link to="/valores" className="footer__link">Valores</Link>
          <Link to="/tarifas" className="footer__link">Tarifas</Link>
          <Link to="/niveles" className="footer__link">Niveles</Link>
          <Link to="/reservas" className="footer__link">Reservas</Link>
        </nav>
      </div>

      <div className="footer__cta">
        <p className="footer__cta-text">¿Listo para empezar?</p>
        <Link to="/reservas" className="footer__cta-btn">
          Reserva tu clase
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
