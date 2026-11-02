import styles from './ResumenResultados.module.css'

export function ResumenResultados({ filtrados, totales }) {
  return (
    <p className={styles.resumenResultados}>
      {filtrados} de {totales} juegos encontrados
    </p>
  )
}