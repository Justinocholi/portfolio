import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/navbar.css'

export default function Navbar() {
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    const saved = localStorage.getItem('theme') as 'light'|'dark'|null
    return saved ?? 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

  return (
    <nav className="nav">
      <NavLink to="/" className="logo">Joshua Ocholi Eleojo</NavLink>
      <ul className="nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
        <li><NavLink to="/artist" className={({ isActive }) => isActive ? 'active' : ''}>Artist</NavLink></li>
        <li><NavLink to="/digital" className={({ isActive }) => isActive ? 'active' : ''}>Digital</NavLink></li>
        <li><NavLink to="/development" className={({ isActive }) => isActive ? 'active' : ''}>Development</NavLink></li>
        <li><NavLink to="/social" className={({ isActive }) => isActive ? 'active' : ''}>Social</NavLink></li>
        <li><NavLink to="/website" className={({ isActive }) => isActive ? 'active' : ''}>Website</NavLink></li>
      </ul>
      <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
        {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
      </button>
    </nav>
  )
}
