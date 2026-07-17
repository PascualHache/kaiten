import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import heroImage from '../assets/images/kaiten_bg.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Escuela de esquí Baqueira Beret</p>
        <h1 className="hero__title">
          Revoluciona
          <br />
          tu forma
          <br />
          de esquiar.
        </h1>
        <span className="hero__rule" />
        <p className="hero__text">
          La primera escuela de Baqueira donde eliges a tu profesor antes de
          reservar.
        </p>
        <div className="hero__actions">
          <Link to="/reservas" className="hero__btn hero__btn--primary">
            RESERVAR AHORA
            <IconArrowRight size={18} stroke={2} />
          </Link>
          <Link to="/historia" className="hero__btn hero__btn--secondary">
            CONOCER KAITEN
            <IconArrowRight size={18} stroke={2} />
          </Link>
        </div>
      </div>

      <div className="hero__media">
        <img
          className="hero__image"
          src={heroImage}
          alt="Esquiador descendiendo una ladera en Baqueira Beret"
          loading="eager"
          decoding="async"
        />
      </div>

      <span className="hero__side hero__side--left">00 00 00 05</span>
      <span className="hero__side hero__side--right">SKI REVOLUTION</span>
    </section>
  )
}

export default Hero
