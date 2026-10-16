import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconBrandWhatsapp, IconMenu2 } from "@tabler/icons-react";
import NavMenu, { type NavMenuLink } from "./NavMenu";
import logoKaiten from "../assets/logos/logo_text.png";
import { useUi } from "../i18n";
import "./Navbar.css";

const WHATSAPP_BASE = "https://wa.me/34699820954";

const SCROLL_THRESHOLD = 40;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const ui = useUi();

  const navLinks: NavMenuLink[] = [
    { to: "/", label: ui.nav.links.home },
    { to: "/nosotros", label: ui.nav.links.nosotros },
    { to: "/reservas", label: ui.nav.links.reservas },
    { to: "/tarifas", label: ui.nav.links.tarifas },
    { to: "/niveles", label: ui.nav.links.niveles },
    { to: "/faq", label: ui.nav.links.faq },
  ];

  const whatsappUrl = `${WHATSAPP_BASE}?text=${encodeURIComponent(
    ui.common.waDiscounts,
  )}`;

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
      <div className="navbar__inner">
        {/* Left: menu toggle */}
        <div className="navbar__left">
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={ui.nav.openMenu}
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
          <Link to="/reservas" className="navbar__reserve-btn">
            {ui.common.reserve}
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__whatsapp"
            aria-label={ui.common.whatsappAria}
          >
            <IconBrandWhatsapp size={22} stroke={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      {menuOpen && (
        <NavMenu links={navLinks} onClose={() => setMenuOpen(false)} />
      )}
    </header>
  );
}

export default Navbar;
