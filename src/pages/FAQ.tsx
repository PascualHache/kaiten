import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IconChevronDown,
  IconArrowRight,
  IconMapPin,
  IconLink,
  IconCheck,
} from "@tabler/icons-react";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import { refreshScrollTriggers } from "../hooks/useScrollAnimations";
import ubicacionImg from "../assets/images/ubicacion.webp";
import { fill, useUi } from "../i18n";
import "./FAQ.css";

const MAPS_URL = "https://maps.app.goo.gl/6cvrrD8xQqYsdRsG9";

/* Solo el orden, el ancla y qué pregunta lleva mapa: las preguntas y las
   respuestas salen del diccionario (ui.faq.items), indexadas por este id.
   Los ids son los anclas de /faq#<id>: no renombrar, los enlaces
   compartidos dejarían de abrir la pregunta correcta. */
const FAQ_IDS = [
  { id: "punto-de-encuentro", map: true },
  { id: "forfait-y-material" },
  { id: "mal-tiempo" },
  { id: "cancelacion" },
  { id: "seguro" },
  { id: "idiomas" },
  { id: "edad-minima" },
  { id: "pago" },
  { id: "que-llevar" },
] as const;

/* Altura de la barra fija (Navbar.css usa 68px de alto real en .navbar__inner)
   más un respiro, para que la pregunta no quede escondida bajo el cristal. */
const SCROLL_OFFSET = 88;

export default function FAQ() {
  const ui = useUi();
  const { hash } = useLocation();
  const [open, setOpen] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  // Un ref por pregunta para poder enfocar la que llega en la URL.
  const rowRefs = useRef(new Map<string, HTMLButtonElement>());

  /* Navegación por URL: /faq#<slug> abre esa pregunta, la sube hasta debajo de
     la navbar y le da el foco, de modo que un enlace compartido aterriza ya en
     la respuesta (y el lector de pantalla anuncia cuál). */
  useEffect(() => {
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id || !FAQ_IDS.some((f) => f.id === id)) return;

    setOpen(id);
    // Un frame de margen: el reveal de GSAP arranca las tarjetas en
    // visibility:hidden y no se puede enfocar lo que aún no es visible.
    const t = window.setTimeout(() => {
      const el = rowRefs.current.get(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      el.focus({ preventScroll: true });
      refreshScrollTriggers();
    }, 120);

    return () => window.clearTimeout(t);
  }, [hash]);

  function toggle(id: string) {
    const next = open === id ? null : id;
    setOpen(next);
    /* replaceState en lugar de navigate: mantiene la URL compartible sin
       meter una entrada por clic en el historial ni disparar el efecto de
       arriba (que volvería a hacer scroll sobre el propio clic). */
    window.history.replaceState(
      null,
      "",
      next ? `#${next}` : window.location.pathname + window.location.search,
    );
    window.setTimeout(refreshScrollTriggers, 550);
  }

  async function copyLink(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Sin permiso de portapapeles (o http sin TLS): al menos dejamos la
      // URL en la barra para que se pueda copiar a mano.
      window.history.replaceState(null, "", `#${id}`);
      return;
    }
    setCopied(id);
    window.setTimeout(
      () => setCopied((c) => (c === id ? null : c)),
      2000,
    );
  }

  return (
    <div className="faq">
      <main className="faq__main">
        <PageTitle eyebrow={ui.faq.eyebrow}>{ui.faq.title}</PageTitle>
        <p className="faq__lead">
          {ui.faq.leadBefore}{" "}
          <a
            href="https://wa.me/34699820954"
            className="faq__wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{" "}
          {ui.faq.leadMiddle}{" "}
          <a href="tel:+34699820954" className="faq__wa">
            699 820 954
          </a>
          .
        </p>

        <ul className="faq__list">
          {FAQ_IDS.map((entry) => {
            const item = { ...entry, ...ui.faq.items[entry.id] };
            const isOpen = open === item.id;
            const isCopied = copied === item.id;
            return (
              <li
                key={item.id}
                id={item.id}
                className={`faq__item${isOpen ? " faq__item--open" : ""}`}
                data-reveal=""
              >
                {/* Fila = dos botones hermanos: el de abrir no puede envolver
                    al de copiar (un <button> dentro de otro no es válido). */}
                <div className="faq__row">
                  <button
                    type="button"
                    className="faq__toggle"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    ref={(el) => {
                      if (el) rowRefs.current.set(item.id, el);
                      else rowRefs.current.delete(item.id);
                    }}
                    onClick={() => toggle(item.id)}
                  >
                    <span className="faq__question">{item.q}</span>
                    <IconChevronDown
                      className="faq__chevron"
                      size={20}
                      stroke={2}
                    />
                  </button>
                  <button
                    type="button"
                    className={`faq__copy${isCopied ? " faq__copy--done" : ""}`}
                    onClick={() => copyLink(item.id)}
                    aria-label={fill(ui.faq.copyLinkAria, { q: item.q })}
                    title={isCopied ? ui.faq.copied : ui.faq.copyLink}
                  >
                    {isCopied ? (
                      <IconCheck size={16} stroke={2} />
                    ) : (
                      <IconLink size={16} stroke={2} />
                    )}
                    <span className="faq__copy-feedback" aria-live="polite">
                      {isCopied ? ui.faq.copiedShort : ""}
                    </span>
                  </button>
                </div>
                <div
                  id={`${item.id}-panel`}
                  className={`faq__panel${isOpen ? " faq__panel--open" : ""}`}
                >
                  <div className="faq__panel-inner">
                    {item.a.length > 1 ? (
                      <ul className="faq__answer-list">
                        {item.a.map((line, j) => (
                          <li key={j} className="faq__answer-line">
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="faq__answer">{item.a[0]}</p>
                    )}
                    {"map" in item && item.map && (
                      <figure className="faq__map">
                        <img
                          className="faq__map-img"
                          src={ubicacionImg}
                          alt={ui.faq.mapAlt}
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption className="faq__map-body">
                          <p className="faq__map-text">{ui.faq.mapText}</p>
                          <a
                            href={MAPS_URL}
                            className="faq__map-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconMapPin size={16} stroke={2} />
                            {ui.faq.mapBtn}
                          </a>
                        </figcaption>
                      </figure>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="faq__cta">
          <p className="faq__cta-text">{ui.faq.ctaText}</p>
          <Link to="/reservas" className="faq__cta-btn">
            {ui.faq.ctaBtn}
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
