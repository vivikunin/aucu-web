export function SupportLogo({ name, logo }) {
  let logoClassName = 'max-h-32 max-w-[80%] object-contain'

  if (name === 'Reclamax') {
    logoClassName = 'w-[95%] max-w-none -translate-y-[20%] object-contain'
  } else if (name === 'Fundación de Cultura Universitaria') {
    logoClassName = 'max-h-44 max-w-full object-contain'
  } else if (name === 'Alimentos Centenario') {
    logoClassName = 'max-h-40 max-w-[95%] object-contain'
  }

  return (
    <article className="speaker-card">
      <div className="support-logo-placeholder">
        <img src={logo} alt={`Logo de ${name}`} className={logoClassName} />
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">Colaborador</p>
        <h3 className="mt-2 text-xl font-black text-aucu-blue-dark">{name}</h3>
      </div>
    </article>
  )
}
