const db = require( '../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');
const Recipes = require('./recipes.model');

const UserRecipes = db.define('user_recipes', {
    id: {
        type: DataTypes.UUID,
        allowNull: false, 
        primaryKey: true
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    recipeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Recipes
        }
    }
})

module.exports = UserRecipes;