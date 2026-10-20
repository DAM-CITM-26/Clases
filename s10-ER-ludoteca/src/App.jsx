import FichaJuego from './components/FichaJuego.jsx'
import './App.css'

const juegos = [
  { id: 1, nombre: 'Faros de niebla', autoria: 'Nuria Valls', jugadores: '2-4', duracion: 45, color: '#4fc1ff', editorial: { nombre: 'Estudio Nórdico', pais: 'Noruega' } },
  { id: 2, nombre: 'Huerto vertical', autoria: 'Pau Ferrer', jugadores: '1-5', duracion: 30, color: '#d7ba7d' },
  { id: 3, nombre: 'Volcán dormido', autoria: 'Irene Soler', jugadores: '3-6', duracion: 20, color: '#89d185' },
  { id: 4, nombre: 'Biblioteca sumergida', autoria: 'Nuria Valls', jugadores: '2', duracion: 60 },
  { id: 5, nombre: 'Noche de enigmas', jugadores: '3-8' },
]

function App() {
  return (
    <main>
      <h1>Ludoteca</h1>
      <section className="ludoteca">
        {juegos.map((juego) => (
          <FichaJuego key={juego.id} juego={juego} />
        ))}
      </section>
    </main>
  )
}

export default App