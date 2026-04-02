import heroImage from '../assets/images/kaiten_bg.png'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__viewport">
        <div className="hero__images">
          <div
            className="hero__image hero__image--left"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="hero__divider" />
          <div
            className="hero__image hero__image--right"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
        </div>
        <div className="hero__watermark">
          <span className="hero__watermark-k">K</span>
          <span className="hero__watermark-text">KAITEN</span>
        </div>
        <p className="hero__side-text hero__side-text--left">00&nbsp;&nbsp;00&nbsp;&nbsp;S</p>
        <p className="hero__side-text hero__side-text--right">ESCUELA KAITEN</p>
        <p className="hero__title">ESCUELA DE ESQUI BAQUEIRA BERET</p>
      </div>
    </section>
  )
}

export default Hero
