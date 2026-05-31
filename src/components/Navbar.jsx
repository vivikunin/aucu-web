import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
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
    <header className="site-menu">
      <button className="menu-trigger" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir navegacion" aria-expanded={open}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu-band"
            aria-label="Navegacion principal"
            initial={{ opacity: 0, y: -28, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, y: -18, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-band-inner">
              {navItems.map((item) => (
                <NavLink key={item.href} to={item.href} className={({ isActive }) => `menu-link ${isActive ? 'menu-link-active' : ''}`} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <a className="menu-link menu-link-primary" href={externalLinks.affiliationForm} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                Afiliarse
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
