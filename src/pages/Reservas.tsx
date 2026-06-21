import { Link } from 'react-router-dom'
import { ACTIVITIES } from '../data/activities'
import Navbar from '../components/Navbar'
import './Reservas.css'

export default function Reservas() {
  return (
    <div className="reservas">
      <Navbar />
      <main className="reservas__main">
        <h1 className="reservas__titulo">Reservas</h1>
        <ul className="reservas__lista">
          {ACTIVITIES.map((activity) => (
            <li key={activity.id}>
              <Link
                to={`/reservas/${activity.calSlug}`}
                className={`reservas__card reservas__card--${activity.color}`}
              >
                <span className="reservas__card-titulo">{activity.title}</span>
                <span className="reservas__card-feature">
                  {activity.features[0].emoji} {activity.features[0].title}
                </span>
                <span className="reservas__card-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
