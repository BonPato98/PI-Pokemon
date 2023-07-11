import React, {useEffect, useState} from 'react'
import './home.css'
import Cards from '../../Components/Cards/Cards'
import {useDispatch, useSelector} from "react-redux"
import { getPokemons, paginatePokemon } from '../../Redux/Actions'
import Filters from '../../Components/Filters/Filters'

const Home = () => {
  
  const dispatch = useDispatch();
  const paginated = useSelector((state) => state.paginated)
  const filtered = useSelector((state) => state.filtered)

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
      <div className='filters-cont'>
        <Filters/>
      </div>
      <div className='page-buttons-cont'>
        <button onClick={prevPage}>Prev</button><button onClick={nextPage}>Next</button>
      </div>
      <div>
        {filtered ? <Cards pokemon={paginated}></Cards> : <Cards pokemon={paginated}></Cards>}
      </div>
    </div>
    
  )
}

export default Home