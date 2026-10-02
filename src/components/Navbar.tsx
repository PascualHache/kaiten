import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import NavMenu, { type NavMenuLink } from "./NavMenu";
import PromoBanner from "./PromoBanner";
import logoKaiten from "../assets/logos/logo_text.png";
import "./Navbar.css";

const NAV_LINKS: NavMenuLink[] = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/reservas", label: "Reservas" },
  { to: "/tarifas", label: "Tarifas" },
  { to: "/niveles", label: "Niveles" },
  { to: "/faq", label: "Preguntas frecuentes" },
];

const SCROLL_THRESHOLD = 40;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Dos usos del mismo flag: en Home la navbar flota transparente sobre el Hero
  // hasta que se hace scroll, y en todas las vistas el fondo se oscurece un
  // punto al separarse del inicio de la página.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header
      className={`navbar${transparent ? " navbar--transparent" : ""}${
        scrolled ? " navbar--scrolled" : ""
      }`}
      data-nav=""
    >
      <PromoBanner />
      <div className="navbar__inner">
        {/* Left: menu toggle */}
        <div className="navbar__left">
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <IconMenu2 size={26} stroke={2} />
          </button>
        </div>

        {/* Center: wordmark */}
        <Link to="/" className="navbar__logo">
          <img
            className="logo-img"
            src={logoKaiten}
            alt="Kaiten"
            loading="lazy"
            decoding="async"
          />
        </Link>

        {/* Right: utilities */}
        <div className="navbar__utils">
          <div className="navbar__lang" role="group" aria-label="Idioma">
            <button
              type="button"
              className="navbar__lang-btn navbar__lang-btn--active"
            >
              ES
            </button>
            <span className="navbar__lang-sep" aria-hidden="true">
              /
            </span>
            <button type="button" className="navbar__lang-btn">
              EN
            </button>
            <span className="navbar__lang-sep" aria-hidden="true">
              /
            </span>
            <button type="button" className="navbar__lang-btn">
              CAT
            </button>
          </div>
          <Link to="/reservas" className="navbar__reserve-btn">
            Reservar
          </Link>
        </div>
      </div>

      {menuOpen && (
        <NavMenu links={NAV_LINKS} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

export default Navbar;
