import { useState } from 'react'
import BarraBusqueda from '../components/BarraBusqueda.jsx'
import ListaJuegos from '../components/ListaJuegos.jsx'
import { coincideBusqueda } from '../utils/juegos.js'

// Pantalla: el catálogo de la referencia (PantallaCatalogo), con su
// buscador
export default function Catalogo({ juegos }) {
  const [texto, setTexto] = useState('')
  const filtrados = juegos.filter((juego) => coincideBusqueda(juego, texto))
  return (
    <div className="stack">
      <BarraBusqueda valor={texto} onCambio={setTexto} />
      <p className="card-meta">
        {filtrados.length} de {juegos.length} juegos encontrados
      </p>
      <ListaJuegos juegos={filtrados} />
    </div>
  )
}
