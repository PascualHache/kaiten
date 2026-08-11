import { useState } from "react";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";
import "./PromoBanner.css";

const WHATSAPP_URL =
  "https://wa.me/34699820954?text=DESCUENTOS%20EXCLUSIVOS";
const STORAGE_KEY = "promo-banner-closed";

function PromoBanner() {
  const [visible, setVisible] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) !== "true",
  );

  const close = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    sessionStorage.setItem(STORAGE_KEY, "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="promo-banner"
      aria-label="Contactar por WhatsApp para descuentos exclusivos"
    >
      <span className="promo-banner__icon" aria-hidden="true">
        <IconBrandWhatsapp size={16} stroke={1.5} />
      </span>
      <span className="promo-banner__text">
        Escribe <strong>DESCUENTOS EXCLUSIVOS</strong> y accede a ofertas
        especiales
      </span>
      <button
        type="button"
        className="promo-banner__close"
        aria-label="Cerrar banner promocional"
        onClick={close}
      >
        <IconX size={16} stroke={2} />
      </button>
    </a>
  );
}

export default PromoBanner;
