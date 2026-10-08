import { ACTIVITIES, type Activity } from "./activities";

/** Cuenta de Bookeo — el `a=` del widget (Settings → Integrate into your website). */
export const BOOKEO_ACCOUNT_ID = "2234KCCH71A100914E4A";

/** Query param de /reservas que preselecciona una actividad en el widget. */
export const BOOKING_PARAM = "actividad";

/**
 * Enlace "Reservar" de una actividad.
 *
 * Usamos nuestro slug, no el id de Bookeo: el enlace sigue siendo legible y
 * no se rompe si en Bookeo rehacen el producto. /reservas traduce slug → id.
 *
 * Debe navegarse con <a href>, nunca con <Link>: el widget de Bookeo hornea
 * el `type=` al cargar el script y solo admite una instancia por página, así
 * que cambiar de actividad exige una carga completa de documento.
 */
export function bookingHref(activity: Pick<Activity, "slug">): string {
  return `/reservas?${BOOKING_PARAM}=${encodeURIComponent(activity.slug)}`;
}

/**
 * Id de producto de Bookeo para un slug nuestro.
 *
 * `null` cuando la actividad aún no tiene producto creado en Bookeo: el
 * widget se monta entonces con el catálogo completo, sin preselección.
 */
export function bookeoProductIdFor(slug: string | null): string | null {
  if (!slug) return null;
  const activity = ACTIVITIES.find((a) => a.slug === slug);
  return activity?.bookeoProductId?.trim() || null;
}

/** URL del script del widget, con producto preseleccionado si lo hay. */
export function bookeoWidgetSrc(productId: string | null): string {
  const base = `https://bookeo.com/widget.js?a=${BOOKEO_ACCOUNT_ID}`;
  return productId ? `${base}&type=${encodeURIComponent(productId)}` : base;
}

/**
 * Las tarjetas del catálogo de Bookeo, en el orden exacto en que las pinta su
 * iframe y con el nombre que ellos les dan.
 *
 * Existe porque hoy ningún producto tiene `bookeoProductId`: el widget abre
 * siempre el catálogo completo y el visitante tiene que encontrar su tarjeta a
 * ojo. La tabla de /reservas usa esto para decirle cuál pulsar ("Localizar").
 *
 * Los nombres no son los nuestros — son los de Bookeo, y a veces no coinciden
 * (nuestro "Tardeo (-25%)" es su "Tardeo -15%"). Se copian tal cual: el
 * visitante los va a leer en el iframe, no aquí. Si cambian allí, cambian aquí.
 */
export const BOOKEO_CATALOG: { slug: string; cardName: string }[] = [
  { slug: "clases-particulares-en-baqueira", cardName: "Clase Privada por Horas" },
  { slug: "friends-family", cardName: "Kids, Friends & Family" },
  { slug: "experiencia-kaiten-2.5", cardName: "Kaiten 2.5" },
  { slug: "experiencia-de-tardeo-20", cardName: "Tardeo -15%" },
  { slug: "safari-en-baqueira", cardName: "Safari por Baqueira" },
  { slug: "full-day-half-day-en-baqueira", cardName: "Día completo | Medio Día" },
  { slug: "freeride-en-baqueira", cardName: "Freeride Baqueira" },
  { slug: "asesoramiento-compra-material-ski", cardName: "Asesoría Material" },
];

/** Tarjeta de Bookeo de una actividad nuestra, con su posición en la rejilla. */
export function bookeoCardFor(
  slug: string | null,
): { cardName: string; index: number } | null {
  if (!slug) return null;
  const index = BOOKEO_CATALOG.findIndex((c) => c.slug === slug);
  return index === -1
    ? null
    : { cardName: BOOKEO_CATALOG[index].cardName, index };
}
