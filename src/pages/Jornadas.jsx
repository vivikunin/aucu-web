import { CalendarDays, ClipboardCheck, MapPin, UserRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { AssetImage } from '../components/AssetImage'
import { Button } from '../components/Button'
import { Countdown } from '../components/Countdown'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { assets, event, externalLinks } from '../data/site'

function SpeakerFallback({ name }) {
  return (
    <div className="flex h-44 items-center justify-center bg-slate-100 text-aucu-blue-dark">
      <div className="text-center">
        <UserRound className="mx-auto" size={34} />
        <p className="mt-2 text-sm font-bold">{name}</p>
      </div>
    </div>
  )
}

export function Jornadas() {
  return (
    <div className="page-frame">
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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-24">
          <div>
            <p className="eyebrow">AUCU Jornadas</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{event.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{event.intro}</p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-white sm:grid-cols-2">
              <span className="pill-on-dark pill-date"><CalendarDays size={19} /> {event.dateLabel}</span>
              <span className="pill-on-dark pill-date"><MapPin size={19} /> {event.location.city}</span>
            </div>
          </div>
          <div className="w-full self-center">
            <Countdown targetDate={event.targetDate} dateLabel={event.dateLabel} />
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell grid gap-6 pb-0 lg:grid-cols-2 lg:items-stretch">
        <article className="info-panel flex flex-col">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-aucu-blue/15 text-aucu-blue-dark">
              <ClipboardCheck size={28} />
            </span>
            <h2 className="!mt-0">Inscribirse</h2>
          </div>
          <div className="mt-5">
            <p>Reserva tu lugar en la jornada y recibi las novedades del evento.</p>
          </div>
          <div className="flex flex-1 items-center justify-center pt-6">
            <Button href={externalLinks.affiliationForm} className="w-full max-w-sm px-8 py-4 text-base">Ir al formulario</Button>
          </div>
        </article>

        <article className="info-panel location-panel location-panel-compact">
          <div className="location-copy">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-aucu-red/10 text-aucu-red">
                <MapPin size={28} />
              </span>
              <div>
                <h2 className="!mt-1">Ubicacion</h2>
              </div>
            </div>
            <div className="mt-5 grid gap-2">
              <p className="text-lg font-bold text-aucu-blue-dark">{event.location.venue}</p>
              <p className="text-base font-semibold text-slate-600">{event.location.city}</p>
              <p className="max-w-xl text-sm text-slate-500">{event.location.note}</p>
            </div>
          </div>
          <a
            className="location-map"
            href={event.location.mapUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir ubicacion en Google Maps"
          >
            <iframe
              className="pointer-events-none h-full w-full rounded-md border border-slate-200"
              src={event.location.mapEmbedUrl}
              title={`Mapa de ${event.location.venue}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <article className="info-panel w-full">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-aucu-blue/15 text-aucu-blue-dark">
              <CalendarDays size={28} />
            </span>
            <h2 className="!mt-0">Agenda</h2>
          </div>
          <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {event.agenda.map((day) => (
              <section className="agenda-day" key={day.date}>
                <div>
                  <p>{day.date}</p>
                </div>
                <div className="mt-4 grid gap-4">
                  {day.items.map((item) => (
                    <div className="agenda-row" key={`${day.date}-${item.time}-${item.title}`}>
                      <span>{item.time}</span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </AnimatedSection>
      <AnimatedSection className="section-shell">
        <div className="section-heading">
          <h2 className="section-title">Expositores</h2>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {event.speakers.map((speaker) => (
            <article className="speaker-card" key={speaker.name}>
              <AssetImage
                src={speaker.photo}
                alt={speaker.name}
                className="overflow-hidden rounded-t-md"
                imgClassName="h-44 w-full object-cover"
                fallback={<SpeakerFallback name={speaker.name} />}
              />
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">{speaker.role}</p>
                <h3 className="mt-2 text-xl font-black text-aucu-blue-dark">{speaker.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{speaker.description}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      
      <AnimatedSection className="section-shell">
        <div className="section-heading">
          <h2 className="section-title">Apoyos institucionales</h2>
        </div>
        <article className="info-panel mt-8">
          <div className="grid gap-3 sm:grid-cols-2">
            {event.supports.map((support) => (
              <div className="support-logo" key={support}>
                <div className="support-logo-placeholder" aria-hidden="true">
                  Logo
                </div>
                <span>{support}</span>
              </div>
            ))}
          </div>
        </article>
      </AnimatedSection>
    </div>
  )
}
