import { Route, Routes } from 'react-router'
import Layout from './components/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Juego from './pages/Juego.jsx'
import { useJuegos } from './hooks/useJuegos.js'

// App carga los juegos una sola vez y decide qué pantalla va en cada
// dirección.
// La carga sube aquí desde Inicio: ahora Inicio y Catálogo usan los
// mismos juegos.
export default function App() {
  // La carga, con el mismo custom hook que usaba Inicio: sube con una
  // sola línea
  const { juegos, cargando, error, reintentar } = useJuegos()

  return (
    <Routes>
      <Route
        element={
          <Layout
            cargando={cargando}
            error={error}
            onReintentar={reintentar}
          />
        }
      >
        <Route index element={<Inicio juegos={juegos} />} />
        <Route path="catalogo" element={<Catalogo juegos={juegos} />} />
        <Route path="juego/:id" element={<Juego />} />
      </Route>
    </Routes>
  )
}
