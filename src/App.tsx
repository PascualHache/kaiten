import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Equipo from './pages/Equipo'
import Reservas from './pages/Reservas'
import Tarifas from './pages/Tarifas'
import Niveles from './pages/Niveles'
import FAQ from './pages/FAQ'
import AvisoLegal from './pages/AvisoLegal'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import Cookies from './pages/Cookies'
import ScrollToTop from './components/ScrollToTop'
import WorkInProgress from './pages/WorkInProgress'
import './App.css'

const isDev = localStorage.getItem('dev') === 'true'

function App() {
  if (!isDev) {
    return <WorkInProgress />
  }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
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
    </Router>
  )
}

export default App
