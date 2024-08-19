const {DataTypes} = require('sequelize')
const db = require('../db')

const Notes = db.define('notes',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status_note: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },

    },
    // Опции
    {

        timestamps: false


    }
)


module.exports = Notes