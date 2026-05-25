import { Camera, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { externalLinks } from '../data/site'
import { Button } from './Button'
import { LogoMark } from './LogoMark'

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'Jornadas', href: '/jornadas' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark compact className="h-12 w-36 object-contain" />
        </NavLink>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <a className="instagram-nav-button" href={externalLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram AUCU">
            <Camera size={19} />
            Instagram
          </a>
          <Button href={externalLinks.affiliationForm}>Afiliarse</Button>
        </div>
        <button className="icon-button md:hidden" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir navegacion">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href={externalLinks.affiliationForm} className="w-full">Afiliarse</Button>
          </div>
        </div>
      )}
    </header>
  )
}
