import { NavLink } from 'react-router'

// Organismo: la barra de pestañas de la referencia (index.html),
// siempre abajo.
// NavLink marca sola la pestaña de la dirección actual: le pone la
// clase que devolvemos.
const PESTANAS = [
  { a: '/', icono: '🏠', texto: 'Inicio' },
  { a: '/catalogo', icono: '🎲', texto: 'Catálogo' },
]

export default function Pestanas() {
  return (
    <nav className="pestanas" aria-label="Secciones">
      {PESTANAS.map((pestana) => (
        <NavLink
          key={pestana.a}
          to={pestana.a}
          end
          className={({ isActive }) => (isActive ? 'activa' : '')}
        >
          <span aria-hidden="true">{pestana.icono}</span>
          {pestana.texto}
        </NavLink>
      ))}
    </nav>
  )
}
