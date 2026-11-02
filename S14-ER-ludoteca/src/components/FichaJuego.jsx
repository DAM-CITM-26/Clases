import styles from './FichaJuego.module.css'
import {useState} from 'react'
import {EtiquetaDuracion} from './EtiquetaDuracion.jsx'

function categorizarDuracion(duracion) {
    return duracion < 20 ? 'Partida rápida' : duracion < 40 ? 'Partida media' : 'Partida larga'
}

export function FichaJuego({ juego: { nombre, autoria, jugadores: numeroDeJugadores, duracion = 90, color, editorial, valoracion } }) {
    const estilosBase = {
        borderLeftWidth: '6px',
        borderLeftStyle: 'solid',
        transition: 'border-color 0.2s ease',
    }

    const [enBiblioteca, setEnBiblioteca] = useState(false)
    const handleAnadir = () => {
        setEnBiblioteca(true)
        console.log(`Añadido "${nombre}" a la biblioteca`)
    }

    const [vistas, setVistas] = useState(0)
    const handleVista = () => {
        setVistas((prev) => prev + 1)
    }

    const [favorito, setFavorito] = useState(false)
    const handleFavorito = (event) => {
        event.stopPropagation() // no dispares también el click de <article>
        setFavorito((prev) => !prev)
    }

    const estrellas = Array.from({ length: 5 }, 
        (_, i) => i < (valoracion ?? 0) ? '★' : '☆'
    ).join('')


    const handleRecomendar = (cantidad) => {
        for (let i = 0; i < cantidad; i++) {
            setVistas(prev => prev + 1)
        }
    }

    return (
    <article 
        className={styles.fichaJuego}
        style={{ ...estilosBase, color, borderLeftColor: color }}
        title={`${nombre} — ${numeroDeJugadores} jugadores, ${duracion} min`}
        onMouseEnter={handleVista}
    >
      {
        <>
            <h3>{nombre}</h3>
            {autoria && <p>{autoria}</p>}
            <p>{numeroDeJugadores} jugadores · {duracion} min</p>
            <EtiquetaDuracion duracion={categorizarDuracion(duracion)} />
            {editorial?.nombre && <p className={styles.editorial}>Editado por {editorial.nombre} ({editorial.pais})</p>}
            <p className={styles.valoracion}>{estrellas}</p>
            <button
                className={[styles.btnAnadir, enBiblioteca && styles.isOn].filter(Boolean).join(' ')}
                onClick={handleAnadir}
                disabled={enBiblioteca}
            >
                {enBiblioteca ? '✓ En la biblioteca' : '📚 Añadir a la biblioteca'}
            </button>
            <p className={styles.vistas}>👀 {vistas} vistas</p>
            <button className={styles.btnRecomendar} onClick={()=>handleRecomendar(3)}>⭐ Recomendar en grupo (+3)</button>
            <button className={styles.btnFavorito} onClick={handleFavorito}>
                {favorito ? '❤️ En favoritos' : '🤍 Guardar en favoritos'}
            </button>
        </>
      }
    </article>
  )
}