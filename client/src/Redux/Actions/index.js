import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const PAGINATE = "PAGINATE"
export const FILTERBYTYPE = "FILTERBYTYPE"
export const FILTERBYSOURCE = "FILTERBYSOURCE"
export const RESET = "RESET"
export const ORDER = "ORDER"
export const SEARCH = "SEARCH"
export const GET_DETAILS = "GET_DETAILS"
export const SET_ID = "SET_ID"

export function getPokemons() {
    return async function (dispatch) {
        try {
            const response = await axios.get("http://localhost:3001/pokemons")
            return dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.response)
        }
    }
}

export function getPokemonDetails(id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
            if (isNaN(response.data.id)){
                const types = []
                await response.data.types.forEach(type => {
                    types.push(type.name)
                })
                const modifiedTypes = {...response.data, types:types}
                return dispatch({
                    type: GET_DETAILS,
                    payload: modifiedTypes
                })
            } else {
            return dispatch({
                type: GET_DETAILS,
                payload: response.data
            })
            }
        } catch (error) {
            alert(error.response.data.response)
        }
    }
}

export function setId(id) {
    return async function (dispatch) {
        return dispatch({
            type: SET_ID,
            payload:id
        })
    }
}

export function postPokemon(input) {
    return async function (dispatch) {
        try {
            const response = await axios.post("http://localhost:3001/pokemons", input)
            alert("Pokemon creado con éxito!")
        } catch (error) {
            alert(error.response.data.response)
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

export function getPokemonByName(name) {
    return async function (dispatch){
        try {
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
            if (isNaN(response.data.id)){
                const types = []
                await response.data.types.forEach(type => {
                    types.push(type.name)
                })
                const modifiedTypes = {...response.data, types:types}
                return dispatch({
                    type: SEARCH,
                    payload: modifiedTypes
                })
            } else {
                return dispatch({
                    type: SEARCH,
                    payload: response.data
                })
            }
            
        } catch (error) {
            alert(error.response.data)
            return dispatch({
                type: SEARCH,
                payload: error.response.data
            })
        }
    }
}