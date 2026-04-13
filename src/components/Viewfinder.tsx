import { useEffect, useRef } from 'react'
import './Viewfinder.css'

interface ViewfinderProps {
  viewportRef: React.RefObject<HTMLDivElement | null>
}

function Viewfinder({ viewportRef }: ViewfinderProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const latRef = useRef<HTMLSpanElement>(null)
  const lngRef = useRef<HTMLSpanElement>(null)
  const lockedRef = useRef(false)
  const rafIdRef = useRef(0)

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const handleMouseMove = (e: MouseEvent) => {
      if (lockedRef.current) return

      cancelAnimationFrame(rafIdRef.current)
      rafIdRef.current = requestAnimationFrame(() => {
        const rect = viewport.getBoundingClientRect()
        const nx = (e.clientX - rect.left) / rect.width
        const ny = (e.clientY - rect.top) / rect.height

        // Clamp to 0..1
        const cx = Math.max(0, Math.min(1, nx))
        const cy = Math.max(0, Math.min(1, ny))

        // Map to Baqueira Beret coordinate ranges
        // Latitude: 42° 40'–43' N (mapped to Y axis)
        const latMin = Math.floor(40 + cy * 3)
        const latSec = Math.floor(((40 + cy * 3) % 1) * 60)

        // Longitude: 0° 47'–52' E (mapped to X axis)
        const lngMin = Math.floor(47 + cx * 5)
        const lngSec = Math.floor(((47 + cx * 5) % 1) * 60)

        if (latRef.current) {
          latRef.current.textContent =
            `42\u00B0 ${String(latMin).padStart(2, '0')}' ${String(latSec).padStart(2, '0')}" N`
        }
        if (lngRef.current) {
          lngRef.current.textContent =
            `0\u00B0 ${String(lngMin).padStart(2, '0')}' ${String(lngSec).padStart(2, '0')}" E`
        }
      })
    }

    const handleClick = () => {
      lockedRef.current = !lockedRef.current
      rootRef.current?.classList.toggle('viewfinder--locked', lockedRef.current)
    }

    viewport.addEventListener('mousemove', handleMouseMove)
    viewport.addEventListener('click', handleClick)

    return () => {
      viewport.removeEventListener('mousemove', handleMouseMove)
      viewport.removeEventListener('click', handleClick)
      cancelAnimationFrame(rafIdRef.current)
    }
  }, [viewportRef])

  return (
    <div className="viewfinder" ref={rootRef}>
      <div className="viewfinder__bracket viewfinder__bracket--top" />
      <div className="viewfinder__coords">
        <span className="viewfinder__label">LAT</span>
        <span className="viewfinder__value" ref={latRef}>
          42&deg; 41' 42" N
        </span>
        <span className="viewfinder__separator" />
        <span className="viewfinder__label">LNG</span>
        <span className="viewfinder__value" ref={lngRef}>
          0&deg; 49' 30" E
        </span>
      </div>
      <div className="viewfinder__tick-group">
        <span className="viewfinder__tick" />
        <span className="viewfinder__tick" />
        <span className="viewfinder__tick" />
        <span className="viewfinder__tick viewfinder__tick--long" />
        <span className="viewfinder__tick" />
        <span className="viewfinder__tick" />
        <span className="viewfinder__tick" />
      </div>
      <span className="viewfinder__station">BAQUEIRA</span>
      <div className="viewfinder__crosshair" />
      <div className="viewfinder__bracket viewfinder__bracket--bottom" />
    </div>
  )
}

export default Viewfinder
