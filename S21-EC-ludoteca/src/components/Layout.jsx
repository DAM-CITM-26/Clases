import { Outlet } from 'react-router'
import AvisoConexion from './AvisoConexion.jsx'
import BotonArriba from './BotonArriba.jsx'
import Pestanas from './Pestanas.jsx'
import Cargando from './Cargando.jsx'
import ErrorCarga from './ErrorCarga.jsx'

// Plantilla: lo que se repite en todas las pantallas (cabecera, aviso,
// pestañas).
// <Outlet /> es el hueco donde React Router pone la pantalla de la
// dirección actual.
export default function Layout({ cargando, error, onReintentar }) {
  let contenido = <Outlet />
  if (cargando) contenido = <Cargando texto="Cargando juegos…" />
  if (error) contenido = <ErrorCarga mensaje={error} onReintentar={onReintentar} />
  return (
    <>
      <header className="cabecera">
        <h1>Ludoteca</h1>
      </header>
      <AvisoConexion />
      <main>{contenido}</main>
      <BotonArriba />
      <Pestanas />
    </>
  )
}
