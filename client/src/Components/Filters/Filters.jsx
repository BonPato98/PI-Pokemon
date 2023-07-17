import React, { useState } from 'react'
import { filterPokemonByType, resetPokemon, orderPokemonByName, orderPokemonByAttack, filterPokemonBySource } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import './filters.css'

const Filters = () => {

    const dispatch = useDispatch();
    const [selected, useSelected] = useState({
        filterByType: "",
        filterBySource: "",
        orderByName: "",
        orderByAttack: "",
    })

    const filterByType = (e) => {
        dispatch(filterPokemonByType(e.target.value))
        useSelected({
            ...selected,
            filterByType: e.target.value
        })
    }

    const filterBysource = (e) => {
        dispatch(filterPokemonBySource(e.target.value))
        useSelected({
            ...selected,
            filterBySource: e.target.value
        })
    }


    const orderByName = (e) => {
        dispatch(orderPokemonByName(e.target.value));
        useSelected({
            ...selected,
            orderByName: e.target.value
        })
    }

    const orderByAttack = (e) => {
        dispatch(orderPokemonByAttack(e.target.value));
        useSelected({
            ...selected,
            orderByAttack: e.target.value
        })
    }

    const reset = () => {
        dispatch(resetPokemon());
        useSelected({
            ...selected,
            filterByType: "off",
            filterBySource: "off",
            orderByName: "off",
            orderByAttack: "off",
        })
    }

  return (
    <div className='options-cont'>
        <div className='type-filter-cont'>
            <span>Filtrar por tipo: </span>
            <select onChange={filterByType} name="types" value={selected.filterByType}>
                <option defaultChecked value={"off"}>Ninguno</option>
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
        <div className='source-filter-cont'>
            <span>Filtrar por origen: </span>
            <select name="filterBySource" onChange={filterBysource} value={selected.filterBySource}>
                <option defaultChecked value="off">Ninguno</option>
                <option value="API">API</option>
                <option value="DB">Base de datos</option>
            </select>
        </div>
        <div className='name-order-cont'>
            <span>Ordenar por nombre: </span>
            <select name="orderByName" onChange={orderByName} value={selected.orderByName}>
                <option defaultChecked value={"off"}>Ninguno</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
        <div className='attack-order-cont'>
            <span>Ordenar por ataque: </span>
            <select name="orderByAttack" onChange={orderByAttack} value={selected.orderByAttack}>
                <option defaultChecked value={"off"}>Ninguno</option>
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