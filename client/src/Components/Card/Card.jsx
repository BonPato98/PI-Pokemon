import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'

const Card = (props) => {

  const pokeName = props.name
  const firstLetter = pokeName[0]
  const capitalized = firstLetter.toUpperCase() + pokeName.substring(1)

  const types = props.types
  const typesCapitalized = [];
  types.map(t => {
  const firstLetter = t[0]
  const capitalizedType = firstLetter.toUpperCase() + t.substring(1)
  typesCapitalized.push(capitalizedType)
  })

  const translated = {
    "Normal": "Normal",
    "Fighting": "Lucha",
    "Flying": "Volador",
    "Poison": "Veneno",
    "Ground": "Tierra",
    "Rock": "Roca",
    "Bug": "Bicho",
    "Ghost": "Fantasma",
    "Steel": "Acero",
    "Fire": "Fuego",
    "Water": "Agua",
    "Grass": "Planta",
    "Electric": "Eléctrico",
    "Psychic": "Psíquico",
    "Ice": "Hielo",
    "Dragon": "Dragón",
    "Dark": "Siniestro",
    "Fairy": "Hada",
    "Unknown": "???",
    "Shadow": "Sombra",
  }

  const typesTranslated = []
  typesCapitalized.map(t => {
    typesTranslated.push( translated[t])
  })
  
  return (
    <Link to={`/detail/${props.id}`} className="card-link"> 
    <div className='card-cont'>
      <div className='img-cont'>
        <img src={props.image} alt="imagen del pokemon" id='pokepic'/>
      </div>
      <div className='info-cont'>
        <h4>{capitalized}</h4>
        <p>Tipos: {typesTranslated.join(", ")}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card