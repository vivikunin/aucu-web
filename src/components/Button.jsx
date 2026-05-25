export function Button({ href, children, variant = 'primary', className = '' }) {
  const styles =
    variant === 'secondary'
      ? 'border border-aucu-blue/20 bg-white text-aucu-blue hover:border-aucu-red/50 hover:text-aucu-red'
      : 'bg-aucu-red text-white shadow-lg shadow-aucu-red/20 hover:bg-aucu-blue'

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold uppercase tracking-wide transition ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
