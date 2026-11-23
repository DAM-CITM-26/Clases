// El único fichero que habla con la API. Las pantallas solo llaman a
// estas funciones.
// La API (dam-fake-api) está publicada en Vercel: si cambiara de
// dirección, solo cambia esta línea.
const BASE = 'https://dam-fake-api.vercel.app/api/ludoteca'

// La API habla en inglés y con su forma; la app, con la de
// docs/datos.md.
// Esta función traduce un juego de la API al modelo de la app.
function aJuego(juegoApi) {
  const { min, max } = juegoApi.players
  return {
    id: juegoApi.id,
    nombre: juegoApi.title,
    autoria: juegoApi.author,
    jugadores: min === max ? `${min}` : `${min}-${max}`,
    duracion: juegoApi.duration_min,
    color: juegoApi.cover_color,
    editorial: {
      nombre: juegoApi.publisher.name,
      pais: juegoApi.publisher.country,
    },
    valoracion: juegoApi.rating,
    categoria: juegoApi.category,
    descripcion: juegoApi.description,
    novedad: juegoApi.is_new,
  }
}

// fetch solo falla si no llega a hablar con el servidor (sin conexión,
// API apagada).
// Se cambia su mensaje en inglés por uno que entienda quien usa la app.
// Si en 10 s no llega nada, la petición se da por perdida: sin esto,
// la pantalla se quedaría en «Cargando…» para siempre.
async function pedir(ruta) {
  try {
    return await fetch(`${BASE}${ruta}`, {
      signal: AbortSignal.timeout(10000),
    })
  } catch (e) {
    if (e.name === 'TimeoutError') throw new Error('la API tarda demasiado')
    throw new Error('sin conexión con la API')
  }
}

export async function pedirJuegos() {
  const respuesta = await pedir('/games?limit=100')
  // P2
  if (!respuesta.ok) {
    throw new Error(`La API respondió ${respuesta.status}`)
  }
  const datos = await respuesta.json()
  return datos.results.map(aJuego)
}
