import React, { useEffect } from 'react'
import './detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetails } from '../../Redux/Actions'
import { useParams } from 'react-router-dom'

const Detail = () => {
  
  const dispatch = useDispatch()

  const pokemonDetails = useSelector((state => state.details))
  let {id} = useParams()
  


  useEffect(() => {
    dispatch(getPokemonDetails(id))
  },[dispatch])

  if (pokemonDetails.id === undefined) return (
    <div>
      Pokemon no existe
    </div>
  )
    return (
    <div>
      <div>
        <img src={pokemonDetails.image} alt="imagen del pokemon" />
      </div>
      <div>
        Nombre:{pokemonDetails.name}
        <br />
        Vida:{pokemonDetails.hp}
        <br />
        Ataque:{pokemonDetails.attack}
        <br />
        Defensa:{pokemonDetails.defense}
        <br />
        Velocidad:{pokemonDetails.speed}
        <br />
        Altura:{pokemonDetails.height}
        <br />
        Peso:{pokemonDetails.weight}
        <br />
        Tipos:{pokemonDetails.types}
      </div>
    </div>
  )
}


export default Detail