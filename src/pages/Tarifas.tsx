import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TARIFFS } from '../data/tariffs'
import { SERVICES } from '../data/services'
import fallbackImage from '../assets/images/kaiten_bg.png'
import './Tarifas.css'

const privadas = TARIFFS.filter((t) => t.category === 'privada')
const especiales = TARIFFS.filter((t) => t.category === 'especial')

/** Image of the activity/service a tariff belongs to (falls back to a placeholder). */
function tariffImage(slug: string): string {
  const service = SERVICES.find(
    (s) => s.reservasPath.replace('/reservas/', '') === slug,
  )
  return service?.image ?? fallbackImage
}

function TariffColumn({
  heading,
  items,
}: {
  heading: string
  items: typeof TARIFFS
}) {
  return (
    <div className="tarifas__column">
      <h2 className="tarifas__column-title">{heading}</h2>
      <div className="tarifas__cards">
        {items.map((t) => (
          <article key={t.id} className="tariff-card">
            <div className="tariff-card__media">
              <img
                src={tariffImage(t.slug)}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="tariff-card__body">
              <span className="tariff-card__number">{t.number}</span>
              <h3 className="tariff-card__title">
                {t.title}
                {t.subtitle && (
                  <span className="tariff-card__subtitle">({t.subtitle})</span>
                )}
              </h3>
              <ul className="tariff-card__features">
                {t.features.map((f) => (
                  <li key={f} className="tariff-card__feature">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="tariff-card__price">
                {t.price}
                {t.priceNote && (
                  <span className="tariff-card__price-note"> {t.priceNote}</span>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Tarifas() {
  return (
    <div className="tarifas">
      <Navbar />

      <main className="tarifas__sheet">
        <header className="tarifas__masthead">
          <span className="tarifas__logo">KAITEN</span>
          <span className="tarifas__logo-sub">Escuela de esquí</span>
        </header>

        <section className="tarifas__grid">
          <TariffColumn heading="Experiencias privadas" items={privadas} />
          <TariffColumn heading="Experiencias especiales" items={especiales} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Tarifas
