import React, {useEffect, useState} from 'react'
import './home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from "react-redux"
import { getPokemons, paginatePokemon } from '../../Redux/Actions'
import Filters from '../../Components/Filters/Filters'
import Searchbar from '../../Components/Searchbar/Searchbar'

const Home = () => {
  
  const dispatch = useDispatch();
  const paginated = useSelector((state) => state.paginated)

  const nextPage = () => {
    dispatch(paginatePokemon("next"))
  }

  const prevPage = () => {
    dispatch(paginatePokemon("prev"))
  }

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <div className='main-home-cont'>
      <div className='functions-cont'>
        <div className='searchbar-cont'>
          <Searchbar/>
        </div>
        <div className='filters-cont'>
          <Filters/>
        </div>
      </div>
      <div>
        <Cards pokemon={paginated}></Cards>
        <div className='page-buttons-cont'>
        <button className="page-button" onClick={prevPage}>Anterior</button><button className="page-button" onClick={nextPage}>Siguiente</button>
      </div>
      </div>
    </div>
    
  )
}

export default Home