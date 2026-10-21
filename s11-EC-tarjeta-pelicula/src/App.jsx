import React from 'react'
import TarjetaPelicula from './components/TarjetaPelicula.jsx'
import ValorarPelicula from './components/ValorarPelicula.jsx'
import FormularioComentario from './components/FormularioComentario.jsx'
import BuscadorPeliculas from './components/BuscadorPeliculas.jsx'
import ListaPeliculas from './components/ListaPeliculas.jsx'
import CampoBusqueda from './components/CampoBusqueda.jsx'
import FormularioResena from './components/FormularioResena.jsx'
import Contador from './components/Contador.jsx'
import ContadorCompleto from './components/ContadorCompleto.jsx'
import './App.css'

const handleClick = (event) => {
  event.preventDefault()    // Prevenir comportamiento por defecto
  event.stopPropagation()   // Detener propagación del evento
  event.target               // Elemento que disparó el evento
  event.currentTarget        // Elemento al que está adjunto el evento
  event.type                  // Tipo de evento ('click', 'change', etc.)
}



function App() {
  const [activo, setActivo] = React.useState(false)

// Números
const [contador, setContador] = React.useState(0)

// Strings
const [mensaje, setMensaje] = React.useState('Hola')

// Arrays
const [numeros, setNumeros] = React.useState([1, 2, 3])

// Objetos
const [usuario, setUsuario] = React.useState({ nombre: 'Miguel', edad: 25 })
  return (
    <main>
      <h1>Cartelera</h1>
      <TarjetaPelicula titulo="Estación de niebla" id={1} />
      <ValorarPelicula titulo="Estación de niebla" />
      <FormularioComentario />
      <BuscadorPeliculas />
      <ListaPeliculas />
      <FormularioResena />
      <Contador />
      <ContadorCompleto />
    </main>
  )
}

export default App
