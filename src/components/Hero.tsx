import { Link } from 'react-router-dom'
import { IconArrowRight } from '@tabler/icons-react'
import homeLeft from '../assets/images/home_left.png'
import homeRight from '../assets/images/home_right.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Left panel: person photo + text overlay */}
      <div className="hero__left">
        <img
          className="hero__left-img"
          src={homeLeft}
          alt=""
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
        <div className="hero__content">
          <p className="hero__eyebrow">Escuela de esquí Baqueira Beret</p>
          <div className="hero__bottom">
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
        </div>
        <span className="hero__side hero__side--left">00 00 00 05</span>
      </div>

      {/* Right panel: mountain photo */}
      <div className="hero__right">
        <img
          className="hero__right-img"
          src={homeRight}
          alt="Ladera nevada de Baqueira Beret con trazas de esquí"
          loading="eager"
          decoding="async"
        />
        <span className="hero__side hero__side--right">SKI REVOLUTION</span>
      </div>
    </section>
  )
}

export default Hero
