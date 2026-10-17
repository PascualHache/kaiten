/**
 * Metadatos por ruta — fuente única de verdad del SEO.
 *
 * Se lee desde dos sitios:
 *   · el build (`scripts/vite-plugin-seo.mjs`), que emite un HTML por ruta con
 *     este <head> ya resuelto, para los bots que no ejecutan JavaScript
 *     (WhatsApp, Facebook, LinkedIn, Slack, Bing);
 *   · la aplicación (`useSeo`), que lo reaplica al navegar entre rutas, porque
 *     en una SPA el <head> del documento inicial se queda congelado.
 *
 * **Solo castellano, a propósito.** Las tres versiones de idioma comparten URL
 * (ver CLAUDE.md > Idiomas), así que la versión indexable es la española: un
 * <title> que cambiara con el idioma del visitante no mejoraría nada y haría
 * que cada rastreo viera un documento distinto.
 *
 * Sin punto final en los títulos ni en las descripciones (CLAUDE.md > Typography).
 */

/** Host canónico: apex, sin www — `vercel.json` redirige www aquí. */
export const SITE_URL = "https://kaitenski.com";

/** Imagen de las tarjetas sociales. Absoluta: WhatsApp y Facebook no resuelven rutas relativas. */
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface RouteSeo {
  /** Ruta tal cual la declara App.tsx, con barra inicial. */
  path: string;
  title: string;
  /** 150-160 caracteres: a partir de ahí Google la recorta. */
  description: string;
  /** Fuera del sitemap y con `robots: noindex`. */
  noindex?: boolean;
  /** Peso relativo dentro del sitemap. */
  priority: number;
  /** `changefreq` del sitemap. */
  changefreq: "weekly" | "monthly" | "yearly";
}

export const ROUTES: RouteSeo[] = [
  {
    path: "/",
    title: "Kaiten — Escuela de esquí en Baqueira Beret",
    description:
      "Clases privadas, freeride, safari y programas de mejora intensiva en Baqueira Beret. Experiencias de esquí totalmente personalizadas",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    path: "/reservas",
    title: "Reservar clases de esquí en Baqueira | Kaiten",
    description:
      "Reserva online tu experiencia en Baqueira Beret: clases privadas, Full Day, Safari, Freeride o Kaiten 2.5. Confirmación inmediata con instructor titulado",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    path: "/tarifas",
    title: "Tarifas de clases de esquí en Baqueira | Kaiten",
    description:
      "Precios de todas las experiencias Kaiten en Baqueira Beret: desde 48 € la hora en Tardeo y 64 € la hora en clases privadas, con máximo 4 personas",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/niveles",
    title: "Niveles de esquí: encuentra el tuyo | Kaiten Baqueira",
    description:
      "De principiante a fuera de pista: identifica tu nivel de esquí y descubre qué experiencia de Kaiten en Baqueira Beret encaja contigo",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/nosotros",
    title: "El origen de Kaiten | Escuela de esquí en Baqueira",
    description:
      "No nacimos para crear otra escuela de esquí. La historia de Kaiten, su fundador Aitor Bellver y la forma de enseñar que buscábamos en el Valle de Arán",
    priority: 0.6,
    changefreq: "yearly",
  },
  {
    path: "/faq",
    title: "Preguntas frecuentes | Kaiten, esquí en Baqueira",
    description:
      "Punto de encuentro, forfait y material, cancelaciones, seguro, edad mínima y qué llevar el día de la clase. Todo lo que necesitas saber antes de reservar",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/aviso-legal",
    title: "Aviso legal | Kaiten",
    description:
      "Datos identificativos del titular del sitio web, condiciones de uso, propiedad intelectual y legislación aplicable",
    priority: 0.1,
    changefreq: "yearly",
  },
  {
    path: "/terminos",
    title: "Términos y condiciones | Kaiten",
    description:
      "Condiciones de contratación de las experiencias de esquí de Kaiten en Baqueira Beret: reservas, pagos, cancelaciones y responsabilidades",
    priority: 0.1,
    changefreq: "yearly",
  },
  {
    path: "/privacidad",
    title: "Política de privacidad | Kaiten",
    description:
      "Cómo tratamos tus datos personales, con qué finalidad, durante cuánto tiempo y cómo ejercer tus derechos de acceso, rectificación y supresión",
    priority: 0.1,
    changefreq: "yearly",
  },
  {
    path: "/cookies",
    title: "Política de cookies | Kaiten",
    description:
      "Qué cookies usa kaitenski.com, para qué sirven y cómo configurarlas o eliminarlas desde tu navegador",
    priority: 0.1,
    changefreq: "yearly",
  },
];

/** URL absoluta y canónica de una ruta. La raíz conserva su barra; el resto, no. */
export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function findRoute(pathname: string): RouteSeo | undefined {
  // Toleramos la barra final: /tarifas/ y /tarifas son la misma página.
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  return ROUTES.find((r) => r.path === clean);
}
