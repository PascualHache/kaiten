import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Kaiten</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/contactar">Contactar</Link>
        </li>
        <li>
          <Link to="/reservas">Reservas</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
