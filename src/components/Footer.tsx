import { Link } from 'react-router-dom'
import {
  IconArrowRight,
  IconHelpCircle,
  IconMessageCircle,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandWhatsapp,
} from '@tabler/icons-react'
import { SERVICES } from '../data/services'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__newsletter">
          <p className="footer__newsletter-text">
            Suscríbete para recibir novedades, ofertas y partes de nieve antes
            que nadie.
          </p>
          <form
            className="footer__form"
            onSubmit={(e) => e.preventDefault()}
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
        </div>

        <div className="footer__help">
          <Link to="/reservas" className="footer__help-item">
            <span className="footer__help-icon">
              <IconHelpCircle size={20} stroke={1.5} />
            </span>
            Centro de ayuda
          </Link>
          <a
            href="https://wa.me/34600000000"
            className="footer__help-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__help-icon">
              <IconMessageCircle size={20} stroke={1.5} />
            </span>
            WhatsApp
          </a>
        </div>

        <nav className="footer__col" aria-label="Experiencias">
          <span className="footer__col-title">Experiencias</span>
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={service.reservasPath}
              className="footer__link"
            >
              {service.title}
            </Link>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Kaiten">
          <span className="footer__col-title">Kaiten</span>
          <Link to="/historia" className="footer__link">
            Conócenos
          </Link>
          <Link to="/valores" className="footer__link">
            Valores
          </Link>
          <Link to="/equipo" className="footer__link">
            Equipo
          </Link>
          <Link to="/reservas" className="footer__link">
            Reservas
          </Link>
        </nav>
      </div>

      <div className="footer__bottom">
        <div className="footer__region">
          <span aria-hidden="true">🇪🇸</span>
          España
        </div>
        <div className="footer__legal-row">
          <div className="footer__legal">
            <span>© {new Date().getFullYear()} Kaiten</span>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Aviso legal</a>
            <a href="#">Cookies</a>
          </div>
          <div className="footer__socials">
            <a
              href="https://instagram.com"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={20} stroke={1.5} />
            </a>
            <a
              href="https://wa.me/34600000000"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconBrandWhatsapp size={20} stroke={1.5} />
            </a>
            <a
              href="#"
              className="footer__social"
              aria-label="Spotify"
            >
              <IconBrandSpotify size={20} stroke={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
