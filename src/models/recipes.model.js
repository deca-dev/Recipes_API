const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');
const Categories = require('./categories.model');

const Recipes = db.define('recipes', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    urlImg: {
        type: DataTypes.STRING,
        validate: {
            // isUrl: true
        },
        field: 'url_img'
    },
    time: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    portions: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    },
    origin: {
        type: DataTypes.STRING
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        defaultValue: 0
    }
})

module.exports = Recipes;   