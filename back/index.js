 //const path = require('path');
 import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import db from './db';
const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;
app.use(express.json());// Парсинг JSON
import noteRouter from './routes/note_route'
import {all} from 'express/lib/application'
app.use(express.urlencoded({ extended: true })); // Парсинг URL-encoded данных
app.use(express.static(path.join(__dirname, '..', 'front', 'public')));
app.use('/api', noteRouter);
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) });