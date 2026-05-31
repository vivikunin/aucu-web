export function InfoPanel({ icon: Icon, iconClassName = 'text-aucu-blue-dark', title, children, className = '' }) {
  return (
    <article className={`info-panel ${className}`}>
      {Icon ? (
        <div className="flex items-center gap-3">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-md ${iconClassName}`}>
            <Icon size={28} />
          </span>
          <h2 className="!mt-0">{title}</h2>
        </div>
      ) : (
        <h2>{title}</h2>
      )}
      {children}
    </article>
  )
}
