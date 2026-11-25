import FichaJuego from './FichaJuego.jsx'
import Vacio from './Vacio.jsx'

export default function ListaJuegos({ juegos }) {
  if (juegos.length === 0) {
    return <Vacio icono="🔍" texto="No hay juegos con estos filtros." />
  }
  return (
    <section className="grid">
      {juegos.map((juego) => (
        <FichaJuego key={juego.id} juego={juego} />
      ))}
    </section>
  )
}
