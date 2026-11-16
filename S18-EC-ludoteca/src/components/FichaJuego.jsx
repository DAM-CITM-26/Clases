import Portada from './Portada.jsx'
import Valoracion from './Valoracion.jsx'
import EtiquetaDuracion from './EtiquetaDuracion.jsx'
import { categorizarDuracion } from '../utils/juegos.js'

export default function FichaJuego({ juego }) {
  return (
    <article className="card">
      <Portada juego={juego} />
      <div className="card-cuerpo">
        <h3>{juego.nombre}</h3>
        <Valoracion valor={juego.valoracion} />
        <p className="card-meta">
          {juego.jugadores} jugadores · {juego.duracion} min
        </p>
        <EtiquetaDuracion texto={categorizarDuracion(juego.duracion)} />
      </div>
    </article>
  )
}
