import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
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
    </nav>
  )
}
