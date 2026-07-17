import Navbar from '../components/Navbar'
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMail,
  IconMountain,
} from '@tabler/icons-react'
import { TARIFFS } from '../data/tariffs'
import { LEVELS } from '../data/levels'
import tariffImage from '../assets/images/kaiten_bg.png'
import './Tarifas.css'

const privadas = TARIFFS.filter((t) => t.category === 'privada')
const especiales = TARIFFS.filter((t) => t.category === 'especial')

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
              <img src={tariffImage} alt="" loading="lazy" decoding="async" />
            </div>
            <div className="tariff-card__body">
              <span className="tariff-card__number">{t.number}</span>
              <h3 className="tariff-card__title">
                {t.title}
                {t.subtitle && (
                  <span className="tariff-card__subtitle">
                    ({t.subtitle})
                  </span>
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
                  <span className="tariff-card__price-note">
                    {' '}
                    {t.priceNote}
                  </span>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function ContactBar() {
  return (
    <div className="tarifas__contact">
      <div className="tarifas__contact-group">
        <span className="tarifas__contact-title">Contacto</span>
        <a href="mailto:hola@kaitenski.com" className="tarifas__contact-email">
          hola@kaitenski.com
        </a>
      </div>
      <div className="tarifas__contact-social">
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={20} stroke={1.5} />
        </a>
        <a
          href="https://wa.me/34600000000"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandWhatsapp size={20} stroke={1.5} />
        </a>
        <a href="mailto:hola@kaitenski.com" aria-label="Email">
          <IconMail size={20} stroke={1.5} />
        </a>
        <span className="tarifas__contact-handle">@kaitenski</span>
      </div>
      <div className="tarifas__contact-right">
        <a href="tel:+34600000000" className="tarifas__contact-phone">
          +34 600 000 000
        </a>
        <span className="tarifas__contact-mark">
          <IconMountain size={20} stroke={1.5} />
        </span>
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

        {/* Tarifas */}
        <section className="tarifas__grid">
          <TariffColumn heading="Experiencias privadas" items={privadas} />
          <TariffColumn heading="Experiencias especiales" items={especiales} />
        </section>

        {/* Niveles */}
        <section className="tarifas__niveles">
          <header className="tarifas__niveles-head">
            <h2 className="tarifas__niveles-title">Niveles</h2>
            <p className="tarifas__niveles-sub">Referencia en Baqueira</p>
          </header>
          <div className="niveles-table">
            <div className="niveles-table__row niveles-table__row--head">
              <span />
              <span className="niveles-table__col-label">Descripción</span>
              <span className="niveles-table__col-label">
                Referencia en Baqueira
              </span>
            </div>
            {LEVELS.map((l) => (
              <div key={l.code} className="niveles-table__row">
                <div className="niveles-table__level">
                  <span className="niveles-table__level-label">Nivel</span>
                  <span className="niveles-table__level-code">{l.code}</span>
                </div>
                <div className="niveles-table__desc">{l.description}</div>
                <div className="niveles-table__ref">{l.reference}</div>
              </div>
            ))}
          </div>
        </section>

        <ContactBar />
      </main>
    </div>
  )
}

export default Tarifas
