import { useEffect } from 'react'
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom'
import * as Sentry from '@sentry/react'

/**
 * Arranque de Sentry.
 *
 * Este fichero se importa el PRIMERO en main.tsx y llama a `Sentry.init()` al
 * evaluarse el módulo. No vale con exportar una función y llamarla desde
 * main.tsx: los imports se izan, así que App, i18n y compañía se ejecutarían
 * antes y sus errores de carga se perderían.
 *
 * Sin `VITE_SENTRY_DSN` no se inicializa nada: en `npm run dev` y en los forks
 * sin credenciales la web funciona igual y no se ensucia el proyecto de Sentry
 * con errores de desarrollo. El DSN es público por diseño (viaja en el
 * bundle), así que no es un secreto, pero sí es específico de este proyecto.
 *
 * Sin Session Replay a propósito: medido, añade ~42 KB gzip sobre los ~62 que
 * ya pesa el SDK. Si algún día hace falta, con `Sentry.lazyLoadIntegration`,
 * nunca en el bundle (ver CLAUDE.md > Performance).
 */
const dsn = import.meta.env.VITE_SENTRY_DSN

if (dsn) {
  Sentry.init({
    dsn,
    // `production` / `preview` en Vercel; en local, `development`.
    environment: import.meta.env.VITE_SENTRY_ENVIRONMENT ?? import.meta.env.MODE,
    // SHA del commit desplegado; sin él, Sentry agrupa todo como "unknown".
    release: import.meta.env.VITE_SENTRY_RELEASE,

    integrations: [
      /* La variante de React Router v7 nombra las transacciones por patrón de
         ruta (`/reservas`) en vez de por URL, de modo que las fichas con
         `?actividad=` no se dispersan en mil transacciones distintas. */
      Sentry.reactRouterV7BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
    ],

    // Web de marketing con poco tráfico: muestrear todo sigue siendo barato y
    // da datos fiables. Si crece, bajar aquí antes que en los errores.
    tracesSampleRate: 1.0,

    /* El widget de Bookeo es de terceros y mete scripts en la página: sus
       errores no los podemos arreglar y ahogarían los nuestros. */
    ignoreErrors: [
      'ResizeObserver loop limit exceeded',
      'ResizeObserver loop completed with undelivered notifications',
    ],
    denyUrls: [/bookeo\.com/, /widget\.js$/],
  })
}
