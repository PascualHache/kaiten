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
import naiaraImage from "../assets/images/naiara.png";
import logoSquared from "../assets/logos/logo_squared.png";
import "./Nosotros.css";

interface StoryChapter {
  id: string;
  heading: string;
  paragraphs: React.ReactNode[];
}

const STORY: StoryChapter[] = [
  {
    id: "eleccion",
    heading: "Todo comenzó con una elección",
    paragraphs: [
      "Decidí dejar atrás la vida en la ciudad, la rutina, los horarios y esa sensación de que el tiempo se escapa.",
      "En 2020 tomé una decisión que cambiaría mi vida.",
      <>
        Me mudé al Valle de Arán para dedicarme a algo que siempre había estado
        dentro de mí: <strong>la montaña y el esquí.</strong>
      </>,
      <>
        Lo que empezó como un cambio de lugar terminó convirtiéndose en{" "}
        <strong>un cambio de mentalidad.</strong>
      </>,
    ],
  },
  {
    id: "evolucion",
    heading: "Seis años de evolución",
    paragraphs: [
      <strong className="nosotros__story-label">
        APRENDER.
        <br />
        CRECER.
        <br />
        EVOLUCIONAR.
      </strong>,
      "Durante estos años completé mi formación de Esquí Alpino, seguí aprendiendo temporada tras temporada y descubrí una forma diferente de entender el trabajo, la montaña y la vida.",
      "Dejé atrás una rueda que nunca se detenía para empezar a construir algo con propósito.",
      <strong>
        Sin dejar que el camino hacia algún lugar me hiciera olvidar disfrutar
        del camino.
      </strong>,
    ],
  },
  {
    id: "kaiten",
    heading: "Una palabra cambió todo",
    paragraphs: [
      <strong className="nosotros__story-label">KAITEN.</strong>,
      "En Japón encontré una palabra que resumía exactamente lo que llevaba años viviendo.",
      <>
        KAITEN habla de <strong>cambio, transformación y evolución.</strong>
      </>,
      <>
        De no permanecer inmóvil.
        <br />
        De cuestionar lo establecido.
        <br />
        De entender que siempre podemos seguir aprendiendo y reinventarnos.
      </>,
      "No era simplemente el nombre de un proyecto.",
      <strong>Era una forma de entender el camino.</strong>,
    ],
  },
  {
    id: "naiara",
    heading: "Pero nada de esto existiría sin Naiara",
    paragraphs: [
      "Ella está detrás de gran parte de lo que no se ve.",
      "Naiara ha sido mi compañera durante todo este viaje. La persona que sostiene lo esencial y que está detrás de cada detalle, cada decisión y cada paso que nos ha traído hasta aquí.",
      "Ella también eligió cambiar de vida.",
      "Dejar atrás aquella misma rueda y apostar por construir una forma diferente de vivir.",
      <strong>
        Y poco a poco, aquello que había empezado como una decisión personal
        dejó de ser mi camino para convertirse en el nuestro.
      </strong>,
    ],
  },
];

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
          <div className="nosotros__intro">
            <p className="nosotros__intro-p">
              Es el estado mental en el que la técnica deja de ser pensamiento
              para convertirse en intuición.
            </p>
            <p className="nosotros__intro-p">
              La montaña deja de ser un lugar por el que desciendes para
              convertirse en un lenguaje que entiendes.
            </p>
            <p className="nosotros__intro-p nosotros__intro-p--slogan">
              We call it The KAITEN Line.
            </p>
          </div>
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
                El origen
                <br />
                de KAITEN
              </h1>
              <p className="nosotros__subtitle">
                No nacimos para crear otra escuela de esquí
              </p>
              <p className="nosotros__lead">
                Nacimos porque creíamos que existía una forma mejor de enseñar
              </p>
            </div>
          </div>

          {/* Center: dark text card — full height */}
          <div className="nosotros__card nosotros__card--dark">
            <h2 className="nosotros__card-heading">
              Todo comenzó en el Valle de Arán
            </h2>
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
                Técnico Deportivo Superior en Esquí Alpino (TD3) ROPEC 052315
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Story: la historia de Aitor y Naiara ────────── */}
      <section className="nosotros__story">
        <div className="nosotros__story-text">
          {STORY.map((chapter) => (
            <div key={chapter.id} className="nosotros__story-chapter">
              <h2 className="nosotros__story-heading">{chapter.heading}</h2>
              {chapter.paragraphs.map((p, i) => (
                <p key={i} className="nosotros__story-p">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="nosotros__story-media">
          <img
            src={naiaraImage}
            alt="Naiara contemplando las montañas del Valle de Arán"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ─── Values ──────────────────────────────────────── */}
      <section className="nosotros__values">
        <header className="nosotros__values-header">
          <p className="nosotros__eyebrow">Nuestros valores</p>
          <h2 className="nosotros__values-title">
            Lo que
            <br />
            nos guía
          </h2>
        </header>
        <div className="nosotros__values-grid">
          {VALUES.map((v) => (
            <div
              key={v.id}
              className="nosotros__value"
              style={{ backgroundColor: v.bg }}
            >
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
