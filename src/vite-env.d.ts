/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** DSN público de Sentry. Vacío = monitorización apagada (ver src/sentry.ts). */
  readonly VITE_SENTRY_DSN?: string
  /** SHA del commit desplegado, para agrupar errores por versión. */
  readonly VITE_SENTRY_RELEASE?: string
  /** `production` o `preview` en Vercel; en local cae a MODE. */
  readonly VITE_SENTRY_ENVIRONMENT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
