import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Historia from './pages/Historia'
import Valores from './pages/Valores'
import Equipo from './pages/Equipo'
import Reservas from './pages/Reservas'
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
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </Router>
  )
}

export default App
