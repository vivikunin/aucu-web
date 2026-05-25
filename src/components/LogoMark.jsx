import { assets, organization } from '../data/site'
import { AssetImage } from './AssetImage'

function FallbackLogo({ compact = false }) {
  return (
    <div className={`flex items-center gap-3 ${compact ? '' : 'flex-col text-center'}`}>
      <div className="relative h-12 w-12 shrink-0 rounded-md bg-white shadow-sm ring-1 ring-slate-200">
        <div className="absolute left-1/2 top-2 h-8 w-1 -translate-x-1/2 bg-slate-300" />
        <div className="absolute left-3 top-3 h-6 w-3 rounded-sm bg-aucu-red" />
        <div className="absolute right-3 top-3 h-6 w-3 rounded-sm bg-aucu-red" />
        <div className="absolute left-1/2 -top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-300" />
      </div>
      <div>
        <p className="text-xl font-black tracking-wide text-aucu-blue">{organization.name}</p>
        {!compact && <p className="max-w-48 text-xs font-semibold leading-tight text-slate-500">{organization.fullName}</p>}
      </div>
    </div>
  )
}

export function LogoMark({ compact = false, className = '' }) {
  return (
    <AssetImage
      src={assets.logo}
      alt={`Logo ${organization.name}`}
      className={className}
      imgClassName="object-contain"
      fallback={<FallbackLogo compact={compact} />}
    />
  )
}
