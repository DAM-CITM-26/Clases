const CLASES = { 'Partida rápida': 'tag-rapida', 'Partida media': 'tag-media', 'Partida larga': 'tag-larga' }

export default function EtiquetaDuracion({ texto }) {
  return <span className={`tag ${CLASES[texto]}`}>{texto}</span>
}
