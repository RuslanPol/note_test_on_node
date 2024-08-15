


import db from '../db'

class NoteController {


    async createNote(req, res){
        const {context,status_note} = req.body;
        console.log(context);
        try {
            const note = await db.query(`INSERT INTO notes (context,created_at,status_note) VALUES ($1,NOW(),$2)
                                        RETURNING *`, [context,status_note]);
            res.json(note.rows[0]);
        }
        catch(err){
            res.status(500).send('Server Error');
        }
    }

    async getNotes(req, res) {
        try {
            const notes = await db.query(`SELECT * FROM notes`);
            res.json(notes.rows);
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