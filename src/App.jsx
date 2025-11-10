import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contactar from './pages/Contactar'
import Reservas from './pages/Reservas'
import WorkInProgress from './pages/WorkInProgress'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/work-in-progress" replace />} />
            <Route path="/work-in-progress" element={<WorkInProgress />} />
            <Route path="/contactar" element={<Contactar />} />
            <Route path="/reservas" element={<Reservas />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
