import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Valores from './pages/Valores'
// import Equipo from './pages/Equipo' // oculto temporalmente
import Reservas from './pages/Reservas'
import Tarifas from './pages/Tarifas'
import Niveles from './pages/Niveles'
import WorkInProgress from './pages/WorkInProgress'
import './App.css'

const isDev = localStorage.getItem('dev') === 'true'

function App() {
  if (!isDev) {
    return <WorkInProgress />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/valores" element={<Valores />} />
        {/* <Route path="/equipo" element={<Equipo />} /> */}
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/tarifas" element={<Tarifas />} />
        <Route path="/niveles" element={<Niveles />} />
      </Routes>
    </Router>
  )
}

export default App
