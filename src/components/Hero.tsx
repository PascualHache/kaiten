import { Link } from "react-router-dom";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import heroPhoto from "../assets/images/kaiten_home.webp";
import heroPhotoMobile from "../assets/images/kaiten_home_mobile.webp";
import { useUi } from "../i18n";
import "./Hero.css";

const REST_COORDS = "43 142 43 481";

function Hero() {
  const ui = useUi();
  // El desplazamiento suave lo decide el usuario vía prefers-reduced-motion:
  // scrollIntoView respeta la preferencia del sistema en los navegadores
  // actuales, así que no hace falta comprobarla aquí.
  function scrollToExperiences(e: React.MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("experiencias");
    if (!target) return; // Sin sección: dejamos que el ancla navegue sola.
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="hero" data-hero="">
      {/* Encuadre vertical propio en móvil: el recorte horizontal deja al
          esquiador fuera de cuadro por debajo de 768px. */}
      <picture className="hero__picture">
        <source media="(max-width: 768px)" srcSet={heroPhotoMobile} />
        <img
          className="hero__bg"
          src={heroPhoto}
          alt={ui.hero.photoAlt}
          loading="eager"
          decoding="async"
        />
      </picture>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__content">
        {/* Cada línea va en una máscara propia para que el texto pueda subir
            desde fuera del recorte. Sin JS se ve exactamente igual. */}
        <h1 className="hero__title">
          {ui.hero.titleLines.map((line) => (
            <span className="hero__line-mask" key={line}>
              <span className="hero__line" data-line="">
                {line}
              </span>
            </span>
          ))}
        </h1>

        <span className="hero__rule" data-hero-rule="" />
        <p className="hero__text" data-hero-fade="">
          {ui.hero.tagline}
        </p>
        <div className="hero__actions" data-hero-fade="">
          <Link to="/reservas" className="hero__btn hero__btn--primary">
            {ui.common.reserve}
            <IconArrowRight size={18} stroke={2} />
          </Link>
          <a
            href="#experiencias"
            className="hero__btn hero__btn--secondary"
            onClick={scrollToExperiences}
          >
            {ui.hero.seeExperiences}
            <IconArrowDown size={18} stroke={2} />
          </a>
        </div>
      </div>

      {/* data-slot guarda el valor final: la animación de tragaperras lo lee
          desde useScrollAnimations. El texto ya está impreso, así que si GSAP
          no llega a cargar se queda la cifra correcta. */}
      <span
        className="hero__side hero__side--left"
        data-hero-side=""
        data-slot={REST_COORDS}
        aria-hidden="true"
      >
        {REST_COORDS}
      </span>
      <span className="hero__side hero__side--right" data-hero-side="">
        Your line. Your way.
      </span>
    </section>
  );
}

export default Hero;
