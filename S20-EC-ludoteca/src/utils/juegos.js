// Funciones puras: reciben datos y devuelven datos. No tocan el estado ni la pantalla.

export function categorizarDuracion(duracion) {
  if (duracion <= 20) {
    return 'Partida rápida'
  } else if (duracion <= 40) {
    return 'Partida media'
  } else {
    return 'Partida larga'
  }
}

// 'Todas' no filtra
export function filtrarPorDuracion(juegos, categoria) {
  if (categoria === 'Todas') return juegos
  return juegos.filter((juego) => categorizarDuracion(juego.duracion) === categoria)
}
