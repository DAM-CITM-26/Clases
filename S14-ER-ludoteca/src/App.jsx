import './App.css'
import { useState } from 'react'
import {FichaJuego} from './components/FichaJuego.jsx'
import { FILTROS_INICIALES, coincideBusqueda } from './utils/filtros.js'
import { BarraBusqueda } from './components/BarraBusqueda.jsx'
import { ResumenResultados } from './components/ResumenResultados.jsx'
import {Paginacion, usePaginacion } from './components/Paginacion.jsx'
import juegos from './data/juegos.json'

export function App() {
  const [texto, setTexto] = useState(FILTROS_INICIALES.texto)
  const juegosFiltrados = juegos.filter((juego) => coincideBusqueda(juego, texto))
  const { currentPage, totalPages, itemsPagina: juegosPagina, cambiarPagina} = usePaginacion(juegosFiltrados)

  return (
    <main>
      <h1>Ludoteca</h1>
      <BarraBusqueda valor={texto} onCambioBusqueda={setTexto} />
      <ResumenResultados filtrados={juegosFiltrados.length} totales={juegos.length} />
      <section className="ludoteca">
        {
          juegosPagina.map(
            (juego) => (
              <FichaJuego key={juego.id} juego={juego} />
            )
          )
        }
      </section>
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={cambiarPagina}
      />
    </main>
  )
}