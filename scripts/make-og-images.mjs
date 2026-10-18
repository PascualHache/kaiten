/*
 * Genera la tarjeta social (Open Graph) de cada experiencia.
 *
 * Sin esto, las dieciocho páginas compartían `og-image.png`: pegar la ficha de
 * Freeride en un chat enseñaba la tarjeta genérica de la escuela. La foto de
 * cada actividad ya existe, pero no sirve tal cual por dos motivos:
 *
 *   · Formato. Las tarjetas son 1200×630 y la mitad de las fotos son verticales
 *     (clases_friends_family es 884×1780). Enlazar el original dejaría a
 *     WhatsApp y Facebook recortando por su cuenta, casi siempre por el centro
 *     y casi siempre mal.
 *   · Estabilidad. Las fotos de `src/assets` las renombra Vite con un hash en
 *     cada build. Las redes sociales cachean la imagen **por URL**, así que una
 *     URL que cambia cada despliegue es una tarjeta que se vuelve a descargar
 *     siempre y que se rompe en lo ya compartido. Por eso la salida va a
 *     `public/og/`, que Vite copia tal cual, con nombre estable.
 *
 * El encuadre va **a mano**, con un `focus` por foto. Se probó la estrategia
 * `attention` de sharp y falla justo donde más falta hacía: en la foto de
 * grupo eligió el techo del telecabina y dejó las caras cortadas abajo, y en
 * la de clases privadas se quedó con las piernas. Busca detalle, no personas.
 *
 * Se ejecuta a mano y el resultado SE COMMITEA — no entra en `npm run build`,
 * porque las fotos cambian una vez al año y no merece la pena pagar sharp en
 * cada despliegue de Vercel.
 *
 * Uso: node scripts/make-og-images.mjs [--dry]
 */
import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SRC = join(ROOT, 'src/assets/images')
const OUT = join(ROOT, 'public/og')
const DRY = process.argv.includes('--dry')

/** Medidas de tarjeta que declaran `og:image:width` / `height` en index.html. */
const WIDTH = 1200
const HEIGHT = 630

/*
 * slug de la actividad → foto de la que sale su tarjeta.
 *
 * El par sale de `src/data/services.ts` (`image` + `reservasPath` de cada
 * servicio). Se repite aquí porque este script corre en Node y no puede
 * importar un módulo que hace `import ... from "*.webp"`.
 * `npm run check:booking` valida que los slugs existen en ACTIVITIES.
 */
/**
 * `focus` es dónde cae el **centro** de la banda de 630px, en tanto por uno
 * sobre el alto de la foto ya escalada: 0 el borde de arriba, 1 el de abajo,
 * 0.5 centrado. Se recorta sola a los límites, así que 0 y 1 son seguros.
 * Al cambiar una foto, pasa `--dry --sheet` y mira la hoja de contactos.
 */
const CARDS = {
  // Dos siluetas a contraluz: las cabezas están arriba del todo y el interés
  // baja hasta las botas. Un pelo por encima del centro coge ambas.
  'clases-particulares-en-baqueira': { file: 'clases_privadas.webp', focus: 0.33 },
  'full-day-half-day-en-baqueira': { file: 'clases_fullday.webp', focus: 0.45 },
  'safari-en-baqueira': { file: 'clases_safari.webp', focus: 0.45 },
  'freeride-en-baqueira': { file: 'clases_freeride.webp', focus: 0.4 },
  // Grupo dentro de la cabina: con 0.62 la banda caía en la puerta y cortaba
  // las caras por arriba.
  'friends-family': { file: 'clases_friends_family.webp', focus: 0.45 },
  'experiencia-de-tardeo-20': { file: 'clases_tardeo.webp', focus: 0.4 },
  // El disco con el "2.5" grabado: con 0.4 se le cortaba la cifra por abajo.
  'experiencia-kaiten-2.5': { file: 'clases_kaiten25.webp', focus: 0.5 },
  'asesoramiento-compra-material-ski': { file: 'clases_equipment.webp', focus: 0.45 },
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`

const available = new Set(await readdir(SRC))
const missing = Object.values(CARDS)
  .map((c) => c.file)
  .filter((f) => !available.has(f))
if (missing.length > 0) {
  console.error(`✖ Fotos que no existen en src/assets/images:\n   · ${missing.join('\n   · ')}`)
  process.exit(1)
}

if (!DRY) await mkdir(OUT, { recursive: true })

/** Escala a 1200 de ancho y recorta la banda de 630 centrada en `focus`. */
async function card(file, focus) {
  const scaled = sharp(join(SRC, file)).resize({ width: WIDTH })
  const { height } = await scaled.toBuffer({ resolveWithObject: true }).then((r) => r.info)

  // Si la foto escalada no llega a 630 de alto, no hay banda que elegir.
  const top = Math.max(0, Math.min(height - HEIGHT, Math.round(height * focus - HEIGHT / 2)))

  return sharp(await scaled.toBuffer())
    .extract({ left: 0, top, width: WIDTH, height: Math.min(HEIGHT, height) })
    .resize(WIDTH, HEIGHT, { fit: 'cover' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer()
}

const sheet = []

for (const [slug, { file, focus }] of Object.entries(CARDS)) {
  const meta = await sharp(join(SRC, file)).metadata()
  const buffer = await card(file, focus)
  sheet.push(buffer)

  if (DRY) {
    console.log(`·  ${slug}.jpg  ←  ${file} (${meta.width}×${meta.height})  ${kb(buffer.length)}`)
    continue
  }

  await writeFile(join(OUT, `${slug}.jpg`), buffer)
  console.log(
    `✓  ${slug}.jpg`.padEnd(42) +
      `${file} ${meta.width}×${meta.height} → ${WIDTH}×${HEIGHT}  ${kb(buffer.length)}`,
  )
}

/* Hoja de contactos para revisar los ocho encuadres de una vez, a /tmp: es una
   ayuda para quien ajusta `focus`, no un artefacto del proyecto. */
if (process.argv.includes('--sheet')) {
  const W = 600
  const H = 315
  const path = '/tmp/kaiten-og-sheet.jpg'
  await sharp({
    create: { width: W * 2, height: H * 4, channels: 3, background: '#000' },
  })
    .composite(
      await Promise.all(
        sheet.map(async (b, i) => ({
          input: await sharp(b).resize(W, H).toBuffer(),
          left: (i % 2) * W,
          top: Math.floor(i / 2) * H,
        })),
      ),
    )
    .jpeg({ quality: 85 })
    .toFile(path)
  console.log(`\nHoja de contactos: ${path} (orden de CARDS, dos por fila)`)
}

if (!DRY) {
  const total = (
    await Promise.all(
      Object.keys(CARDS).map(async (s) => (await stat(join(OUT, `${s}.jpg`))).size),
    )
  ).reduce((a, b) => a + b, 0)
  console.log(`\n${Object.keys(CARDS).length} tarjetas · ${kb(total)} en total · public/og/`)
}
