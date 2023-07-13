import {GET_POKEMONS, PAGINATE, FILTERBYSOURCE, FILTERBYTYPE, ORDER, RESET, SEARCH, GET_DETAILS, SET_ID} from '../Actions/index.js'

let initialState = {
    ogPokemons: [],
    modifiedPokemons: [],
    paginated: [],
    unfiltered: [],
    currentPage: 0,
    details: {},
    detailsId: null,
    filters: false,
    ordered: false,
    search: false,
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                ogPokemons: action.payload,
                modifiedPokemons: [...action.payload],
                unfiltered: [...action.payload],
                paginated: [...action.payload].splice(0, 12)
            }
        case SEARCH:
                if (action.payload === "Pokemon no existe") {
                    return {...state,
                        modifiedPokemons: [...state.ogPokemons],
                        paginated: [...state.ogPokemons].splice(0, 12),
                    }
                } else {
                    console.log(action.payload);
                    return {...state,
                        paginated: [action.payload],
                        search: true
                    }
                }
        case SET_ID:
            return {
                ...state,
                detailsId: action.payload
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case PAGINATE:
            const nextPage = state.currentPage + 1;
            const prevPage = state.currentPage - 1;
            const cardsDisplayed = 12;
            const from = action.payload === "next" ?  nextPage * cardsDisplayed : prevPage * cardsDisplayed;

            if (action.payload === "next" && from >= state.modifiedPokemons.length) {return {...state}}
            if (action.payload === "prev" && prevPage < 0) {return {...state}}
            return {
                ...state,
                paginated: [...state.modifiedPokemons].splice(from, cardsDisplayed),
                currentPage: action.payload === "next" ? nextPage : prevPage
            }
        case FILTERBYTYPE:
            const unfiltered = [...state.unfiltered]
            if (action.payload === "off") {
                return {
                    ...state,
                    modifiedPokemons: [...unfiltered],
                    paginated: [...unfiltered].splice(0, 12),
                    filters: false
                }
            } else {
                let filteredPokemon = unfiltered.filter(p => p.types.includes(action.payload))
                return {
                    ...state,
                    modifiedPokemons: filteredPokemon,
                    paginated: filteredPokemon.splice(0, 12),
                    filters: true,
                }
            }
        case ORDER:
        case RESET:
            if (state.filters || state.ordered || state.search){
                return {
                    ...state,
                    modifiedPokemons: [...state.ogPokemons],
                    paginated: [...state.ogPokemons].splice(0, 12),
                    filters: false,
                    ordered: false,
                    search: false
                }
            }
            return {...state}

        default:
            return state
    }
}

export default rootReducer;