const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(cors());
const PORT = process.env.PORT||8080;
app.use(express.json());// Парсинг JSON
const  noteRouter = require('./routes/note_route');
const {all} = require("express/lib/application");

app.use('/api',noteRouter);

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});