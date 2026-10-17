import { Suspense, lazy, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { useUi } from "../i18n";
import "./NotFound.css";

const WHATSAPP_URL = "https://wa.me/34699820954";

/* El minijuego va en su propio trozo: es código que solo se ejecuta en una
   URL inventada, y no tiene por qué viajar en el paquete principal. Mientras
   llega, su hueco se reserva para que la página no dé un salto. */
const SkiGame = lazy(() => import("../components/SkiGame"));

/* Solo las rutas: la etiqueta la pone ui.nav.links, la etiqueta corta
   ui.notFound.shortLinks y la frase ui.notFound.suggestions. */
const SUGGESTIONS = [
  { key: "reservas", to: "/reservas" },
  { key: "tarifas", to: "/tarifas" },
  { key: "niveles", to: "/niveles" },
  { key: "faq", to: "/faq" },
] as const;

/**
 * Ruta comodín.
 *
 * El rewrite de `vercel.json` manda cualquier URL a `index.html`, así que el
 * servidor responde 200 incluso aquí: no hay forma de devolver un 404 real
 * desde una SPA estática. Para que Google no indexe estas URLs como páginas
 * buenas (soft 404), se inyecta `robots: noindex` mientras la página está
 * montada y se retira al salir.
 *
 * La vista ocupa exactamente el alto libre bajo la navbar y no hace scroll:
 * el minijuego necesita un alto conocido para dimensionar su lienzo.
 */
function NotFound() {
  const ui = useUi();

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);

    const previousTitle = document.title;
    document.title = ui.notFound.documentTitle;

    return () => {
      meta.remove();
      document.title = previousTitle;
    };
  }, [ui.notFound.documentTitle]);

  const actions = (
    <div className="not-found__actions">
      <Link to="/" className="k-btn k-btn--cta not-found__cta">
        {ui.notFound.home}
        <IconArrowRight size={18} aria-hidden="true" />
      </Link>
      <a
        className="k-btn k-btn--ghost not-found__ghost"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp size={18} aria-hidden="true" />
        {ui.notFound.whatsapp}
      </a>
    </div>
  );

  return (
    <main className="not-found">
      <div className="not-found__intro">
        <div className="not-found__head">
          <span className="not-found__eyebrow">{ui.notFound.eyebrow}</span>
          <h1 className="not-found__title">{ui.notFound.title}</h1>
          <span className="not-found__rule" aria-hidden="true" />
          <p className="not-found__lead">{ui.notFound.lead}</p>
        </div>

        {/* Lista completa — a partir de 880px, donde hay una columna para ella */}
        <nav className="not-found__links" aria-label={ui.notFound.suggestionsAria}>
          {SUGGESTIONS.map((item) => (
            <Link key={item.to} to={item.to} className="not-found__link">
              <span className="not-found__link-text">
                <span className="not-found__link-label">{ui.nav.links[item.key]}</span>
                <span className="not-found__link-desc">
                  {ui.notFound.suggestions[item.key]}
                </span>
              </span>
              <IconArrowRight size={20} aria-hidden="true" />
            </Link>
          ))}
        </nav>

        {actions}
      </div>

      <div className="not-found__game">
        <Suspense fallback={<div className="not-found__game-skeleton" aria-hidden="true" />}>
          <SkiGame />
        </Suspense>
      </div>

      {/* Versión compacta de lo anterior, por debajo de 880px */}
      <div className="not-found__compact">
        <nav className="not-found__chips" aria-label={ui.notFound.suggestionsAria}>
          {SUGGESTIONS.map((item) => (
            <Link key={item.to} to={item.to} className="not-found__chip">
              <span className="not-found__chip-label">
                {ui.notFound.shortLinks[item.key]}
              </span>
              <IconArrowRight size={16} aria-hidden="true" />
            </Link>
          ))}
        </nav>
        {actions}
      </div>
    </main>
  );
}

export default NotFound;
