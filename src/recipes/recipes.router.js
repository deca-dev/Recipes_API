const recipeServices = require('./recipes.services')
const passport = require('passport')

const router = require('express').Router()

require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(recipeServices.getAllRecipes)
    .post(passport.authenticate('jwt', {session: false}),recipeServices.createRecipe)

router.route('/:recipe_id')
    .get(recipeServices.getRecipeById)
    .patch(passport.authenticate('jwt', {session: false}),recipeServices.patchRecipe)
    .delete(passport.authenticate('jwt', {session: false}),recipeServices.deleteRecipe)

    module.exports = router