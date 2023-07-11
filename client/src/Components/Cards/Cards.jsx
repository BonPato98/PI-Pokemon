import React from 'react'
import './cards.css'
import Card from '../Card/Card'

const Cards = ({pokemon}) => {
  return (
    <div>
      <div>Pokemon</div>
      <div className='cards-cont'>
        {pokemon.map(p => <Card image={p.image} name={p.name} types={p.types} key={p.id}/>)}
      </div>

    </div>
  )
}

export default Cards