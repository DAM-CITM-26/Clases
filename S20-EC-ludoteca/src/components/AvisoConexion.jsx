import { useEffect, useState } from 'react'

// Clase 18 · Ejercicio 1 · Aviso sin conexión (solución).
// Molécula: un aviso que solo sale sin conexión.
// Se pone en App.jsx, justo debajo de la cabecera.
// online y offline son eventos del navegador (window):
// se escuchan en un efecto.
export default function AvisoConexion() {
  // 1. Estado: si hay conexión. Empieza con lo que dice ahora el navegador.
  const [enLinea, setEnLinea] = useState(navigator.onLine)

  // 2. Efecto con []: escucha online y offline desde que el aviso se monta.
  useEffect(() => {
    function alConectar() {
      setEnLinea(true)
    }
    function alDesconectar() {
      setEnLinea(false)
    }
    window.addEventListener('online', alConectar)
    window.addEventListener('offline', alDesconectar)
    // 3. Limpieza: se quitan los mismos listeners que se añadieron
    //    (las mismas funciones, no otras escritas igual).
    return () => {
      window.removeEventListener('online', alConectar)
      window.removeEventListener('offline', alDesconectar)
    }
  }, [])

  // 4. Con conexión no se pinta nada; sin conexión, la franja roja.
  if (enLinea) return null
  return (
    <p className="aviso" role="status">
      Sin conexión: lo que ves puede no estar al día.
    </p>
  )
}
