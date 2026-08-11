import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconPhone,
  IconChevronDown,
  IconWorld,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import logoText from "../assets/logos/logo_text.png";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <PromoBanner />
      <div className="navbar__bar">
        <div className="navbar__left">
          <a href="tel:+34699820954" className="navbar__link navbar__link--phone">
            <IconPhone size={16} stroke={1.5} />
            <span className="navbar__phone-text">699 820 954</span>
          </a>
          <button type="button" className="navbar__dropdown">
            <IconWorld size={16} stroke={1.5} />
            <span className="navbar__dropdown-text">ES</span>
            <IconChevronDown size={14} stroke={2} />
          </button>
          <a
            href="https://instagram.com/kaiten"
            className="navbar__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            IG
          </a>
        </div>

        <Link to="/" className="navbar__logo">
          <img src={logoText} alt="Kaiten" className="navbar__logo-img" />
        </Link>

        <div className="navbar__right">
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
              </NavLink>
            ))}
          </nav>
          <Link to="/reservas" className="navbar__reserve-btn">
            Reservar
          </Link>
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={menuOpen ? "Cerrar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <IconX size={24} stroke={2} />
            ) : (
              <IconMenu2 size={24} stroke={2} />
            )}
          </button>
        </div>
      </div>

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
              {label.toUpperCase()}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
