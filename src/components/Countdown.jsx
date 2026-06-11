import { useEffect, useMemo, useState } from 'react'

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime()
  const diff = Math.max(target - Date.now(), 0)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: diff === 0,
  }
}

function CountdownUnit({ value, label }) {
  const formatted = String(value).padStart(2, '0')
  const [previousValue, setPreviousValue] = useState(formatted)
  const [isFlipping, setIsFlipping] = useState(false)
  const visibleValue = isFlipping ? previousValue : formatted

  useEffect(() => {
    if (previousValue === formatted) {
      return undefined
    }

    const startTimeout = window.setTimeout(() => setIsFlipping(true), 0)
    const endTimeout = window.setTimeout(() => {
      setPreviousValue(formatted)
      setIsFlipping(false)
    }, 620)

    return () => {
      window.clearTimeout(startTimeout)
      window.clearTimeout(endTimeout)
    }
  }, [formatted, previousValue])

  return (
    <div className="countdown-unit">
      <div className={`countdown-flip ${isFlipping ? 'is-flipping' : ''}`} aria-hidden="true">
        <span className="countdown-value countdown-value-top">{formatted}</span>
        <span className="countdown-value countdown-value-bottom">{visibleValue}</span>
        <span className="countdown-cap countdown-cap-previous">{previousValue}</span>
        <span className="countdown-cap countdown-cap-next">{formatted}</span>
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</span>
    </div>
  )
}

export function Countdown({ targetDate, dateLabel }) {
  const initial = useMemo(() => getTimeLeft(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState(initial)

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => window.clearInterval(interval)
  }, [targetDate])

  return (
    <div className="relative">
      <div className="absolute inset-0 h-56 rounded-full bg-aucu-blue/24 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-md p-5 md:p-6">
        <div className="mb-4 grid gap-1">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-aucu-red">Cuenta regresiva</p>
          {dateLabel && <p className="font-bold leading-tight text-white">{dateLabel}</p>}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <CountdownUnit value={timeLeft.days} label="Días" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Min" />
          <CountdownUnit value={timeLeft.seconds} label="Seg" />
        </div>
      </div>
    </div>
  )
}
