import { useEffect, useState } from 'react'

export type HeroVariant = 'side' | 'full'

const KEY = 'heroVariant'
const EVENT = 'herovariantchange'

/** Whether the app is running in dev mode (same gate as App.tsx). */
export const IS_DEV = localStorage.getItem('dev') === 'true'

export function getHeroVariant(): HeroVariant {
  return localStorage.getItem(KEY) === 'full' ? 'full' : 'side'
}

export function setHeroVariant(variant: HeroVariant): void {
  localStorage.setItem(KEY, variant)
  window.dispatchEvent(new Event(EVENT))
}

/** Reactive read of the selected Hero variant, kept in sync across components. */
export function useHeroVariant(): HeroVariant {
  const [variant, setVariant] = useState<HeroVariant>(getHeroVariant)
  useEffect(() => {
    const handler = () => setVariant(getHeroVariant())
    window.addEventListener(EVENT, handler)
    return () => window.removeEventListener(EVENT, handler)
  }, [])
  return variant
}
