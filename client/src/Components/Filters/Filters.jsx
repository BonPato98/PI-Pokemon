import React, { useEffect } from 'react'
import { filterPokemonByType, resetPokemon, orderPokemonByName, orderPokemonByAttack } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import './filters.css'

const Filters = () => {

    const dispatch = useDispatch();
    const filtered = useSelector((state) => state.filters)

    const filterByType = (e) => {
        dispatch(filterPokemonByType(e.target.value))
    }

    const orderByName = (e) => {
        dispatch(orderPokemonByName(e.target.value))
    }

    const orderByAttack = (e) => {
        dispatch(orderPokemonByAttack(e.target.value))
    }

    const reset = () => {
        dispatch(resetPokemon())
    }

  return (
    <div className='filters-cont'>
        <div>
            <span>Types</span>
            <select onChange={filterByType} name="types">
                <option defaultChecked>off</option>
                <option value="normal">Normal</option>
                <option value="fighting">Fighting</option>
                <option value="flying">Flying</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="rock">Rock</option>
                <option value="bug">Bug</option>
                <option value="ghost">Ghost</option>
                <option value="steel">Steel</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="psychic">Psychic</option>
                <option value="ice">Ice</option>
                <option value="dragon">Dragon</option>
                <option value="dark">Dark</option>
                <option value="fairy">Fairy</option>
                <option value="unknown">Unknown</option>
                <option value="shadow">Shadow</option>
            </select>
        </div>
        <div>
            <span>Order By Name</span>
            <select name="orderByName" onChange={orderByName}>
                <option defaultChecked>off</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <div>
            <span>Order By Attack</span>
            <select name="orderByAttack" onChange={orderByAttack}>
                <option defaultChecked>off</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Filters