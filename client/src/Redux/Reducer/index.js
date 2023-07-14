import {GET_POKEMONS, PAGINATE, FILTERBYSOURCE, FILTERBYTYPE, ORDERBYNAME, ORDERBYATTACK, RESET, SEARCH, GET_DETAILS} from '../Actions/index.js'

let initialState = {
    ogPokemons: [],
    pokemons: [],
    modifiedPokemons: [],
    paginated: [],
    currentPage: 0,
    details: {},
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
                pokemons: [...action.payload],
                modifiedPokemons: [...action.payload],
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
            if (action.payload === "off") {
                return {
                    ...state,
                    modifiedPokemons: [...state.ogPokemons],
                    paginated: [...state.ogPokemons].splice(0, 12),
                    filters: false
                }
            } else {
                // mi filtro va a usar el estado "pokemons" que son todos los pokemons para posteriormente filtrarlos
                let filteredPokemon = [...state.pokemons].filter(p => p.types.includes(action.payload))
                return {
                    ...state,
                    modifiedPokemons: [...filteredPokemon],
                    paginated: [...filteredPokemon].splice(0, 12),
                    filters: true,
                }
            }
        case ORDERBYNAME:
            if (action.payload === "off") {
                return {
                    ...state,
                    modifiedPokemons: [...state.ogPokemons],
                    paginated: [...state.ogPokemons].splice(0, 12),
                    ordered: false
                }
            } else if (action.payload === "asc") {
                //ordeno el estado "pokemons" con todos los pokemons que va a usar mi filtro, de forma ascendente
                let asc = [...state.pokemons].sort((prev, next) => {
                    if (prev.name > next.name) return 1
                    if (prev.name < next.name) return -1
                    return 0
                })
                 //ordeno el estado modifiedPokemons (es el estado que se va a renderizar) de forma ascendente
                let modifiedAsc = [...state.modifiedPokemons].sort((prev, next) => {
                    if (prev.name > next.name) return 1
                    if (prev.name < next.name) return -1
                    return 0
                })
                return {
                    ...state,
                    pokemons: [...asc],
                    modifiedPokemons: [...modifiedAsc],
                    paginated: [...modifiedAsc].splice(0, 12),
                    ordered: true
                }
            } else {
                //ordeno el estado "pokemons" con todos los pokemons que va a usar mi filtro, de forma descendente
                let desc = [...state.pokemons].sort((prev, next) => {
                    if (prev.name > next.name) return -1
                    if (prev.name < next.name) return 1
                    return 0
                })
                 //ordeno el estado modifiedPokemons (es el estado que se va a renderizar) de forma descendente
                let modifiedDesc = [...state.modifiedPokemons].sort((prev, next) => {
                    if (prev.name > next.name) return -1
                    if (prev.name < next.name) return 1
                    return 0
                })
                return {
                    ...state,
                    pokemons: [...desc],
                    modifiedPokemons: [...modifiedDesc],
                    paginated: [...modifiedDesc].splice(0, 12),
                    ordered: true
                }
            }
        case ORDERBYATTACK:
            if (action.payload === "off") {
                return {
                    ...state,
                    modifiedPokemons: [...state.ogPokemons],
                    paginated: [...state.ogPokemons].splice(0, 12),
                    ordered: false
                }
            } else if (action.payload === "asc") {
                let asc = [...state.pokemons].sort((prev, next) => {
                    if (prev.attack > next.attack) return 1
                    if (prev.attack < next.attack) return -1
                    return 0
                })
                let modifiedAsc = [...state.modifiedPokemons].sort((prev, next) => {
                    if (prev.attack > next.attack) return 1
                    if (prev.attack < next.attack) return -1
                    return 0
                })
                return {
                    ...state,
                    pokemons: [...asc],
                    modifiedPokemons: [...modifiedAsc],
                    paginated: [...modifiedAsc].splice(0, 12),
                    ordered: true
                }
            } else {
                let desc = [...state.pokemons].sort((prev, next) => {
                    if (prev.attack > next.attack) return -1
                    if (prev.attack < next.attack) return 1
                    return 0
                })
                let modifiedDesc = [...state.modifiedPokemons].sort((prev, next) => {
                    if (prev.attack > next.attack) return -1
                    if (prev.attack < next.attack) return 1
                    return 0
                })
                return {
                    ...state,
                    pokemons: [...desc],
                    modifiedPokemons: [...modifiedDesc],
                    paginated: [...modifiedDesc].splice(0, 12),
                    ordered: true
                }
            }
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

  // case SET_ID:
        //     return {
        //         ...state,
        //         detailsId: action.payload
        //     }

export default rootReducer;