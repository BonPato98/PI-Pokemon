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
    <div className='options-cont'>
        <div className='filter-cont'>
            <span>Filtrar por tipo: </span>
            <select onChange={filterByType} name="types">
                <option defaultChecked>Ninguno</option>
                <option value="normal">Normal</option>
                <option value="fighting">Lucha</option>
                <option value="flying">Volador</option>
                <option value="poison">Veneno</option>
                <option value="ground">Tierra</option>
                <option value="rock">Roca</option>
                <option value="bug">Bicho</option>
                <option value="ghost">Fantasma</option>
                <option value="steel">Acero</option>
                <option value="fire">Fuego</option>
                <option value="water">Agua</option>
                <option value="grass">Planta</option>
                <option value="electric">Eléctrico</option>
                <option value="psychic">Psíquico</option>
                <option value="ice">Hielo</option>
                <option value="dragon">Dragón</option>
                <option value="dark">Siniestro</option>
                <option value="fairy">Hada</option>
                <option value="unknown">???</option>
                <option value="shadow">Sombra</option>
            </select>
        </div>
        <div className='name-order-cont'>
            <span>Ordenar por nombre: </span>
            <select name="orderByName" onChange={orderByName}>
                <option defaultChecked>Ninguno</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
        <div className='attack-order-cont'>
            <span>Ordenar por ataque: </span>
            <select name="orderByAttack" onChange={orderByAttack}>
                <option defaultChecked>Ninguno</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
        <div className='reset-button-cont'>
            <button onClick={reset}>Restablecer</button>
        </div>
    </div>
  )
}

export default Filters