import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card-cont'>
      <div className='img-cont'>
        <img src={props.image} alt="imagen del pokemon" />
      </div>
      <div className='info-cont'>
        Nombre:{props.name}
        Tipos:{props.types}
      </div>
    </div>
  )
}

export default Card