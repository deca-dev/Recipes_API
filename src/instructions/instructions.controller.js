const Instructions = require('../models/instructions.model')
const uuid = require('uuid')


const getAllInstructions = async () => {
    const data = await Instructions.findAll();
    return data
}

const getInstructionById = async(id) => {
    const data = await Instructions.findOne({
        where: {
            id
        }
    })
    return data
}

const createInstruction = async(data) => {
    const response = Instructions.create({
        id: uuid.v4(),
        description: data.description,
        step: data.step,
        recipeId: data.recipeId
    })

    return response
}

const updateInstruction = async(id, data) => {
    const response = Instructions.update(data, {
        where: {
            id
        }
    })

    return response
}

const deleteInstruction = async(id) => {
    const data = Instructions.destroy({
        where: {
            id
        }
    })

    return data
}

module.exports = [
    getAllInstructions,
    getInstructionById,
    createInstruction,
    updateInstruction,
    deleteInstruction
]