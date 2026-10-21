function ListaPeliculas() {
  const handleClick = (event) => {
    console.log('target:', event.target.tagName)               // el elemento pulsado de verdad
    console.log('currentTarget:', event.currentTarget.tagName) // siempre "UL": ahí está el onClick
  }

  return (
    <ul onClick={handleClick}>
      <li>Estación de niebla</li>
      <li>El último faro</li>
    </ul>
  )
}

export default ListaPeliculas