import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <NavLink to="/" className="logo">Joshua Ocholi Eleojo</NavLink>
      <button className="hamburger" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/artist" className={({ isActive }) => isActive ? 'active' : ''}>Artist</NavLink></li>
        <li><NavLink to="/digital" className={({ isActive }) => isActive ? 'active' : ''}>Digital</NavLink></li>
        <li><NavLink to="/development" className={({ isActive }) => isActive ? 'active' : ''}>Development</NavLink></li>
        <li><NavLink to="/social" className={({ isActive }) => isActive ? 'active' : ''}>Social</NavLink></li>
        <li><NavLink to="/website" className={({ isActive }) => isActive ? 'active' : ''}>Website</NavLink></li>
      </ul>
    </nav>
  )
}
