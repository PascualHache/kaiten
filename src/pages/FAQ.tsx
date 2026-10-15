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
import "./FAQ.css";

const MAPS_URL = "https://maps.app.goo.gl/6cvrrD8xQqYsdRsG9";

interface FAQItem {
  /** Slug estable: es el ancla de la URL (/faq#<id>). No renombrar: los
      enlaces compartidos dejarían de abrir la pregunta correcta. */
  id: string;
  q: string;
  a: string | string[];
  map?: boolean;
}

const FAQS: FAQItem[] = [
  {
    id: "punto-de-encuentro",
    q: "¿Dónde es el punto de encuentro?",
    a: [
      "El punto de encuentro es en Baqueira 1800, justo a la salida del telecabina.",
    ],
    map: true,
  },
  {
    id: "forfait-y-material",
    q: "¿El forfait y el material están incluidos?",
    a: [
      "No están incluidos en el precio de la clase.",
      "El forfait deberás adquirirlo por tu cuenta en la propia estación o de forma online.",
      "El material de esquí (esquís, botas, casco) se puede alquilar en cualquier tienda de Baqueira. Si necesitas recomendaciones, podemos orientarte.",
    ],
  },
  {
    id: "mal-tiempo",
    q: "¿Qué pasa si hace mal tiempo o las condiciones de nieve son malas?",
    a: [
      "La seguridad es siempre nuestra prioridad. Si las condiciones de nieve, viento o visibilidad son peligrosas, la experiencia se reprograma o cancela sin coste.",
      "Te avisaremos con la mayor antelación posible. En caso de duda, consulta con nosotros el día anterior.",
    ],
  },
  {
    id: "cancelacion",
    q: "¿Cuál es la política de cancelación y reembolso?",
    a: [
      "Cancelación con más de 7 días de antelación: reembolso completo.",
      "Cancelación con menos de 24h: sin reembolso (salvo causa de fuerza mayor o mal tiempo declarado por la estación).",
      "Cancelación por nuestra parte (fuerza mayor, enfermedad): reembolso completo o reprogramación.",
    ],
  },
  {
    id: "seguro",
    q: "¿Qué seguro incluye la experiencia?",
    a: "Todas las experiencias incluyen seguro de Responsabilidad Civil (RC) del instructor. Te recomendamos contratar adicionalmente un seguro de esquí personal que cubra accidentes, asistencia en pista y gastos médicos.",
  },
  {
    id: "idiomas",
    q: "¿En qué idiomas se imparten las clases?",
    a: "Las clases se imparten principalmente en español. También podemos atenderte en inglés y catalán. Si tienes alguna necesidad específica de idioma, indícalo al reservar.",
  },
  {
    id: "edad-minima",
    q: "¿Cuál es la edad mínima para los niños?",
    a: [
      "Para clases con niños aceptamos a partir de 4 años.",
      "Para menores de 4 años recomendamos la guardería de la propia estación de Baqueira.",
      "La experiencia Kids & Friends & Family está especialmente diseñada para grupos mixtos con niños.",
    ],
  },
  {
    id: "pago",
    q: "¿Cómo se realiza el pago?",
    a: [
      "El pago se realiza en el momento de la reserva, mediante tarjeta de crédito o débito.",
      "Si prefieres otro método consúltanos por WhatsApp.",
    ],
  },
  {
    id: "que-llevar",
    q: "¿Qué debo llevar el día de la clase?",
    a: [
      "Ropa técnica de esquí en capas (base térmica, capa intermedia, anorak impermeable).",
      "Guantes de esquí, casco (obligatorio en muchas pistas), gafas de nieve o goggles.",
      "Protección solar (la altitud aumenta la exposición UV).",
      "Agua y algún snack energético.",
      "Forfait válido para el día.",
    ],
  },
];

/* Altura de la barra fija (Navbar.css usa 68px de alto real en .navbar__inner)
   más un respiro, para que la pregunta no quede escondida bajo el cristal. */
const SCROLL_OFFSET = 88;

export default function FAQ() {
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
    if (!id || !FAQS.some((f) => f.id === id)) return;

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
        <PageTitle eyebrow="Preguntas frecuentes">
          Todo lo que necesitas saber
        </PageTitle>
        <p className="faq__lead">
          ¿Tienes alguna duda más? Escríbenos por{" "}
          <a
            href="https://wa.me/34699820954"
            className="faq__wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{" "}
          o llámanos al{" "}
          <a href="tel:+34699820954" className="faq__wa">
            699 820 954
          </a>
          .
        </p>

        <ul className="faq__list">
          {FAQS.map((item) => {
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
                    aria-label={`Copiar enlace a: ${item.q}`}
                    title={isCopied ? "Enlace copiado" : "Copiar enlace"}
                  >
                    {isCopied ? (
                      <IconCheck size={16} stroke={2} />
                    ) : (
                      <IconLink size={16} stroke={2} />
                    )}
                    <span className="faq__copy-feedback" aria-live="polite">
                      {isCopied ? "Copiado" : ""}
                    </span>
                  </button>
                </div>
                <div
                  id={`${item.id}-panel`}
                  className={`faq__panel${isOpen ? " faq__panel--open" : ""}`}
                >
                  <div className="faq__panel-inner">
                    {Array.isArray(item.a) ? (
                      <ul className="faq__answer-list">
                        {item.a.map((line, j) => (
                          <li key={j} className="faq__answer-line">
                            {line}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="faq__answer">{item.a}</p>
                    )}
                    {item.map && (
                      <figure className="faq__map">
                        <img
                          className="faq__map-img"
                          src={ubicacionImg}
                          alt="Salida del telecabina TC. Baqueira, con una flecha amarilla señalando el punto de encuentro"
                          loading="lazy"
                          decoding="async"
                        />
                        <figcaption className="faq__map-body">
                          <p className="faq__map-text">
                            Te esperamos justo donde marca la flecha, a pie de
                            telecabina
                          </p>
                          <a
                            href={MAPS_URL}
                            className="faq__map-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconMapPin size={16} stroke={2} />
                            Abrir en Google Maps
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
          <p className="faq__cta-text">¿Listo para reservar?</p>
          <Link to="/reservas" className="faq__cta-btn">
            Ver todas las experiencias
            <IconArrowRight size={16} stroke={2} />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
