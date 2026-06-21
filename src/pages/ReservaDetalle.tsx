import { useParams, Link } from 'react-router-dom'
import { ACTIVITIES } from '../data/activities'
import ActivitySection from '../components/ActivitySection'
import Navbar from '../components/Navbar'
import './ReservaDetalle.css'

export default function ReservaDetalle() {
  const { slug } = useParams<{ slug: string }>()
  const activity = ACTIVITIES.find((a) => a.calSlug === slug)

  return (
    <div className="reserva-detalle">
      <Navbar />
      <div className="reserva-detalle__back-wrap">
        <Link to="/reservas" className="reserva-detalle__back">
          ← Todas las actividades
        </Link>
      </div>
      {activity ? (
        <ActivitySection activity={activity} />
      ) : (
        <main className="reserva-detalle__not-found">
          <p>Actividad no encontrada.</p>
          <Link to="/reservas">← Volver a reservas</Link>
        </main>
      )}
    </div>
  )
}
