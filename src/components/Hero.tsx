import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import heroPhoto from "../assets/images/kaiten_home.png";
import "./Hero.css";

const REST_COORDS = "43 00 142 00";
const REST_GROUPS = REST_COORDS.split(" ");

function Hero() {
  const coordsRef = useRef<HTMLSpanElement>(null);

  // Efecto tragaperras al cargar: dígitos aleatorios que se asientan
  // grupo a grupo hasta mostrar las coordenadas reales
  useEffect(() => {
    const el = coordsRef.current;
    if (!el) return;

    const randomDigits = (len: number) =>
      Array.from({ length: len }, () => Math.floor(Math.random() * 10)).join(
        "",
      );

    const lockTicks = [14, 22, 30, 38];
    let tick = 0;
    const intervalId = window.setInterval(() => {
      tick++;
      el.textContent = REST_GROUPS.map((group, i) =>
        tick >= lockTicks[i] ? group : randomDigits(group.length),
      ).join(" ");
      if (tick >= lockTicks[lockTicks.length - 1]) {
        window.clearInterval(intervalId);
      }
    }, 60);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <img
        className="hero__bg"
        src={heroPhoto}
        alt="Esquiador en Baqueira Beret"
        loading="eager"
        decoding="async"
      />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content">
        <h1 className="hero__title">
          R-evoluciona
          <br />
          tu forma
          <br />
          de esquiar
        </h1>
        <span className="hero__rule" />
        <p className="hero__text">Escuela de esquí en Baqueira Beret</p>
        <div className="hero__actions">
          <Link to="/reservas" className="hero__btn hero__btn--primary">
            Reservar
            <IconArrowRight size={18} stroke={2} />
          </Link>
          <Link to="/historia" className="hero__btn hero__btn--secondary">
            CONOCER KAITEN
            <IconArrowRight size={18} stroke={2} />
          </Link>
        </div>
      </div>

      <span className="hero__side hero__side--left" ref={coordsRef}>
        {REST_COORDS}
      </span>
      <span className="hero__side hero__side--right">Your Line. Your Way.</span>
    </section>
  );
}

export default Hero;
