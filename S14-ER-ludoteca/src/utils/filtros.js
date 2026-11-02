export const FILTROS_INICIALES = { texto: '' }

export function coincideBusqueda(juego, texto) {
  return juego.nombre.toLowerCase().includes(texto.toLowerCase())
}