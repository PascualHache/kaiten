import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { useUi } from "../i18n";
import "./NotFound.css";

const WHATSAPP_URL = "https://wa.me/34699820954";

/* Solo las rutas: la etiqueta la pone ui.nav.links y la frase,
   ui.notFound.suggestions. */
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

  return (
    <div className="not-found">
      <main className="not-found__sheet">
        <PageTitle eyebrow={ui.notFound.eyebrow}>{ui.notFound.title}</PageTitle>

        <p className="not-found__lead">{ui.notFound.lead}</p>

        <nav className="not-found__links" aria-label={ui.notFound.suggestionsAria}>
          {SUGGESTIONS.map((item) => (
            <Link key={item.to} to={item.to} className="not-found__link">
              <span className="not-found__link-label">
                {ui.nav.links[item.key]}
                <IconArrowRight size={18} aria-hidden="true" />
              </span>
              <span className="not-found__link-desc">
                {ui.notFound.suggestions[item.key]}
              </span>
            </Link>
          ))}
        </nav>

        <div className="not-found__actions">
          <Link to="/" className="not-found__btn">
            {ui.notFound.home}
          </Link>
          <a
            href={WHATSAPP_URL}
            className="not-found__wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            {ui.notFound.whatsapp}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
