import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import PromoBanner from "./PromoBanner";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/reservas", label: "Reservas" },
  { to: "/tarifas", label: "Tarifas" },
  { to: "/niveles", label: "Niveles" },
];

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
        </nav>

        {/* Center: wordmark */}
        <Link to="/" className="navbar__logo">
          KAITEN
        </Link>

        {/* Right: utilities */}
        <div className="navbar__utils">
          <button type="button" className="navbar__lang">
            ES&nbsp;▾
          </button>
          <a href="tel:+34699820954" className="navbar__phone">
            699 820 954
          </a>
          <Link to="/reservas" className="navbar__reserve-btn">
            Reservar
          </Link>
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX size={22} stroke={2} /> : <IconMenu2 size={22} stroke={2} />}
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
          <a href="tel:+34699820954" className="navbar__menu-item">
            699 820 954
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
