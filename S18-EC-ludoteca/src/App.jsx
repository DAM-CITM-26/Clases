// La cabecera de la referencia (index.html) y, debajo, la pantalla.
// La barra de pestañas llega en el Sprint 2, con React Router.
import Inicio from './pages/Inicio.jsx'

export default function App() {
  return (
    <>
      <header className="cabecera">
        <h1>Ludoteca</h1>
      </header>
      <main>
        <Inicio />
      </main>
    </>
  )
}
