import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

/**
 * `robots: noindex` propio, con marca para no pisarse con el de <NotFound>
 * (que gestiona el suyo por su cuenta).
 */
function setNoindex(on: boolean) {
  const existing = document.head.querySelector("meta[data-seo-robots]");
  if (!on) {
    existing?.remove();
    return;
  }
  if (existing) return;
  const el = document.createElement("meta");
  el.setAttribute("name", "robots");
  el.setAttribute("content", "noindex, follow");
  el.setAttribute("data-seo-robots", "");
  document.head.appendChild(el);
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
  const { pathname } = useLocation();

  useEffect(() => {
    const route = findRoute(pathname);

    /* Una experiencia que no existe (/reservas/lo-que-sea) sí casa con la ruta
       `:slug`, así que <Reservas> enseña el catálogo en vez de un 404 — para
       quien venía a reservar es mejor respuesta que un error. Pero no tiene
       fichero estático: Vercel le sirve el index.html de la portada, con su
       título y su canonical. Le ponemos los del catálogo y `noindex`, o Google
       vería infinitas URL con el mismo contenido. */
    const fallback =
      !route && pathname.startsWith("/reservas/") ? findRoute("/reservas") : null;

    /* El resto de rutas desconocidas las gestiona <NotFound>, que pone su
       propio título y su propio `noindex`. Si escribiéramos aquí lo
       pisaríamos: el efecto del padre corre después del hijo. */
    if (!route && !fallback) return;

    const { title, description } = (route ?? fallback)!;
    const canonical = canonicalUrl((route ?? fallback)!.path);

    setNoindex(!route);
    document.title = title;
    upsertMeta("name", "description", description);
    upsertCanonical(canonical);

    // Open Graph y Twitter: lo que ve quien pega la URL en un chat.
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
  }, [pathname]);
}
