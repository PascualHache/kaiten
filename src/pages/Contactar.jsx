import './Contactar.css'

function Contactar() {
  return (
    <div className="contactar-container">
      <h2>Contactar</h2>
      <form className="contact-form">
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
          <input type="tel" id="telefono" name="telefono" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  )
}

export default Contactar
