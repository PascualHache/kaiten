import { createRequire } from 'node:module'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'
import seo from './scripts/vite-plugin-seo.mjs'

/* El nombre del release es la versión de package.json, no el SHA del commit:
   en Sentry se lee `kaiten@1.0.0` en vez de un hash recortado a 12 caracteres.
   El formato `paquete@versión` es el que Sentry entiende como semver, así que
   ordena los releases por versión y no por fecha. Contrapartida: la versión
   solo cambia cuando se cambia a mano (`npm version patch|minor|major`), así
   que hasta entonces todos los despliegues comparten release — para separar
   un build concreto, exportar `VITE_SENTRY_RELEASE`, que sigue mandando. */
const require = createRequire(import.meta.url)
const { name, version } = require('./package.json')
const release = process.env.VITE_SENTRY_RELEASE || `${name}@${version}`

/* Vercel la expone en el build, pero sin prefijo VITE_, así que Vite no la
   inyectaría sola. `VERCEL_ENV` separa producción de los despliegues de vista
   previa: sin esto, cada rama suelta sus errores en el mismo cajón que
   kaitenski.com. En local cae a undefined y manda `import.meta.env.MODE`. */
const environment = process.env.VERCEL_ENV

/* Los source maps solo se generan (y se suben) cuando hay token: sin él, el
   build local sigue siendo igual de rápido y no se publica nada en /dist.
   El plugin borra los .map tras subirlos, así que el código no queda expuesto. */
const uploadSourcemaps = Boolean(
  process.env.SENTRY_AUTH_TOKEN && process.env.SENTRY_ORG && process.env.SENTRY_PROJECT,
)

// https://vite.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_SENTRY_RELEASE': JSON.stringify(release),
    'import.meta.env.VITE_SENTRY_ENVIRONMENT': JSON.stringify(environment),
  },
  build: {
    sourcemap: uploadSourcemaps ? 'hidden' : false,
    rollupOptions: {
      output: {
        /* Sentry en su propio chunk: son ~60 KB gzip que, dentro del chunk
           principal, lo sacaban del presupuesto de 150 KB (ver CLAUDE.md >
           Performance). Aparte, además, se cachea entre despliegues: el SDK
           no cambia cuando cambia la web. Sigue cargándose antes que la app,
           porque main.tsx importa ./instrument el primero. */
        manualChunks(id) {
          if (id.includes('node_modules/@sentry')) return 'sentry'
        },
      },
    },
  },
  plugins: [
    /* Un HTML por ruta con su <title>, su canonical, su tarjeta social y su
       JSON-LD, más sitemap.xml y robots.txt. Va el primero por orden de
       lectura: se ejecuta en closeBundle, después de que Vite escriba dist. */
    seo(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    uploadSourcemaps &&
      sentryVitePlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        // Misma release que la del SDK, o los mapas no casarían con el evento.
        release: { name: release },
        sourcemaps: { filesToDeleteAfterUpload: ['./dist/**/*.map'] },
      }),
  ].filter(Boolean),
})
