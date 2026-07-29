import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import heroImage from '../assets/images/kaiten_bg.png'
import './HeroFull.css'

function HeroFull() {
  return (
    <section className="hero-full">
      <div className="hero-full__media">
        <img
          className="hero-full__img"
          src={heroImage}
          alt=""
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="hero-full__mark" aria-hidden="true">
        <span className="hero-full__mark-k">K</span>
      </div>

      <div className="hero-full__content">
        <p className="hero-full__eyebrow">Escuela de esquí Baqueira Beret</p>
        <h1 className="hero-full__title">
          R-evoluciona
          <br />
          tu forma
          <br />
          de esquiar.
        </h1>
        <span className="hero-full__rule" />
        <p className="hero-full__subtitle">Your line. Your way.</p>
        <div className="hero-full__actions">
          <Link
            to="/reservas"
            className="hero-full__btn hero-full__btn--primary"
          >
            RESERVAR AHORA
            <IconArrowRight size={18} stroke={2} />
          </Link>
          <Link
            to="/historia"
            className="hero-full__btn hero-full__btn--secondary"
          >
            CONOCER KAITEN
            <IconArrowRight size={18} stroke={2} />
          </Link>
        </div>
      </div>

      <span className="hero-full__side hero-full__side--left">
        43 25 142 39 48
      </span>
      <span className="hero-full__side hero-full__side--right">Revolution</span>
    </section>
  )
}

export default HeroFull
