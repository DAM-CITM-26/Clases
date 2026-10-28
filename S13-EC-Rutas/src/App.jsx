import { useState } from 'react'
import { ListaRutas } from './components/ListaRutas.jsx'
import { Paginacion } from './components/Paginacion.jsx'
import rutas from './data/rutas.json'
import './App.css'

const RUTAS_POR_PAGINA = 3

function App() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(rutas.length / RUTAS_POR_PAGINA)
  const inicio = (currentPage - 1) * RUTAS_POR_PAGINA
  const rutasPagina = rutas.slice(inicio, inicio + RUTAS_POR_PAGINA)

  return (
    <main>
      <h1>Rutas de senderismo</h1>
      <ListaRutas rutas={rutasPagina} />
      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  )
}

export default App
