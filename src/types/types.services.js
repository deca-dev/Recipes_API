const typeController = require('./types.controller')

const getAllTypes = (req, res) => {
    typeController.getAllTypes()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getTypeById = (req, res) => {
    const id = req.params.id
    typeController.getTypeByid(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(400).json({message: `ID ${id} doesn't exist`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createType = (req, res) => {
    const {name} = req.body;
    if(name) {
        typeController.createType(name)
            .then(data=> [
                res.status(201).json(data)
            ])
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Invalid data',
            fields: {
                name: 'string'
            }
        })
    }
}

const deleteType = (req, res) => {
    const id = req.params.id
    typeController.deleteType(id)
        .then(data => {
            if(data){
                res.status(204).json(data)
            } else {
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    deleteType

}