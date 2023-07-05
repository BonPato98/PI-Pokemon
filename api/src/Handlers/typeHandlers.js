const axios = require('axios')
const {checkTypesDb, saveTypesDb, getTypesDb} = require('../Controllers/typeController')

const getTypes = async (req, res) => {
    const types = await checkTypesDb()
    if (types.length > 0) {
        return types
    }
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/type')
        const typesApi = await Promise.all(response.data.results.map(t => t.name))
        saveTypesDb(typesApi)
        res.status(200).send(typesApi)
    } catch (error) {
        res.status(400).send('msg:', error.msg)
    }
}

module.exports = {
    getTypes
}