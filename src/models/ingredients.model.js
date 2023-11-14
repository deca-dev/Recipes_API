const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Types = require('./types.model');

const Ingredients = db.define('ingredients', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
     name: {
        type: DataTypes.STRING, 
        allowNull: false
     },
     typeId : {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type_id',
        references: {
            key: 'id',
            model: Types
        }
     },
     urlImage: {
        type: DataTypes.STRING,
        validate: {
            // isUrl: true
        },
        field: 'url_image'
     }
},
 {
    timestamps: false
 })

module.exports = Ingredients