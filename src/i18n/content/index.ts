import { ACTIVITIES, type Activity } from "../../data/activities";
import { SERVICES, type Service } from "../../data/services";
import { TARIFFS, type Tariff } from "../../data/tariffs";
import { LEVELS, type Level } from "../../data/levels";
import { useLang } from "../languageContext";
import type { Lang } from "../types";
import { activitiesCa } from "./activities.ca";
import { activitiesEn } from "./activities.en";
import { levelsCa, servicesCa, tariffsCa } from "./misc.ca";
import { levelsEn, servicesEn, tariffsEn } from "./misc.en";
import type {
  ActivityTexts,
  LevelTexts,
  ServiceTexts,
  TariffTexts,
} from "./types";

/* Sin entrada para `es`: el castellano es el original y vive en src/data. */
const ACTIVITY_TEXTS: Partial<Record<Lang, ActivityTexts>> = {
  ca: activitiesCa,
  en: activitiesEn,
};
const SERVICE_TEXTS: Partial<Record<Lang, ServiceTexts>> = {
  ca: servicesCa,
  en: servicesEn,
};
const TARIFF_TEXTS: Partial<Record<Lang, TariffTexts>> = {
  ca: tariffsCa,
  en: tariffsEn,
};
const LEVEL_TEXTS: Partial<Record<Lang, LevelTexts>> = {
  ca: levelsCa,
  en: levelsEn,
};

/** Dato original + traducción de sus campos de texto, si la hay. */
function translate<T, K extends string>(
  items: T[],
  key: (item: T) => K,
  texts: Record<string, Partial<T>> | undefined,
): T[] {
  if (!texts) return items;
  return items.map((item) => {
    const text = texts[key(item)];
    return text ? { ...item, ...text } : item;
  });
}

export function getActivities(lang: Lang): Activity[] {
  return translate(ACTIVITIES, (a) => a.id, ACTIVITY_TEXTS[lang]);
}

export function getServices(lang: Lang): Service[] {
  return translate(SERVICES, (s) => s.id, SERVICE_TEXTS[lang]);
}

export function getTariffs(lang: Lang): Tariff[] {
  return translate(TARIFFS, (t) => t.id, TARIFF_TEXTS[lang]);
}

export function getLevels(lang: Lang): Level[] {
  return translate(LEVELS, (l) => l.code, LEVEL_TEXTS[lang]);
}

export function useActivities(): Activity[] {
  return getActivities(useLang().lang);
}

export function useServices(): Service[] {
  return getServices(useLang().lang);
}

export function useTariffs(): Tariff[] {
  return getTariffs(useLang().lang);
}

export function useLevels(): Level[] {
  return getLevels(useLang().lang);
}
