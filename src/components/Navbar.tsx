import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconPhone,
  IconChevronDown,
  IconWorld,
  IconMenu2,
  IconVideo,
  IconX,
} from '@tabler/icons-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__bar">
        <div className="navbar__left">
          <a href="tel:" className="navbar__link navbar__link--phone">
            <IconPhone size={18} stroke={1.5} />
          </a>
          <button type="button" className="navbar__dropdown">
            <span className="navbar__dropdown-text">Info y reservas</span>
            <IconChevronDown size={14} stroke={2} />
          </button>
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
          <button
            type="button"
            className="navbar__menu-toggle"
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IconX size={24} stroke={2} /> : <IconMenu2 size={24} stroke={2} />}
          </button>
        </div>
        <div className="navbar__right">
          <button type="button" className="navbar__reserve-btn">
            RESERVA
          </button>
          <a href="#webcams" className="navbar__link navbar__link--webcams">
            <IconVideo size={18} stroke={1.5} />
            <span>Webcams</span>
          </a>
          <Link to="/" className="navbar__logo">
            <span className="navbar__logo-k">K</span>aiten
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__menu">
          <Link to="/historia" className="navbar__menu-item" onClick={() => setMenuOpen(false)}>
            HISTORIA
          </Link>
          <Link to="/valores" className="navbar__menu-item" onClick={() => setMenuOpen(false)}>
            VALORES
          </Link>
          <Link to="/equipo" className="navbar__menu-item" onClick={() => setMenuOpen(false)}>
            EQUIPO
          </Link>
          <Link to="/reservas" className="navbar__menu-item" onClick={() => setMenuOpen(false)}>
            RESERVAS
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
