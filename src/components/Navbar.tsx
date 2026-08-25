import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import PromoBanner from "./PromoBanner";
import logoKaiten from "../assets/logos/logo_text.png";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/niveles", label: "Niveles" },
  { to: "/faq", label: "FAQs" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <PromoBanner />
      <div className="navbar__inner">
        {/* Left: menu toggle */}
        <div className="navbar__left">
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
          </div>
          <Link to="/reservas" className="navbar__reserve-btn">
            Reservar
          </Link>
        </div>
      </div>

      {/* Dropdown menu */}
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
        </div>
      )}
    </header>
  );
}

export default Navbar;
