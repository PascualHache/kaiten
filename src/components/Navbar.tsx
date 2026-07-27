import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ACTIVITIES } from "../data/activities";
import {
  IconPhone,
  IconChevronDown,
  IconWorld,
  IconMenu2,
  IconVideo,
  IconX,
} from "@tabler/icons-react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__bar">
        <div className="navbar__left">
          <a href="tel:" className="navbar__link navbar__link--phone">
            <IconPhone size={18} stroke={1.5} />
          </a>
          <div className="navbar__services-wrap" ref={servicesRef}>
            <button
              type="button"
              className="navbar__dropdown"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
            >
              <span className="navbar__dropdown-text">Info y reservas</span>
              <IconChevronDown
                size={14}
                stroke={2}
                className={servicesOpen ? "navbar__chevron--open" : ""}
              />
            </button>
            {servicesOpen && (
              <div className="navbar__services-menu">
                {ACTIVITIES.map((activity, i) => (
                  <Link
                    key={activity.id}
                    to={`/reservas#${activity.calSlug}`}
                    className={`navbar__services-item${i === 0 ? " navbar__services-item--default" : ""}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {activity.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
          <Link
            to="/equipo"
            className="navbar__menu-item"
            onClick={() => setMenuOpen(false)}
          >
            EQUIPO
          </Link>
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
            TARIFAS Y NIVELES
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
