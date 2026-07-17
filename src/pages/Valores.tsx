import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import {
  IconShield,
  IconHeart,
  IconCompass,
  IconMountain,
  IconStar,
  IconArrowRight,
} from '@tabler/icons-react'
import valuesImage from '../assets/images/kaiten_bg.png'
import './Valores.css'

const VALUES = [
  {
    id: 'seguridad',
    Icon: IconShield,
    title: 'Seguridad',
    desc: 'Sabemos cuándo frenar y cuándo virar.',
    tint: 'a',
  },
  {
    id: 'pasion',
    Icon: IconHeart,
    title: 'Pasión',
    desc: 'Conexión total con el terreno.',
    tint: 'b',
  },
  {
    id: 'honestidad',
    Icon: IconCompass,
    title: 'Honestidad',
    desc: 'Decimos lo que necesitas, no lo que esperas.',
    tint: 'c',
  },
  {
    id: 'profesionalidad',
    Icon: IconMountain,
    title: 'Profesionalidad',
    desc: 'Enseñanza de alto nivel, con estilo y precisión en montaña.',
    tint: 'a',
  },
  {
    id: 'excelencia',
    Icon: IconStar,
    title: 'Excelencia',
    desc: 'Menos es más. Deja huella.',
    tint: 'c',
  },
]

const DIFFERENCE = [
  {
    title: 'Elige tu profesor',
    desc: 'Conoce quién te enseñará antes de reservar.',
  },
  {
    title: 'Transparencia',
    desc: 'Sin intermediarios. Sin sorpresas.',
  },
  {
    title: 'Personalización',
    desc: 'Cada persona a su propio ritmo de aprendizaje.',
  },
  {
    title: 'Experiencia',
    desc: 'La mejor estación de España. La mejor forma de descubrirla.',
  },
]

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
            Conocer más
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
        <div className="valores__cards">
          {VALUES.map(({ id, Icon, title, desc, tint }) => (
            <article
              key={id}
              className={`value-card value-card--${tint}`}
            >
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
          <p className="valores__eyebrow">Más que aprender a esquiar</p>
          <h2 className="valores__section-title">Más que aprender a esquiar.</h2>
          <span className="valores__rule" />
          <p className="valores__paragraph">
            En Kaiten enseñamos técnica. Pero también buscamos transmitir
            confianza, seguridad y pasión por la montaña.
          </p>
          <p className="valores__paragraph">
            Creemos que cada descenso es una oportunidad para mejorar, disfrutar
            y descubrir de lo que uno es capaz.
          </p>
          <p className="valores__paragraph">
            Porque al final, la mejor clase no es la de la técnica con una
            fotografía perfecta. Es la que hace que quieras volver a esquiar al
            día siguiente.
          </p>
        </div>
        <div className="valores__media">
          <img
            className="valores__media-img"
            src={valuesImage}
            alt="Profesor de Kaiten acompañando a una esquiadora en Baqueira"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* A different school */}
      <section className="valores__section valores__different">
        <div className="valores__different-heading">
          <p className="valores__eyebrow">Una escuela diferente</p>
          <h2 className="valores__section-title">
            Una nueva forma de entender una escuela de esquí.
          </h2>
        </div>
        <div className="valores__different-grid">
          {DIFFERENCE.map((item) => (
            <div key={item.title} className="valores__feature">
              <span className="valores__rule" />
              <h3 className="valores__feature-title">{item.title}</h3>
              <p className="valores__feature-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="valores__section valores__philosophy">
        <p className="valores__eyebrow">Nuestra filosofía</p>
        <div className="valores__philosophy-grid">
          <p className="valores__statement">
            No creemos en vender clases. Creemos en cambiar la manera de vivir la
            montaña.
          </p>
          <p className="valores__statement-sub">
            Porque una buena clase no termina cuando tú quitas los esquís.
            Empieza cuando quieres volver mañana.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Valores
