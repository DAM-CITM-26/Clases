export default function Valoracion({ valor }) {
  return (
    <span className="estrellas" aria-label={`${valor} de 5`}>
      {'★'.repeat(valor)}
      {'☆'.repeat(5 - valor)}
    </span>
  )
}
