/*
 * Revisa `vercel.json` antes de que lo haga Vercel.
 *
 * Vercel valida el fichero contra su esquema **antes de construir**, así que un
 * error aquí no rompe el build: impide que llegue a empezar, y solo te enteras
 * cuando el despliegue ya ha fallado. Pasó con unas claves `_comment` metidas a
 * mano para documentar dos reglas: JSON no admite comentarios y el esquema de
 * Vercel declara `additionalProperties: false`.
 *
 * No reimplementa el esquema —para eso está el de verdad, y pide red—, solo
 * caza esa clase de fallo: JSON mal formado y claves inventadas tipo comentario.
 * Lo que haya que explicar va en CLAUDE.md, no dentro del fichero.
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const FILE = join(dirname(fileURLToPath(import.meta.url)), '..', 'vercel.json')

let config
try {
  config = JSON.parse(readFileSync(FILE, 'utf8'))
} catch (err) {
  console.error(`\n✖ vercel.json no es JSON válido: ${err.message}\n`)
  process.exit(1)
}

/** Toda clave que empiece por `_`, a cualquier profundidad, con su ruta. */
function fakeComments(value, path = '') {
  if (Array.isArray(value)) return value.flatMap((v, i) => fakeComments(v, `${path}[${i}]`))
  if (value === null || typeof value !== 'object') return []
  return Object.entries(value).flatMap(([key, v]) =>
    key.startsWith('_')
      ? [`${path}.${key}`]
      : fakeComments(v, `${path}.${key}`),
  )
}

const found = fakeComments(config)
if (found.length > 0) {
  console.error(
    `\n✖ vercel.json tiene ${found.length} clave(s) que Vercel rechazará:\n` +
      found.map((p) => `   · ${p.replace(/^\./, '')}`).join('\n') +
      `\n\n   JSON no admite comentarios y el esquema de Vercel no permite claves\n` +
      `   extra. Quítalas y documenta la regla en CLAUDE.md.\n`,
  )
  process.exit(1)
}
