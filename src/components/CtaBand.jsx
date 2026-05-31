import { Button } from './Button'

export function CtaBand({ eyebrow, title, description, actionHref, actionLabel, actionIcon, actionVariant, className = '' }) {
  return (
    <div className={`cta-band ${className}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600">{description}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
        <Button href={actionHref} variant={actionVariant} className="text-base px-10 py-5 min-h-14">
          {actionIcon}
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}
