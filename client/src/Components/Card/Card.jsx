import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className='card-cont'>
      <div className='img-cont'>
        <img src={props.image} alt="imagen del pokemon" id='pokepic'/>
      </div>
      <div className='info-cont'>
        <h4>{props.name}</h4>
        <p>Tipos:{props.types}</p>
      </div>
    </div>
  )
}

export default Card