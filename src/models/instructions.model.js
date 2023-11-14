const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Recipes = require('./recipes.model');

const Instructions = db.define('instructions', {
    id: {
        type: DataTypes.UUID, 
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    step: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
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

module.exports = Instructions