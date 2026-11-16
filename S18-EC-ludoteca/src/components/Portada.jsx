export default function Portada({ juego }) {
  return (
    <div className="portada" style={{ background: juego.color }} aria-hidden="true">
      🎲
    </div>
  )
}
