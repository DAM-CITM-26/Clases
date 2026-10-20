import React from 'react' //Lo hemos importado para el ejemplo en Javascript
import { useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function EjemploConJavascript(){
  return React.createElement(
    'div',
    null,
      React.createElement('h2', null, 'Novedades'),
      React.createElement('h2', {}, 'Novedades también'),
      React.createElement('h2', { className: 'destacado' }, 'Juego del mes'),
      <h2 className="destacado">Juego del mes cuatro cinco</h2>,
      React.createElement('section', { className: 'estanteria' }, 'Juegos cooperativos'),
      React.createElement('p', { style: { color: '#f48771', fontSize: '24px' } }, 'Agotado'),
      React.createElement('button', { onClick: () => alert('Mesa reservada') }, 'Reservar mesa')
  )
}

function EjemplopConJSX(){
  return(
    <div>
      <h2>Novedades</h2>
      <h2>Novedades también</h2>
      <h2 className="destacado">Juego del mes</h2>
      <h2 className="destacado">Juego del mes cuatro cinco</h2>
      <section className="estanteria">Juegos cooperativos</section>
      <p style={{ color: '#f48771', fontSize: '24px' }}>Agotado</p>
      <button onClick={() => alert('Mesa reservada')}>Reservar mesa</button>
  </div>
  )
}

const juegos = [
  { id: 1, nombre: 'Faros de niebla' },
  { id: 2, nombre: 'Huertos verticales' },
]

function Bienvenida() {
  return <h1>¡Bienvenidos a la ludoteca!</h1>
}

function Turno({ jugador, color }) {
  return <p style={{ color, fontSize: '32px' }}>Te toca, {jugador}</p>
}

function calcularPuntos(victorias, empates) {
  return victorias * 3 + empates
}

function Marcador({ jugador, victorias, empates }) {
  return <p>{jugador}: {calcularPuntos(victorias, empates)} puntos</p>
}

function Lista() {
  return (
    <ul>
  {juegos.map((juego) => (
    <li key={juego.id}>{juego.nombre}</li>
  ))}
</ul>
  )
}

function App() {
  const juego = 'Faros de niebla'
  const minutos = 90
  const ficha = (
  <div>
    <h2>{juego}</h2>
    <p>{juego.toUpperCase()}</p>
    <p>{minutos / 60} horas de partida</p>
    <p>Hasta {2 + 2} jugadores</p>
    <Bienvenida />
    <Turno jugador="Alba" color="#4fc1ff" />
    <Turno jugador="Bruno" color="#d77da2" />
    <Marcador jugador="Bruno" victorias={2} empates = {1}/>
    <Lista/>
  </div>
)
return( 
    <>
    {/*<EjemploConJavascript/>
    <EjemplopConJSX/>*/}
    <h2 style={{ color: '#4ec9b0', fontSize: '28px' }}>Juego del mes</h2>
    {ficha}
    </>
  )

}

export default App