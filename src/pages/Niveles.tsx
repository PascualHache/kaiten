import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { LEVELS } from '../data/levels'
import './Tarifas.css'

function Niveles() {
  return (
    <div className="tarifas">
      <Navbar />

      <main className="tarifas__sheet">
        <header className="tarifas__masthead">
          <span className="tarifas__logo">KAITEN</span>
          <span className="tarifas__logo-sub">Escuela de esquí</span>
        </header>

        <section className="tarifas__niveles tarifas__niveles--page">
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
      </main>
      <Footer />
    </div>
  )
}

export default Niveles
