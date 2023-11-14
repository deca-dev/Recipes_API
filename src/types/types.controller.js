const Types = require('../models/types.model')

const getAllTypes = async() => {
    const data = await Types.findAll();
    return data
}

const getTypeByid = async(id) => {
    const data = await Types.findOne({
        where: {
            id
        }
    })
    return data
}

const createType = async(name) => {
    const data = await Types.create({
        name
    })

    return data
}

const deleteType = async(id) => {
    const data = await Types.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllTypes,
    getTypeByid,
    createType,
    deleteType
}