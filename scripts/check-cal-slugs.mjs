/**
 * Build-time check: every calSlug we link to should exist as a Cal.com event type.
 *
 * A typo in activities.ts / tariffs.ts produces a booking modal that loads a
 * 404 inside the iframe — invisible in our own build until a customer hits it.
 *
 * Por defecto AVISA pero no rompe el build: un slug pendiente de crear en
 * Cal.com no puede bloquear un deploy. Para que falle (CI de QA, pre-release),
 * exporta CAL_SLUGS_STRICT=1.
 *
 * Needs CAL_API_KEY (Cal.com → Settings → Developer → API keys). Without it,
 * or if Cal is unreachable, the check is skipped.
 *
 * Run: node scripts/check-cal-slugs.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const CAL_USERNAME = 'aitor-bellver-abenoza-ofg9rm'
const API_URL = 'https://api.cal.com/v2/event-types'
const API_VERSION = '2024-06-14'
const STRICT = /^(1|true|yes)$/i.test(process.env.CAL_SLUGS_STRICT ?? '')

/** Reads `calSlug: "..."` / `slug: "..."` out of a data file. */
function readSlugs(relPath, key) {
  const source = readFileSync(join(ROOT, relPath), 'utf8')
  return [...source.matchAll(new RegExp(`\\b${key}:\\s*"([^"]+)"`, 'g'))].map((m) => m[1])
}

function skip(reason) {
  console.warn(`⚠️  Cal.com slug check skipped: ${reason}`)
  process.exit(0)
}

/** Nunca rompemos el build salvo en modo estricto. */
function fail(message) {
  if (STRICT) {
    console.error(message)
    process.exit(1)
  }
  console.warn(message)
  console.warn('   (aviso, no bloquea el build — usa CAL_SLUGS_STRICT=1 para que falle)\n')
  process.exit(0)
}

const apiKey = process.env.CAL_API_KEY
if (!apiKey) skip('CAL_API_KEY is not set')

let ours
try {
  ours = new Set([
    ...readSlugs('src/data/activities.ts', 'calSlug'),
    ...readSlugs('src/data/tariffs.ts', 'slug'),
  ])
} catch (err) {
  skip(`could not read slug data (${err.message})`)
}
if (ours.size === 0) skip('no slugs found in src/data/ — ¿cambió la forma de los datos?')

let eventTypes
try {
  const res = await fetch(`${API_URL}?username=${CAL_USERNAME}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'cal-api-version': API_VERSION,
    },
  })
  if (!res.ok) skip(`Cal.com API returned ${res.status} ${res.statusText}`)
  const body = await res.json()
  eventTypes = body?.data
  if (!Array.isArray(eventTypes)) skip('unexpected API response shape')
} catch (err) {
  skip(`could not reach Cal.com (${err.message})`)
}

const theirs = new Set(eventTypes.map((e) => e.slug))
const missing = [...ours].filter((slug) => !theirs.has(slug)).sort()

if (missing.length > 0) {
  fail(
    `\n⚠️  ${missing.length} slug(s) have no matching Cal.com event type for "${CAL_USERNAME}":\n` +
      missing.map((s) => `   · ${s}`).join('\n') +
      `\n\n   Cal.com currently publishes:\n` +
      [...theirs].sort().map((s) => `   · ${s}`).join('\n') +
      '\n\n   Fix the slug in src/data/ or create the event type in Cal.com.\n',
  )
}

const unused = [...theirs].filter((slug) => !ours.has(slug)).sort()
if (unused.length > 0) {
  console.warn(`ℹ️  Cal.com event types not linked from the site: ${unused.join(', ')}`)
}

console.log(`✅ Cal.com slug check passed (${ours.size} slugs).`)
