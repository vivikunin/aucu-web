import { UserRound } from 'lucide-react'
import { AssetImage } from './AssetImage'

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

export function SpeakerCard({ speaker }) {
  return (
    <article className="speaker-card">
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
  )
}
