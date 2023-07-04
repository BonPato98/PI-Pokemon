const axios = require('axios')

const getPokemonsHandler = async (req, res) => {
    const {name} = req.query
        try {
            if (name) {
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    const pokemon = response.data
                    console.log('pokemon:',pokemon);
                    const {id, sprites, height, weight, stats, types} = pokemon
                    const pokemonData = {
                        id,
                        name,
                        image: sprites.front_default,
                        hp: stats[0].base_stat,
                        attack: stats[1].base_stat,
                        defense: stats[2].base_stat,
                        speed: stats[5].base_stat,
                        height,
                        weight,
                        types: types.map(t => t.type.name)
                    }
                    return res.status(200).send(pokemonData)
                } catch (error) {
                    return res.status(404).send('Pokemon no existe')
                }
            }
            
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60')
            const pokemons = await Promise.all (response.data.results.map(async p => {
                const info = await axios.get(p.url)
                const {id, name, sprites, height, weight, stats, types} = info.data
                return {
                    id,
                    name,
                    image: sprites.front_default,
                    hp: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    speed: stats[5].base_stat,
                    height,
                    weight,
                    types: types.map(t => t.type.name)
                }
            }))
            res.status(200).send(pokemons)
        } catch (error) {
            res.status(400).send('error')
        }
}

module.exports = {
    getPokemonsHandler
}