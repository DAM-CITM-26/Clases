export function Header({ titulo }) {

  return (
    <>
      <h1 className="titulo-festival">{titulo}</h1>
      <p className="eslogan">3 escenarios · 1 noche · Delta del río</p>
    </>
  )
}

export function Nav() {
  return (
    <nav className="nav-festival">
      <a href="#cartel">Cartel</a>
      <a href="#horarios">Horarios</a>
      <a href="#accesos">Accesos</a>
    </nav>
  )
}

export function Footer() {
  return <footer className="footer-festival">Ritmos del Delta — edición 2026</footer>
}
