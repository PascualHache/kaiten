import { Link } from 'react-router-dom'
import './Footer.css'

const MARQUEE_TEXT = '— INFO NIVELES — INFO NIVELES — INFO NIVELES — INFO NIVELES — INFO NIVELES — INFO NIVELES — INFO NIVELES — INFO NIVELES '

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__marquee">
        <div className="footer__marquee-track">
          <span className="footer__marquee-text">{MARQUEE_TEXT}</span>
          <span className="footer__marquee-text" aria-hidden="true">{MARQUEE_TEXT}</span>
        </div>
      </div>

      <div className="footer__columns">
        <div className="footer__col">
          <div className="footer__col-header">
            <span className="footer__col-title">EXPLORA</span>
            <span className="footer__col-dot">.</span>
          </div>
          <nav className="footer__col-links">
            <Link to="/equipo" className="footer__link">KAITEN TEAM</Link>
            <Link to="/valores" className="footer__link">VALORES KAITEN</Link>
            <a href="#" className="footer__link">POLITICAS Y CONDICIONES</a>
            <a href="#" className="footer__link">DUDAS FRECUENTES</a>
          </nav>
        </div>

        <div className="footer__col">
          <div className="footer__col-header">
            <span className="footer__col-title">SOCIAL</span>
            <span className="footer__col-dot">.</span>
          </div>
          <nav className="footer__col-links">
            <a href="https://instagram.com" className="footer__link" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
            <a href="#" className="footer__link">SPOTIFY</a>
            <a href="#" className="footer__link">GOOGLE MAPS</a>
            <a href="#" className="footer__link">MAPA BAQUEIRA BERET</a>
          </nav>
        </div>

        <div className="footer__col">
          <div className="footer__col-header">
            <span className="footer__col-title">CONTACTO</span>
            <span className="footer__col-dot">.</span>
          </div>
          <div className="footer__col-links">
            <div className="footer__contact-group">
              <span className="footer__contact-label">EMAIL</span>
              <a href="mailto:inquire@contrabureau.com" className="footer__link footer__link--highlight">
                INQUIRE@CONTRABUREAU.COM
              </a>
            </div>
            <div className="footer__contact-group">
              <span className="footer__contact-label">WHATS APP</span>
              <a href="tel:+12133734495" className="footer__link footer__link--highlight">
                +213) 373-4495
              </a>
            </div>
            <div className="footer__contact-group">
              <span className="footer__address">Avinguda Pas d'arro</span>
              <span className="footer__address">Vielha</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__logo">
          <div className="footer__logo-icon">
            <span className="footer__logo-k">K</span>
          </div>
          <span className="footer__logo-text">KAITEN</span>
        </div>

        <div className="footer__info-box">
          <span className="footer__info-line">LOCAL TIME</span>
          <span className="footer__info-line">TEMPERATURA</span>
        </div>

        <div className="footer__circle" />
      </div>

      <p className="footer__copyright">COPYRIGHT</p>
    </footer>
  )
}

export default Footer
