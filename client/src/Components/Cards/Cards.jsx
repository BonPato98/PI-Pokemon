import React from 'react'
import './cards.css'
import Card from '../Card/Card'

const Cards = (pokemon) => {
  
  return (
    <div>
      <div>Cards</div>
      <Card image="https://www.gallinaponedora.com/wp-content/uploads/2022/03/Pato-llamado-caracteristicas.jpg" name="pato" types={["normal", "flying"]}/>
    </div>
  )
}

export default Cards