// Molécula: el aviso de error, con un botón para volver a intentarlo.
export default function ErrorCarga({ mensaje, onReintentar }) {
  return (
    <div className="vacio" role="alert">
      <p className="icono" aria-hidden="true">
        ⚠️
      </p>
      <p>No se han podido cargar los juegos ({mensaje}).</p>
      <button type="button" className="btn" onClick={onReintentar}>
        Reintentar
      </button>
    </div>
  )
}
