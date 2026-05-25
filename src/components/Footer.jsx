import { Camera, Mail } from 'lucide-react'
import { externalLinks, organization } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-[#142d49]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-blue-50 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-white">{organization.name}</p>
          <p className="text-blue-100">{organization.fullName}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="footer-link" href="mailto:contacto@aucu.org.uy">
            <Mail size={16} />
            contacto@aucu.org.uy
          </a>
          <a className="footer-link" href={externalLinks.instagram} target="_blank" rel="noreferrer">
            <Camera size={16} />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
