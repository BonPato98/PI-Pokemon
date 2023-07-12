import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './landing.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from '../../Redux/Actions'

const Landing = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <div className='landing-cont'>
      <div className='content-cont'>
        <h1>Bienvenidos a mi Proyecto</h1>
        <Link to="/home"><button>Entrar</button></Link>
      </div>
    </div>
  )
}

export default Landing