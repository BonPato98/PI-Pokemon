import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const PAGINATE = "PAGINATE"
export const FILTERBYTYPE = "FILTERBYTYPE"
export const FILTERBYSOURCE = "FILTERBYSOURCE"
export const RESET = "RESET"
export const ORDER = "ORDER"

export function getPokemons() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/pokemons")
            return dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function postPokemon(input) {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/pokemons", input)
            alert("Pokemon creado con éxito!")
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}

export function paginatePokemon(order){
    return async function (dispatch){
        dispatch({
            type:PAGINATE,
            payload:order
        })
    }
}

export function orderPokemon(order){
    return async function (dispatch){
        dispatch({
            type:ORDER,
            payload:order
        })
    }
}

export function filterPokemonByType(type){
    return async function (dispatch){
        dispatch({
            type:FILTERBYTYPE,
            payload:type
        })
    }
}

export function filterPokemonBySource(source){
    return async function (dispatch){
        dispatch({
            type:FILTERBYSOURCE,
            payload:source
        })
    }
}

export function resetPokemon(){
    return async function (dispatch){
        dispatch({
            type:RESET,
        })
    }
}