import { IconArrowRight } from "@tabler/icons-react";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import PageTitle from "../components/PageTitle";
import { useActivities, useLevels, useTariffs } from "../i18n/content";
import { bookingHref } from "../data/booking";
import { findTariff } from "../data/tariffs";
import type { Level } from "../data/activities";
import { useUi } from "../i18n";
import "./Tarifas.css";
import "./Niveles.css";

/* De menos a más, para que las etiquetas de cada experiencia se lean igual
   que la tabla de arriba. */
const LEVEL_ORDER: Level[] = ["principiante", "intermedio", "avanzado"];

function Niveles() {
  const ui = useUi();
  const levels = useLevels();
  const activities = useActivities();
  const tariffs = useTariffs();

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

        {/* Salida de la página. Antes la tabla terminaba aquí y no había ni un
            enlace: quien acababa de identificar su nivel no tenía a dónde ir, y
            /niveles no apuntaba a ninguna ficha. */}
        <section className="niveles-match" aria-labelledby="niveles-match-title">
          <h2 className="niveles-match__title" id="niveles-match-title">
            {ui.niveles.matchTitle}
          </h2>
          <p className="niveles-match__lead">{ui.niveles.matchLead}</p>

          <ul className="niveles-match__list">
            {activities.map((a) => {
              const price = findTariff(tariffs, a.slug)?.price;
              return (
                <li key={a.slug} data-reveal="">
                  {/* <a href>, no <Link>: la ficha monta el widget de Bookeo,
                      que hornea el producto al cargar su script. */}
                  <a className="niveles-match__item" href={bookingHref(a)}>
                    <span className="niveles-match__name">{a.title}</span>
                    <span
                      className="niveles-match__levels"
                      aria-label={ui.niveles.matchLevelsAria}
                    >
                      {[...a.levels]
                        .sort(
                          (x, y) =>
                            LEVEL_ORDER.indexOf(x) - LEVEL_ORDER.indexOf(y),
                        )
                        .map((level) => (
                          <Tag
                            key={level}
                            variant={level}
                            label={ui.common.levels[level]}
                          />
                        ))}
                    </span>
                    <span className="niveles-match__price">
                      {price ? `${ui.common.from} ${price}` : ""}
                    </span>
                    <IconArrowRight
                      className="niveles-match__arrow"
                      size={18}
                      stroke={1.8}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Niveles;
