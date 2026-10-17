/**
 * Datos estructurados (schema.org, JSON-LD) por ruta.
 *
 * Solo se inyectan en el HTML estático que genera el build: un bot no navega
 * por la SPA, así que no hace falta mantenerlos al cambiar de ruta en cliente.
 *
 * Para una escuela de esquí local esto pesa más en las búsquedas de
 * "clases de esquí Baqueira" que cualquier ajuste de texto: le da a Google el
 * teléfono, la ubicación, el rango de precios y las preguntas frecuentes en un
 * formato que puede mostrar directamente en los resultados.
 *
 * Regla de oro: **ningún dato inventado**. Todo lo de aquí sale de
 * `src/data/aviso.ts` (domicilio y NIF), `src/data/tariffs.ts` (precios),
 * `src/i18n/ui/es.ts` (preguntas) o del enlace de Google Maps de `FAQ.tsx`
 * (coordenadas). Si un campo no se sabe, se omite — un horario o una
 * valoración falsos son penalización, no mejora.
 */

import { es } from "../i18n/ui/es";
import { TARIFFS } from "../data/tariffs";
import { OG_IMAGE, SITE_URL, canonicalUrl } from "./routes";

/** Identificador estable de la escuela: el resto de nodos lo referencian. */
const BUSINESS_ID = `${SITE_URL}/#escuela`;

const PHONE = "+34699820954";
const EMAIL = "kaitenski@gmail.com";

/**
 * Coordenadas del punto de encuentro (Baqueira 1800, salida del telecabina),
 * resueltas desde el enlace corto de Google Maps que usa `src/pages/FAQ.tsx`.
 * Si allí cambia el enlace, hay que volver a resolverlo aquí.
 */
const GEO = { lat: 42.698113, lng: 0.946371 };
const MAPS_URL = "https://maps.app.goo.gl/6cvrrD8xQqYsdRsG9";

/**
 * Domicilio social, tal cual figura en el aviso legal. No es el punto de
 * encuentro: ese es Baqueira 1800 y va en `geo` + `hasMap`. Cuando exista
 * perfil de Google Business conviene que el `address` de aquí coincida
 * exactamente con el de la ficha, o Google desconfía de ambos.
 */
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Avenida Pas d'Arro, 52 29 B",
  addressLocality: "Vielha",
  addressRegion: "Lleida",
  postalCode: "25530",
  addressCountry: "ES",
};

/**
 * Temporada de nieve, todos los días. `validFrom`/`validThrough` acotan la
 * temporada; fuera de ella Google simplemente no muestra horario.
 */
const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "17:00",
    validFrom: "2025-12-01",
    validThrough: "2026-04-30",
  },
];

/** "64€" → 64. Devuelve null si la fila no trae un importe reconocible. */
function parsePrice(price: string): number | null {
  const n = Number(price.replace(/[^\d,.]/g, "").replace(",", "."));
  return Number.isFinite(n) && n > 0 ? n : null;
}

const PRICES = TARIFFS.map((t) => parsePrice(t.price)).filter(
  (n): n is number => n !== null,
);
const MIN_PRICE = Math.min(...PRICES);
const MAX_PRICE = Math.max(...PRICES);

/**
 * La escuela. `SportsActivityLocation` es un `LocalBusiness`, así que hereda
 * teléfono, dirección y horario, y además admite `sport`.
 */
function business() {
  return {
    "@type": "SportsActivityLocation",
    "@id": BUSINESS_ID,
    name: "Kaiten",
    alternateName: "Kaiten Ski",
    description:
      "Escuela de esquí en Baqueira Beret. Clases privadas, freeride, safari y programas de mejora intensiva con instructores titulados",
    url: `${SITE_URL}/`,
    image: OG_IMAGE,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    telephone: PHONE,
    email: EMAIL,
    vatID: "53027264M",
    address: ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    hasMap: MAPS_URL,
    areaServed: [
      { "@type": "Place", name: "Baqueira Beret" },
      { "@type": "Place", name: "Val d'Aran" },
    ],
    sport: "Esquí alpino",
    knowsLanguage: ["es", "ca", "en"],
    openingHoursSpecification: OPENING_HOURS,
    priceRange: `${MIN_PRICE}€–${MAX_PRICE}€`,
    currenciesAccepted: "EUR",
    paymentAccepted: "Tarjeta de crédito, tarjeta de débito",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: canonicalUrl("/reservas"),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
    /* Sin `aggregateRating`: las reseñas de `Reviews.tsx` son de muestra y la
       sección está desactivada (SHOW_REVIEWS). Declarar una valoración que no
       procede de reseñas publicadas es motivo de sanción manual en Google. */
    /* `sameAs` queda vacío hasta que exista perfil de Google Business y se
       confirme el usuario real de Instagram (el del footer, /kaiten, no parece
       la cuenta de la escuela). */
  };
}

/** Un `Offer` por fila de tarifa: cada formato con su precio. */
function offerCatalog() {
  return {
    "@type": "OfferCatalog",
    "@id": `${canonicalUrl("/tarifas")}#catalogo`,
    name: "Tarifas de experiencias Kaiten",
    url: canonicalUrl("/tarifas"),
    itemListElement: TARIFFS.map((t, i) => {
      const price = parsePrice(t.price);
      return {
        "@type": "Offer",
        position: i + 1,
        name: t.title,
        price: price ?? undefined,
        priceCurrency: "EUR",
        /* `priceNote` ("/ hora") no cabe en `price`: schema.org pide un número
           pelado. La unidad va aquí, en texto, para que no se pierda. */
        description: t.priceNote
          ? `${t.price} ${t.priceNote} · ${t.maxPeople}`
          : `${t.price} · ${t.maxPeople}`,
        availability: "https://schema.org/InStock",
        url: `${canonicalUrl("/reservas")}?actividad=${encodeURIComponent(t.slug)}`,
        seller: { "@id": BUSINESS_ID },
        itemOffered: {
          "@type": "Service",
          name: t.title,
          serviceType: "Clase de esquí",
          provider: { "@id": BUSINESS_ID },
          areaServed: { "@type": "Place", name: "Baqueira Beret" },
        },
      };
    }),
  };
}

/** Las nueve preguntas de /faq, con su respuesta completa en texto plano. */
function faqPage() {
  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl("/faq")}#faq`,
    url: canonicalUrl("/faq"),
    mainEntity: Object.values(es.faq.items).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.join(" "),
      },
    })),
  };
}

/** Migas para los resultados: "kaitenski.com › Tarifas" en vez de la URL cruda. */
function breadcrumb(path: string, name: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${SITE_URL}/`,
      },
      { "@type": "ListItem", position: 2, name, item: canonicalUrl(path) },
    ],
  };
}

/**
 * Grafo de una ruta, listo para serializar. Devuelve `null` cuando la ruta no
 * aporta datos estructurados (las legales) para no ensuciar el HTML.
 */
export function jsonLdFor(path: string): object | null {
  let graph: object[];

  switch (path) {
    case "/":
      graph = [
        business(),
        {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: "Kaiten",
          inLanguage: "es-ES",
          publisher: { "@id": BUSINESS_ID },
        },
      ];
      break;
    case "/tarifas":
      graph = [offerCatalog(), breadcrumb(path, "Tarifas")];
      break;
    case "/faq":
      graph = [faqPage(), breadcrumb(path, "Preguntas frecuentes")];
      break;
    case "/reservas":
      graph = [breadcrumb(path, "Reservas")];
      break;
    case "/niveles":
      graph = [breadcrumb(path, "Niveles")];
      break;
    case "/nosotros":
      graph = [breadcrumb(path, "Nosotros")];
      break;
    default:
      return null;
  }

  return { "@context": "https://schema.org", "@graph": graph };
}
