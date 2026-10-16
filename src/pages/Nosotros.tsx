import { useRef } from "react";
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
import historiaImage from "../assets/images/historia.webp";
import aitorImage from "../assets/images/aitor.webp";
import naiaraImage from "../assets/images/naiara.webp";
import valoresImage from "../assets/images/valores.webp";
import logoSquared from "../assets/logos/logo_squared.png";
import { useUi } from "../i18n";
import { RichText } from "../i18n/RichText";
import "./Nosotros.css";

/* La Navbar la monta el Shell de App.tsx, no la página.
 *
 * Los `data-nos-*` son propios de esta página: el hook global
 * useScrollAnimations ya se engancha a [data-line], [data-reveal] y
 * [data-parallax] en todo el árbol, y compartir nombres haría que cada
 * elemento se animara dos veces. */

/* Solo la estructura: numeración, retrato e iconos. El texto de cada capítulo
   y de cada valor vive en el diccionario (ui.nosotros.story / .values). */
const STORY = [
  { id: "eleccion", num: "01" },
  { id: "evolucion", num: "02" },
  { id: "kaiten", num: "03" },
  { id: "naiara", num: "04", image: naiaraImage },
] as const;

const VALUES = [
  { id: "curiosidad", Icon: IconMountain },
  { id: "precision", Icon: IconWaveSine },
  { id: "respeto", Icon: IconCircle },
  { id: "estilo", Icon: IconPencil },
  { id: "comunidad", Icon: IconAsterisk },
] as const;

function Nosotros() {
  const ui = useUi();
  const root = useRef<HTMLDivElement>(null);
  useNosotrosMotion(root);

  return (
    <div className="nos" data-ds="" ref={root}>
      <section className="nos__wrap nos__open">
        <div className="nos__open-text">
          <p className="k-eyebrow" data-nos-fade="">
            {ui.nosotros.eyebrow}
          </p>
          <h1 className="nos__display">
            {ui.nosotros.titleLines.map((line) => (
              <span className="nos__line" key={line}>
                <span data-nos-line="">{line}</span>
              </span>
            ))}
          </h1>
          <span className="k-rule" data-nos-rule="" />
          <p className="nos__subtitle" data-nos-fade="">
            {ui.nosotros.subtitle}
          </p>
          <p className="nos__lead" data-nos-fade="">
            {ui.nosotros.lead}
          </p>
        </div>
        <div
          className="nos__media nos__media--tall nos__media--hero"
          data-nos-fade=""
        >
          <img
            data-nos-parallax=""
            src={historiaImage}
            alt={ui.nosotros.heroAlt}
          />
          <div className="nos__media-caption">
            <span className="k-rule" />
            <h2>{ui.nosotros.heroCaption}</h2>
          </div>
        </div>
      </section>

      <section className="nos__statement">
        <div className="nos__statement-inner" data-nos-words="">
          <p className="nos__statement-text">
            {ui.nosotros.statement.split(" ").map((w, i) => (
              <span key={i} data-nos-word="">
                {w}{" "}
              </span>
            ))}
          </p>
          <p className="nos__slogan">{ui.nosotros.slogan}</p>
        </div>
      </section>

      <section className="nos__wrap nos__founder">
        <div className="nos__media nos__media--tall" data-nos-reveal="">
          <img
            data-nos-parallax=""
            src={aitorImage}
            alt={ui.nosotros.founderAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="nos__founder-text" data-nos-reveal="">
          <p className="k-eyebrow">{ui.nosotros.founderEyebrow}</p>
          <blockquote className="nos__quote">
            {ui.nosotros.founderQuote}
          </blockquote>
          <div className="nos__credential">
            <span className="k-rule" />
            <p>{ui.nosotros.founderCredential}</p>
          </div>
        </div>
      </section>

      <section className="nos__wrap nos__story">
        {STORY.map((c) => {
          const text = ui.nosotros.story[c.id];
          return (
            <div key={c.id}>
              <article
                className={`nos__chapter${
                  "image" in c ? " nos__chapter--portrait" : ""
                }`}
              >
                <div>
                  <div className="nos__chapter-head" data-nos-reveal="">
                    <span className="nos__chapter-meta">
                      <span className="nos__num" aria-hidden="true">
                        {c.num}
                      </span>
                      <span className="k-eyebrow">{text.meta}</span>
                    </span>
                    <h2>
                      {/* Los saltos del diccionario mandan: el titular de
                          Naiara se parte a propósito en tres filas. */}
                      <RichText text={text.heading} />
                    </h2>
                  </div>
                </div>
                {/* El retrato es un ítem más de la rejilla, no un hijo de la
                    cabecera: solo así puede estirarse de la línea superior a la
                    inferior del capítulo (arriba con el titular, abajo con el
                    final del texto). */}
                {"image" in c && (
                  <div
                    className="nos__media nos__media--chapter"
                    data-nos-reveal=""
                  >
                    <img
                      src={c.image}
                      alt={ui.nosotros.naiaraAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
                <div className="nos__chapter-body">
                  {text.display.length > 0 && (
                    <p className="nos__chapter-display" data-nos-reveal="">
                      {text.display.map((l) => (
                        <span key={l}>{l}</span>
                      ))}
                    </p>
                  )}
                  {text.paragraphs.map((paragraph, i) => (
                    <p key={i} data-nos-reveal="">
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
              </article>
            </div>
          );
        })}
      </section>

      <section className="nos__values">
        <div className="nos__values-inner">
          <div>
            <div className="nos__values-head" data-nos-reveal="">
              <header className="k-section-header">
                <p className="k-eyebrow">{ui.nosotros.valuesEyebrow}</p>
                <h2 className="k-section-header__title">
                  {ui.nosotros.valuesTitle}
                </h2>
              </header>
              <div className="nos__values-photo">
                <img
                  src={valoresImage}
                  alt={ui.nosotros.valuesAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
          <div>
            {VALUES.map(({ id, Icon }) => {
              const value = ui.nosotros.values[id];
              return (
                <div key={id} className="nos__value" data-nos-reveal="">
                  <span className="nos__value-icon">
                    <Icon size={22} stroke={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="k-eyebrow">{value.title}</p>
                    <h3>{value.tagline}</h3>
                    <p className="nos__value-body">{value.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="nos__manifesto" data-nos-reveal="">
        <img src={logoSquared} alt="" aria-hidden="true" loading="lazy" />
        <blockquote>{ui.nosotros.manifesto}</blockquote>
        <Link to="/reservas" className="k-btn k-btn--secondary">
          <span>{ui.nosotros.manifestoCta}</span>
          <IconArrowRight size={18} stroke={2} aria-hidden="true" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Nosotros;
