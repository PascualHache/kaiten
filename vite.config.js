import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sentryVitePlugin } from '@sentry/vite-plugin'

/* Vercel expone estas dos en el build, pero sin prefijo VITE_, así que Vite no
   las inyectaría solo. `VERCEL_ENV` separa producción de los despliegues de
   vista previa: sin esto, cada rama suelta sus errores en el mismo cajón que
   kaitenski.com. En local caen a undefined y manda `import.meta.env.MODE`. */
const release = process.env.VITE_SENTRY_RELEASE || process.env.VERCEL_GIT_COMMIT_SHA
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
