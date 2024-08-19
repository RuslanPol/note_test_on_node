const sequelize = require('../db');
const Notes = require('../models/note_model.js');
const db = require("../db");
const {where} = require("sequelize");

class NoteController {

    async createNote(req, res) {
        const {content, status_note} = req.body;
        if (!content || !status_note) {
            return res.status(400).send('Content and status_note are required');
        }
        try {
            const note = {
                content: content,
                status_note: status_note,
                created_at: new Date()
            }
            const newNote = await Notes.create(note)
            res.status(200).send(newNote);
        } catch (err) {
            console.log('Ошибка при создании note\n', err)
            res.status(500).send('Server Error');
        }
    }

    async getNotes(req, res) {
        try {
            const notes = await Notes.findAll();
            res.json(notes);
        } catch (err) {
            res.status(500).send('Server Error');
        }
    }

    async getOneNote(req, res) {
        const id = req.params.id;
        try {
            const note = await Notes.findOne({
                where: {id: id}
            })
            res.status(200).send(note);
        } catch (err) {
            res.status(500).send('Server Error');
        }
    }

    async updateNote(req, res) {
        const {content, status_note} = req.body;
        const id = req.params.id;
        try {
            const note = Notes.update({
                content: content,
                status_note: status_note
            }, {
                where: {id: id}
            })
            res.status(200).send(note);
        } catch (err) {
            res.status(500).send('Server Error');
        }
    }

    async deleteNote(req, res) {
        const id = req.params.id;
        try {
            await Notes.destroy({
                where: {id: id}
            })
        } catch (err) {
            res.status(500).send('Server Error');
        }
    }
}

module.exports = new NoteController();