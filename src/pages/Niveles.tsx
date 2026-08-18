import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import { LEVEL_LABELS } from "../data/activities";
import { LEVELS } from "../data/levels";
import "./Tarifas.css";

function Niveles() {
  return (
    <div className="tarifas">
      <Navbar />

      <main className="tarifas__sheet">
        <section className="tarifas__niveles tarifas__niveles--page">
          <header className="tarifas__niveles-head">
            <h1 className="tarifas__niveles-title">Niveles</h1>
            <p className="tarifas__niveles-sub">Referencia en Baqueira Beret</p>
          </header>
          <div className="niveles-table">
            <div className="niveles-table__row niveles-table__row--head niveles-table__row--4col">
              <span />
              <span className="niveles-table__col-label">Descripción</span>
              <span className="niveles-table__col-label">
                Referencia en Baqueira
              </span>
              <span className="niveles-table__col-label">Nivel</span>
            </div>
            {LEVELS.map((l) => (
              <div key={l.code} className="niveles-table__row niveles-table__row--4col">
                <div className={`niveles-table__level niveles-table__level--${l.tier}`}>
                  <span className="niveles-table__level-label">Nivel</span>
                  <span className="niveles-table__level-code">{l.code}</span>
                </div>
                <div className="niveles-table__desc">{l.description}</div>
                <div className="niveles-table__ref">{l.reference}</div>
                <div className="niveles-table__tier">
                  <Tag variant={l.tier} label={LEVEL_LABELS[l.tier]} />
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
