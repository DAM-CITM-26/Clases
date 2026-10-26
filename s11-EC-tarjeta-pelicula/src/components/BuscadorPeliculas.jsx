function BuscadorPeliculas() {
  const handleTecla = (event) => {
    if (event.key === 'Enter') {
      console.log('Buscando:', event.target.value)
    }
    if (event.key === 'Escape') {
      console.log('Búsqueda cancelada')
    }
  }

  return <input type="text" placeholder="Buscar película..." onKeyDown={handleTecla} />
}

export default BuscadorPeliculas