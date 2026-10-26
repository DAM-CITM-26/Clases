import { useState } from 'react'

import { Header, Footer, Nav as NavBar } from './components/Layout.jsx'
import ArtistaCard from './components/ArtistaCard.jsx'

import * as Horarios from './utils/horarios.js'
import './App.css'


const artistas = [
  {
    nombre: 'Lúa Negra',
    genero: ['Folk', 'Electrónica'],
    escenario: 'Escenario Principal',
    hora: '20:00',
    aforo: 4000,
    agotado: true,
    redes: { instagram: '@luanegra' },
  },
  {
    nombre: 'Combo Ratón',
    genero: ['Rock'],
    escenario: 'Escenario Bosque',
    hora: '18:30',
    aforo: 1200,
  },
  {
    nombre: 'Delta Sound System',
    genero: ['Electrónica', 'Dub'],
    escenario: 'Escenario Principal',
    hora: '22:30',
    aforo: 4000,
    agotado: false,
    redes: { instagram: '@deltasound' },
  },
  {
    nombre: 'Marea Clara',
    genero: ['Jazz', 'Folk'],
    escenario: 'Escenario Bosque',
    hora: '17:00',
  },
]

function App() {
  const [favoritos, setFavoritos] = useState([])
  const [agenda, setAgenda] = useState([])


  const registrarFavorito = (nombre) => {
    setFavoritos((prev) =>
      prev.includes(nombre) ? prev.filter((n) => n !== nombre) : [...prev, nombre]
    )
  }

  const registrarAgenda = (nombre) => {
    setAgenda((prev) => [...prev, nombre])
  }


  const franjas = Horarios.construirFranjas(17, 6)
  const agotados = Horarios.contarAgotados(artistas)

  return (
    <main>
      {}
      <div className="cabecera">
        <Header titulo="Ritmos del Delta" />
        <NavBar />
      </div>

      <p className="resumen">
        {agotados} de {artistas.length} escenarios con entradas agotadas · franjas: {franjas.join(', ')}
      </p>

      <section className="cartel">
        {artistas.map((artista) => (
          <ArtistaCard
            key={artista.nombre}
            artista={artista}
            esFavorito={favoritos.includes(artista.nombre)}
            onFavorito={registrarFavorito}
            onAgenda={registrarAgenda}
          />
        ))}
      </section>

      <p className="resumen">
        ★ Favoritos: {favoritos.join(', ') || 'ninguno todavía'} · + En agenda: {agenda.join(', ') || 'ninguno todavía'}
      </p>

      <Footer />
    </main>
  )
}

export default App
