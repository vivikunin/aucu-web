import { MapPin } from 'lucide-react'

export function LocationPanel({ location }) {
  const hasMultipleLocations = Array.isArray(location.locations) && location.locations.length > 0

  return (
    <article
      className={`info-panel location-panel location-panel-compact ${
        hasMultipleLocations ? 'location-panel-multiple' : ''
      }`}
    >
      <div className="location-copy">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-aucu-red/10 text-aucu-red">
            <MapPin size={28} />
          </span>
          <div>
            <h2 className="!mt-0">Ubicación</h2>
          </div>
        </div>
        {hasMultipleLocations ? (
          <div className="mt-5 grid gap-4">
            {location.locations.map((item) => (
              <div
                className={`location-day ${item.mapUrl ? '' : 'location-day-static'}`}
                key={`${item.date}-${item.venue}`}
              >
                {item.mapUrl ? (
                  <a
                    className="block border-l-4 border-aucu-red pl-4 transition hover:border-aucu-blue"
                    href={item.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocationDetails item={item} />
                  </a>
                ) : (
                  <div className="border-l-4 border-aucu-red pl-4">
                    <LocationDetails item={item} />
                  </div>
                )}
                {item.mapUrl && item.mapEmbedUrl ? (
                  <a
                    className="location-map location-day-map"
                    href={item.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Abrir mapa de ${item.venue}`}
                  >
                    <iframe
                      className="pointer-events-none h-full w-full rounded-md border border-slate-200"
                      src={item.mapEmbedUrl}
                      title={`Mapa de ${item.venue}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-5 grid gap-2">
            <p className="text-lg font-bold text-aucu-blue-dark">{location.venue}</p>
            <p className="text-base font-semibold text-slate-600">{location.city}</p>
            <p className="max-w-xl text-sm text-slate-500">{location.note}</p>
          </div>
        )}
      </div>
      {!hasMultipleLocations && (
        <a
          className="location-map"
          href={location.mapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir ubicación en Google Maps"
        >
          <iframe
            className="pointer-events-none h-full w-full rounded-md border border-slate-200"
            src={location.mapEmbedUrl}
            title={`Mapa de ${location.venue}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </a>
      )}
    </article>
  )
}

function LocationDetails({ item }) {
  return (
    <>
      <p className="text-sm font-black uppercase text-aucu-red">{item.date}</p>
      <p className="text-lg font-bold text-aucu-blue-dark">{item.venue}</p>
      {item.address && <p className="text-base font-semibold text-slate-600">{item.address}</p>}
      {item.city && <p className="text-base font-semibold text-slate-600">{item.city}</p>}
    </>
  )
}
