const ingredientController = require('./ingredients.controller')

const getAllIngredients = (req, res) => {
    ingredientController.getAllIngredients()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getIngredientById = (req, res) => {
    const id = req.params.ingredient_id
    ingredientController.getIngredientById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createIngredient = (req, res) => {
    const {name, typeId, urlImage} = req.body;
    if(name && typeId){
        ingredientController.createIngredient({name, typeId, urlImage})
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
    } else {
        res.status(400).json({
            message: 'Missing data',
            fields: {
                name: 'string',
                typeId: 'integer',
                urlImage: 'string'
            }
        })
    }
}

const patchIngredient = (req, res) => {
    const {name, typeId, urlImage} = req.body;
    const id = req.params.ingredient_id;
    ingredientController.updateIngredient(id,{name, typeId, urlImage})
        .then(data => {
            if(data[0]){
                res.status(200).json({message: 'Ingredient edited succesfully'})
            } else {
                res.status(400).json({message: 'Invalid Id'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteIngredient = (req, res) => {
    const id = req.params.ingredient_id;
    ingredientController.deleteIngredient(id)
        .then(data=> {
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

const postIngredientToUser = (req, res) => {
    const userId = req.user.id;
    const {amount} = req.body;
    const ingredientId = req.params.ingredient_id;
    if(amount) {
        ingredientController.addIngredientToUser({userId, ingredientId, amount})
            .then(data=> {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    } else {
        res.status(400).json({
            message: 'Missing data',
            fields: {
                amount: 'string'
            }
        })
    }
}

module.exports = {
    getAllIngredients,
    getIngredientById,
    createIngredient,
    patchIngredient,
    deleteIngredient,
    postIngredientToUser
}