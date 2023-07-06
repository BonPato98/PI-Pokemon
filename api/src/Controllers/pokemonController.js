const {Pokemon, Type } = require('../db')

const getPokemonDb = async (name) => {
    if (name) {
       const pokemonName = await Pokemon.findOne({
        where: {name},
        include: {
            model: Type,
            attribute: "name",
            through: { attributes: [] }
        }
    })
       return pokemonName
    }
    const allPokemon = await Pokemon.findAll({
        include: {
            model: Type,
            attribute: "name",
            through: { attributes: [] }
        }
    })
    return allPokemon
}

const getPokemonById = async (id) => {
    const pokemonId = await Pokemon.findOne({
        where: {id},
        include: {
            model: Type,
            attribute: "name",
            through: { attributes: [] }
        }})
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
        weight,
    })
    newPokemon.addTypes(types)
    return newPokemon
}

module.exports = {
    getPokemonDb,
    getPokemonById,
    createPokemonDb
}