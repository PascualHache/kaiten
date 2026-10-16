import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import valuesImage from "../assets/images/valores.webp";
import { useUi } from "../i18n";
import "./Valores.css";

interface ValueItem {
  /** Clave de ui.nosotros.values — el texto sale de ahí. */
  id: "curiosidad" | "precision" | "respeto" | "estilo" | "comunidad";
  Icon: React.FC;
  tint: string;
}

const MountainIcon: React.FC = () => (
  <svg
    width="42"
    height="36"
    viewBox="0 0 42 36"
    fill="none"
    aria-hidden="true"
  >
    <polyline
      points="2,34 14,6 26,34"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <polyline
      points="18,34 30,12 42,34"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const WavesIcon: React.FC = () => (
  <svg
    width="42"
    height="22"
    viewBox="0 0 42 22"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1,4 C6,0 10,8 14,4 C18,0 22,8 26,4 C30,0 34,8 38,4"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M1,11 C6,7 10,15 14,11 C18,7 22,15 26,11 C30,7 34,15 38,11"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M1,18 C6,14 10,22 14,18 C18,14 22,22 26,18 C30,14 34,22 38,18"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const SpiralIcon: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="20" cy="20" r="3.5" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const StyleIcon: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="6"
      y1="34"
      x2="34"
      y2="10"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="6"
      y1="30"
      x2="34"
      y2="30"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="25" cy="16" r="2.5" fill="currentColor" />
  </svg>
);

const AsteriskIcon: React.FC = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    aria-hidden="true"
  >
    <line
      x1="20"
      y1="3"
      x2="20"
      y2="37"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="20"
      x2="37"
      y2="20"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="7.4"
      y1="7.4"
      x2="32.6"
      y2="32.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <line
      x1="32.6"
      y1="7.4"
      x2="7.4"
      y2="32.6"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const VALUES: ValueItem[] = [
  { id: "curiosidad", Icon: MountainIcon, tint: "a" },
  { id: "precision", Icon: WavesIcon, tint: "b" },
  { id: "respeto", Icon: SpiralIcon, tint: "c" },
  { id: "estilo", Icon: StyleIcon, tint: "d" },
  { id: "comunidad", Icon: AsteriskIcon, tint: "c" },
];

function Valores() {
  const ui = useUi();

  return (
    <div className="valores">
      {/* Values cards */}
      <section className="valores__section valores__intro">
        <div className="valores__intro-heading">
          <p className="valores__eyebrow">{ui.valores.eyebrow}</p>
          <h1 className="valores__title">
            {ui.valores.titleLines[0]}
            <br />
            {ui.valores.titleLines[1]}
          </h1>
          <Link to="/nosotros" className="valores__more">
            {ui.valores.more}
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
        <div className="valores__cards">
          {VALUES.map(({ id, Icon, tint }) => {
            const value = ui.nosotros.values[id];
            return (
              <article key={id} className={`value-card value-card--${tint}`}>
                <div className="value-card__top">
                  <span className="value-card__icon">
                    <Icon />
                  </span>
                  <h3 className="value-card__title">{value.title}</h3>
                  <p className="value-card__tagline">{value.tagline}</p>
                </div>
                <div className="value-card__bottom">
                  <span className="value-card__rule" aria-hidden="true" />
                  <p className="value-card__body">{value.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* More than skiing */}
      <section className="valores__section valores__more-section">
        <div className="valores__more-text">
          <h2 className="valores__big-title">{ui.valores.bigTitle}</h2>
          <div className="valores__more-body">
            {ui.valores.paragraphs.map((paragraph) => (
              <p className="valores__paragraph" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="valores__more-media">
          <img
            className="valores__media-img"
            src={valuesImage}
            alt={ui.valores.mediaAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="valores__section valores__different-section">
        <div className="valores__different">
          {ui.valores.difference.map((item) => (
            <div key={item.title} className="valores__feature">
              <h3 className="valores__feature-title">
                <span className="valores__marker" aria-hidden="true" />
                {item.title}
              </h3>
              <p className="valores__feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="valores__philosophy">
        <p className="valores__philosophy-line">
          <span className="valores__philosophy-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect
                x="1.5"
                y="1.5"
                width="17"
                height="17"
                rx="2.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <rect
                x="7"
                y="7"
                width="6"
                height="6"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
          {ui.valores.philosophy}
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Valores;
