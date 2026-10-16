/* Primero del todo: Sentry.init() tiene que correr antes de que se evalúe
   cualquier otro módulo de la aplicación. */
import './instrument'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { reactErrorHandler } from '@sentry/react'
import './styles/ds/styles.css'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { LanguageProvider } from './i18n'

/* Los tres manejadores de React 19: sin ellos, los errores que React captura
   por dentro (los que absorbe el ErrorBoundary, los de hidratación) no llegan
   nunca a Sentry. `onCaughtError` cubre ya el ErrorBoundary de abajo. */
createRoot(document.getElementById('root')!, {
  onUncaughtError: reactErrorHandler(),
  onCaughtError: reactErrorHandler(),
  onRecoverableError: reactErrorHandler(),
}).render(
  /* El proveedor de idioma envuelve al ErrorBoundary, no al revés: así la
     pantalla de error también sale en el idioma del visitante. */
  <StrictMode>
    <LanguageProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </LanguageProvider>
  </StrictMode>,
)
