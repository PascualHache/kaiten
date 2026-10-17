import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

import { ACTIVITIES } from "../src/data/activities.ts";
import { bookingHref } from "../src/data/booking.ts";
import { ROUTES, SITE_URL, canonicalUrl } from "../src/seo/routes.ts";
import { jsonLdFor } from "../src/seo/jsonld.ts";

/**
 * Prerender del <head>, sitemap y robots.
 *
 * Vite emite un único `dist/index.html` y `vercel.json` reescribe cualquier URL
 * hacia él. Para un navegador da igual —React pinta la ruta que toque— pero un
 * bot que no ejecuta JavaScript (WhatsApp, Facebook, LinkedIn, Slack, Bing) ve
 * siempre el mismo título, la misma descripción y la misma tarjeta social.
 *
 * Esto copia ese HTML una vez por ruta con su <head> ya resuelto y lo escribe
 * en `dist/<ruta>/index.html`. Vercel comprueba el sistema de ficheros **antes**
 * de aplicar los `rewrites`, así que `/tarifas` sirve su propio fichero y solo
 * las URL inventadas caen en el comodín.
 *
 * No se renderiza el cuerpo: sigue siendo `<div id="root"></div>` y React lo
 * pinta igual que ahora. Para los bots sociales el <head> es todo lo que
 * leen; para el texto haría falta SSR, que traería hidratación, `window` en
 * tiempo de render y el idioma detectado del navegador. No compensa hoy.
 *
 * Sin dependencias nuevas: solo `node:fs` y los datos de `src/seo`.
 */

/** Escapa lo que va dentro de un atributo HTML. */
function attr(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Reemplaza el `content` de una etiqueta que ya existe en el HTML base.
 * Si no existe, no inventa nada: el index.html es la plantilla y un hueco
 * ausente indica que alguien quitó la etiqueta a propósito.
 */
function setMeta(html, selectorAttr, key, value) {
  const re = new RegExp(
    `(<meta\\s+${selectorAttr}="${key}"[\\s\\S]*?content=")[\\s\\S]*?(")`,
  );
  return html.replace(re, `$1${attr(value)}$2`);
}

function buildHead(html, route) {
  const url = canonicalUrl(route.path);

  let out = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${attr(route.title)}</title>`)
    .replace(
      /(<link rel="canonical" href=")[\s\S]*?(")/,
      `$1${attr(url)}$2`,
    );

  out = setMeta(out, "name", "description", route.description);
  out = setMeta(out, "property", "og:title", route.title);
  out = setMeta(out, "property", "og:description", route.description);
  out = setMeta(out, "property", "og:url", url);
  out = setMeta(out, "name", "twitter:title", route.title);
  out = setMeta(out, "name", "twitter:description", route.description);

  if (route.noindex) {
    out = out.replace(
      "</head>",
      '    <meta name="robots" content="noindex, follow" />\n  </head>',
    );
  }

  /* La foto del hero solo se pinta en la portada: en el resto, los dos
     <link rel="preload" as="image"> se descargarían para nada y le robarían
     ancho de banda al primer pintado. */
  if (route.path !== "/") {
    out = out.replace(
      /\s*<link\s+rel="preload"\s+as="image"[\s\S]*?\/>/g,
      "",
    );
  }

  const jsonLd = jsonLdFor(route.path);
  if (jsonLd) {
    /* `</` escapado: una respuesta de FAQ que contuviera "</script>" cerraría
       la etiqueta antes de tiempo. */
    const payload = JSON.stringify(jsonLd).replace(/<\//g, "<\\/");
    out = out.replace(
      "</head>",
      `    <script type="application/ld+json">${payload}</script>\n  </head>`,
    );
  }

  return out;
}

function buildSitemap(lastmod) {
  const urls = ROUTES.filter((r) => !r.noindex)
    .map(
      (r) =>
        `  <url>\n` +
        `    <loc>${canonicalUrl(r.path)}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority.toFixed(1)}</priority>\n` +
        `  </url>`,
    )
    .join("\n");

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  );
}

function buildRobots() {
  return (
    `# https://kaitenski.com\n` +
    `User-agent: *\n` +
    `Allow: /\n\n` +
    `# Nada bloqueado: cada experiencia es una página propia en\n` +
    `# /reservas/<slug> y queremos las ocho rastreadas e indexadas.\n\n` +
    `Sitemap: ${SITE_URL}/sitemap.xml\n`
  );
}

export default function seo() {
  let outDir = "dist";

  return {
    name: "kaiten-seo",
    apply: "build",
    enforce: "post",

    configResolved(config) {
      outDir = config.build.outDir;
    },

    async closeBundle() {
      const indexPath = join(outDir, "index.html");
      const base = await readFile(indexPath, "utf8");

      /* Comprobación barata pero que ahorra un despliegue mudo: si alguien
         quita una etiqueta de index.html, aquí se queda sin reemplazar y el
         fallo solo se vería compartiendo un enlace. */
      for (const tag of [
        "<title>",
        'rel="canonical"',
        'property="og:title"',
        'name="twitter:title"',
      ]) {
        if (!base.includes(tag)) {
          throw new Error(
            `[kaiten-seo] index.html ya no contiene ${tag}: el <head> por ruta no se puede generar`,
          );
        }
      }

      /* Las ocho fichas de experiencia llevan su texto a mano en
         `EXPERIENCE_ROUTES`. Si alguien añade una actividad o le cambia el
         slug, la página existiría sin <title> propio y fuera del sitemap, y
         nadie se enteraría. Aquí sí. */
      const declared = new Set(ROUTES.map((r) => r.path));
      const orphans = ACTIVITIES.map((a) => bookingHref(a)).filter(
        (path) => !declared.has(path),
      );
      if (orphans.length > 0) {
        throw new Error(
          `[kaiten-seo] actividad(es) sin entrada en EXPERIENCE_ROUTES ` +
            `(src/seo/routes.ts):\n   · ${orphans.join("\n   · ")}`,
        );
      }

      const slugs = new Set(ACTIVITIES.map((a) => a.slug));
      const stale = ROUTES.map((r) => r.path)
        .filter((path) => path.startsWith("/reservas/"))
        .filter((path) => !slugs.has(path.slice("/reservas/".length)));
      if (stale.length > 0) {
        throw new Error(
          `[kaiten-seo] ruta(s) de experiencia que ya no existen en ACTIVITIES:` +
            `\n   · ${stale.join("\n   · ")}`,
        );
      }

      const lastmod = new Date().toISOString().slice(0, 10);

      for (const route of ROUTES) {
        const html = buildHead(base, route);
        const file =
          route.path === "/"
            ? indexPath
            : join(outDir, route.path.slice(1), "index.html");
        await mkdir(dirname(file), { recursive: true });
        await writeFile(file, html);
      }

      await writeFile(join(outDir, "sitemap.xml"), buildSitemap(lastmod));
      await writeFile(join(outDir, "robots.txt"), buildRobots());

      console.log(
        `[kaiten-seo] ${ROUTES.length} rutas con <head> propio + sitemap.xml + robots.txt`,
      );
    },
  };
}
