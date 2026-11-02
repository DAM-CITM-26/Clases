import styles from './EtiquetaDuracion.module.css'

export function EtiquetaDuracion({ duracion }) {
  return (
    <span className={styles.etiqueta}>
      {duracion}
    </span>
  )
}