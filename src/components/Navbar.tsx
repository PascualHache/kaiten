import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconPhone,
  IconChevronDown,
  IconWorld,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import { useHeroVariant, setHeroVariant, IS_DEV } from "../dev/heroVariant";
import "./Navbar.css";

const NAV_LINKS = [
  { to: "/historia", label: "Historia" },
  { to: "/valores", label: "Valores" },
  { to: "/reservas", label: "Reservas" },
  { to: "/tarifas", label: "Tarifas" },
  { to: "/niveles", label: "Niveles" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroVariant = useHeroVariant();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
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
          {IS_DEV && (
            <div
              className="navbar__dev"
              role="group"
              aria-label="Variante de Hero (dev)"
            >
              <span className="navbar__dev-label">Hero</span>
              <button
                type="button"
                className={`navbar__dev-btn${heroVariant === "side" ? " navbar__dev-btn--active" : ""}`}
                onClick={() => setHeroVariant("side")}
              >
                side
              </button>
              <button
                type="button"
                className={`navbar__dev-btn${heroVariant === "full" ? " navbar__dev-btn--active" : ""}`}
                onClick={() => setHeroVariant("full")}
              >
                full
              </button>
            </div>
          )}
        </div>

        <Link to="/" className="navbar__logo">
          KAITEN
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
            RESERVA
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
