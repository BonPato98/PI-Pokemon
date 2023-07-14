import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'
// import { setId } from '../../Redux/Actions'
// import { useDispatch } from 'react-redux'

const Card = (props) => {

  // const dispatch = useDispatch()

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

  // const handleId = () => {
  //   dispatch(setId(props.id))
  // }
// onClick={handleId}

  return (
    <Link to={`/detail/${props.id}`} className="card-link"> 
    <div className='card-cont'>
      <div className='img-cont'>
        <img src={props.image} alt="imagen del pokemon" id='pokepic'/>
      </div>
      <div className='info-cont'>
        <h4>{capitalized}</h4>
        <p>Tipos: {typesCapitalized.join(", ")}</p>
      </div>
    </div>
    </Link>
  )
}

export default Card