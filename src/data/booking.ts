import { ACTIVITIES, type Activity } from "./activities";

/** Cuenta de Bookeo — el `a=` del widget (Settings → Integrate into your website). */
export const BOOKEO_ACCOUNT_ID = "2234KCCH71A100914E4A";

/**
 * Query param antiguo de /reservas (`?actividad=<slug>`).
 *
 * Ya no se genera: cada experiencia tiene su propia ruta, `/reservas/<slug>`,
 * para que sea una página indexable de verdad — con `?actividad=` las ocho
 * colgaban del canonical de /reservas y Google las plegaba en una sola.
 *
 * Se mantiene porque sigue habiendo enlaces sueltos por ahí. En producción los
 * recoge un 301 del borde (`vercel.json`); esto es la red de seguridad para
 * `npm run dev`, donde los redirects de Vercel no existen.
 */
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
  return `/reservas/${activity.slug}`;
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
