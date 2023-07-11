import React, { useState } from 'react'
import { getPokemonByName } from '../../Redux/Actions'
import { useDispatch, useSelector} from 'react-redux'
import './searchbar.css'

const Searchbar = () => {

   const dispatch = useDispatch()
   const [Pokemon, setPokemon] = useState("")
  
   const handleChange = (e) => {
    setPokemon(e.target.value)
   }

   const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getPokemonByName(Pokemon))
  }
  
   return (
    <div>
        <input type="text" onChange={handleChange}/><button onClick={handleSearch}>Buscar</button>
    </div>
  )
}

export default Searchbar