import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  IconShield,
  IconHeart,
  IconCompass,
  IconMountain,
  IconStar,
  IconArrowRight,
} from "@tabler/icons-react";
import valuesImage from "../assets/images/valores.png";
import "./Valores.css";

const VALUES = [
  {
    id: "seguridad",
    Icon: IconShield,
    title: "Seguridad",
    desc: "Sabemos cuándo frenar y cuándo virar.",
    tint: "a",
  },
  {
    id: "pasion",
    Icon: IconHeart,
    title: "Pasión",
    desc: "Conexión total con el terreno.",
    tint: "b",
  },
  {
    id: "honestidad",
    Icon: IconCompass,
    title: "Honestidad",
    desc: "Decimos lo que necesitas, no lo que esperas.",
    tint: "c",
  },
  {
    id: "profesionalidad",
    Icon: IconMountain,
    title: "Profesionalidad",
    desc: "Enseñanza de alto nivel, con estilo y precisión en montaña.",
    tint: "d",
  },
  {
    id: "excelencia",
    Icon: IconStar,
    title: "Excelencia",
    desc: "Menos es más. Deja huella.",
    tint: "c",
  },
];

const DIFFERENCE = [
  {
    title: "Educación / Profesión",
    desc: "Conoces a fondo el esquí y la montaña.",
  },
  {
    title: "Transparencia",
    desc: "Sin intermediarios. Sin sorpresas.",
  },
  {
    title: "Personalización",
    desc: "Cada persona aprende a su ritmo y a su forma.",
  },
  {
    title: "Diferencia",
    desc: "La mejor enseñanza de España. La mejor forma de descubrirlo.",
  },
];

function Valores() {
  return (
    <div className="valores">
      <Navbar />

      {/* Values cards */}
      <section className="valores__section valores__intro">
        <div className="valores__intro-heading">
          <p className="valores__eyebrow">Valores</p>
          <h1 className="valores__title">
            Los valores
            <br />
            que nos definen
          </h1>
          <Link to="/historia" className="valores__more">
            Conocer nuestra historia
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
        <div className="valores__cards">
          {VALUES.map(({ id, Icon, title, desc, tint }) => (
            <article key={id} className={`value-card value-card--${tint}`}>
              <span className="value-card__icon">
                <Icon size={34} stroke={1.4} />
              </span>
              <div className="value-card__body">
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__desc">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* More than skiing */}
      <section className="valores__section valores__more-section">
        <div className="valores__more-text">
          <h2 className="valores__big-title">Más que aprender a esquiar.</h2>
          <div className="valores__more-body">
            <p className="valores__paragraph">
              En KAITEN enseñamos técnica. Pero también te ayudamos a superar
              tus límites, a ganar seguridad y pasión por la montaña.
            </p>
            <p className="valores__paragraph">
              Creemos que cada descenso es una oportunidad para mejorar,
              disfrutar y conectar con el esquí.
            </p>
            <p className="valores__paragraph">
              Porque al final, la mejor clase no es la que termina con las
              piernas perfectas. Es la que hace que quieras volver a esquiar al
              día siguiente.
            </p>
          </div>
        </div>
        <div className="valores__more-media">
          <img
            className="valores__media-img"
            src={valuesImage}
            alt="Profesor de Kaiten acompañando a una esquiadora en Baqueira"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Differentiators */}
      <section className="valores__section valores__different-section">
        <div className="valores__different">
          {DIFFERENCE.map((item) => (
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
          No creemos en vender clases. Creemos en cambiar la manera de vivir la
          montaña.
        </p>
      </section>

      <Footer />
    </div>
  );
}

export default Valores;
