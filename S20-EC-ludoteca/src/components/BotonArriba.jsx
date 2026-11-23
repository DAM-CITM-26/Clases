import { useEffect, useState } from 'react'

// Clase 18 · Ejercicio 2 · Botón para volver arriba (solución).
// Átomo: un botón para volver arriba, que sale al bajar.
// Se pone en App.jsx, después de <main>.
// El scroll es de la ventana (window): se escucha en un efecto.
export default function BotonArriba() {
  // 1. Estado: si el botón se ve. Al principio, no.
  const [visible, setVisible] = useState(false)

  // 2. Efecto con []: escucha el scroll desde que el botón se monta.
  //    Solo guarda si se ha bajado más de 400 px (un booleano, no scrollY).
  useEffect(() => {
    function alHacerScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', alHacerScroll)
    // 3. Limpieza: se quita el mismo listener que se añadió.
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [])

  if (!visible) return null
  // 4. Subir es la respuesta a un clic: va en onClick, no en un efecto.
  return (
    <button
      type="button"
      className="boton-arriba"
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  )
}
