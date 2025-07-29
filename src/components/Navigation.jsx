import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <NavLink to="/bio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          BIO
        </NavLink>
        <NavLink to="/theatre" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          THEATRE
        </NavLink>
        <NavLink to="/cinema" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          CINEMA
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          CONTACT
        </NavLink>
      </div>
    </nav>
  )
}

export default Navigation 