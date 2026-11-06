import { CalendarDays, Download, FileText } from 'lucide-react'
import { Agenda } from '../components/Agenda'
import { AnimatedSection } from '../components/AnimatedSection'
import { AssetImage } from '../components/AssetImage'
import { Button } from '../components/Button'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { EventMetaPills } from '../components/EventMetaPills'
import { ImageCarousel } from '../components/ImageCarousel'
import { InfoPanel } from '../components/InfoPanel'
import { LocationPanel } from '../components/LocationPanel'
import { SectionHeading } from '../components/SectionHeading'
import { SpeakerCard } from '../components/SpeakerCard'
import { SupportLogo } from '../components/SupportLogo'
import mecDeclarationLogo from '../assets/Logo MEC_Declarado de interés ministerial - 2025 color.png'
import { assets, event } from '../data/site'

export function Jornadas() {
  const speakerRemainder = event.speakers.length % 3

  const getSpeakerClassName = (index) => {
    if (speakerRemainder === 1 && index === event.speakers.length - 1) {
      return 'md:col-span-2 md:col-start-3'
    }

    if (speakerRemainder === 2 && index === event.speakers.length - 2) {
      return 'md:col-span-2 md:col-start-2'
    }

    return 'md:col-span-2'
  }

  const supportRemainder = event.supports.length % 4

  const getSupportClassName = (index) => {
    if (supportRemainder === 1 && index === event.supports.length - 1) {
      return 'lg:col-span-2 lg:col-start-4'
    }

    if (supportRemainder === 2 && index === event.supports.length - 2) {
      return 'lg:col-span-2 lg:col-start-3'
    }

    if (supportRemainder === 3 && index === event.supports.length - 3) {
      return 'lg:col-span-2 lg:col-start-2'
    }

    return 'lg:col-span-2'
  }

  return (
    <div className="page-frame jornadas-page">
      <DecorativeBubbles />
      <section className="relative overflow-hidden bg-aucu-blue-dark">
        <div className="absolute inset-0 opacity-18">
          <AssetImage
            src={assets.banner}
            alt=""
            className="h-full w-full"
            imgClassName="h-full w-full object-cover"
            fallback={<div className="h-full w-full bg-aucu-blue-dark" />}
          />
        </div>
        <div className="event-hero-grid relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-24">
          <div className="min-w-0">
            <p className="eyebrow">Edición 2026</p>
            <h1 className="mt-4 break-words text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{event.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{event.intro}</p>
            <EventMetaPills
              dateLabel={event.dateLabel}
              city={event.location.city}
              className="event-meta-jornadas mt-8"
              iconSize={19}
            />
          </div>
          <div className="event-stats" aria-label="Cifras de las Jornadas 2026">
            {event.stats.map((stat) => (
              <div className="event-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell event-balance-section">
        <div className="event-balance-copy">
          <SectionHeading eyebrow="Balance de la edición" title="Así fueron nuestras Jornadas 2026" />
          <p>{event.balance.lead}</p>
          <p>{event.balance.conclusion}</p>
        </div>
        <div className="grid min-w-0 gap-5">
          <div>
            <p className="eyebrow">Conocé más</p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-white">Recorré cada día de las Jornadas</h3>
          </div>
          <div className="event-recap-list">
            {event.balance.days.map((day) => (
              <details className="event-recap" key={day.date}>
                <summary>
                  <span>{day.date}</span>
                  <strong>{day.title}</strong>
                </summary>
                <p>{day.text}</p>
              </details>
            ))}
          </div>
          <Button href={event.balance.page} className="w-fit">
            <FileText aria-hidden="true" size={18} />
            Leer el balance completo
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell !pt-0">
        <SectionHeading eyebrow="Registro de la edición" title="Sedes y reconocimientos institucionales" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
          <LocationPanel location={event.location} />

          <div className="grid gap-4">
            <article className="info-panel flex flex-col justify-center !p-4">
              <div className="grid gap-4">
                <img
                  src={mecDeclarationLogo}
                  alt="MEC - Declarado de interés ministerial"
                  className="mx-auto h-auto w-full max-w-md"
                />
              </div>
              <div className="flex items-center justify-center pt-2">
                <Button
                  href="/assets/declaracion-interes-ministerial-mec.pdf"
                  className="w-full max-w-sm px-6 py-3 text-center"
                >
                  Abrir declaración del MEC
                </Button>
              </div>
            </article>

            <article className="info-panel flex flex-col justify-center !p-4">
              <div className="flex flex-col items-center justify-center py-2 text-center">
                <img
                  src="/assets/logo-presidencia.png"
                  alt="Presidencia Uruguay - Secretaría Administrativa"
                  className="h-auto w-full max-w-sm"
                />
              </div>
              <div className="flex items-center justify-center pt-2">
                <Button
                  href="/assets/declaracion-interes-presidencial.pdf"
                  className="w-full max-w-sm px-6 py-3 text-center"
                >
                  Abrir declaración de Presidencia
                </Button>
              </div>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <InfoPanel
          icon={CalendarDays}
          iconClassName="bg-aucu-blue/15 text-aucu-blue-dark"
          title="Programa"
          className="w-full"
          headerAction={
            <Button href="/assets/Programa%20AUCU.pdf" download="Programa AUCU.pdf">
              <Download aria-hidden="true" size={18} />
              Descargar programa
            </Button>
          }
        >
          <Agenda days={event.agenda} locations={event.location.locations} />
        </InfoPanel>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <SectionHeading title="Expositores destacados" />
        <div className="mt-8 grid gap-4 md:grid-cols-6">
          {event.speakers.map((speaker, index) => (
            <SpeakerCard
              speaker={speaker}
              key={speaker.name}
              className={getSpeakerClassName(index)}
            />
          ))}
        </div>
      </AnimatedSection>

      {event.gallery.length > 0 && (
        <AnimatedSection className="section-shell">
          <SectionHeading eyebrow="Registro fotográfico" title="Galería de las Jornadas 2026" />
          <ImageCarousel
            images={event.gallery}
            title="Galería de las Jornadas 2026"
            className="event-gallery-carousel"
          />
        </AnimatedSection>
      )}

      <AnimatedSection className="section-shell">
        <SectionHeading title="Apoyan" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-8">
          {event.supports.map((support, index) => (
            <SupportLogo
              name={support.name}
              logo={support.logo}
              url={support.url}
              key={support.name}
              className={getSupportClassName(index)}
            />
          ))}
        </div>
      </AnimatedSection>
    </div>
  )
}
