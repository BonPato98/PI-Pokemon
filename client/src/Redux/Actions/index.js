import axios from 'axios'

export const GET_POKEMONS = "GET_POKEMONS"

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