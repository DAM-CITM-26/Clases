// Átomo: lo que se ve mientras llegan los datos. Usa la clase vacio de
// la referencia.
export default function Cargando({ texto }) {
  return (
    <div className="vacio" role="status">
      <p className="icono" aria-hidden="true">
        ⏳
      </p>
      <p>{texto}</p>
    </div>
  )
}
