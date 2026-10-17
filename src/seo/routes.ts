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

const PAGE_ROUTES: RouteSeo[] = [
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

/**
 * Las ocho experiencias, una página indexable cada una (`/reservas/<slug>`).
 *
 * Son las URL con más intención de compra del sitio: quien busca "clases de
 * esquí particulares Baqueira" quiere aterrizar aquí, no en el catálogo.
 *
 * El texto va **escrito a mano**, no derivado de `ACTIVITIES`: la copia de
 * producto está escrita para quien ya está en la página, y una descripción de
 * búsqueda necesita el nombre, el sitio, la duración y el precio en los
 * primeros 160 caracteres. Los datos que cita (duración, aforo, precio) salen
 * de `activities.ts` y `tariffs.ts`; si cambian allí, hay que repasarlos aquí.
 *
 * `scripts/vite-plugin-seo.mjs` falla el build si una actividad se queda sin
 * entrada o si una entrada apunta a un slug que ya no existe.
 */
export const EXPERIENCE_ROUTES: RouteSeo[] = [
  {
    path: "/reservas/clases-particulares-en-baqueira",
    title: "Clases privadas de esquí en Baqueira | Kaiten",
    description:
      "Clases particulares de esquí en Baqueira Beret con instructor titulado, de 1 a 4 personas y horas a tu medida. Desde 64 € la hora, todos los niveles",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/full-day-half-day-en-baqueira",
    title: "Full Day y Half Day de esquí en Baqueira | Kaiten",
    description:
      "Medio día o día completo de esquí en Baqueira Beret con instructor para 1 a 4 personas. Half Day desde 250 € y Full Day desde 400 €, todos los niveles",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/safari-en-baqueira",
    title: "Safari de esquí en Baqueira: descubre la estación | Kaiten",
    description:
      "Recorre Baqueira Beret con un guía local: 3 o 6 horas, de 1 a 6 personas, nivel intermedio o avanzado. Desde 180 € por el safari de media jornada",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/freeride-en-baqueira",
    title: "Freeride y esquí fuera de pista en Baqueira | Kaiten",
    description:
      "Esquí fuera de pista en Baqueira Beret con instructor titulado: 4 horas o día completo, de 1 a 4 personas, nivel intermedio o avanzado. Desde 250 €",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/friends-family",
    title: "Clases de esquí para niños y familias en Baqueira | Kaiten",
    description:
      "Esquí en grupo para familias y amigos en Baqueira Beret, de 1 a 6 personas y a partir de 4 años. Cada uno progresa a su ritmo, desde 64 € la hora",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/experiencia-de-tardeo-20",
    title: "Tardeo: clases de esquí por la tarde en Baqueira | Kaiten",
    description:
      "Clases de esquí en Baqueira Beret a partir de las 14:00, con un 25 % de descuento: menos colas y pistas más tranquilas. Desde 48 € la hora",
    priority: 0.9,
    changefreq: "monthly",
  },
  {
    path: "/reservas/experiencia-kaiten-2.5",
    title: "Kaiten 2.5: programa de mejora intensiva de esquí | Kaiten",
    description:
      "Programa de 2 o 3 días en Baqueira Beret para dar un salto real de nivel, de 1 a 4 personas. Nuestro método de mejora intensiva, desde 138 €",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/reservas/asesoramiento-compra-material-ski",
    title: "Asesoramiento para comprar material de esquí | Kaiten",
    description:
      "Sesión online con un técnico para elegir esquís, botas y fijaciones según tu nivel y tu forma de esquiar, sin pagar de más. 30 € la sesión",
    priority: 0.6,
    changefreq: "yearly",
  },
];

/** Todo lo que se prerenderiza y entra en el sitemap. */
export const ROUTES: RouteSeo[] = [...PAGE_ROUTES, ...EXPERIENCE_ROUTES];

/** URL absoluta y canónica de una ruta. La raíz conserva su barra; el resto, no. */
export function canonicalUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function findRoute(pathname: string): RouteSeo | undefined {
  // Toleramos la barra final: /tarifas/ y /tarifas son la misma página.
  const clean = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
  return ROUTES.find((r) => r.path === clean);
}
