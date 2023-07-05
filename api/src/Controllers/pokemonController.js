const {Pokemon} = require('../db')

const getPokemonDb = async (name) => {
    if (name) {
       const pokemonName = await Pokemon.findOne({where: {name}})
       return pokemonName
    }
    const allPokemon = await Pokemon.findAll()
    return allPokemon
}

const getPokemonById = async (id) => {
    const pokemonId = await Pokemon.findOne({where: {id}})
    return pokemonId
}

const createPokemonDb = async (name, image, hp, attack, defense, speed, height, weight, types) => {
    const nameLowerCase = name.toLowerCase()
    const newPokemon = await Pokemon.create({
        name: nameLowerCase,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
    })
    return newPokemon
}

module.exports = {
    getPokemonDb,
    getPokemonById,
    createPokemonDb
}