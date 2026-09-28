import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-found-page">
      <p className="not-found-highlight">UPS!</p>
      <h2>Pagina no encontrada</h2>
      <p>La ruta que intentaste abrir no existe.</p>
      <Link className="not-found-link" to="/">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFound