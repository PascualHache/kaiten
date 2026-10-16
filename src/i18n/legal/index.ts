import {
  ANNEX_SECTIONS,
  GUIDE_SECTION,
  MAIN_SECTIONS,
  type LegalSection,
} from "../../data/terminos";
import { PRIVACIDAD_SECTIONS } from "../../data/privacidad";
import { COOKIES_SECTIONS } from "../../data/cookies";
import { AVISO_SECTIONS } from "../../data/aviso";
import { useDict } from "../languageContext";
import type { Dict } from "../types";
import { terminosAnnexCa, terminosGuideCa, terminosMainCa } from "./terminos.ca";
import { terminosAnnexEn, terminosGuideEn, terminosMainEn } from "./terminos.en";
import { privacidadCa } from "./privacidad.ca";
import { privacidadEn } from "./privacidad.en";
import { cookiesCa } from "./cookies.ca";
import { cookiesEn } from "./cookies.en";
import { avisoCa } from "./aviso.ca";
import { avisoEn } from "./aviso.en";

interface LegalDict {
  terminos: {
    main: LegalSection[];
    annex: LegalSection[];
    guide: LegalSection;
  };
  privacidad: LegalSection[];
  cookies: LegalSection[];
  aviso: LegalSection[];
}

const LEGAL: Dict<LegalDict> = {
  es: {
    terminos: {
      main: MAIN_SECTIONS,
      annex: ANNEX_SECTIONS,
      guide: GUIDE_SECTION,
    },
    privacidad: PRIVACIDAD_SECTIONS,
    cookies: COOKIES_SECTIONS,
    aviso: AVISO_SECTIONS,
  },
  ca: {
    terminos: {
      main: terminosMainCa,
      annex: terminosAnnexCa,
      guide: terminosGuideCa,
    },
    privacidad: privacidadCa,
    cookies: cookiesCa,
    aviso: avisoCa,
  },
  en: {
    terminos: {
      main: terminosMainEn,
      annex: terminosAnnexEn,
      guide: terminosGuideEn,
    },
    privacidad: privacidadEn,
    cookies: cookiesEn,
    aviso: avisoEn,
  },
};

/** Textos legales del idioma activo. */
export function useLegal(): LegalDict {
  return useDict(LEGAL);
}
