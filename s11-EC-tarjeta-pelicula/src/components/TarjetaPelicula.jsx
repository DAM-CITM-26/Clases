import React from 'react'

const REACCIONES = ['👍', '❤️', '😮']

function TarjetaPelicula({ titulo, director }) {
  const [vista, setVista] = React.useState(false)
  const [mostrarSinopsis, setMostrarSinopsis] = React.useState(false)
  const [reaccion, setReaccion] = React.useState(0)

const handleReaccionar = () => {
  setReaccion((prev) => (prev + 1) % REACCIONES.length)
}

  return (
    <article className="tarjeta-pelicula">
      <h3>{titulo}</h3>
      <p>{director}</p>
      <div className="fila">
        <button className={vista ? 'is-vista' : ''} onClick={() => setVista(true)} disabled={vista}>
          {vista ? '✓ Vista' : 'Marcar vista'}
        </button>
        <button onClick={() => setMostrarSinopsis(!mostrarSinopsis)}>
          {mostrarSinopsis ? 'Ocultar sinopsis' : 'Ver sinopsis'}
        </button>
        <button onClick={handleReaccionar}>{REACCIONES[reaccion]}</button>
      </div>
      {mostrarSinopsis && (
        <p className="sinopsis">Una historia de niebla, faros y decisiones que no se pueden deshacer.</p>
      )}
    </article>
  )
}

export default TarjetaPelicula