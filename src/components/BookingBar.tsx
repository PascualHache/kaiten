import {
  IconChevronDown,
  IconCalendar,
  IconUser,
  IconPlus,
  IconMinus,
} from '@tabler/icons-react'
import './BookingBar.css'

function BookingBar() {
  return (
    <div className="booking-bar">
      <div className="booking-bar__field">
        <button type="button" className="booking-bar__select">
          <span className="booking-bar__select-text">Seleccione servicio</span>
          <IconChevronDown size={16} stroke={2} />
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
            <button type="button" className="booking-bar__counter-btn" aria-label="Reducir">
              <IconMinus size={16} stroke={2} />
            </button>
            <span className="booking-bar__counter-value">1</span>
            <button type="button" className="booking-bar__counter-btn" aria-label="Aumentar">
              <IconPlus size={16} stroke={2} />
            </button>
          </div>
        </div>
      </div>
      <button type="button" className="booking-bar__action booking-bar__action--primary">
        RESERVA
      </button>
      <button type="button" className="booking-bar__action booking-bar__action--secondary">
        TARIFAS
      </button>
    </div>
  )
}

export default BookingBar
