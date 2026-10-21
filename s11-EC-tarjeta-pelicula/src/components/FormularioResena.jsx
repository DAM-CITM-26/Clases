function FormularioResena() {
  const handleSubmit = (event) => {
    event.preventDefault() // Evita recargar la página
    console.log('Reseña enviada')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tu reseña" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormularioResena