import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TARIFFS } from "../data/tariffs";
import { SERVICES } from "../data/services";
import fallbackImage from "../assets/images/kaiten_bg.png";
import halfDayImage from "../assets/images/historia_full.png";
import "./Tarifas.css";

const CAL_USERNAME = "aitor-bellver-abenoza-ofg9rm";

function tariffImage(id: string, slug: string): string {
  if (id === "full-day") return halfDayImage;
  const service = SERVICES.find(
    (s) => s.reservasPath.replace("/reservas/", "") === slug,
  );
  return service?.image ?? fallbackImage;
}

function Tarifas() {
  return (
    <div className="tarifas">
      <Navbar />

      <main className="tarifas__sheet">
        <p className="tarifas__eyebrow">Baqueira Beret</p>
        <h1 className="tarifas__page-title">Tarifas</h1>
        <p className="tarifas__includes">
          Todas las experiencias incluyen: Instructor titulado · Seguro de RC ·
          Atención personalizada
        </p>
        <section className="tarifas__grid">
          {TARIFFS.map((t) => (
            <article key={t.id} className="tariff-card">
              <div className="tariff-card__media">
                <img
                  src={tariffImage(t.id, t.slug)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="tariff-card__body">
                <span className="tariff-card__number" aria-hidden="true">{t.number}</span>
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
                <div className="tariff-card__footer">
                  <p className="tariff-card__price">
                    {t.price}
                    {t.priceNote && (
                      <span className="tariff-card__price-note">
                        {t.priceNote}
                      </span>
                    )}
                  </p>
                  <button
                    type="button"
                    className="tariff-card__reserve"
                    data-cal-namespace={t.slug}
                    data-cal-link={`${CAL_USERNAME}/${t.slug}`}
                    data-cal-config='{"theme":"light"}'
                  >
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Tarifas;
