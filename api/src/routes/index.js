const { Router } = require('express');
const axios = require('axios')
const { Pokemon, Tipo } = require('../db.js')
const Sequelize = require('sequelize')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const pokemons = [];

router.get('/pokemons', async (req, res, next) => {
    try {
        const hasQuery = req.query.hasOwnProperty('name')
        if (hasQuery) {
            var existe = pokemons.find(p => p.Nombre === req.query.name)
            if (existe) {
                res.send(existe)
            } else {
                res.status(404).send('Pokemon not found')
            }
        } else {
            next()
        }
    } catch (e) {
        console.log(e)
    }
    
})

router.get('/pokemons', async (req, res) => {
    try {
        if (pokemons.length == 0) {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=40')
            var apiPokemons = response.data.results
            for (let p = 0; p < apiPokemons.length; p++) {
                var pokeDetails = await axios.get(apiPokemons[p].url)
                var pokeInfo = pokeDetails.data
                var newPokemon = {
                    ID: pokeInfo.id,
                    Nombre: pokeInfo.name,
                    Tipos: pokeInfo.types,
                    Imagen: pokeInfo.sprites.front_default
                }
                pokemons.push(newPokemon)
            }
            const dbPokemon = Pokemon.findAll()
            pokemons.push(dbPokemon)
        }
        res.send(pokemons)

    } catch (e) {
        console.log(e)
    }
})

router.get('/pokemons/:idPokemon', async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`);
        var pokemon = response.data;
        const existsInApi = pokemons.find(p => p.ID == pokemon.id)
        const existsInDb = Pokemon.findAll({
            where: {
                ID: pokemon.id
            }
        })
        if (existsInApi) {
            var apiPokemon = {
                Nombre: pokemon.name,
                Tipos: pokemon.types,
                Imagen: pokemon.sprites.front_default,
                ID: pokemon.id,
                Altura: pokemon.height,
                Peso: pokemon.weight,
                Vida: pokemon.stats[0].base_stat,
                Ataque: pokemon.stats[1].base_stat,
                Defensa: pokemon.stats[2].base_stat,
                Velocidad: pokemon.stats[5].base_stat,
            }
            res.send(apiPokemon)
        } else if (existsInDb) {
            var dbPokemon = 'db pokemon'
            res.send(dbPokemon)
        } else {
            res.status(404).send('Pokemon Not Found.')
        }
    } catch (e) {
        console.log(e)
    }
})


module.exports = router;
