const {Pool} = require('pg');
// const pool = new Pool({
//     user:"postgres",
//     password:"1234",
//     host:"localhost",
//     port:5432,
//     database:"notes_db"
// })
// module.exports = pool;
console.log(process.env.DATABASE_URL)
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
    // ssl: {
    //     rejectUnauthorized: false
    // }
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

pool.query(createTableQuery)
    .then(res => console.log('Table is successfully created'))
    .catch(err => console.error('Error creating table', err.stack));

module.exports = pool;