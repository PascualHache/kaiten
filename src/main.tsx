import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/ds/styles.css'
import './index.css'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { LanguageProvider } from './i18n'

/* El proveedor de idioma envuelve al ErrorBoundary, no al revés: así la
   pantalla de error también sale en el idioma del visitante. */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </LanguageProvider>
  </StrictMode>,
)
