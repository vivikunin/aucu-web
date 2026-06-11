import { ClipboardCheck } from 'lucide-react'
// import { Agenda } from '../components/Agenda'
import { AnimatedSection } from '../components/AnimatedSection'
import { AssetImage } from '../components/AssetImage'
// import { Button } from '../components/Button'
import { Countdown } from '../components/Countdown'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { EventMetaPills } from '../components/EventMetaPills'
import { InfoPanel } from '../components/InfoPanel'
import { LocationPanel } from '../components/LocationPanel'
// import { SectionHeading } from '../components/SectionHeading'
// import { SpeakerCard } from '../components/SpeakerCard'
// import { SupportLogo } from '../components/SupportLogo'
import { assets, event } from '../data/site'

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
            <EventMetaPills
              dateLabel={event.dateLabel}
              city={event.location.city}
              className="mt-8 grid gap-3 sm:grid-cols-2"
              iconSize={19}
            />
          </div>
          <div className="w-full self-center">
            <Countdown targetDate={event.targetDate} dateLabel={event.dateLabel} />
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell grid gap-6 pb-0 lg:grid-cols-2 lg:items-stretch">
        <InfoPanel
          icon={ClipboardCheck}
          iconClassName="bg-aucu-blue/15 text-aucu-blue-dark"
          title="Inscribirse"
          className="flex flex-col"
        >
          <div className="mt-5">
            <p>Reservá tu lugar en las jornadas y recibí las novedades del evento.</p>
          </div>
          <div className="pt-3">
            <p>
              El enlace de inscripción estará disponible en este espacio cuando se aproxime la fecha del evento.
            </p>
            {/*
            <Button className="w-full max-w-sm px-8 py-4 text-base">Ir al formulario</Button>
            */}
          </div>
        </InfoPanel>

        <LocationPanel location={event.location} />
      </AnimatedSection>

      {/*
      <AnimatedSection className="section-shell">
        <InfoPanel
          icon={CalendarDays}
          iconClassName="bg-aucu-blue/15 text-aucu-blue-dark"
          title="Agenda"
          className="w-full"
        >
          <Agenda days={event.agenda} />
        </InfoPanel>
      </AnimatedSection>
      */}

      {/*
      <AnimatedSection className="section-shell">
        <SectionHeading title="Expositores" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {event.speakers.map((speaker) => (
            <SpeakerCard speaker={speaker} key={speaker.name} />
          ))}
        </div>
      </AnimatedSection>
      */}

      {/*
      <AnimatedSection className="section-shell">
        <SectionHeading title="Colaboradores del evento" />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {event.supports.map((support) => (
            <SupportLogo name={support} key={support} />
          ))}
        </div>
      </AnimatedSection>
      */}
    </div>
  )
}
