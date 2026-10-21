function CampoBusqueda() {
  const handleEvento = (event) => {
    if (event.type === 'focus') console.log('El campo tiene el foco')
    if (event.type === 'blur') console.log('El campo perdió el foco')
  }

  return <input onFocus={handleEvento} onBlur={handleEvento} />
}

export default CampoBusqueda