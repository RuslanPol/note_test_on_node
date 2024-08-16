const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db')
db.authenticate()
    .catch(error => console.error(error))
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.json());// Парсинг JSON
const noteRouter = require('./routes/note_route');
const { all } = require("express/lib/application");
app.use(express.urlencoded({ extended: true })); // Парсинг URL-encoded данных
app.use(express.static(path.join(__dirname, '..', 'front', 'public')));
app.use('/api', noteRouter);
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });