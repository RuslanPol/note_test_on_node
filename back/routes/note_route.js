
import express from "express";
const router = express.Router();
import noteController from '../controllers/note_controller.js'


router.post('/notes', noteController.createNote)
router.get('/notes',noteController.getNotes);
router.get('/notes/:id',noteController.getOneNote);
router.put('/notes/:id',noteController.updateNote);
router.delete('/notes/:id',noteController.deleteNote);


export  default router