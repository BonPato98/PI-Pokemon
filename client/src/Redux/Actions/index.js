import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"
export const PAGINATE = "PAGINATE"
export const FILTERBYTYPE = "FILTERBYTYPE"
export const FILTERBYSOURCE = "FILTERBYSOURCE"
export const RESET = "RESET"
export const ORDERBYNAME = "ORDERBYNAME"
export const ORDERBYATTACK = "ORDERBYATTACK"
export const SEARCH = "SEARCH"
export const GET_DETAILS = "GET_DETAILS"
export const GET_TYPES = "GET_TYPES"

export function getPokemons() {
    return async function (dispatch) {
        try {
            const response = await axios.get("/pokemons")
            return dispatch({
                type: GET_POKEMONS,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.response)
        }
    }
}

export function getTypes() {
    return async function (dispatch) {
        try {
            const response = await axios.get("/types")
            return dispatch({
                type: GET_TYPES,
                payload: response
            })
        } catch (error) {
            alert(error.response.data.response)
        }
    }
}


export function getPokemonDetails(id) {
    return async function (dispatch) {
        const translated = {
            "normal": "Normal",
            "fighting": "Lucha",
            "flying": "Volador",
            "poison": "Veneno",
            "ground": "Tierra",
            "rock": "Roca",
            "bug": "Bicho",
            "ghost": "Fantasma",
            "steel": "Acero",
            "fire": "Fuego",
            "water": "Agua",
            "grass": "Planta",
            "electric": "Eléctrico",
            "psychic": "Psíquico",
            "ice": "Hielo",
            "dragon": "Dragón",
            "dark": "Siniestro",
            "fairy": "Hada",
            "unknown": "???",
            "shadow": "Sombra",
          }
        try {
            const response = await axios.get(`/pokemons/${id}`)
            if (isNaN(response.data.id) && !undefined){
                const types = []
                await response.data.types.forEach(type => {
                    types.push(type.name)
                })
                const modifiedTypes = [...types]
                const typesTranslated = []
                modifiedTypes.map(t => {
                    typesTranslated.push( translated[t])
                })
                return dispatch({
                    type: GET_DETAILS,
                    payload: {...response.data, types:typesTranslated}
                })
            } else {
                const types = []
                await response.data.types.forEach(type => {
                    types.push(type)
                })
                const typesTranslated = []
                types.map(t => {
                    typesTranslated.push( translated[t])
                })
            return dispatch({
                type: GET_DETAILS,
                payload: {...response.data, types:typesTranslated}
            })
            }
        } catch (error) {
            alert(error.response.data.response)
        }
    }
}

export function postPokemon(input) {
    return async function (dispatch) {
        try {
            const response = await axios.post("/pokemons", input)
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

export function orderPokemonByName(order){
    return async function (dispatch){
        dispatch({
            type:ORDERBYNAME,
            payload:order
        })
    }
}

export function orderPokemonByAttack(order){
    return async function (dispatch){
        dispatch({
            type:ORDERBYATTACK,
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
            const response = await axios.get(`/pokemons?name=${name}`)
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
            if (!name) {
                return
            }
            alert(error.response.data)
            return dispatch({
                type: SEARCH,
                payload: error.response.data
            })
        }
    }
}