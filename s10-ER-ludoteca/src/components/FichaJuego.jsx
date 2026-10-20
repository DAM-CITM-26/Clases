import EtiquetaDuracion from './EtiquetaDuracion.jsx'

function categorizarDuracion(duracion) {
  if (duracion <= 20) {
    return 'Partida rápida'
  } else if (duracion <= 40) {
    return 'Partida media'
  } else {
    return 'Partida larga'
  }
}

const estilosBase = {
  borderLeftWidth: '6px',
  borderLeftStyle: 'solid',
  transition: 'border-color 0.2s ease',
}

function FichaJuego({ juego: { nombre, autoria, jugadores: numeroDeJugadores, duracion = 90, color, editorial } }) {
  const estilos = {
    ...estilosBase,
    color,
    borderLeftColor: color,
  }

  return (
    <article
      className="ficha-juego"
      style={estilos}
      title={`${nombre} — ${numeroDeJugadores} jugadores, ${duracion} min`}
    >
      <h3>{nombre}</h3>
      {autoria && <p>{autoria}</p>}
      <p>{numeroDeJugadores} jugadores · {duracion} min</p>
      <EtiquetaDuracion texto={categorizarDuracion(duracion)} />
      {editorial?.nombre && <p className="editorial">Editado por {editorial.nombre} ({editorial.pais})</p>}
    </article>
  )
}

export default FichaJuego