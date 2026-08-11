import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aitorImage from "../assets/images/aitor.png";
import historiaImage from "../assets/images/historia.png";
import logoSquared from "../assets/logos/logo_squared.png";
import "./Nosotros.css";

const VALUES = [
  {
    id: "curiosidad",
    title: "Curiosidad",
    body: "Seguimos preguntando. Seguimos aprendiendo. La montaña siempre enseña.",
  },
  {
    id: "precision",
    title: "Precisión",
    body: "Pequeños ajustes. Grandes diferencias. Mejor cada día.",
  },
  {
    id: "respeto",
    title: "Respeto",
    body: "Por la montaña. Por las personas. Por el momento.",
  },
  {
    id: "estilo",
    title: "Estilo",
    body: "Menos ruido. Más intención. Función y buen gusto en todo lo que hacemos.",
  },
  {
    id: "comunidad",
    title: "Comunidad",
    body: "No somos clientes ni profesores. Somos personas que comparten la misma pasión.",
  },
];

function Nosotros() {
  return (
    <div className="nosotros">
      <Navbar />

      {/* Intro */}
      <section className="nosotros__intro">
        <div className="nosotros__intro-inner">
          <p className="nosotros__eyebrow">Nuestra historia</p>
          <h1 className="nosotros__title">
            No nacimos para crear
            <br />
            otra escuela de esquí
          </h1>
          <p className="nosotros__lead">
            Nacimos porque creíamos que existía una forma mejor de enseñar.{" "}
            <em>The Kaiten Line</em> es el momento en que la técnica deja de
            ser un pensamiento y se convierte en intuición.
          </p>
        </div>
        <span className="nosotros__rule" />
      </section>

      {/* Origin */}
      <section className="nosotros__origin">
        <div className="nosotros__origin-media">
          <img
            src={historiaImage}
            alt="Montañas de Baqueira Beret con dos montañeros"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="nosotros__origin-text">
          <p className="nosotros__eyebrow">El origen</p>
          <h2 className="nosotros__subtitle">
            Todo comenzó en el Valle de Arán
          </h2>
          <p className="nosotros__paragraph">
            En 2020, Aitor dejó la ciudad para dedicarse a lo que siempre había
            estado dentro de él: la montaña y el esquí. En Japón encontró la
            palabra que lo resumía todo:{" "}
            <strong>Kaiten (回転) — revolución, cambio, evolución.</strong>
          </p>
          <p className="nosotros__paragraph">
            Naiara, su compañera, hizo posible que este proyecto creciera desde
            dentro. Kaiten también es suyo.
          </p>
          <div className="nosotros__founder">
            <img
              src={aitorImage}
              alt="Aitor Bellver, fundador de Kaiten"
              className="nosotros__founder-img"
              loading="lazy"
              decoding="async"
            />
            <div>
              <p className="nosotros__founder-name">Aitor Bellver</p>
              <p className="nosotros__founder-role">
                Técnico Deportivo Superior en Esquí Alpino (TD3)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="nosotros__values">
        <header className="nosotros__values-header">
          <p className="nosotros__eyebrow">Nuestros valores</p>
          <h2 className="nosotros__subtitle nosotros__subtitle--values">
            Lo que nos guía
          </h2>
        </header>
        <div className="nosotros__values-grid">
          {VALUES.map((v) => (
            <div key={v.id} className="nosotros__value">
              <h3 className="nosotros__value-title">{v.title}</h3>
              <p className="nosotros__value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifesto */}
      <section className="nosotros__manifesto">
        <img
          src={logoSquared}
          alt=""
          aria-hidden="true"
          className="nosotros__manifesto-mark"
          loading="lazy"
          decoding="async"
        />
        <blockquote className="nosotros__quote">
          No creemos en vender clases. Creemos en cambiar la manera de vivir la
          montaña.
        </blockquote>
      </section>

      {/* CTA */}
      <section className="nosotros__cta">
        <p className="nosotros__cta-text">
          ¿Quieres vivir la experiencia Kaiten?
        </p>
        <Link to="/reservas" className="nosotros__cta-btn">
          Ver experiencias
          <IconArrowRight size={16} stroke={2} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Nosotros;
