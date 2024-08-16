//const {Pool} = require('pg');
const { Sequelize,Datatypes} =require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(  process.env.DATABASE_URL,{
    dialect: 'postgres'
});

// Создание таблицы, если она не существует
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS notes(
id SERIAL PRIMARY KEY,
context TEXT NOT NULL,
 status_note VARCHAR(255),
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 );
`;

// pool.query(createTableQuery)
//     .then(res => console.log('Table is successfully created'))
//     .catch(err => console.error('Error creating table', err.stack));
module.exports = sequelize