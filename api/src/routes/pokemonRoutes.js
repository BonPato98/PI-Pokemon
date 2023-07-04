const { Router } = require('express');
const {getPokemonsHandler} = require('../Handlers/pokemonHandlers')
const pokemonRouter = Router();

pokemonRouter.get('/', getPokemonsHandler)

module.exports = pokemonRouter
