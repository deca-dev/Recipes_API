const Users = require('./users.model')
const Categories = require('./categories.model')
const Ingredients = require('./ingredients.model')
const Instructions = require( './instructions.model')
const RecipesIngredients = require('./recipes_ingredientes.model')
const Recipes = require('./recipes.model')
const Types = require('./types.model')
const UsersIngredients = require( './users_ingredients.model')
const UsersRecipes = require('./users_recipes.model')

const initModels = () => {
    //? Has FK goes into parenthesis
    //? Belongs to Fk is first Parameter
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)

    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

    Ingredients.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Ingredients)

    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)
    
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)

    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)

    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)

    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)
}

module.exports = initModels