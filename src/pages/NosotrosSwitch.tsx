import { useState } from "react";
import DesignSwitch from "../components/DesignSwitch";
import Nosotros from "./Nosotros";
import NosotrosClassic from "./NosotrosClassic";

const STORAGE_KEY = "kaiten:nosotros-design";

type Variant = "nuevo" | "actual";

const OPTIONS = [
  { value: "nuevo" as const, label: "Rediseño" },
  { value: "actual" as const, label: "Actual" },
];

function readVariant(): Variant {
  try {
    return localStorage.getItem(STORAGE_KEY) === "actual" ? "actual" : "nuevo";
  } catch {
    return "nuevo";
  }
}

/**
 * Envoltorio temporal de /nosotros para comparar el rediseño con la versión
 * en producción. La elección se recuerda en localStorage para que sobreviva a
 * recargas y a navegar por el resto del sitio.
 *
 * Cuando se decida cuál se queda: borrar este archivo, DesignSwitch y la
 * variante descartada, y apuntar la ruta directamente a la página ganadora.
 */
function NosotrosSwitch() {
  const [variant, setVariant] = useState<Variant>(readVariant);

  const handleChange = (next: Variant) => {
    setVariant(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Modo privado o almacenamiento bloqueado: la elección no persiste. */
    }
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <DesignSwitch
        legend="Diseño"
        options={OPTIONS}
        value={variant}
        onChange={handleChange}
      />
      {/* La `key` fuerza el remontaje: así las animaciones de entrada vuelven
          a correr cada vez que se cambia de variante. */}
      {variant === "nuevo" ? (
        <Nosotros key="nuevo" />
      ) : (
        <NosotrosClassic key="actual" />
      )}
    </>
  );
}

export default NosotrosSwitch;
