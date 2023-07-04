const { Router } = require('express');
const {getPokemonsHandler, getPokemonIdHandler} = require('../Handlers/pokemonHandlers')
const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler)
pokemonRouter.get('/:id', getPokemonIdHandler)

module.exports = pokemonRouter
