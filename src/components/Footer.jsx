import { Mail, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './InstagramIcon'
import { externalLinks, organization } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-white/12 bg-aucu-blue-dark">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-100 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-white">{organization.name}</p>
          <p className="text-slate-300">{organization.fullName}</p>
          <p className="footer-credit">Diseño y desarrollo web por Viviane Kunin</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="footer-link" href="mailto:aucu2017@gmail.com">
            <Mail size={16} />
            aucu2017@gmail.com
          </a>
          <a className="footer-link" href={externalLinks.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon size={16} />
            Instagram
          </a>
          <a className="footer-link" href={externalLinks.tiktok} target="_blank" rel="noreferrer">
            <span className="text-sm font-black leading-none">♪</span>
            TikTok
          </a>
          <a className="footer-link" href={externalLinks.x} target="_blank" rel="noreferrer">
            <span className="text-sm font-black leading-none">X</span>
            Twitter
          </a>
          <a className="footer-link" href={externalLinks.whatsappChannel} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}
