import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Website from './pages/Website'
import Artist from './pages/Artist'
import Digital from './pages/Digital'
import Development from './pages/Development'
import Social from './pages/Social'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website" element={<Website />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/development" element={<Development />} />
        <Route path="/social" element={<Social />} />
        {/* Fallback to home for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
