import { memo } from 'react'
import styles from './Paginacion.module.css'

export const Paginacion = memo(function Paginacion({ currentPage, totalPages, onPageChange }) {
  const paginas = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className={styles.paginacion}>
      {paginas.map((pagina) => (
        <button
          key={pagina}
          type="button"
          className={pagina === currentPage ? styles.activa : ''}
          onClick={() => onPageChange(pagina)}
        >
          {pagina}
        </button>
      ))}
    </nav>
  )
})
