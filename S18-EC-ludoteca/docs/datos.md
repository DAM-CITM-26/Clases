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
