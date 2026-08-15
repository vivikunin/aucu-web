export function SupportLogo({ name, logo, url, className = '' }) {
  let logoClassName = 'max-h-32 max-w-[80%] object-contain'

  if (name === 'Reclamax') {
    logoClassName = 'w-[95%] max-w-none -translate-y-[20%] object-contain'
  } else if (name === 'Fundación de Cultura Universitaria') {
    logoClassName = 'max-h-44 max-w-full object-contain'
  } else if (name === 'Alimentos Centenario') {
    logoClassName = 'max-h-40 max-w-[95%] object-contain'
  } else if (name === 'Kroser') {
    logoClassName = 'max-h-36 max-w-[90%] scale-110 object-contain'
  } else if (name === 'Macromercado') {
    logoClassName = 'max-h-44 max-w-full translate-x-3 scale-[2.25] object-contain'
  } else if (name === 'ECIJA') {
    logoClassName = 'max-h-36 max-w-[90%] scale-105 object-contain'
  }

  return (
    <article className={`speaker-card ${className}`}>
      <div className="support-logo-placeholder">
        <img src={logo} alt={`Logo de ${name}`} className={logoClassName} />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">Colaborador</p>
        <h3 className="mt-2 text-xl font-black text-aucu-blue-dark">{name}</h3>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex text-sm font-bold text-aucu-red underline decoration-aucu-red/30 underline-offset-4 transition hover:text-aucu-blue hover:decoration-aucu-blue/50"
          >
            Visitar sitio
          </a>
        ) : null}
      </div>
    </article>
  )
}
