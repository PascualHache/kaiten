import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { TARIFFS } from "../data/tariffs";
import "./Tarifas.css";

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

        <section className="tarifas__table-section">
          <div className="tarifas-table">
            <div className="tarifas-table__row tarifas-table__row--head">
              <span />
              <span className="tarifas-table__col-label">Experiencia</span>
              <span className="tarifas-table__col-label">Tarifa por persona</span>
              <span className="tarifas-table__col-label">Extra / persona</span>
            </div>
            {TARIFFS.map((t) => (
              <div key={t.id} className="tarifas-table__row">
                <span className="tarifas-table__number" aria-hidden="true">
                  {t.number}
                </span>
                <div className="tarifas-table__name">
                  <Link
                    className="tarifas-table__link"
                    to={`/reservas#${t.slug}`}
                  >
                    {t.title}
                  </Link>
                </div>
                <div className="tarifas-table__price">
                  {t.price}
                  {t.priceNote && (
                    <span className="tarifas-table__price-note">
                      {" "}
                      {t.priceNote}
                    </span>
                  )}
                </div>
                <div className="tarifas-table__extra">
                  {t.extra && <span>{t.extra}</span>}
                  <span className="tarifas-table__max">{t.maxPeople}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="tarifas__note">
            *Consultar para grupos de más personas
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Tarifas;
