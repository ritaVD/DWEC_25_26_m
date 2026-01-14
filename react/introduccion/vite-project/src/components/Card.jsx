//Crear un componente llamado Card que acepte como props src y un texto y que automaticamente
//sea capaz de pitarme una tarjeta con una imagen y un texto 
//Pintar en app un par de tarjetas con imagenes difernetes 
import React from 'react';

function Card( {src, texto}) {
  return (
    <>
    <div>Card</div>
    <h3>{texto}</h3>
    <img src={src} alt="" />
    
    </>
  )
}

export default Card