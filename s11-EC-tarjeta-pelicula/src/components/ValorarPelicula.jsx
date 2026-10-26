function ValorarPelicula({ titulo }) {
  const handleValorar = (event) => {
    console.log(`Valoración de "${titulo}":`, event.target.value)
  }

  return (
    <select onChange={handleValorar}>
      <option value="">Valora esta película</option>
      <option value="1">⭐</option>
      <option value="2">⭐⭐</option>
      <option value="3">⭐⭐⭐</option>
      <option value="4">⭐⭐⭐⭐</option>
      <option value="5">⭐⭐⭐⭐⭐</option>
    </select>
  )
}

export default ValorarPelicula