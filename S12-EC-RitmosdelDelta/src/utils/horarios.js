
export function construirFranjas(horaInicio, cantidad) {
  return Array.from({ length: cantidad }, (_, i) => `${horaInicio + i}:00`)
}


export function listarNombres(artistas) {
  return Array.from(artistas, (artista) => artista.nombre)
}

export function contarAgotados(artistas) {
  return artistas.filter((artista) => artista.agotado).length
}
