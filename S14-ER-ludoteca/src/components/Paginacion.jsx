import styles from './Paginacion.module.css'
import { useState } from 'react'
import { memo } from 'react'

const JUEGOS_POR_PAGINA = 3

export const Paginacion = memo(
    function Paginacion({ currentPage, totalPages, onPageChange }) {
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
    }
)

export function usePaginacion(items) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(items.length / JUEGOS_POR_PAGINA))
  const paginaSegura = Math.min(currentPage, totalPages)

  const inicio = (paginaSegura - 1) * JUEGOS_POR_PAGINA
  const itemsPagina = items.slice(inicio, inicio + JUEGOS_POR_PAGINA)

  const cambiarPagina = (pagina) => {
    setCurrentPage(Math.min(Math.max(1, pagina), totalPages))
  }
  return {
    currentPage: paginaSegura,
    totalPages,
    itemsPagina,
    cambiarPagina,
  }
}