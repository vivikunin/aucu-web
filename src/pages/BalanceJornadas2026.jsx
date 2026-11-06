import { ArrowLeft, Download, FileText } from 'lucide-react'
import { Button } from '../components/Button'
import { EventMetaPills } from '../components/EventMetaPills'
import { balance2026 } from '../data/balance2026'
import { event } from '../data/site'

export function BalanceJornadas2026() {
  return (
    <div className="page-frame balance-report-page">
      <section className="balance-report-hero">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <p className="eyebrow">Informe completo · Jornadas 2026</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            {balance2026.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{balance2026.headline}</p>
          <EventMetaPills
            dateLabel={event.dateLabel}
            city={event.location.city}
            className="event-meta-report mt-8"
            iconSize={18}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={event.balance.pdf} download="Balance Jornadas 2026.pdf">
              <Download aria-hidden="true" size={18} />
              Descargar PDF
            </Button>
            <Button href="/jornadas" variant="secondary">
              <ArrowLeft aria-hidden="true" size={18} />
              Volver a Jornadas
            </Button>
          </div>
        </div>
      </section>

      <div className="balance-report-layout">
        <aside className="balance-report-index" aria-label="Contenido del informe">
          <p className="eyebrow">Índice del informe</p>
          <details open>
            <summary>Mostrar u ocultar las secciones</summary>
            <nav>
              <ol>
                {balance2026.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#balance-section-${index + 1}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </details>
        </aside>

        <article className="balance-report-article">
          <header className="balance-report-intro">
            <FileText aria-hidden="true" size={30} />
            <p>{balance2026.standfirst}</p>
            <time dateTime="2026-10-27">{balance2026.date}</time>
          </header>

          {balance2026.sections.map((section, index) => (
            <section id={`balance-section-${index + 1}`} className="balance-report-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <section className="balance-report-about">
            <p className="eyebrow">Sobre AUCU</p>
            <h2>Asociación Uruguaya de Consumidores Unidos</h2>
            <p>{balance2026.about}</p>
            <address>
              <a href={`https://${balance2026.contact.website}`}>{balance2026.contact.website}</a>
              <a href={`mailto:${balance2026.contact.email}`}>{balance2026.contact.email}</a>
              <a href="https://www.instagram.com/aucu.uy/">{balance2026.contact.instagram}</a>
            </address>
          </section>

          <div className="balance-report-end-actions">
            <Button href={event.balance.pdf} download="Balance Jornadas 2026.pdf">
              <Download aria-hidden="true" size={18} />
              Descargar balance en PDF
            </Button>
            <Button href="/jornadas" variant="secondary">
              <ArrowLeft aria-hidden="true" size={18} />
              Volver a Jornadas
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
