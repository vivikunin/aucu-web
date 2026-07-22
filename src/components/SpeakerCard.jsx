import { ChevronDown, UserRound } from 'lucide-react'
import { AssetImage } from './AssetImage'

function SpeakerFallback() {
  return (
    <div className="grid h-full w-full place-items-center bg-slate-100 text-aucu-blue-dark">
      <UserRound size={46} />
    </div>
  )
}

export function SpeakerCard({ speaker, className = '' }) {
  const photoClassName =
    speaker.name === 'Dr. Sebastián Barocelli'
      ? 'h-full w-full scale-125 object-cover object-top'
      : 'h-full w-full object-cover object-top'

  return (
    <article
      className={`group relative flex min-h-[350px] cursor-pointer flex-col items-center overflow-hidden rounded-3xl border border-aucu-blue/10 bg-white px-5 py-6 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] outline-none transition-shadow hover:shadow-[0_22px_55px_rgba(15,23,42,0.14)] focus-visible:ring-2 focus-visible:ring-aucu-blue ${className}`}
      tabIndex={0}
    >
      <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] ring-4 ring-aucu-blue/10">
        <AssetImage
          src={speaker.photo}
          alt={speaker.name}
          className="h-full w-full"
          imgClassName={photoClassName}
          fallback={<SpeakerFallback />}
        />
      </div>

      <h3 className="mt-5 text-lg font-black text-aucu-blue-dark">{speaker.name}</h3>

      <p className="mt-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">
        <span className="text-xl leading-none" role="img" aria-label={`Bandera de ${speaker.country}`}>
          {speaker.flag}
        </span>
        {speaker.country}
      </p>

      <div className="mt-4 flex items-center justify-center gap-1 border-t border-slate-200 pt-3 text-xs font-bold uppercase tracking-wider text-aucu-blue-dark">
        Más información
        <ChevronDown
          size={18}
          className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 flex translate-y-3 flex-col items-center justify-center bg-white/95 px-6 py-5 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <h4 className="text-lg font-black text-aucu-blue-dark">{speaker.name}</h4>
        <p className="mt-3 text-[13px] leading-5 text-slate-600">{speaker.description}</p>
        <p className="mt-4 flex items-center justify-center gap-2 border-t border-slate-200 pt-3 text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">
          <span className="text-xl leading-none" aria-hidden="true">
            {speaker.flag}
          </span>
          {speaker.country}
        </p>
      </div>
    </article>
  )
}
