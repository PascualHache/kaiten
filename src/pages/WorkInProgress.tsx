import { useEffect, useState } from 'react'
import logoSquared from '../assets/logos/logo_squared.png'
import './WorkInProgress.css'

const LAUNCH_DATE = new Date('2026-10-01T00:00:00+02:00')

interface Countdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getCountdown(): Countdown {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

function WorkInProgress() {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown)

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  const units: { label: string; value: string }[] = [
    { label: 'Días', value: String(countdown.days) },
    { label: 'Horas', value: pad(countdown.hours) },
    { label: 'Minutos', value: pad(countdown.minutes) },
    { label: 'Segundos', value: pad(countdown.seconds) },
  ]

  return (
    <div className="wip">
      <div className="wip__content">
        <img className="wip__logo" src={logoSquared} alt="Kaiten" />
        <p className="wip__eyebrow">Baqueira Beret</p>
        <p className="wip__subtitle">Estamos preparando la nueva experiencia Kaiten</p>

        <div
          className="wip__countdown"
          role="timer"
          aria-label="Cuenta atrás hasta la apertura"
        >
          {units.map((unit) => (
            <div key={unit.label} className="wip__count-unit">
              <span className="wip__count-value">{unit.value}</span>
              <span className="wip__count-label">{unit.label}</span>
            </div>
          ))}
        </div>

        <p className="wip__date">Apertura · 1 de octubre de 2026</p>
      </div>
    </div>
  )
}

export default WorkInProgress
