import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NosotrosSwitch from './pages/NosotrosSwitch'
import Equipo from './pages/Equipo'
import Reservas from './pages/Reservas'
import Tarifas from './pages/Tarifas'
import Niveles from './pages/Niveles'
import FAQ from './pages/FAQ'
import AvisoLegal from './pages/AvisoLegal'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import Cookies from './pages/Cookies'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import WorkInProgress from './pages/WorkInProgress'
import { useScrollAnimations } from './hooks/useScrollAnimations'
import './App.css'

const isDev = localStorage.getItem('dev') === 'true'

/* La navbar vive fuera de [data-main] para que el fundido de entrada de cada
 * página no la arrastre: se queda fija mientras el contenido entra. */
function Shell() {
  const rootRef = useScrollAnimations()

  return (
    <div ref={rootRef}>
      <ScrollToTop />
      <Navbar />
      <div data-main="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<NosotrosSwitch />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/niveles" element={<Niveles />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  if (!isDev) {
    return <WorkInProgress />
  }

  return (
    <Router>
      <Shell />
    </Router>
  )
}

export default App
