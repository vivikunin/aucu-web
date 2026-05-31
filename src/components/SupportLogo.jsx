export function SupportLogo({ name }) {
  return (
    <article className="speaker-card">
      <div className="support-logo-placeholder" aria-hidden="true">
        Logo
      </div>
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-aucu-red">Colaborador</p>
        <h3 className="mt-2 text-xl font-black text-aucu-blue-dark">{name}</h3>
      </div>
    </article>
  )
}
