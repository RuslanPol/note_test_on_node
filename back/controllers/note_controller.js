


const db = require('../db');
const Notes = require('../models/note_model');
class NoteController {


    async createNote(req, res){
        const {content,status_note} = req.body;
        console.log(content);
        try {
           // const note =
                await Notes.create({
                content:content,
                status_note: status_note,
                created_at: new Date().toISOString(),
            });
            //res.json(notes.rows[0]);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

    async getNotes(req, res) {
        try {
            const notes = await Notes.findAll();
            res.json(notes);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

    async getOneNote(req, res) {
        const id = req.params.id;
        try {
            const note = await db.query(`SELECT * FROM notes where id = $1`,[id]);
            res.json(note.rows[0]);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

    async updateNote(req, res) {

        const {context,status_note} = req.body;
        try {

               const note =await db.query(`UPDATE notes SET context=$1,status_note=$2 WHERE id = $3 RETURNING * `,
                   [context,status_note,req.params.id]);

            res.json(note.rows[0]);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

    async deleteNote(req, res) {
        const id = req.params.id;
        try {
            const note = await db.query(`DELETE FROM notes WHERE id = $1`,[id]);
            res.json(note.rows[0]);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

}

module.exports =  new NoteController();