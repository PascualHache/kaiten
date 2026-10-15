import { createContext, useContext } from "react";
import { DEFAULT_LANG, isLang, type Dict, type Lang } from "./types";

export const STORAGE_KEY = "kaiten-lang";

export interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const LanguageContext = createContext<LanguageValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
});

/**
 * Idioma elegido > idioma del navegador > castellano.
 *
 * Se lee una sola vez, en el inicializador del estado del proveedor: a partir
 * de ahí manda el selector. localStorage puede lanzar (modo privado, cookies
 * bloqueadas), de ahí el try.
 */
export function detectLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) return stored;
  } catch {
    /* almacenamiento no disponible: seguimos con el navegador */
  }
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag?.toLowerCase().split("-")[0];
    if (base === "ca") return "ca";
    if (base === "en") return "en";
    if (base === "es") return "es";
  }
  return DEFAULT_LANG;
}

/** Idioma activo y su selector. */
export function useLang(): LanguageValue {
  return useContext(LanguageContext);
}

/** Toma la rama del idioma activo de cualquier diccionario es/ca/en. */
export function useDict<T>(dict: Dict<T>): T {
  const { lang } = useLang();
  return dict[lang];
}
