/*
 * Descarga las tipografías de Google Fonts a src/assets/fonts y genera
 * src/fonts.css con los @font-face apuntando a los archivos locales.
 *
 * Por qué autoalojar: la hoja de fonts.googleapis.com costaba un preconnect +
 * petición a un tercero antes de poder ni pedir los .woff2 (Lighthouse la
 * marcaba como render-blocking, ~330 ms). Sirviéndolas desde el mismo origen
 * desaparecen los dos viajes y los archivos entran en el hash de Vite, así que
 * se cachean como inmutables.
 *
 * Solo se guardan los subconjuntos `latin` y `latin-ext`: la web es ES/CAT/EN.
 * Cirílico, griego y vietnamita no se descargaban nunca en la práctica (el
 * unicode-range lo evitaba), pero tampoco tiene sentido versionarlos.
 *
 * Caras: Inter va en su versión variable (un archivo cubre 400–700); Poppins
 * no tiene variable en Google Fonts, así que van las cuatro estáticas que usa
 * el sitio más la cursiva 600 (la única, en .nos__slogan). Inter cursiva NO se
 * incluye a propósito: tampoco se pedía antes, así que la cursiva de
 * .review-card__text la sigue sintetizando el navegador, igual que hasta ahora.
 *
 * Uso: node scripts/fetch-fonts.mjs
 */
import { writeFile, mkdir } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = join(ROOT, 'src/assets/fonts')
const CSS_PATH = join(ROOT, 'src/fonts.css')

const SUBSETS = ['latin', 'latin-ext']
const API =
  'https://fonts.googleapis.com/css2?family=Inter:wght@400..700' +
  '&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap'

/* Google sirve woff2 solo si el User-Agent le parece un navegador moderno; con
   el de Node devuelve ttf, que pesa el triple. */
const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 ' +
  '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'

const res = await fetch(API, { headers: { 'User-Agent': UA } })
if (!res.ok) throw new Error(`Google Fonts respondió ${res.status}`)
const css = await res.text()

/* Cada bloque viene precedido de un comentario con el nombre del subconjunto:
   /* latin *\/ @font-face { ... }  — es la única forma de saber cuál es cuál. */
const blocks = [...css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)]
const field = (block, name) =>
  block.match(new RegExp(`${name}:\\s*([^;]+);`))?.[1].trim()

await mkdir(OUT_DIR, { recursive: true })
const rules = []

for (const [, subset, block] of blocks) {
  if (!SUBSETS.includes(subset)) continue

  const family = field(block, 'font-family').replace(/['"]/g, '')
  const style = field(block, 'font-style')
  const weight = field(block, 'font-weight')
  const range = field(block, 'unicode-range')
  const url = block.match(/url\((https:[^)]+\.woff2)\)/)?.[1]
  if (!url) continue

  const file = `${family.toLowerCase()}-${subset}-${weight.replace(/\s+/g, '-')}-${style}.woff2`
  const bytes = Buffer.from(await (await fetch(url)).arrayBuffer())
  await writeFile(join(OUT_DIR, file), bytes)
  console.log(`✓  ${file} — ${(bytes.length / 1024).toFixed(0)} KB`)

  rules.push(
    `/* ${subset} */\n@font-face {\n` +
      `  font-family: "${family}";\n` +
      `  font-style: ${style};\n` +
      `  font-weight: ${weight};\n` +
      `  font-display: swap;\n` +
      `  src: url("./assets/fonts/${file}") format("woff2");\n` +
      `  unicode-range: ${range};\n}`,
  )
}

const header =
  '/* GENERADO por scripts/fetch-fonts.mjs — no editar a mano.\n' +
  '   Se importa desde index.css, así que entra en el CSS principal (ya de\n' +
  '   primera parte) y los .woff2 salen con hash y cacheables para siempre.\n' +
  '   Para actualizar versiones de las familias, vuelve a pasar el script. */\n\n'

await writeFile(CSS_PATH, header + rules.join('\n\n') + '\n')
console.log(`\n${rules.length} @font-face → src/fonts.css`)
