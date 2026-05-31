export function SectionHeading({ eyebrow, title, className = '' }) {
  return (
    <div className={`section-heading ${className}`}>
      {eyebrow && <p className="eyebrow-dark">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
