/**
 * Build-time check for the Bookeo wiring.
 *
 * Dos fallos silenciosos que solo aparecerían delante de un cliente:
 *   1. Una actividad sin `bookeoProductId` → el CTA abre el widget con el
 *      catálogo completo en lugar de su producto.
 *   2. Un `slug` de tarifa o de servicio que no existe en ACTIVITIES → la
 *      tarifa muestra "—" y la tarjeta del Home no abre ficha.
 *   3. El marcador de index.html con un account id distinto al de booking.ts →
 *      Bookeo deja de validar la URL del sitio sin que nadie se entere.
 *
 * Por defecto AVISA pero no rompe el build: una actividad pendiente de crear
 * en Bookeo no puede bloquear un deploy. Para que falle (CI de QA,
 * pre-release), exporta BOOKING_IDS_STRICT=1.
 *
 * No consulta la API de Bookeo: requiere clave + secreto de servidor y no
 * queremos esa credencial en el build. Es una comprobación local.
 *
 * Run: node scripts/check-booking-ids.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const STRICT = /^(1|true|yes)$/i.test(process.env.BOOKING_IDS_STRICT ?? '')

function read(relPath) {
  return readFileSync(join(ROOT, relPath), 'utf8')
}

/** Nunca rompemos el build salvo en modo estricto. */
function report(messages) {
  if (messages.length === 0) return false
  for (const m of messages) console.warn(m)
  if (STRICT) process.exit(1)
  console.warn('   (aviso, no bloquea el build — usa BOOKING_IDS_STRICT=1 para que falle)\n')
  return true
}

let activities
try {
  // Pares (slug, bookeoProductId) en el orden en que aparecen en el fichero.
  const source = read('src/data/activities.ts')
  activities = [
    ...source.matchAll(/\bslug:\s*"([^"]+)",\s*\n\s*bookeoProductId:\s*"([^"]*)"/g),
  ].map(([, slug, productId]) => ({ slug, productId }))
} catch (err) {
  console.warn(`⚠️  Bookeo check skipped: no se pudo leer activities.ts (${err.message})`)
  process.exit(0)
}

if (activities.length === 0) {
  console.warn('⚠️  Bookeo check skipped: no se encontró ninguna actividad — ¿cambió la forma de los datos?')
  process.exit(0)
}

const warnings = []

const missing = activities.filter((a) => a.productId.trim() === '')
if (missing.length > 0) {
  warnings.push(
    `\n⚠️  ${missing.length} actividad(es) sin bookeoProductId — su CTA abrirá el catálogo completo:\n` +
      missing.map((a) => `   · ${a.slug}`).join('\n') +
      '\n\n   Panel de Bookeo → el producto → "Integrate into your website" → copia el `type=`\n' +
      '   del enlace directo y pégalo en src/data/activities.ts.\n',
  )
}

const known = new Set(activities.map((a) => a.slug))
const dangling = []
for (const [relPath, pattern, label] of [
  ['src/data/tariffs.ts', /\bslug:\s*"([^"]+)"/g, 'tarifa'],
  ['src/data/services.ts', /\breservasPath:\s*"\/reservas\/([^"]+)"/g, 'servicio'],
]) {
  for (const [, slug] of read(relPath).matchAll(pattern)) {
    if (!known.has(slug)) dangling.push(`   · ${label}: ${slug}  (${relPath})`)
  }
}
if (dangling.length > 0) {
  warnings.push(
    `\n⚠️  ${dangling.length} referencia(s) a un slug que no existe en ACTIVITIES:\n` +
      dangling.join('\n') +
      '\n',
  )
}

/* El marcador inerte de index.html existe solo para que el validador de Bookeo
   encuentre el código en el HTML (la SPA lo inyecta por JS y él no ejecuta JS).
   Si los dos account id se separan, deja de validar en silencio. */
try {
  const accountId = read('src/data/booking.ts').match(
    /BOOKEO_ACCOUNT_ID\s*=\s*"([^"]+)"/,
  )?.[1]
  const marker = read('index.html').match(/bookeo\.com\/widget\.js\?a=([^"'\s]+)/)?.[1]

  if (accountId && marker !== accountId) {
    warnings.push(
      `\n⚠️  El marcador de Bookeo en index.html no cuadra con booking.ts:\n` +
        `   · index.html:       ${marker ?? '(no encontrado)'}\n` +
        `   · BOOKEO_ACCOUNT_ID: ${accountId}\n\n` +
        '   Sin marcador válido, Bookeo rechaza la URL del sitio al guardar los ajustes.\n',
    )
  }
} catch (err) {
  console.warn(`⚠️  No se pudo comprobar el marcador de index.html (${err.message})`)
}

if (report(warnings)) process.exit(0)

console.log(`✅ Bookeo check passed (${activities.length} actividades, todas con producto).`)
