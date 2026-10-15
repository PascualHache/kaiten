import { Fragment, type ReactNode } from "react";

/**
 * Marcado mínimo de los diccionarios: `**negrita**` y `\n` como salto de
 * línea. Lo justo para que el texto traducible siga siendo una cadena y no
 * haya que duplicar JSX por idioma.
 */
export function RichText({ text }: { text: string }): ReactNode {
  return text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line.split(/\*\*(.+?)\*\*/g).map((part, j) =>
        // Los índices impares son lo que iba entre ** **.
        j % 2 === 1 ? <strong key={j}>{part}</strong> : <Fragment key={j}>{part}</Fragment>,
      )}
    </Fragment>
  ));
}
