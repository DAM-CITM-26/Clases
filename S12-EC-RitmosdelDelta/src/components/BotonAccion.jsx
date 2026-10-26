export function BotonAccion({ etiqueta, activo = false, onPulsar = () => {} }) {
  return (
    <button
      className={activo ? 'btn-accion is-activo' : 'btn-accion'}
      onClick={onPulsar}
    >
      {etiqueta}
    </button>
  )
}
