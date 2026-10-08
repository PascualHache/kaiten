import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  IconArrowRight,
  IconMountain,
  IconWaveSine,
  IconCircle,
  IconPencil,
  IconAsterisk,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import { useNosotrosMotion } from "../hooks/useNosotrosMotion";
import historiaImage from "../assets/images/historia.jpg";
import aitorImage from "../assets/images/aitor.jpg";
import naiaraImage from "../assets/images/naiara.png";
import valoresImage from "../assets/images/valores.png";
import logoSquared from "../assets/logos/logo_squared.png";
import "./Nosotros.css";

/* La Navbar la monta el Shell de App.tsx, no la página.
 *
 * Los `data-nos-*` son propios de esta página: el hook global
 * useScrollAnimations ya se engancha a [data-line], [data-reveal] y
 * [data-parallax] en todo el árbol, y compartir nombres haría que cada
 * elemento se animara dos veces. */

const INTRO =
  "Es el estado mental en el que la técnica deja de ser pensamiento para convertirse en intuición. La montaña deja de ser un lugar por el que desciendes para convertirse en un lenguaje que entiendes.";

interface Chapter {
  id: string;
  num: string;
  meta: string;
  heading: string;
  display?: string[];
  image?: { src: string; alt: string };
  paragraphs: ReactNode[];
}

const STORY: Chapter[] = [
  {
    id: "eleccion",
    num: "01",
    meta: "2020",
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
    num: "02",
    meta: "Seis años",
    heading: "Seis años de evolución",
    display: ["Aprender.", "Crecer.", "Evolucionar."],
    paragraphs: [
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
    num: "03",
    meta: "Japón",
    heading: "Una palabra cambió todo",
    display: ["Kaiten."],
    paragraphs: [
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
    num: "04",
    meta: "Naiara",
    heading: "Pero nada de esto existiría sin Naiara",
    image: {
      src: naiaraImage,
      alt: "Naiara contemplando las montañas del Valle de Arán",
    },
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
    title: "Curiosidad",
    tagline: "Nunca dejamos de explorar",
    body: "Seguimos preguntando. Seguimos aprendiendo. La montaña siempre enseña.",
  },
  {
    id: "precision",
    Icon: IconWaveSine,
    title: "Precisión",
    tagline: "Nos importa cada detalle",
    body: "Pequeños ajustes. Grandes diferencias. Mejor cada día.",
  },
  {
    id: "respeto",
    Icon: IconCircle,
    title: "Respeto",
    tagline: "Por la montaña. Por las personas. Por el momento",
    body: "Cuidamos lo que amamos para que las futuras generaciones también puedan disfrutarlo.",
  },
  {
    id: "estilo",
    Icon: IconPencil,
    title: "Estilo",
    tagline: "Menos ruido. Más intención",
    body: "Valoramos la simplicidad, la función y el buen gusto en todo lo que hacemos.",
  },
  {
    id: "comunidad",
    Icon: IconAsterisk,
    title: "Comunidad",
    tagline: "Subimos juntos",
    body: "No somos clientes. No somos profesores. Somos personas que comparten la misma pasión.",
  },
];

function Nosotros() {
  const root = useRef<HTMLDivElement>(null);
  useNosotrosMotion(root);

  return (
    <div className="nos" data-ds="" ref={root}>
      <section className="nos__wrap nos__open">
        <div className="nos__open-text">
          <p className="k-eyebrow" data-nos-fade="">
            Nuestra historia
          </p>
          <h1 className="nos__display">
            <span className="nos__line">
              <span data-nos-line="">El origen</span>
            </span>
            <span className="nos__line">
              <span data-nos-line="">de Kaiten</span>
            </span>
          </h1>
          <span className="k-rule" data-nos-rule="" />
          <p className="nos__subtitle" data-nos-fade="">
            No nacimos para crear otra escuela de esquí
          </p>
          <p className="nos__lead" data-nos-fade="">
            Nacimos porque creíamos que existía una forma mejor de enseñar.
          </p>
        </div>
        <div
          className="nos__media nos__media--tall nos__media--hero"
          data-nos-fade=""
        >
          <img
            data-nos-parallax=""
            src={historiaImage}
            alt="Montañas nevadas del Valle de Arán"
          />
          <div className="nos__media-caption">
            <span className="k-rule" />
            <h2>Todo comenzó en el Valle de Arán</h2>
          </div>
        </div>
      </section>

      <section className="nos__statement">
        <div className="nos__statement-inner" data-nos-words="">
          <p className="nos__statement-text">
            {INTRO.split(" ").map((w, i) => (
              <span key={i} data-nos-word="">
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="nos__slogan">We call it The KAITEN Line</p>
        </div>
      </section>

      <section className="nos__wrap nos__founder">
        <div className="nos__media nos__media--tall" data-nos-reveal="">
          <img
            data-nos-parallax=""
            src={aitorImage}
            alt="Aitor Bellver, fundador de Kaiten"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="nos__founder-text" data-nos-reveal="">
          <p className="k-eyebrow">Fundador</p>
          <blockquote className="nos__quote">
            Aitor Bellver quería una escuela de esquí que brindara una
            experiencia totalmente nueva.
          </blockquote>
          <div className="nos__credential">
            <span className="k-rule" />
            <p>
              Técnico Deportivo Superior en Esquí Alpino (TD3) · ROPEC 052315
            </p>
          </div>
        </div>
      </section>

      <section className="nos__wrap nos__story">
        {STORY.map((c) => (
          <div key={c.id}>
            <article
              className={`nos__chapter${
                c.image ? " nos__chapter--portrait" : ""
              }`}
            >
              <div>
                <div className="nos__chapter-head" data-nos-reveal="">
                  <span className="nos__chapter-meta">
                    <span className="nos__num" aria-hidden="true">
                      {c.num}
                    </span>
                    <span className="k-eyebrow">{c.meta}</span>
                  </span>
                  <h2>{c.heading}</h2>
                  {c.image && (
                    <div className="nos__media nos__media--chapter">
                      <img
                        src={c.image.src}
                        alt={c.image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="nos__chapter-body">
                {c.display && (
                  <p className="nos__chapter-display" data-nos-reveal="">
                    {c.display.map((l) => (
                      <span key={l}>{l}</span>
                    ))}
                  </p>
                )}
                {c.paragraphs.map((p, i) => (
                  <p key={i} data-nos-reveal="">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          </div>
        ))}
      </section>

      <section className="nos__values">
        <div className="nos__values-inner">
          <div>
            <div className="nos__values-head" data-nos-reveal="">
              <header className="k-section-header">
                <p className="k-eyebrow">Nuestros valores</p>
                <h2 className="k-section-header__title">Lo que nos guía</h2>
              </header>
              <div className="nos__values-photo">
                <img
                  src={valoresImage}
                  alt="Instructores de Kaiten chocando los puños sobre la nieve"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div>
            {VALUES.map(({ id, Icon, title, tagline, body }) => (
              <div key={id} className="nos__value" data-nos-reveal="">
                <span className="nos__value-icon">
                  <Icon size={22} stroke={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="k-eyebrow">{title}</p>
                  <h3>{tagline}</h3>
                  <p className="nos__value-body">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nos__manifesto" data-nos-reveal="">
        <img src={logoSquared} alt="" aria-hidden="true" loading="lazy" />
        <blockquote>
          No creemos en vender clases. Creemos en cambiar la manera de vivir la
          montaña.
        </blockquote>
        <Link to="/reservas" className="k-btn k-btn--secondary">
          <span>Ver experiencias</span>
          <IconArrowRight size={18} stroke={2} aria-hidden="true" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Nosotros;
