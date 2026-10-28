import styles from './RutaCard.module.css'

export function RutaCard({ ruta }) {
  const { nombre, dificultad, duracion, circular } = ruta

  return (
    <article className={styles.card}>
      <h3>{nombre}</h3>
      <p>{dificultad} · {duracion}</p>
      {circular && <span className={styles.badge}>Circular</span>}
    </article>
  )
}
