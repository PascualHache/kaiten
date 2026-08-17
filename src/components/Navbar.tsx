import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import PromoBanner from "./PromoBanner";
import logoKaiten from "../assets/logos/logo_text.png";
import "./Navbar.css";

const NAV_LINKS = [{ to: "/niveles", label: "Niveles" }];

// Misma URL pendiente que en Footer (Baqueira live cams)
const LIVE_CAMS_URL = "#";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <PromoBanner />
      <div className="navbar__inner">
        {/* Left: nav links */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `navbar__nav-link${isActive ? " navbar__nav-link--active" : ""}`
              }
            >
              {label}
              <span className="navbar__nav-indicator" aria-hidden="true" />
            </NavLink>
          ))}
          <button type="button" className="navbar__lang">
            ES&nbsp;▾
          </button>
          <a
            href={LIVE_CAMS_URL}
            className="navbar__nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Webcam
          </a>
        </nav>

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
            Reservar
          </Link>
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IconX size={22} stroke={2} />
            ) : (
              <IconMenu2 size={22} stroke={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__menu">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `navbar__menu-item${isActive ? " navbar__menu-item--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={LIVE_CAMS_URL}
            className="navbar__menu-item"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Webcam
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
