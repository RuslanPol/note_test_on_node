


const sequelize = require('../db');
const Notes = require('../models/note_model.js');
class NoteController {

    async createNote(req, res){
        const {content,status_note} = req.body;
        console.log(content);
        if (!content || !status_note) {
            return res.status(400).send('Content and status_note are required');
        }
        try {
            console.log("я здесь")
                 const newNote=await Notes.create
            ({

                content: content.req.body,
                status_note: status_note.req.body,
                created_at: new Date()
            });
                //res.status(200).send(newNote);
            res.json(newNote)
        }
        catch(err) {
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