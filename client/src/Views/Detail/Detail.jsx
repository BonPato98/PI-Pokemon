import React, { useEffect } from 'react'
import './detail.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetails } from '../../Redux/Actions'

const Detail = () => {
  
  const dispatch = useDispatch()
  const pokemonDetails = useSelector((state => state.details))
  const pokemonId = useSelector((state => state.detailsId))


  useEffect(() => {
    dispatch(getPokemonDetails(pokemonId))
  },[dispatch])


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