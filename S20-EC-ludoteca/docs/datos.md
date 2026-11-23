# Modelo de datos

## Juego

| Campo | Tipo | Ejemplo |
|---|---|---|
| `id` | número | `1` |
| `nombre` | texto | `"Faros de niebla"` |
| `autoria` | texto | `"Nuria Valls"` |
| `jugadores` | texto (`"mín-máx"` o un número) | `"2-4"` |
| `duracion` | número (minutos) | `45` |
| `color` | texto (color CSS) | `"#4fc1ff"` |
| `editorial` | objeto `{ nombre, pais }` | `{ "nombre": "Estudio Nórdico", "pais": "Noruega" }` |
| `valoracion` | número (1-5) | `5` |
| `categoria` | texto | `"Estrategia"` |
| `descripcion` | texto | `"Guía los barcos entre la niebla…"` |
| `novedad` | sí o no | `false` |

```json
{
  "id": 1,
  "nombre": "Faros de niebla",
  "autoria": "Nuria Valls",
  "jugadores": "2-4",
  "duracion": 45,
  "color": "#4fc1ff",
  "editorial": { "nombre": "Estudio Nórdico", "pais": "Noruega" },
  "valoracion": 5,
  "categoria": "Estrategia",
  "descripcion": "Guía los barcos entre la niebla encendiendo faros antes de que se agote el aceite.",
  "novedad": false
}
```

## Cómo llega de la API (Sprint 2)

`GET /api/ludoteca/games` devuelve `{ results, total, page, limit }`. Cada juego de `results` se traduce en `src/data/api.js` (función `aJuego`):

| En la API | En la app |
|---|---|
| `title` | `nombre` |
| `author` | `autoria` |
| `players: { min, max }` | `jugadores: "2-4"` (o `"2"` si min y max coinciden) |
| `duration_min` | `duracion` |
| `cover_color` | `color` |
| `publisher: { name, country }` | `editorial: { nombre, pais }` |
| `rating` | `valoracion` |
| `category` | `categoria` |
| `description` | `descripcion` |
| `is_new` | `novedad` |
