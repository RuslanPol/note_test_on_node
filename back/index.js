const path = require('path');
 require('dotenv').config();
const express = require('express');
const cors = require('cors');
const note = require('./models/note_model');
const s = require('./sync')

const db = require('./db')
const app = express();
const PORT = process.env.PORT || 8080;
const noteRouter = require('./routes/note_route');
const { all } = require("express/lib/application");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Notes = require("./models/note_model");
app.use(cors());
db.authenticate()
    .catch(error => console.error(error))
db.sync()
    .catch(error => console.error(error))

app.use(express.json());// Парсинг JSON
app.use(express.urlencoded({ extended: true })); // Парсинг URL-encoded данных
app.use(express.static(path.join(__dirname, '..', 'front', 'public')));
app.use('/api', noteRouter);
// app.post('api/notes', (req, res) => {
//   Notes.create({
//    content: "dddd",
//    status_note: "hfhfhfh",
//    created_at: new Date.now(),
//   }).then( r =>console.log('ghjididid'))
// })
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });