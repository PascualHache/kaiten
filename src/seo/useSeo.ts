import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ACTIVITIES } from "../data/activities";
import { BOOKING_PARAM } from "../data/booking";
import { canonicalUrl, findRoute } from "./routes";

/**
 * Mantiene el <head> al día al navegar.
 *
 * El HTML que sirve Vercel ya trae el <head> correcto de cada ruta
 * (`scripts/vite-plugin-seo.mjs`), que es lo que leen los bots. Pero en una
 * SPA el documento no se vuelve a cargar: sin esto, abrir la portada y pulsar
 * "Tarifas" dejaría el título y el canonical de la portada. Importa para el
 * historial del navegador, para las pestañas y para lo que comparte quien
 * copia la URL desde la barra.
 *
 * Solo castellano: las tres lenguas comparten URL y la versión indexable es la
 * española (CLAUDE.md > Idiomas).
 */

/** Crea la etiqueta si no existe; si existe (viene del HTML estático), la reaprovecha. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useSeo() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);

    /* Ruta desconocida: la gestiona <NotFound>, que pone su propio título y un
       `robots: noindex`. Si escribiéramos aquí lo pisaríamos — el efecto del
       padre corre después del hijo. */
    if (!route) return;

    let { title, description } = route;
    let canonical = canonicalUrl(route.path);

    /* La ficha de una experiencia es contenido propio dentro de /reservas, así
       que merece su título y su canonical con el parámetro. El catálogo (sin
       parámetro) se queda con los de la ruta. */
    if (route.path === "/reservas") {
      const slug = new URLSearchParams(search).get(BOOKING_PARAM);
      const activity = slug && ACTIVITIES.find((a) => a.slug === slug);
      if (activity) {
        title = `${activity.title} en Baqueira | Kaiten`;
        description = activity.cta.subline || description;
        canonical = `${canonical}?${BOOKING_PARAM}=${encodeURIComponent(activity.slug)}`;
      }
    }

    document.title = title;
    upsertMeta("name", "description", description);
    upsertCanonical(canonical);

    // Open Graph y Twitter: lo que ve quien pega la URL en un chat.
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [pathname, search]);
}
