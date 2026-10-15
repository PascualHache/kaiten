import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { useTariffs } from "../i18n/content";
import { useUi } from "../i18n";
import "./Tarifas.css";

function Tarifas() {
  const ui = useUi();
  const tariffs = useTariffs();

  return (
    <div className="tarifas">
      <main className="tarifas__sheet">
        <PageTitle eyebrow={ui.tarifas.eyebrow}>{ui.tarifas.title}</PageTitle>
        <p className="tarifas__includes">{ui.tarifas.includes}</p>

        <section className="tarifas__table-section">
          <div className="tarifas-table">
            <div className="tarifas-table__row tarifas-table__row--head">
              <span />
              <span className="tarifas-table__col-label">
                {ui.tarifas.colExperience}
              </span>
              <span className="tarifas-table__col-label">
                {ui.tarifas.colPrice}
              </span>
              <span className="tarifas-table__col-label tarifas-table__col-label--extra">
                {ui.tarifas.colExtra}
              </span>
            </div>
            {tariffs.map((t) => (
              <div key={t.id} className="tarifas-table__row" data-reveal="">
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
          <p className="tarifas__note">{ui.tarifas.note}</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Tarifas;
