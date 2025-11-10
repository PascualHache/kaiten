import './Reservas.css'

function Reservas() {
  return (
    <div className="reservas-container">
      <h2>Reservas</h2>
      <form className="reservas-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fecha">Fecha</label>
            <input type="date" id="fecha" name="fecha" required />
          </div>

          <div className="form-group">
            <label htmlFor="hora">Hora</label>
            <input type="time" id="hora" name="hora" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="personas">Número de personas</label>
          <input type="number" id="personas" name="personas" min="1" max="20" required />
        </div>

        <div className="form-group">
          <label htmlFor="comentarios">Comentarios adicionales</label>
          <textarea id="comentarios" name="comentarios" rows="4"></textarea>
        </div>

        <button type="submit" className="submit-btn">Reservar</button>
      </form>
    </div>
  )
}

export default Reservas
