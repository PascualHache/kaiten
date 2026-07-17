import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IconArrowRight } from '@tabler/icons-react'
import landscapeImage from '../assets/images/kaiten_bg.png'
import portraitImage from '../assets/images/kaiten_bg.png'
import './Historia.css'

function Historia() {
  return (
    <div className="historia">
      <Navbar />

      {/* Intro statement */}
      <section className="historia__intro">
        <p className="historia__lead">
          <em>The Kaiten Line</em> es el estado mental en el que la técnica deja
          de ser un pensamiento para convertirse en intuición. Es el momento en
          el que desaparece el ruido, el cuerpo responde antes que la mente y la
          montaña deja de ser un lugar por el que desciendes{' '}
          <em>para convertirse en un lenguaje que entendemos.</em>
        </p>
        <p className="historia__lead historia__lead--tag">
          <em>We call it The Kaiten Line.</em>
        </p>
        <span className="historia__rule" />
      </section>

      {/* Origin composition */}
      <section className="historia__origin">
        <div className="historia__origin-main">
          <div className="historia__photo">
            <img
              src={landscapeImage}
              alt="Montañas de Baqueira Beret con dos montañeros"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="historia__origin-text">
            <h2 className="historia__origin-title">
              El origen
              <br />
              de KAITEN.
            </h2>
            <p className="historia__paragraph">
              No nacimos para crear otra escuela de esquí.
            </p>
            <p className="historia__paragraph">
              Nacimos porque creíamos que existía una forma mejor de enseñar.
            </p>
            <span className="historia__rule" />
          </div>
        </div>

        <div className="historia__card historia__card--dark">
          <h3 className="historia__card-title">
            Todo comenzó en el Valle de Arán.
          </h3>
          <a href="#" className="historia__link">
            Leer más
            <IconArrowRight size={16} stroke={2} />
          </a>
        </div>

        <div className="historia__card historia__card--photo">
          <img
            className="historia__card-img"
            src={portraitImage}
            alt="Aitor Bellver, fundador de Kaiten"
            loading="lazy"
            decoding="async"
          />
          <div className="historia__card-overlay">
            <p className="historia__card-quote">
              Aitor Bellver quería una escuela de esquí que brindara una
              experiencia totalmente nueva.
            </p>
            <a href="#" className="historia__link historia__link--light">
              Conoce su visión
              <IconArrowRight size={16} stroke={2} />
            </a>
          </div>
        </div>
      </section>

      {/* Brand meaning */}
      <section className="historia__brand">
        <span className="historia__brand-label">Kaiten</span>
        <div className="historia__brand-center">
          <span className="historia__brand-word">KAITEN</span>
          <span className="historia__brand-kanji">回転</span>
          <span className="historia__brand-tagline">
            Revolución. Cambio. Evolución.
          </span>
        </div>
        <div className="historia__brand-aside">
          <p className="historia__paragraph">Descubrí esa palabra en Japón.</p>
          <p className="historia__paragraph">
            En ese instante supe que algún día daría nombre a este proyecto.
          </p>
        </div>
      </section>

      {/* Founder story */}
      <section className="historia__story">
        <div className="historia__story-text">
          <div className="historia__story-block">
            <p className="historia__eyebrow">Todo comenzó</p>
            <h2 className="historia__story-title">Con una elección.</h2>
            <p className="historia__paragraph">
              Decidí dejar atrás la vida en la ciudad, la rutina, los horarios y
              la sensación de que el tiempo se escapa.
            </p>
            <p className="historia__paragraph historia__paragraph--strong">
              En 2020 tomé una decisión que cambió mi vida.
            </p>
            <p className="historia__paragraph">
              Me mudé al Valle de Arán para dedicarme a lo que siempre había
              estado dentro de mí: la montaña y el esquí.
            </p>
            <p className="historia__paragraph historia__paragraph--strong">
              Lo que empezó como un cambio de lugar, terminó siendo un cambio de
              mentalidad.
            </p>
          </div>

          <div className="historia__story-block">
            <p className="historia__eyebrow">Seis años de evolución</p>
            <h2 className="historia__story-title">
              Aprender. Crecer. Evolucionar.
            </h2>
            <p className="historia__paragraph">
              Durante estos años completé mi formación como TD3 de Esquí Alpino,
              seguí aprendiendo en cada temporada y descubrí una forma distinta
              de entender el trabajo y la vida.
            </p>
            <p className="historia__paragraph historia__paragraph--strong">
              Dejé atrás la rueda que nunca se detiene para empezar a construir
              un proyecto con propósito, disfrutando del camino y del tiempo.
            </p>
          </div>

          <div className="historia__story-block">
            <p className="historia__eyebrow">La palabra que lo cambió todo</p>
            <h2 className="historia__story-title">Kaiten (回転).</h2>
            <p className="historia__paragraph">
              En Japón encontré una palabra que resumía exactamente lo que
              estaba viviendo.
            </p>
            <p className="historia__paragraph historia__paragraph--strong">
              Kaiten no es solo una palabra. Es revolución, cambio constante y
              evolución. Es la idea de que siempre podemos reinventarnos.
            </p>
          </div>

          <div className="historia__story-block">
            <p className="historia__eyebrow">
              Nada de esto sería posible sin Naiara
            </p>
            <h2 className="historia__story-title">
              Ella está detrás de todo lo que no se ve.
            </h2>
            <p className="historia__paragraph">
              Naiara ha sido mi compañera en este viaje. La que sostiene lo
              esencial, la que impulsa cada detalle, cada decisión y cada paso.
            </p>
            <p className="historia__paragraph">
              Ella también eligió cambiar de vida, salir de la rutina y apostar
              por una forma diferente de vivir.
            </p>
            <p className="historia__paragraph">
              Mientras yo estaba en la montaña, ella hacía posible que este
              proyecto siguiera creciendo entre bastidores.
            </p>
            <p className="historia__paragraph historia__paragraph--strong">
              Kaiten también es suyo.
            </p>
          </div>
        </div>

        <div className="historia__story-media">
          <img
            src={portraitImage}
            alt="Esquiadora contemplando la montaña en Baqueira"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="historia__manifesto">
        <div className="historia__manifesto-heading">
          <p className="historia__eyebrow">Más que una escuela</p>
          <h2 className="historia__manifesto-title">
            Es una manera de entender la montaña.
          </h2>
          <span className="historia__manifesto-mark" aria-hidden="true" />
        </div>
        <div className="historia__manifesto-list">
          <p className="historia__paragraph">
            Es elegir el tiempo antes que la prisa.
          </p>
          <p className="historia__paragraph">Es seguir aprendiendo.</p>
          <p className="historia__paragraph">Es evolucionar.</p>
          <p className="historia__paragraph">
            Y es demostrar que, a veces, cambiar de dirección es la mejor
            decisión que podemos tomar.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Historia
