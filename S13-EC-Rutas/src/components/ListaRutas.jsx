import { RutaCard } from './RutaCard.jsx'

export function ListaRutas({ rutas }) {
  return (
    <div className="lista-rutas">
      {rutas.map((ruta) => (
        <RutaCard key={ruta.id} ruta={ruta} />
      ))}
    </div>
  )
}
