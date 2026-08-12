import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import { ACTIVITIES, LEVEL_LABELS } from "../data/activities";
import { LEVELS } from "../data/levels";
import "./Tarifas.css";

const TYPE_BY_SLUG = new Map(
  ACTIVITIES.map((a) => [a.calSlug, a.experienceType]),
);

const LEVEL_LINKS: Record<string, { label: string; hash: string }[]> = {
  A: [{ label: "Clases Privadas", hash: "clases-particulares-en-baqueira" }],
  A1: [{ label: "Clases Privadas", hash: "clases-particulares-en-baqueira" }],
  A2: [
    { label: "Clases Privadas", hash: "clases-particulares-en-baqueira" },
    { label: "Kids & Friends & Family", hash: "friends-family" },
  ],
  B: [
    { label: "Clases Privadas", hash: "clases-particulares-en-baqueira" },
    { label: "Kids & Friends & Family", hash: "friends-family" },
    { label: "Tardeo (-15%)", hash: "experiencia-de-tardeo-20" },
  ],
  B1: [
    { label: "Clases Privadas", hash: "clases-particulares-en-baqueira" },
    { label: "Kaiten Programs", hash: "experiencia-kaiten-2.5" },
    { label: "Tardeo (-15%)", hash: "experiencia-de-tardeo-20" },
  ],
  C: [
    { label: "Clases Privadas", hash: "clases-particulares-en-baqueira" },
    { label: "Kaiten Programs", hash: "experiencia-kaiten-2.5" },
    { label: "Half Day", hash: "full-day-half-day-en-baqueira" },
  ],
  D: [
    { label: "Full Day", hash: "full-day-half-day-en-baqueira" },
    { label: "Safari", hash: "safari-en-baqueira" },
    { label: "Kaiten Programs", hash: "experiencia-kaiten-2.5" },
  ],
  E: [
    { label: "Full Day", hash: "full-day-half-day-en-baqueira" },
    { label: "Freeride", hash: "freeride-en-baqueira" },
    { label: "Safari", hash: "safari-en-baqueira" },
  ],
  F: [
    { label: "Freeride", hash: "freeride-en-baqueira" },
    { label: "Full Day", hash: "full-day-half-day-en-baqueira" },
  ],
};

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
              <span className="niveles-table__col-label">Experiencias</span>
            </div>
            {LEVELS.map((l) => (
              <div key={l.code} className="niveles-table__row niveles-table__row--4col">
                <div className={`niveles-table__level niveles-table__level--${l.tier}`}>
                  <span className="niveles-table__level-label">Nivel</span>
                  <span className="niveles-table__level-code">{l.code}</span>
                </div>
                <div className="niveles-table__desc">
                  {l.description}
                  <Tag variant={l.tier} label={LEVEL_LABELS[l.tier]} />
                </div>
                <div className="niveles-table__ref">{l.reference}</div>
                <div className="niveles-table__actions">
                  {(LEVEL_LINKS[l.code] ?? []).map((link) => (
                    <Link
                      key={link.hash}
                      to={`/reservas#${link.hash}`}
                      className={`tag tag--${TYPE_BY_SLUG.get(link.hash) ?? "clase"} niveles-table__link`}
                    >
                      {link.label}
                    </Link>
                  ))}
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
