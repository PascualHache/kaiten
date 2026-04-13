import { useRef } from 'react'
import heroImage from '../assets/images/kaiten_bg.png'
import Viewfinder from './Viewfinder'
import './Hero.css'

function Hero() {
  const viewportRef = useRef<HTMLDivElement>(null)

  return (
    <section className="hero">
      <div className="hero__viewport" ref={viewportRef}>
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
        <Viewfinder viewportRef={viewportRef} />
        <p className="hero__side-text hero__side-text--right">ESCUELA KAITEN</p>
        <p className="hero__title">ESCUELA DE ESQUI BAQUEIRA BERET</p>
      </div>
    </section>
  )
}

export default Hero
