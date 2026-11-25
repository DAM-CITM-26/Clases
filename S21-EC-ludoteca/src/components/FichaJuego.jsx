import { Link } from 'react-router'
import Portada from './Portada.jsx'
import Valoracion from './Valoracion.jsx'
import EtiquetaDuracion from './EtiquetaDuracion.jsx'
import { categorizarDuracion } from '../utils/juegos.js'

export default function FichaJuego({ juego }) {
  return (
    <Link className="card" to={`/juego/${juego.id}`}>
      <Portada juego={juego} />
      <div className="card-cuerpo">
        <h3>{juego.nombre}</h3>
        <Valoracion valor={juego.valoracion} />
        <p className="card-meta">
          {juego.jugadores} jugadores · {juego.duracion} min
        </p>
        <EtiquetaDuracion texto={categorizarDuracion(juego.duracion)} />
      </div>
    </Link>
  )
}
