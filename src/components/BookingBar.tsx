import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  IconChevronDown,
  IconCalendar,
  IconUser,
  IconPlus,
  IconMinus,
} from '@tabler/icons-react'
import ServiceAccordion from './ServiceAccordion'
import { SERVICES } from '../data/services'
import './BookingBar.css'

const DEFAULT_SERVICE_ID = 'full-half-day'

function BookingBar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState(DEFAULT_SERVICE_ID)
  const [people, setPeople] = useState(1)

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId)

  return (
    <div className="booking-bar-wrapper">
      <div className="booking-bar">
        <div className="booking-bar__field">
          <button
            type="button"
            className={`booking-bar__select${isPanelOpen ? ' booking-bar__select--active' : ''}`}
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            aria-expanded={isPanelOpen}
          >
            <span className="booking-bar__select-text">
              {selectedService?.title ?? 'Seleccione servicio'}
            </span>
            <IconChevronDown
              size={16}
              stroke={2}
              className={`booking-bar__chevron${isPanelOpen ? ' booking-bar__chevron--rotated' : ''}`}
            />
          </button>
        </div>
        <div className="booking-bar__field">
          <button type="button" className="booking-bar__select">
            <IconCalendar size={18} stroke={1.5} />
            <span className="booking-bar__select-text">Selecciona las fechas</span>
            <IconChevronDown size={16} stroke={2} />
          </button>
        </div>
        <div className="booking-bar__field">
          <div className="booking-bar__people">
            <IconUser size={18} stroke={1.5} />
            <span className="booking-bar__people-label">Personas</span>
            <div className="booking-bar__counter">
              <button
                type="button"
                className="booking-bar__counter-btn"
                aria-label="Reducir"
                onClick={() => setPeople((p) => Math.max(1, p - 1))}
              >
                <IconMinus size={16} stroke={2} />
              </button>
              <span className="booking-bar__counter-value">{people}</span>
              <button
                type="button"
                className="booking-bar__counter-btn"
                aria-label="Aumentar"
                onClick={() => setPeople((p) => p + 1)}
              >
                <IconPlus size={16} stroke={2} />
              </button>
            </div>
          </div>
        </div>
        <Link
          to={selectedService?.reservasPath ?? '/reservas'}
          className="booking-bar__action booking-bar__action--primary"
        >
          RESERVA
        </Link>
      </div>
      <div className={`booking-bar__panel${isPanelOpen ? ' booking-bar__panel--open' : ''}`}>
        <div className="booking-bar__panel-inner">
          <ServiceAccordion
            selectedId={selectedServiceId}
            onSelect={setSelectedServiceId}
          />
        </div>
      </div>
    </div>
  )
}

export default BookingBar
