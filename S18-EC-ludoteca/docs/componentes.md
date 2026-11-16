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
