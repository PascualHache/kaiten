import type { Activity } from "../../data/activities";
import type { Service } from "../../data/services";
import type { Tariff } from "../../data/tariffs";
import type { Level } from "../../data/levels";

/**
 * Lo traducible de cada dato. El resto (slug, id de Bookeo, foto, precio,
 * colores) vive una sola vez en `src/data` y no se duplica por idioma.
 */
export type ActivityText = Pick<
  Activity,
  "title" | "summary" | "features" | "info" | "cta"
> &
  Partial<Pick<Activity, "subtitle">>;

/** Clave = `Activity.id`. */
export type ActivityTexts = Record<string, ActivityText>;

export type ServiceText = Pick<Service, "title" | "tagline" | "description">;
/** Clave = `Service.id`. */
export type ServiceTexts = Record<string, ServiceText>;

export type TariffText = Pick<Tariff, "title" | "maxPeople"> &
  Partial<Pick<Tariff, "priceNote" | "extra">>;
/** Clave = `Tariff.id`. */
export type TariffTexts = Record<string, TariffText>;

export type LevelText = Pick<Level, "description" | "reference">;
/** Clave = `Level.code`. */
export type LevelTexts = Record<string, LevelText>;
