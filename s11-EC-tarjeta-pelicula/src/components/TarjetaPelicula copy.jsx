import React from 'react'



function TarjetaPelicula({ titulo, director, id }) {
const handleMarcarVista = (event, peliculaId) => {
    console.log('Evento:', event.type)
    console.log('ID de la película:', peliculaId)
  }
  const handleEntrar = () => console.log(`Ratón sobre: ${titulo}`)
  const handleSalir = () => console.log(`Ratón fuera de: ${titulo}`)
  const [vista, setVista] = React.useState(false)
  const handleMarcarVistaDefinitiva = () => {
    setVista(true) // Cambiamos el estado a true
  }
    return (
    <article className="tarjeta-pelicula " onMouseEnter={handleEntrar} onMouseLeave={handleSalir}>
      <h3>{titulo}</h3>
      <p>{director}</p>
      <div className="fila">
        {/*<button onClick={(e) => handleMarcarVista(e, id)}>Marcar vista</button>
        <button onClick={() => alert(`Marcando ${titulo}`)}>Marcar vista</button>*/}
        <button
            onPointerDown={() => console.log('Pulsación iniciada')}
            onPointerUp={() => console.log('Pulsación terminada')}
            onPointerEnter={() => console.log('Entró el puntero')}
            onPointerLeave={() => console.log('Salió el puntero')}
        >
        Más información
        </button>
        <button
          className={vista ? 'is-vista' : ''}
          onClick={handleMarcarVistaDefinitiva}
          disabled={vista}
        >
          {vista ? '✓ Vista' : 'Marcar como vista'}
        </button>        
      </div>
    </article>
  )
}

export default TarjetaPelicula