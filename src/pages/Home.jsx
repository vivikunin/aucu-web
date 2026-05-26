import { ArrowRight, Camera, CheckCircle2, ShieldCheck, UsersRound, Calendar, MapPin } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { LogoMark } from '../components/LogoMark'
import { externalLinks, organization, event } from '../data/site'

export function Home() {
  return (
    <div className="page-frame">
      <DecorativeBubbles />
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div className="order-2 md:order-1">
            <p className="eyebrow">Asociacion civil uruguaya</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {organization.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">{organization.fullName}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={externalLinks.affiliationForm}>
                Afiliarme
                <ArrowRight size={18} />
              </Button>
              <Button href={externalLinks.instagram} variant="secondary">
                <Camera size={18} />
                Instagram
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
        <div>
          <p className="eyebrow-dark">Próximas jornadas</p>
          <h2 className="section-title">Conocé más sobre nuestras próximas jornadas</h2>
        </div>
        <div className="flex flex-col items-center justify-start gap-4">
          <div className="flex gap-2 text-sm font-semibold text-white">
            <span className="pill-on-dark pill-date"><Calendar size={15} /> {event.dateLabel}</span>
            <span className="pill-on-dark pill-date"><MapPin size={15} /> {event.location.city}</span>
          </div>
          <Button href="/jornadas" className="text-base px-8 py-3 min-h-14">Jornadas 2026
            <ArrowRight size={18} />
          </Button>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-4 md:grid-cols-2">
        <article className="info-panel">
          <ShieldCheck className="text-aucu-red" size={28} />
          <h2>Misión</h2>
          <p>{organization.mission}</p>
        </article>
        <article className="info-panel">
          <UsersRound className="text-aucu-blue" size={28} />
          <h2>Visión</h2>
          <p>{organization.vision}</p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow-dark">Quienes somos</p>
          <h2 className="section-title">Una comunidad para fortalecer la voz de los consumidores</h2>
          <p className="mt-4 text-lg leading-8 text-slate-100">{organization.whoWeAre}</p>
        </div>
        <div className="rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200">
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

      <AnimatedSection className="section-shell">
        <div className="cta-band">
          <div>
            <p className="eyebrow">Afiliarse</p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">Participá y acompaná el crecimiento de AUCU</h2>
            <p className="mt-4 max-w-2xl text-slate-600">{organization.affiliation}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={externalLinks.affiliationForm} className="text-base px-10 py-5 min-h-14">AFILIARSE</Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
