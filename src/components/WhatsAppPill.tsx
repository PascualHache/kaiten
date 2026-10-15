import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";
import "./WhatsAppPill.css";

const SESSION_KEY = "kaiten-wa-pill-dismissed";

/* Diseño: nunca en el hero. Solo aparece pasado este % del scroll de la página. */
const SCROLL_THRESHOLD = 0.4;

/* Donde alguien está comparando y puede dudar: Home (Experiencias) y Tarifas.
 * Fuera de aquí manda «Reservar» y la píldora no se monta. */
const ENABLED_PATHS = ["/", "/tarifas"];

const WHATSAPP_URL = `https://wa.me/34699820954?text=${encodeURIComponent(
  "Hola, quiero información sobre vuestras experiencias",
)}`;

function WhatsAppPill() {
  const { pathname } = useLocation();
  const enabled = ENABLED_PATHS.includes(pathname);

  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true",
  );
  const [scrolledEnough, setScrolledEnough] = useState(false);

  /* El umbral se recalcula en cada ruta: al cambiar de página se vuelve a
   * empezar desde arriba y la píldora espera otra vez su 40 %. */
  useEffect(() => {
    setScrolledEnough(false);

    if (!enabled || dismissed) return;

    const check = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      if (window.scrollY / scrollable >= SCROLL_THRESHOLD) {
        setScrolledEnough(true);
        window.removeEventListener("scroll", check);
      }
    };

    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [pathname, enabled, dismissed]);

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setDismissed(true);
  };

  if (!enabled || dismissed || !scrolledEnough) return null;

  return (
    <div className="wa-pill">
      <a
        className="wa-pill__link"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp
          className="wa-pill__icon"
          size={18}
          stroke={1.5}
          aria-hidden="true"
        />
        <span className="wa-pill__text">¿Te ayudamos a elegir?</span>
      </a>
      <button
        type="button"
        className="wa-pill__close"
        onClick={dismiss}
        aria-label="Cerrar"
      >
        <IconX size={16} stroke={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}

export default WhatsAppPill;
