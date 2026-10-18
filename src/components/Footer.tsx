import { Link } from "react-router-dom";
import {
  IconArrowRight,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import logoText from "../assets/logos/logo_text.png";
import logoK from "../assets/logos/logo_k.png";
import { bookingHref } from "../data/booking";
import { useUi } from "../i18n";
import "./Footer.css";

const LIVE_CAMS_URL = "https://www.baqueira.es/en/webcams";

const WHATSAPP_URL = "https://wa.me/34699820954";

const SPOTIFY_URL =
  "https://open.spotify.com/playlist/07BMCGGFCarURRFnUIOlbx?si=BqZCksIdT6OFuF5yvjs42A";

/* Solo el slug; la etiqueta sale del diccionario (ui.footer.experienceLinks).
   Sin slug ("otras") el enlace va al catálogo completo. */
const EXPERIENCE_SLUGS = [
  { key: "privadas", slug: "clases-particulares-en-baqueira" },
  { key: "family", slug: "friends-family" },
  { key: "programs", slug: "experiencia-kaiten-2.5" },
  { key: "tardeo", slug: "experiencia-de-tardeo-20" },
  { key: "otras", slug: "" },
  { key: "material", slug: "asesoramiento-compra-material-ski" },
] as const;

const NAV_PATHS = [
  { key: "nosotros", to: "/nosotros" },
  { key: "tarifas", to: "/tarifas" },
  { key: "niveles", to: "/niveles" },
  { key: "faq", to: "/faq" },
  { key: "reservas", to: "/reservas" },
] as const;

function Footer() {
  const ui = useUi();

  return (
    <footer className="footer">
      {/* ─── CTA strip ─────────────────────────────────────── */}
      <div className="footer__cta" data-reveal="">
        <div className="footer__cta-left">
          <p className="footer__cta-eyebrow">{ui.footer.ctaEyebrow}</p>
          <h2 className="footer__cta-heading">{ui.footer.ctaHeading}</h2>
        </div>
        <div className="footer__cta-actions">
          <Link
            to="/reservas"
            className="footer__cta-btn footer__cta-btn--primary"
          >
            {ui.common.reserve}
            <IconArrowRight size={16} stroke={2} />
          </Link>
          <a
            href={WHATSAPP_URL}
            className="footer__cta-btn footer__cta-btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={16} stroke={2} aria-hidden="true" />
            WhatsApp
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
          <p className="footer__brand-desc"></p>
          <div className="footer__contact">
            <a href="tel:+34699820954" className="footer__contact-item">
              +34 699 820 954
            </a>
            <a
              href="mailto:kaitenski@gmail.com"
              className="footer__contact-item"
            >
              kaitenski@gmail.com
            </a>
            <span className="footer__contact-item">{ui.nav.address}</span>
          </div>
          <div className="footer__socials">
            <a
              href="https://instagram.com/kaiten"
              className="footer__social-pill footer__social-pill--icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={24} stroke={1.5} aria-hidden="true" />
            </a>
            <a
              href={WHATSAPP_URL}
              className="footer__social-pill footer__social-pill--icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconBrandWhatsapp size={24} stroke={1.5} aria-hidden="true" />
            </a>
            <span
              className="footer__social-pill"
              aria-label={ui.footer.ratingAria}
            >
              <IconBrandGoogle size={20} stroke={1.5} aria-hidden="true" />
              <span aria-hidden="true">★ 5.0</span>
            </span>
          </div>
        </div>

        {/* Experiencias */}
        <nav className="footer__col" aria-label={ui.footer.experiences}>
          <span className="footer__col-title">{ui.footer.experiences}</span>
          {EXPERIENCE_SLUGS.map((e) =>
            /* La ficha monta el widget de Bookeo, que hornea el producto al
               cargar su script: hace falta carga completa de documento, de ahí
               el <a href>. El catálogo no monta widget y sí puede ser <Link>. */
            e.slug ? (
              <a
                key={e.key}
                href={bookingHref({ slug: e.slug })}
                className="footer__link"
              >
                {ui.footer.experienceLinks[e.key]}
              </a>
            ) : (
              <Link key={e.key} to="/reservas" className="footer__link">
                {ui.footer.experienceLinks[e.key]}
              </Link>
            ),
          )}
        </nav>

        {/* Kaiten nav */}
        <nav className="footer__col" aria-label="Kaiten">
          <span className="footer__col-title">Kaiten</span>
          {NAV_PATHS.map((l) => (
            <Link key={l.to} to={l.to} className="footer__link">
              {ui.nav.links[l.key]}
            </Link>
          ))}
          <a
            href={SPOTIFY_URL}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {ui.footer.spotify}
          </a>
        </nav>

        {/* Estado de las pistas */}
        <div className="footer__live">
          <span className="footer__col-title">{ui.footer.slopes}</span>
          <p className="footer__live-text">{ui.footer.slopesText}</p>
          <a
            href={LIVE_CAMS_URL}
            className="footer__live-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__live-dot" aria-hidden="true" />
            {ui.footer.slopesBtn}
          </a>

          <div className="footer__watermark" aria-hidden="true">
            <img src={logoK} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>

      {/* ─── Legal ─────────────────────────────────────────── */}
      <div className="footer__bottom">
        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Kaiten</span>
          <Link to="/terminos">{ui.footer.terms}</Link>
          <Link to="/privacidad">{ui.footer.privacy}</Link>
          <Link to="/aviso-legal">{ui.footer.legal}</Link>
          <Link to="/cookies">{ui.footer.cookies}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
