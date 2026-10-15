import { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import "./NotFound.css";

const WHATSAPP_URL = "https://wa.me/34699820954";

const SUGGESTIONS: { label: string; description: string; to: string }[] = [
  {
    label: "Reservas",
    description: "Elige experiencia, fecha y reserva online",
    to: "/reservas",
  },
  {
    label: "Tarifas",
    description: "Precios de clases privadas y experiencias especiales",
    to: "/tarifas",
  },
  {
    label: "Niveles",
    description: "Encuentra tu nivel y la experiencia que le encaja",
    to: "/niveles",
  },
  {
    label: "Preguntas frecuentes",
    description: "Punto de encuentro, material, cancelaciones",
    to: "/faq",
  },
];

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
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);

    const previousTitle = document.title;
    document.title = "Página no encontrada — Kaiten";

    return () => {
      meta.remove();
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="not-found">
      <main className="not-found__sheet">
        <PageTitle eyebrow="Error 404">Esta pista no existe</PageTitle>

        <p className="not-found__lead">
          La página que buscas se ha movido o nunca estuvo aquí. Te dejamos los
          caminos más transitados
        </p>

        <nav className="not-found__links" aria-label="Páginas sugeridas">
          {SUGGESTIONS.map((item) => (
            <Link key={item.to} to={item.to} className="not-found__link">
              <span className="not-found__link-label">
                {item.label}
                <IconArrowRight size={18} aria-hidden="true" />
              </span>
              <span className="not-found__link-desc">{item.description}</span>
            </Link>
          ))}
        </nav>

        <div className="not-found__actions">
          <Link to="/" className="not-found__btn">
            Volver al inicio
          </Link>
          <a
            href={WHATSAPP_URL}
            className="not-found__wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandWhatsapp size={20} aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;
