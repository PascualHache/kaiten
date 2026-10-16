/** Idiomas de la web. `es` es el original: el resto son traducciones suyas. */
export const LANGS = ["es", "ca", "en"] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "es";

/** Etiqueta del selector. "CAT" y no "CA": es como lo pide la marca. */
export const LANG_LABELS: Record<Lang, string> = {
  es: "ES",
  ca: "CAT",
  en: "EN",
};

/** Valor del atributo `lang` del <html> — no coincide con nuestro código en CAT. */
export const LANG_HTML: Record<Lang, string> = {
  es: "es",
  ca: "ca",
  en: "en",
};

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

/** Mismo contenido en los tres idiomas. Usado por los diccionarios. */
export type Dict<T> = Record<Lang, T>;
