import { useState } from "react";
import { Link } from "react-router-dom";
import { IconChevronDown, IconArrowRight } from "@tabler/icons-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./FAQ.css";

interface FAQItem {
  q: string;
  a: string | string[];
}

const FAQS: FAQItem[] = [
  {
    q: "¿Dónde nos encontramos?",
    a: [
      "El punto de encuentro habitual es la base de la estación de Baqueira Beret (sector Baqueira, acceso principal).",
      "Al reservar por Cal.com puedes indicar tu alojamiento y te confirmamos el punto exacto según la experiencia elegida.",
    ],
  },
  {
    q: "¿El forfait y el material están incluidos?",
    a: [
      "No están incluidos en el precio de la clase.",
      "El forfait deberás adquirirlo por tu cuenta en la propia estación o de forma online.",
      "El material de esquí (esquís, botas, casco) se puede alquilar en cualquier tienda de Baqueira. Si necesitas recomendaciones, podemos orientarte.",
    ],
  },
  {
    q: "¿Qué pasa si hace mal tiempo o las condiciones de nieve son malas?",
    a: [
      "La seguridad es siempre nuestra prioridad. Si las condiciones de nieve, viento o visibilidad son peligrosas, la experiencia se reprograma o cancela sin coste.",
      "Te avisaremos con la mayor antelación posible. En caso de duda, consulta con nosotros el día anterior.",
    ],
  },
  {
    q: "¿Cuál es la política de cancelación y reembolso?",
    a: [
      "Cancelación con más de 48h de antelación: reembolso completo.",
      "Cancelación entre 24h y 48h: reembolso del 50%.",
      "Cancelación con menos de 24h: sin reembolso (salvo causa de fuerza mayor o mal tiempo declarado por la estación).",
      "Cancelación por nuestra parte (mal tiempo, enfermedad): reembolso completo o reprogramación.",
    ],
  },
  {
    q: "¿Qué seguro incluye la experiencia?",
    a: "Todas las experiencias incluyen seguro de Responsabilidad Civil (RC) del instructor. Te recomendamos contratar adicionalmente un seguro de esquí personal que cubra accidentes, asistencia en pista y gastos médicos.",
  },
  {
    q: "¿En qué idiomas se imparten las clases?",
    a: "Las clases se imparten principalmente en español. También podemos atenderte en inglés y catalán. Si tienes alguna necesidad específica de idioma, indícalo al reservar.",
  },
  {
    q: "¿Cuál es la edad mínima para los niños?",
    a: [
      "Para clases con niños aceptamos a partir de 4 años.",
      "Para menores de 4 años recomendamos la guardería de la propia estación de Baqueira.",
      "La experiencia Kids & Friends & Family está especialmente diseñada para grupos mixtos con niños.",
    ],
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: [
      "El pago se realiza directamente a través de Cal.com en el momento de la reserva, mediante tarjeta de crédito o débito.",
      "También aceptamos pago por transferencia bancaria previa reserva. Consúltanos por WhatsApp.",
    ],
  },
  {
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

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq">
      <Navbar />
      <main className="faq__main">
        <p className="faq__eyebrow">Preguntas frecuentes</p>
        <h1 className="faq__title">Todo lo que necesitas saber</h1>
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
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className={`faq__item${isOpen ? " faq__item--open" : ""}`}>
                <button
                  type="button"
                  className="faq__row"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="faq__question">{item.q}</span>
                  <IconChevronDown
                    className="faq__chevron"
                    size={20}
                    stroke={2}
                  />
                </button>
                <div className={`faq__panel${isOpen ? " faq__panel--open" : ""}`}>
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
