import React from 'react'

export const Padre = (props) => {
    const {datos, nombre} = props
    
  return (
    <>
    <div>Padre {JSON.stringify(datos.edad)} </div>
    <p> Padre tiene el nombre: {nombre}</p>
    
    </>
  )
}

export default Padre

