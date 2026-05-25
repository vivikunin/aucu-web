import { ArrowRight, Camera, CheckCircle2, ShieldCheck, UsersRound } from 'lucide-react'
import { AnimatedSection } from '../components/AnimatedSection'
import { Button } from '../components/Button'
import { DecorativeBubbles } from '../components/DecorativeBubbles'
import { LogoMark } from '../components/LogoMark'
import { externalLinks, organization } from '../data/site'

export function Home() {
  return (
    <div className="page-frame">
      <DecorativeBubbles />
      <section className="hero-band">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="eyebrow">Asociacion civil uruguaya</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {organization.tagline}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-50">{organization.fullName}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={externalLinks.affiliationForm}>
                Afiliarme
                <ArrowRight size={18} />
              </Button>
              <Button href="/jornadas" variant="secondary">Ver jornadas</Button>
            </div>
          </div>
          <div className="rounded-md bg-white p-8 shadow-2xl shadow-slate-950/20">
            <LogoMark className="mx-auto h-52 w-full object-contain" />
            <p className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Espacio para logo oficial</p>
          </div>
        </div>
      </section>

      <AnimatedSection className="section-shell grid gap-4 md:grid-cols-2">
        <article className="info-panel">
          <ShieldCheck className="text-aucu-red" size={28} />
          <h2>Mision</h2>
          <p>{organization.mission}</p>
        </article>
        <article className="info-panel">
          <UsersRound className="text-aucu-gold" size={28} />
          <h2>Vision</h2>
          <p>{organization.vision}</p>
        </article>
      </AnimatedSection>

      <AnimatedSection className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow-dark">Quienes somos</p>
          <h2 className="section-title">Una comunidad para fortalecer la voz de los consumidores</h2>
          <p className="mt-4 text-lg leading-8 text-blue-50">{organization.whoWeAre}</p>
        </div>
        <div className="rounded-md bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aucu-red">Que hacemos</p>
          <ul className="mt-5 grid gap-4">
            {organization.whatWeDo.map((item) => (
              <li className="flex gap-3 text-slate-700" key={item}>
                <CheckCircle2 className="mt-0.5 shrink-0 text-aucu-blue" size={20} />
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
            <p className="mt-4 max-w-2xl text-blue-50">{organization.affiliation}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={externalLinks.affiliationForm}>Completar formulario</Button>
            <Button href={externalLinks.instagram} variant="secondary">
              <Camera size={18} />
              Instagram
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
