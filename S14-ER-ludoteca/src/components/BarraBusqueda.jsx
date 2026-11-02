export function BarraBusqueda({ valor, onCambioBusqueda }) {
  return (
    <>
      <label htmlFor="busqueda">Buscar juego</label>
      <input
        id="busqueda"
        type="text"
        value={valor}
        onChange={(e) => onCambioBusqueda(e.target.value)}
        placeholder="Nombre del juego..."
      />
    </>
  )
}