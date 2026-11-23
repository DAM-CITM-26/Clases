# Componentes · Sprint 1 (Inicio)

Qué será en React cada función de la pantalla principal de la referencia.

| Referencia | Componente en React | Fichero | Nivel | Estado, lógica y datos |
|---|---|---|---|---|
| `Portada()` | `Portada` | `src/components/Portada.jsx` | Átomo | Recibe `juego` |
| `EtiquetaDuracion()` | `EtiquetaDuracion` | `src/components/EtiquetaDuracion.jsx` | Átomo | Recibe `texto` |
| `Valoracion()` | `Valoracion` | `src/components/Valoracion.jsx` | Átomo | Recibe `valor` |
| `Vacio()` | `Vacio` | `src/components/Vacio.jsx` | Átomo | Recibe `icono` y `texto` |
| `FichaJuego()` | `FichaJuego` | `src/components/FichaJuego.jsx` | Molécula | Recibe `juego`; usa `categorizarDuracion` |
| `Chips()` | `Chips` | `src/components/Chips.jsx` | Molécula | Controlado: recibe `opciones`, `valor` y `onCambio` |
| `Carrusel()` | `Carrusel` | `src/components/Carrusel.jsx` | Organismo | Recibe `juegos` |
| `ListaJuegos()` | `ListaJuegos` | `src/components/ListaJuegos.jsx` | Organismo | Recibe `juegos`; si está vacía, `Vacio` |
| `PantallaInicio()` | `Inicio` | `src/pages/Inicio.jsx` | Pantalla | **Estado:** la duración elegida (`useState`). **Datos:** `JUEGOS`. **Lógica:** `filtrarPorDuracion` |
| `categorizarDuracion()`, `filtrarPorDuracion()` | funciones puras | `src/utils/juegos.js` | — | Reciben datos y devuelven datos |
| `estado.duracion` + `pintar()` | `useState` en `Inicio` | — | — | React vuelve a pintar solo |
| `data-accion="duracion"` + el listener de `app.js` | `onClick` en cada chip → `onCambio` | — | — | Callback de hijo a padre |

## Sprint 2 · Clase 18 (useEffect)

Piezas nuevas que sincronizan la app con algo de fuera de React.

| Componente | Fichero | Nivel | Estado, efecto y datos |
|---|---|---|---|
| `Destacado` | `src/components/Destacado.jsx` | Organismo | Recibe `juegos`. **Estado:** el índice del juego que se ve. **Efecto:** `setInterval` cada 4 s; la limpieza llama a `clearInterval` |
| `AvisoConexion` | `src/components/AvisoConexion.jsx` | Molécula | **Estado:** si hay conexión. **Efecto:** escucha `online` y `offline` en `window`; la limpieza quita los listeners |
| `BotonArriba` | `src/components/BotonArriba.jsx` | Átomo | **Estado:** si se ve. **Efecto:** escucha `scroll` en `window`; la limpieza quita el listener |
| — (en `Inicio`) | `src/pages/Inicio.jsx` | Pantalla | **Efecto:** `document.title` con la duración elegida; dependencias `[duracion, filtrados.length]` |
