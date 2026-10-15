import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Reservas from './pages/Reservas'
import Tarifas from './pages/Tarifas'
import Niveles from './pages/Niveles'
import FAQ from './pages/FAQ'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppPill from './components/WhatsAppPill'
import NotFound from './pages/NotFound'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import './App.css'

/* Las legales van aparte: su texto, multiplicado por los tres idiomas, pesa
   más que el resto de la web junta y casi nadie las abre. */
const AvisoLegal = lazy(() => import('./pages/AvisoLegal'))
const Terminos = lazy(() => import('./pages/Terminos'))
const Privacidad = lazy(() => import('./pages/Privacidad'))
const Cookies = lazy(() => import('./pages/Cookies'))

/* La navbar vive fuera de [data-main] para que el fundido de entrada de cada
 * página no la arrastre: se queda fija mientras el contenido entra. */
function Shell() {
  const rootRef = useScrollAnimations()

  return (
    <div ref={rootRef}>
      <ScrollToTop />
      <Navbar />
      <div data-main="">
        {/* Sin pantalla de carga: los trozos diferidos son solo las legales y
            llegan en un parpadeo; un spinner ahí molestaría más que ayudar. */}
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/niveles" element={<Niveles />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* Comodín: sin esto, el rewrite de Vercel deja cualquier URL
                inventada en una página en blanco con estado 200 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <WhatsAppPill />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Shell />
    </Router>
  )
}

export default App
