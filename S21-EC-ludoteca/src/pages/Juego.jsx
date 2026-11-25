import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { useJuego } from '../hooks/useJuego.js'
import Portada from '../components/Portada.jsx'
import Valoracion from '../components/Valoracion.jsx'
import EtiquetaDuracion from '../components/EtiquetaDuracion.jsx'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/ErrorCarga.jsx'
import { categorizarDuracion } from '../utils/juegos.js'

// Pantalla: un juego, en /juego/:id (PantallaJuego de la referencia)
export default function Juego() {
  // useParams lee la parte variable de la dirección: /juego/7 → { id:
  // '7' }
  const { id } = useParams()
  // La carga del juego, en un custom hook
  const { juego, cargando, error, reintentar } = useJuego(id)
  // useRef: una caja que guarda el título entre renders, sin volver a
  // pintar. React la rellena al poner ref={titulo} en el h2
  const titulo = useRef(null)

  // Con <Link> no se carga una página nueva, así que el navegador no
  // mueve el foco: al llegar el juego, se lleva a su nombre (quien usa
  // un lector de pantalla oye dónde está)
  useEffect(() => {
    if (juego) titulo.current.focus()
  }, [juego])

  if (cargando) return <Cargando texto="Cargando el juego…" />
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />

  const { nombre, descripcion, jugadores, autoria, editorial, categoria } = juego
  return (
    <article className="stack">
      <div className="card">
        <Portada juego={juego} />
      </div>
      <h2 ref={titulo} tabIndex={-1}>
        {nombre}
      </h2>
      <div className="row">
        <EtiquetaDuracion texto={categorizarDuracion(juego.duracion)} />
        <span className="tag">{categoria}</span>
      </div>
      <Valoracion valor={juego.valoracion} />
      <p>{descripcion}</p>
      <p className="card-meta">
        {jugadores} jugadores · {autoria} · Editado por {editorial.nombre} ({editorial.pais})
      </p>
    </article>
  )
}
