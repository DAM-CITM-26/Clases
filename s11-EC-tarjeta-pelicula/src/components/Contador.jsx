import React from 'react'

function Contador() {
  const [clicks, setClicks] = React.useState(0)
  return <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
}

export default Contador