import Footer from "../components/Footer";
import Tag from "../components/Tag";
import PageTitle from "../components/PageTitle";
import { useLevels } from "../i18n/content";
import { useUi } from "../i18n";
import "./Tarifas.css";

function Niveles() {
  const ui = useUi();
  const levels = useLevels();

  return (
    <div className="tarifas">
      <main className="tarifas__sheet">
        <PageTitle eyebrow={ui.niveles.eyebrow}>{ui.niveles.title}</PageTitle>
        <section className="tarifas__niveles tarifas__niveles--page">
          <div className="niveles-table">
            <div className="niveles-table__row niveles-table__row--head niveles-table__row--4col">
              <span />
              <span className="niveles-table__col-label">
                {ui.niveles.colDescription}
              </span>
              <span className="niveles-table__col-label">
                {ui.niveles.colReference}
              </span>
              <span className="niveles-table__col-label">
                {ui.niveles.colLevel}
              </span>
            </div>
            {levels.map((l) => (
              <div
                key={l.code}
                className="niveles-table__row niveles-table__row--4col"
                data-reveal=""
              >
                <div className={`niveles-table__level niveles-table__level--${l.tier}`}>
                  <span className="niveles-table__level-label">
                    {ui.common.level}
                  </span>
                  <span className="niveles-table__level-code">{l.code}</span>
                </div>
                <div className="niveles-table__desc">{l.description}</div>
                <div className="niveles-table__ref">{l.reference}</div>
                <div className="niveles-table__tier">
                  <Tag variant={l.tier} label={ui.common.levels[l.tier]} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Niveles;
