import React from 'react'
import './cards.css'
import Card from '../Card/Card'

const Cards = ({pokemon}) => {
 
  return (
    <div className='main-cards-cont'>
      <div className='cards-cont'>
        {pokemon.map(p => <Card image={p.image} name={p.name} types={p.types} id={p.id} key={p.id}/>)}
      </div>
    </div>
  )
}

export default Cards