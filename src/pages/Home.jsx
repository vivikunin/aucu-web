import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, UsersRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { CtaBand } from '../components/CtaBand'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { EventMetaPills } from '../components/EventMetaPills'
import { InfoPanel } from '../components/InfoPanel'
import { InstagramIcon } from '../components/InstagramIcon'
import { LogoMark } from '../components/LogoMark'
import { SectionHeading } from '../components/SectionHeading'
import { externalLinks, organization, event } from '../data/site'

export function Home() {
  return (
    <div className="page-frame">
      <DecorativeBubbles />
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Asociación civil uruguaya</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {organization.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{organization.fullName}</p>
            <div className="hero-actions">
              <Button href={externalLinks.affiliationForm} className="hero-action-button">
                Afiliarme
                <ArrowRight size={18} />
              </Button>
              <Button href={externalLinks.instagram} variant="secondary" className="hero-action-button">
                <InstagramIcon size={18} />
                Instagram
              </Button>
              <Button href={externalLinks.whatsappChannel} variant="secondary" className="hero-action-button">
                <MessageCircle size={18} />
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative flex justify-center items-center min-h-48 px-2 py-4 md:grid md:min-h-72 md:py-8 md:place-items-center">
            <div className="absolute inset-x-0 top-1/2 h-32 md:h-48 -translate-y-1/2 rounded-full bg-aucu-blue/24 blur-3xl" aria-hidden="true" />
            <LogoMark className="relative block h-auto w-full max-w-[12rem] md:max-w-[48rem] scale-190 object-contain object-center drop-shadow-[0_22px_38px_rgba(0,0,0,0.28)]" />
          </div>
        </div>
      </section>
      <AnimatedSection className="section-shell grid gap-6 lg:grid-cols-[1.5fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow="Próximas jornadas" title="Conocé más sobre nuestras próximas jornadas" />
        <div className="flex flex-col items-center justify-start gap-4">
          <EventMetaPills dateLabel={event.dateLabel} city={event.location.city} />
          <Button href="/jornadas" className="text-base px-8 py-3 min-h-14">Jornadas 2026
            <ArrowRight size={18} />
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-4 md:grid-cols-2">
        <InfoPanel icon={ShieldCheck} iconClassName="text-aucu-red" title="Misión">
          <p>{organization.mission}</p>
        </InfoPanel>
        <InfoPanel icon={UsersRound} iconClassName="text-aucu-blue" title="Visión">
          <p>{organization.vision}</p>
        </InfoPanel>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Quiénes somos" title="Una comunidad para fortalecer la voz de los consumidores" />
          <p className="mt-4 text-lg leading-8 text-slate-100">{organization.whoWeAre}</p>
        </div>
        <div className="self-start rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aucu-red">Qué hacemos</p>
          <ul className="mt-5 grid gap-4">
            {organization.whatWeDo.map((item) => (
              <li className="flex gap-3 text-slate-700" key={item}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-aucu-red" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-6 lg:grid-cols-[1.5fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow="Novedades" title="Conocé las últimas novedades de AUCU" />
        <div className="flex flex-col items-center justify-start gap-4">
          <Button href="/novedades" className="min-h-14 px-8 py-3 text-base">
            Ver novedades
            <ArrowRight size={18} />
          </Button>
          <p className="home-news-intro">
            Actividades, noticias y contenidos de interés para nuestra comunidad.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-6">
        <SectionHeading
          eyebrow="Comisión directiva"
          title={`Comisión Directiva (${organization.boardPeriod})`}
          className="board-heading"
        />
        <div className="board-list">
          {organization.boardMembers.map((member) => (
            <div className="board-member" key={member.name}>
              <p className="board-member-role">{member.role}</p>
              <p className="board-member-name">{member.name}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell">
        <CtaBand
          eyebrow="Afiliarse"
          title="Participá y acompañá el crecimiento de AUCU"
          description={organization.affiliation}
          actionHref={externalLinks.affiliationForm}
          actionLabel="AFILIARSE"
        />
      </AnimatedSection>

      <AnimatedSection className="section-shell !pt-0">
        <CtaBand
          eyebrow="Canal de WhatsApp"
          title="Recibí las novedades de AUCU en WhatsApp"
          description={organization.whatsappChannel}
          actionHref={externalLinks.whatsappChannel}
          actionLabel="UNIRME AL CANAL"
          actionIcon={<MessageCircle size={18} />}
        />
      </AnimatedSection>
    </div>
  )
}
