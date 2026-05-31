import { CalendarDays, MapPin } from 'lucide-react'

export function EventMetaPills({ dateLabel, city, className = '', iconSize = 15 }) {
  return (
    <div className={`flex gap-2 text-sm font-semibold text-white ${className}`}>
      <span className="pill-on-dark pill-date">
        <CalendarDays size={iconSize} />
        {dateLabel}
      </span>
      <span className="pill-on-dark pill-date">
        <MapPin size={iconSize} />
        {city}
      </span>
    </div>
  )
}
