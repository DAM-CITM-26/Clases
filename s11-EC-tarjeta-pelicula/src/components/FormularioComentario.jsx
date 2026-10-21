function FormularioComentario() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const comentario = event.target.comentario.value
    console.log('Nuevo comentario:', comentario)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="comentario" type="text" placeholder="Escribe tu opinión" />
      <button type="submit">Publicar comentario</button>
    </form>
  )
}

export default FormularioComentario