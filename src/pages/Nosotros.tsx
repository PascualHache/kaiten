import { Link } from "react-router-dom";
import {
  IconArrowRight,
  IconMountain,
  IconWaveSine,
  IconCircle,
  IconPencil,
  IconAsterisk,
} from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aitorImage from "../assets/images/aitor.png";
import historiaImage from "../assets/images/historia.png";
import logoSquared from "../assets/logos/logo_squared.png";
import "./Nosotros.css";

const VALUES = [
  {
    id: "curiosidad",
    Icon: IconMountain,
    bg: "#D8D5DA",
    title: "Curiosidad",
    tagline: "Nunca dejamos de explorar",
    body: "Seguimos preguntando. Seguimos aprendiendo. La montaña siempre enseña.",
  },
  {
    id: "precision",
    Icon: IconWaveSine,
    bg: "#D1D5CC",
    title: "Precisión",
    tagline: "Nos importa cada detalle",
    body: "Pequeños ajustes. Grandes diferencias. Mejor cada día.",
  },
  {
    id: "respeto",
    Icon: IconCircle,
    bg: "#F6F5F3",
    title: "Respeto",
    tagline: "Por la montaña. Por las personas. Por el momento",
    body: "Cuidamos lo que amamos para que las futuras generaciones también puedan disfrutarlo.",
  },
  {
    id: "estilo",
    Icon: IconPencil,
    bg: "#CFCCD4",
    title: "Estilo",
    tagline: "Menos ruido. Más intención",
    body: "Valoramos la simplicidad, la función y el buen gusto en todo lo que hacemos.",
  },
  {
    id: "comunidad",
    Icon: IconAsterisk,
    bg: "#F6F5F3",
    title: "Comunidad",
    tagline: "Subimos juntos",
    body: "No somos clientes. No somos profesores. Somos personas que comparten la misma pasión.",
  },
];

function Nosotros() {
  return (
    <div className="nosotros">
      <Navbar />

      {/* ─── Origin composition ───────────────────────────── */}
      <section className="nosotros__origin">

        <div className="nosotros__origin-head">
          <p className="nosotros__eyebrow">Nuestra Historia</p>
        </div>

        {/* 3-column layout: [photo+text] | [dark card] | [photo overlay] */}
        <div className="nosotros__composition">

          {/* Left column: photo on top, text below */}
          <div className="nosotros__col-left">
            <div className="nosotros__card nosotros__card--photo">
              <img
                src={historiaImage}
                alt="Señales de montaña en Baqueira"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="nosotros__origin-body">
              <h1 className="nosotros__title">
                El origen<br />de KAITEN
              </h1>
              <p className="nosotros__subtitle">
                No nacimos para crear otra escuela de esquí
              </p>
              <p className="nosotros__lead">
                Nacimos porque creíamos que existía una forma mejor de enseñar.{" "}
                <em>The Kaiten Line</em> es el momento en que la técnica deja de
                ser un pensamiento y se convierte en intuición.
              </p>
            </div>
          </div>

          {/* Center: dark text card — full height */}
          <div className="nosotros__card nosotros__card--dark">
            <h2 className="nosotros__card-heading">
              Todo comenzó en el Valle de Arán
            </h2>
            <div className="nosotros__card-body">
              <p className="nosotros__card-p">
                En 2020, Aitor dejó la ciudad para dedicarse a lo que siempre
                había estado dentro de él: la montaña y el esquí. En Japón
                encontró la palabra que lo resumía todo:{" "}
                <strong>Kaiten (回転) — revolución, cambio, evolución.</strong>
              </p>
              <p className="nosotros__card-p">
                Naiara, su compañera, hizo posible que este proyecto creciera
                desde dentro. Kaiten también es suyo.
              </p>
            </div>
          </div>

          {/* Right: Aitor photo with overlay quote — full height */}
          <div className="nosotros__card nosotros__card--overlay">
            <img
              src={aitorImage}
              alt="Aitor Bellver, fundador de Kaiten"
              loading="lazy"
              decoding="async"
            />
            <div className="nosotros__card-gradient">
              <p className="nosotros__card-quote">
                Aitor Bellver quería una escuela de esquí que brindara una
                experiencia totalmente nueva
              </p>
              <span className="nosotros__card-role">
                Técnico Deportivo Superior en Esquí Alpino (TD3)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── Values ──────────────────────────────────────── */}
      <section className="nosotros__values">
        <header className="nosotros__values-header">
          <p className="nosotros__eyebrow">Nuestros valores</p>
          <h2 className="nosotros__values-title">
            Lo que<br />nos guía
          </h2>
        </header>
        <div className="nosotros__values-grid">
          {VALUES.map((v) => (
            <div key={v.id} className="nosotros__value" style={{ backgroundColor: v.bg }}>
              <v.Icon
                className="nosotros__value-icon"
                size={20}
                stroke={1.5}
                aria-hidden="true"
              />
              <p className="nosotros__value-name">{v.title}</p>
              <p className="nosotros__value-tagline">{v.tagline}</p>
              <p className="nosotros__value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Manifesto ───────────────────────────────────── */}
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
        <Link to="/reservas" className="nosotros__manifesto-link">
          Ver experiencias
          <IconArrowRight size={15} stroke={2} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Nosotros;
