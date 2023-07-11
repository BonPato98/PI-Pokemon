import {GET_POKEMONS} from '../Actions/index.js'

let initialState = {
    allPokemons: [],
    pokemonPage: [],
    filteredByType: [],
    filters: false
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload
            }

        default:
            return state
    }
}

export default rootReducer;