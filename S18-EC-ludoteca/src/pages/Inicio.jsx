import { useEffect, useState } from 'react'
import Carrusel from '../components/Carrusel.jsx'
import Destacado from '../components/Destacado.jsx'
import ListaJuegos from '../components/ListaJuegos.jsx'
import Chips from '../components/Chips.jsx'
import { JUEGOS } from '../data/juegos.js'
import { filtrarPorDuracion } from '../utils/juegos.js'

const DURACIONES = ['Todas', 'Partida rápida', 'Partida media', 'Partida larga']

export default function Inicio() {
  // El estado vive aquí, en el padre común de los chips y de la lista
  const [duracion, setDuracion] = useState('Todas')
  const novedades = JUEGOS.filter((juego) => juego.novedad)
  const filtrados = filtrarPorDuracion(JUEGOS, duracion)

  // P2
  // Efecto: el título de la pestaña sigue al filtro.
  // document.title no lo pinta React: se cambia en un efecto.
  useEffect(() => {
    const filtro = duracion === 'Todas' ? '' : ` · ${duracion}`
    document.title = `Ludoteca${filtro} (${filtrados.length})`
  }, [duracion, filtrados.length])

  return (
    <>
      <section className="seccion">
        <h2>Juego del momento</h2>
        <Destacado juegos={novedades} />
      </section>
      <section className="seccion">
        <h2>Novedades</h2>
        <Carrusel juegos={novedades} />
      </section>
      <section className="seccion stack">
        <h2>Todos los juegos</h2>
        <Chips opciones={DURACIONES} valor={duracion} onCambio={setDuracion} />
        <ListaJuegos juegos={filtrados} />
      </section>
    </>
  )
}
