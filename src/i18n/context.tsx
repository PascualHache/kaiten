import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext, detectLang, STORAGE_KEY } from "./languageContext";
import { LANG_HTML, type Lang } from "./types";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  // El <html lang> es lo que leen lectores de pantalla y buscadores.
  useEffect(() => {
    document.documentElement.lang = LANG_HTML[lang];
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sin almacenamiento, el idioma dura lo que la pestaña */
    }
  }, []);

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
