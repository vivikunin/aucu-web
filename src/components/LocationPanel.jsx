import { MapPin } from 'lucide-react'

export function LocationPanel({ location }) {
  return (
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
          <p className="text-lg font-bold text-aucu-blue-dark">{location.venue}</p>
          <p className="text-base font-semibold text-slate-600">{location.city}</p>
          <p className="max-w-xl text-sm text-slate-500">{location.note}</p>
        </div>
      </div>
      <a
        className="location-map"
        href={location.mapUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir ubicacion en Google Maps"
      >
        <iframe
          className="pointer-events-none h-full w-full rounded-md border border-slate-200"
          src={location.mapEmbedUrl}
          title={`Mapa de ${location.venue}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </a>
    </article>
  )
}
