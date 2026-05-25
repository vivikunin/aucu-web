import { CalendarDays, MapPin, UserRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { AssetImage } from '../components/AssetImage'
import { Button } from '../components/Button'
import { Countdown } from '../components/Countdown'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { assets, event, externalLinks } from '../data/site'

function SpeakerFallback({ name }) {
  return (
    <div className="flex h-44 items-center justify-center bg-slate-100 text-aucu-blue">
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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1fr_0.9fr] md:py-24">
          <div>
            <p className="eyebrow">AUCU Jornadas</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">{event.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">{event.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white">
              <span className="pill-on-dark"><CalendarDays size={17} /> {event.dateLabel}</span>
              <span className="pill-on-dark"><MapPin size={17} /> {event.location.city}</span>
            </div>
          </div>
          <Countdown targetDate={event.targetDate} />
        </div>
      </section>

      <AnimatedSection className="section-shell grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <article className="info-panel">
          <MapPin className="text-aucu-red" size={28} />
          <h2>Ubicacion</h2>
          <p className="font-bold text-aucu-blue">{event.location.venue}</p>
          <p>{event.location.city}</p>
          <p className="text-sm text-slate-500">{event.location.note}</p>
        </article>
        <article className="info-panel">
          <CalendarDays className="text-aucu-gold" size={28} />
          <h2>Agenda</h2>
          <div className="mt-4 grid gap-4">
            {event.agenda.map((item) => (
              <div className="agenda-row" key={`${item.time}-${item.title}`}>
                <span>{item.time}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <div className="section-heading">
          <p className="eyebrow-dark">Expositores</p>
          <h2 className="section-title">Invitados y especialistas</h2>
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
                <h3 className="mt-2 text-xl font-black text-aucu-blue">{speaker.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{speaker.description}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-6 lg:grid-cols-[1fr_0.7fr]">
        <article className="info-panel">
          <p className="eyebrow-dark">Apoyos institucionales</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {event.supports.map((support) => (
              <div className="support-logo" key={support}>{support}</div>
            ))}
          </div>
        </article>
        <article className="cta-card">
          <h2>Inscribirse</h2>
          <p>Reserva tu lugar en la jornada y recibi las novedades del evento.</p>
          <Button href={externalLinks.affiliationForm}>Ir al formulario</Button>
        </article>
      </AnimatedSection>
    </div>
  )
}
