/*
 * Reencoda y redimensiona las fotos de src/assets/images.
 *
 * Las originales salían de la cámara/exportación a tamaño completo (la del hero,
 * 4785×2565 y 2,6 MB) y se servían tal cual: Lighthouse marcaba ~3,7 MB de ahorro
 * solo en imágenes. Aquí se recortan al mayor tamaño en que se llegan a pintar
 * —contando pantallas de 2x— y se reencodan a WebP con calidad visualmente
 * indistinguible detrás del velo y el filtro sepia que llevan casi todas.
 *
 * SOBRESCRIBE EN SITIO. Las originales viven en el historial de git (commit
 * anterior a esta optimización); no vuelvas a pasar el script sobre un archivo
 * ya optimizado sin necesidad, porque cada pasada vuelve a codificar con pérdida.
 *
 * Uso: node scripts/optimize-images.mjs [--dry]
 */
import { readdir, stat } from 'node:fs/promises'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIR = join(ROOT, 'src/assets/images')
const DRY = process.argv.includes('--dry')

/* Ancho máximo al que se llega a pintar cada foto, ya multiplicado por 2 para
   pantallas densas. El hero es full-bleed, así que manda el viewport; el resto
   son tarjetas y columnas con un max-width conocido (ver los CSS citados). */
const TARGETS = [
  // Hero de portada: una sola resolución por breakpoint, para que el <link
  // rel="preload"> de index.html apunte exactamente al archivo que el navegador
  // va a pedir. Con srcset no podríamos: Vite no reescribe imagesrcset.
  { match: /^kaiten_home\.webp$/, width: 1920, quality: 82 },
  { match: /^kaiten_home_mobile\.webp$/, width: 1080, quality: 82 },
  // Fotos de actividad: tarjeta de Experiencias (20rem) y ficha de /reservas
  // (.reservas__detail-photo, ~700px de columna) → 1200 cubre 2x holgado.
  { match: /^clases_/, width: 1200, quality: 68 },
  // Retratos y fotos de sección de /nosotros, /faq y /valores.
  { match: /^(naiara|aitor)\.webp$/, width: 900, quality: 70 },
  { match: /^(historia|valores)\.webp$/, width: 1200, quality: 70 },
  // ubicacion.webp se queda fuera a propósito: ya está dentro de su tamaño de
  // pintado y es tan detallada que reencodarla solo le quitaba 2 KB a cambio de
  // otra pasada con pérdida. Va con loading="lazy" en /faq, fuera del LCP.
]

const kb = (n) => `${(n / 1024).toFixed(0)} KB`

const files = (await readdir(DIR)).filter((f) => f.endsWith('.webp')).sort()
let before = 0
let after = 0

for (const file of files) {
  const target = TARGETS.find((t) => t.match.test(file))
  if (!target) {
    console.log(`·  ${file} — sin regla, se deja como está`)
    continue
  }

  const path = join(DIR, file)
  const sizeBefore = (await stat(path)).size
  const input = sharp(path)
  const { width: w, height: h } = await input.metadata()

  const buf = await input
    .resize({ width: target.width, withoutEnlargement: true })
    .webp({ quality: target.quality, effort: 6 })
    .toBuffer()

  before += sizeBefore
  after += buf.length

  const label = `${basename(file)}: ${w}×${h} ${kb(sizeBefore)} → ${Math.min(w, target.width)}px ${kb(buf.length)}`
  if (DRY) {
    console.log(`?  ${label}`)
  } else {
    await sharp(buf).toFile(path)
    console.log(`✓  ${label}`)
  }
}

console.log(`\nTotal: ${kb(before)} → ${kb(after)} (${kb(before - after)} menos)`)
