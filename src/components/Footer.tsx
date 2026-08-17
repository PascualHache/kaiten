import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import logoText from '../assets/logos/logo_text.png'
import './Footer.css'

// URL pendiente: enlace definitivo a las cámaras en directo de Baqueira Beret
const LIVE_CAMS_URL = '#'

// URL pendiente: lista de Spotify de Kaiten
const SPOTIFY_URL = '#'

const EXPERIENCES = [
  { label: 'Clases Privadas', hash: 'clases-particulares-en-baqueira' },
  { label: 'Kids & Friends & Family', hash: 'friends-family' },
  { label: 'Kaiten Programs', hash: 'experiencia-kaiten-2.5' },
  { label: 'Tardeo (-15%)', hash: 'experiencia-de-tardeo-20' },
  { label: 'Full Day · Safari · Freeride', hash: '' },
  { label: 'Asesoramiento de material', hash: 'asesoramiento-compra-material-ski' },
]

const NAV_LINKS = [
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Tarifas', to: '/tarifas' },
  { label: 'Niveles', to: '/niveles' },
  { label: 'Preguntas frecuentes', to: '/faq' },
  { label: 'Reservas', to: '/reservas' },
]

function Footer() {
  return (
    <footer className="footer">

      {/* ─── CTA strip ─────────────────────────────────────── */}
      <div className="footer__cta">
        <div className="footer__cta-left">
          <p className="footer__cta-eyebrow">Temporada 2026 · 27</p>
          <h2 className="footer__cta-heading">Listo para empezar?</h2>
          <p className="footer__cta-sub">We call it The Kaiten Line.</p>
        </div>
        <div className="footer__cta-actions">
          <Link to="/reservas" className="footer__cta-btn footer__cta-btn--primary">
            Reservar
            <IconArrowRight size={16} stroke={2} />
          </Link>
          <a href="tel:+34699820954" className="footer__cta-btn footer__cta-btn--outline">
            Llámanos
          </a>
        </div>
      </div>

      <div className="footer__divider" />

      {/* ─── Body grid ─────────────────────────────────────── */}
      <div className="footer__body">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__brand-name">
            <img src={logoText} alt="Kaiten" loading="lazy" decoding="async" />
          </Link>
          <p className="footer__brand-desc">
            La primera escuela de Baqueira Beret donde eliges a tu profesor antes de reservar.
          </p>
          <div className="footer__contact">
            <a href="tel:+34699820954" className="footer__contact-item">+34 699 820 954</a>
            <a href="mailto:hola@kaiten.es" className="footer__contact-item">hola@kaiten.es</a>
            <span className="footer__contact-item">Baqueira Beret · Val d'Aran</span>
          </div>
          <div className="footer__socials">
            <a
              href="https://instagram.com/kaiten"
              className="footer__social-pill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://wa.me/34699820954"
              className="footer__social-pill"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WA
            </a>
            <span className="footer__social-pill" aria-label="Valoración 5 de 5 en Google">★ 5.0</span>
          </div>
        </div>

        {/* Experiencias */}
        <nav className="footer__col" aria-label="Experiencias">
          <span className="footer__col-title">Experiencias</span>
          {EXPERIENCES.map((e) => (
            <Link
              key={e.label}
              to={e.hash ? `/reservas#${e.hash}` : '/reservas'}
              className="footer__link"
            >
              {e.label}
            </Link>
          ))}
        </nav>

        {/* Kaiten nav */}
        <nav className="footer__col" aria-label="Kaiten">
          <span className="footer__col-title">Kaiten</span>
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="footer__link">
              {l.label}
            </Link>
          ))}
          <a
            href={SPOTIFY_URL}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Playlist Spotify
          </a>
        </nav>

        {/* Estado de las pistas */}
        <div className="footer__live">
          <span className="footer__col-title">Estado de las pistas</span>
          <p className="footer__live-text">
            Consulta las cámaras de Baqueira Beret en directo antes de subir
          </p>
          <a
            href={LIVE_CAMS_URL}
            className="footer__live-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__live-dot" aria-hidden="true" />
            Baqueira Live Cams
          </a>
        </div>
      </div>

      {/* ─── Legal ─────────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Kaiten</span>
          <Link to="/terminos">Términos y condiciones</Link>
          <Link to="/privacidad">Política de privacidad</Link>
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>

      {/* ─── Watermark ─────────────────────────────────────── */}
      <div className="footer__watermark" aria-hidden="true">
        <img src={logoText} alt="" loading="lazy" decoding="async" />
      </div>

    </footer>
  )
}

export default Footer
