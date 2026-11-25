import { useEffect, useState } from 'react'
import { pedirJuego } from '../data/api.js'

// Custom hook: la carga de un juego por su id, con sus tres estados
// (como useJuegos)
export function useJuego(id) {
  const [juego, setJuego] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  // Depende de id: si se pasa de un juego a otro sin salir de la
  // pantalla, se vuelve a pedir, y la bandera ignora la respuesta del
  // juego anterior
  useEffect(() => {
    let cancelado = false
    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const encontrado = await pedirJuego(id)
        if (!cancelado) setJuego(encontrado)
      } catch (e) {
        if (!cancelado) setError(e.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    cargar()
    return () => {
      cancelado = true
    }
  }, [id, intento])

  function reintentar() {
    setIntento((prev) => prev + 1)
  }
  return { juego, cargando, error, reintentar }
}
