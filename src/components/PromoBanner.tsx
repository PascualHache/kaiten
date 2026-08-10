import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import "./PromoBanner.css";

const WHATSAPP_URL = "https://wa.me/34699820954?text=Descuentos%20exclusivos";

function PromoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="promo-banner"
    >
      <span className="promo-banner__text">
        ¿Quieres acceder a descuentos exclusivos? Escribe{" "}
        <strong>DESCUENTOS EXCLUSIVOS</strong> al 699 820 954
      </span>
      <button
        type="button"
        className="promo-banner__close"
        aria-label="Cerrar"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setVisible(false);
        }}
      >
        <IconX size={16} stroke={2} />
      </button>
    </a>
  );
}

export default PromoBanner;
