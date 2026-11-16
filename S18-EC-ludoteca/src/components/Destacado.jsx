import { useEffect, useState } from 'react'
import Portada from './Portada.jsx'

// Organismo: enseña un juego cada 4 segundos.
// El temporizador está fuera de React:
// se crea en un efecto y se para en su limpieza.
export default function Destacado({ juegos }) {
  // P4
  const [indice, setIndice] = useState(0)

  useEffect(() => {
    // Se ejecuta cuando Destacado se MONTA:
    // es decir, la primera vez que React lo añade a la pantalla.
    //
    // Crea un intervalo que avanza el índice cada 4 segundos.
    const id = setInterval(() => {
      setIndice((prev) => (prev + 1) % juegos.length)
    }, 4000)

    // Limpieza:
    //
    // 1. Si cambia juegos.length, el efecto se repite:
    //    React ejecuta primero esta limpieza, cancela el intervalo
    //    anterior y después vuelve a ejecutar el efecto,
    //    creando un nuevo intervalo.
    //
    // 2. Si Destacado se DESMONTA —por ejemplo, al cambiar de página
    //    o dejar de mostrarlo—, React ejecuta esta limpieza y cancela
    //    el intervalo. No crea uno nuevo porque el componente ya no existe.
    //
    // 3. Si Destacado se re-renderiza —por ejemplo, porque cambia indice—
    //    pero juegos.length sigue siendo el mismo, no se ejecuta esta
    //    limpieza ni se crea un nuevo intervalo.
    //
    // La limpieza evita que queden intervalos activos que sigan
    // actualizando el estado de un componente que ya no está en pantalla.
    return () => clearInterval(id)
  }, [juegos.length])

  const juego = juegos[indice]
  return (
    <article className="destacado">
      <Portada juego={juego} />
      <div className="destacado-cuerpo">
        <h3>{juego.nombre}</h3>
        <p>{juego.descripcion}</p>
        <p className="destacado-pos">
          {indice + 1} / {juegos.length}
        </p>
      </div>
    </article>
  )
}
