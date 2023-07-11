import React, {useEffect, useState} from 'react'
import './home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from "react-redux"
import { getPokemons } from '../../Redux/Actions'

const Home = () => {
  
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])



  return (
    <div>
      <div>Home</div>
      <div>
        <Cards pokemon={allPokemons}></Cards>
      </div>
    </div>
    
  )
}

export default Home