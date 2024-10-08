const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note_controller.js');


router.post('/notes', noteController.createNote)
router.get('/notes', noteController.getNotes);
router.get('/notes/:id', noteController.getOneNote);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);


module.exports = router;