const categoryController = require('./categories.controller');

const getAllCategories = (req, res) => {
    categoryController.getAllCategories()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getCategoryById = (req, res) => {
    const id = req.params.id;
    categoryController.getCategoryById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(400).json({message: `ID ${id}, doesn't exist`})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createCategory = (req, res) => {
    const {name} = req.body
    if(name){
        categoryController.createCategory(name)
        .then(data=>{
            res.status(201).json(data)
        })
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

const deleteCategory = (req, res) => {
    const id = req.params.id
    categoryController.deleteCategory(id)
        .then(data=> {
            if(data) {
                res.status(204).json(data)
            } else {
                res.status(404).json({message: 'Invalid Id'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}