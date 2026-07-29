import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { IconInfoCircle } from '@tabler/icons-react'
import { TEAM } from '../data/team'
import memberImage from '../assets/images/kaiten_bg.png'
import './Equipo.css'

function Equipo() {
  return (
    <div className="equipo">
      <Navbar />

      <section className="equipo__grid">
        {TEAM.map((m) => (
          <article key={m.id} className="member">
            <div className="member__card member__profile">
              <div className="member__header">
                <span className="member__role">{m.role}</span>
                <button
                  type="button"
                  className="member__info"
                  aria-label={`Más información sobre ${m.name}`}
                >
                  <IconInfoCircle size={20} stroke={1.5} />
                </button>
              </div>
              <div className="member__photo">
                <img
                  src={memberImage}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <Link to="/reservas" className="member__reserve">
                RESERVA
              </Link>
            </div>

            <div className="member__card member__bio">
              <p className="member__quote">“{m.quote}”</p>
              <p className="member__bio-text">{m.bio}</p>

              <div className="member__tags">
                {m.skills.map((s) => (
                  <span key={s} className="member__tag">
                    {s}
                  </span>
                ))}
              </div>

              <p className="member__section-label">Pilares | Valores</p>
              <div className="member__tags member__tags--pillars">
                {m.pillars.map((p) => (
                  <span key={p} className="member__tag member__tag--pillar">
                    {p}
                  </span>
                ))}
              </div>

              <Link to="/reservas" className="member__reserve">
                RESERVA
              </Link>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default Equipo
