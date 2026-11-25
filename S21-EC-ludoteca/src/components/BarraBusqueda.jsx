// Molécula: el campo de búsqueda de la referencia, controlado (valor +
// onCambio)
export default function BarraBusqueda({ valor, onCambio }) {
  return (
    <label className="field" htmlFor="busqueda">
      Buscar juego
      <input
        id="busqueda"
        type="search"
        value={valor}
        placeholder="Nombre del juego..."
        onChange={(evento) => onCambio(evento.target.value)}
      />
    </label>
  )
}
