import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconPhone,
  IconChevronDown,
  IconWorld,
  IconMenu2,
  IconVideo,
  IconX,
} from "@tabler/icons-react";
import { useHeroVariant, setHeroVariant, IS_DEV } from "../dev/heroVariant";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroVariant = useHeroVariant();

  return (
    <nav className="navbar">
      <div className="navbar__bar">
        <div className="navbar__left">
          <a href="tel:" className="navbar__link navbar__link--phone">
            <IconPhone size={18} stroke={1.5} />
          </a>
          <button type="button" className="navbar__dropdown">
            <IconWorld size={16} stroke={1.5} />
            <span className="navbar__dropdown-text">ES</span>
            <IconChevronDown size={14} stroke={2} />
          </button>
          <a
            href="https://instagram.com"
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
          <Link to="/reservas" className="navbar__reserve-btn">
            RESERVA
          </Link>
          <a href="#webcams" className="navbar__link navbar__link--webcams">
            <IconVideo size={18} stroke={1.5} />
            <span>Webcams</span>
          </a>
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
          <Link
            to="/historia"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            HISTORIA
          </Link>
          <Link
            to="/valores"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            VALORES
          </Link>
          {/* Equipo oculto temporalmente
          <Link
            to="/equipo"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            EQUIPO
          </Link>
          */}
          <Link
            to="/reservas"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            RESERVAS
          </Link>
          <Link
            to="/tarifas"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            TARIFAS
          </Link>
          <Link
            to="/niveles"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            NIVELES
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
