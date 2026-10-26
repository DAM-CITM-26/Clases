import React from 'react'

function ContadorCompleto() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
      <button onClick={() => setCount(0)}>Resetear</button>
    </div>
  )
}

export default ContadorCompleto