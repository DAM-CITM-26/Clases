import { useEffect, useState } from 'react'
import { pedirJuegos } from '../data/api.js'

// Custom hook: la carga de los juegos, con sus tres estados.
// La pantalla que lo usa solo pinta: no sabe cómo se piden los datos.
// Es un fichero .js porque no devuelve JSX.
export function useJuegos() {
  // Los tres estados de la carga, y los datos cuando llegan
  const [juegos, setJuegos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  // P4
  // Cada clic en «Reintentar» suma uno, y el efecto vuelve a pedir los
  // datos
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let cancelado = false
    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const lista = await pedirJuegos()
        if (!cancelado) setJuegos(lista)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    cargar()
    // Limpieza: si la pantalla se va antes de que llegue la respuesta,
    // se ignora
    return () => {
      cancelado = true
    }
  }, [intento])

  // Hacia fuera, solo lo que necesita la pantalla
  function reintentar() {
    setIntento((prev) => prev + 1)
  }
  return { juegos, cargando, error, reintentar }
}
