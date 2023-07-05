const {Type} = require('../db')

const checkTypesDb = async () => {
    const types = await Type.findAll()
    return types
}

const saveTypesDb = async (types) => {
    types.forEach(t => {
        Type.create({
            name:t
        })
    })
}

const getTypesDb = async () => {

}

module.exports = {
    checkTypesDb,
    saveTypesDb,
    getTypesDb,
}