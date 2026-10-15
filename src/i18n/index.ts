import { useDict } from "./languageContext";
import { es, type UiDict } from "./ui/es";
import { ca } from "./ui/ca";
import { en } from "./ui/en";
import type { Dict } from "./types";

export const UI: Dict<UiDict> = { es, ca, en };

/** Textos de interfaz del idioma activo. */
export function useUi(): UiDict {
  return useDict(UI);
}

/** Sustituye {marcadores} en una cadena del diccionario. */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

export { LanguageProvider } from "./context";
export { useLang, useDict } from "./languageContext";
export { LANGS, LANG_LABELS, DEFAULT_LANG, isLang } from "./types";
export type { Lang, Dict } from "./types";
export type { UiDict } from "./ui/es";
