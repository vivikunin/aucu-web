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

export function Countdown({ targetDate }) {
  const initial = useMemo(() => getTimeLeft(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState(initial)

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => window.clearInterval(interval)
  }, [targetDate])

  return (
    <div className="rounded-md border border-white/70 bg-white/85 p-4 shadow-xl shadow-aucu-blue/10 backdrop-blur md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-aucu-red">Cuenta regresiva</p>
        <p className="text-sm text-slate-500">{timeLeft.ended ? 'Evento iniciado' : 'Hasta el evento'}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <CountdownUnit value={timeLeft.days} label="Dias" />
        <CountdownUnit value={timeLeft.hours} label="Horas" />
        <CountdownUnit value={timeLeft.minutes} label="Min" />
        <CountdownUnit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  )
}
