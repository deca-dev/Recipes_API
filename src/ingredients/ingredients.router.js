const ingredientServices = require('./ingredients.services')
const passport = require('passport')

const adminMiddleware = require('../middlewares/rol.middleware')

const router = require('express').Router()
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(ingredientServices.getAllIngredients)
    .post(passport.authenticate('jwt', {session: false}),adminMiddleware,ingredientServices.createIngredient)

router.route('/:ingredient_id')
    .get(ingredientServices.getIngredientById)
    .patch(passport.authenticate('jwt', {session: false}), adminMiddleware, ingredientServices.patchIngredient)
    .delete(passport.authenticate('jwt', {session: false}),adminMiddleware,ingredientServices.deleteIngredient)

router.post('/:ingredient_id/add_to_user',passport.authenticate('jwt', {session: false}), ingredientServices.postIngredientToUser ) //? Route to add ingredients owned by user

module.exports = router

