import FichaJuego from './FichaJuego.jsx'

export default function Carrusel({ juegos }) {
  return (
    <div className="carrusel">
      {juegos.map((juego) => (
        <FichaJuego key={juego.id} juego={juego} />
      ))}
    </div>
  )
}
