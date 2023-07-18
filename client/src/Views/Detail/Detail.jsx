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
      <div className='detail-main-cont'>
      <div className='detail-cont'>
      <div className='detail-img-cont'>
        <img src={pokemonDetails.image} alt="imagen del pokemon" />
      </div>
      <div className='detail-info-cont'>
        <div className='detail-text-cont'>
          <span className='text-style'>Nombre: </span>{pokemonDetails.name}
        </div>
        
        <div className='detail-text-cont'>
          <span className='text-style'>Vida: </span>{pokemonDetails.hp}
        </div>

        <div className='detail-text-cont'>
          <span className='text-style'>Ataque: </span>{pokemonDetails.attack}
        </div>

        <div className='detail-text-cont'>
          <span className='text-style'>Defensa: </span>{pokemonDetails.defense}
        </div>

        <div className='detail-text-cont'>
          <span className='text-style'>Velocidad: </span>{pokemonDetails.speed}
        </div>
        
        <div className='detail-text-cont'>
          <span className='text-style'>Altura: </span>{pokemonDetails.height}
        </div>
        
        <div className='detail-text-cont'>
          <span className='text-style'>Peso: </span>{pokemonDetails.weight}
        </div>
        
        <div className='detail-text-cont'>
          <span className='text-style'>Tipos: </span>{pokemonDetails.types ? pokemonDetails.types.join(", ") : null}
        </div>

      </div>
      </div>
    </div>
  )
}


export default Detail