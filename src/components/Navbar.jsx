import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { externalLinks } from '../data/site'

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Jornadas', href: '/jornadas' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed right-4 top-4 z-50">
      <button className="menu-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir navegacion" aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav className="menu-popover" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => `menu-link ${isActive ? 'menu-link-active' : ''}`} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <a className="menu-link menu-link-primary" href={externalLinks.affiliationForm} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Afiliarse
          </a>
        </nav>
      )}
    </header>
  )
}
