import { useEffect, useState } from 'react'
import Carrusel from '../components/Carrusel.jsx'
import Destacado from '../components/Destacado.jsx'
import ListaJuegos from '../components/ListaJuegos.jsx'
import Chips from '../components/Chips.jsx'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/ErrorCarga.jsx'
import { useJuegos } from '../hooks/useJuegos.js'
import { filtrarPorDuracion } from '../utils/juegos.js'

const DURACIONES = ['Todas', 'Partida rápida', 'Partida media', 'Partida larga']

export default function Inicio() {
  // La carga, en un custom hook: Inicio solo pinta
  const { juegos, cargando, error, reintentar } = useJuegos()
  const [duracion, setDuracion] = useState('Todas')

  const novedades = juegos.filter((juego) => juego.novedad)
  const filtrados = filtrarPorDuracion(juegos, duracion)

  // Efecto: el título de la pestaña sigue al filtro.
  // document.title no lo pinta React: se cambia en un efecto.
  useEffect(() => {
    const filtro = duracion === 'Todas' ? '' : ` · ${duracion}`
    document.title = `Ludoteca${filtro} (${filtrados.length})`
  }, [duracion, filtrados.length])

  if (cargando) return <Cargando texto="Cargando juegos…" />
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />

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
