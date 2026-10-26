import { useState } from 'react'
import { GeneroChip } from './GeneroChip.jsx'
import { BotonAccion } from './BotonAccion.jsx'


function ArtistaCard({
  artista: { nombre, genero, escenario, hora, aforo, agotado, redes: { instagram } = {} },
  esFavorito,
  onFavorito,
  onAgenda,
}) {
  const [enAgenda, setEnAgenda] = useState(false)

  const handleFavorito = () => {
    onFavorito(nombre)
  }

  const handleAgenda = () => {
    setEnAgenda((prev) => !prev)
    onAgenda(nombre)
  }

  return (
    <article className="artista-card">
      <h3>{nombre}</h3>
      <p className="escenario">{escenario} · {hora}</p>

      {}
      <div className="generos">
        {genero.map((g) => <GeneroChip key={g} texto={g} />)}
      </div>

      <p className="aforo">Aforo: {aforo ?? 'Por confirmar'}</p>
      {instagram && <p className="redes">{instagram}</p>}
      {agotado && <span className="badge-agotado">Entradas agotadas</span>}

      {}
      <div className="acciones">
        <BotonAccion
          etiqueta={esFavorito ? '★ En favoritos' : '☆ Favorito'}
          activo={esFavorito}
          onPulsar={handleFavorito}
        />
        <BotonAccion
          etiqueta={enAgenda ? '✓ En mi agenda' : '+ Añadir a mi agenda'}
          activo={enAgenda}
          onPulsar={handleAgenda}
        />
      </div>
    </article>
  )
}

export default ArtistaCard
