const p = document.createElement('p');
const url = new URL(window.location.href);
const noteId = url.searchParams.get('id');
//const textNode = document.createTextNode(noteId);
// p.appendChild(textNode);
// document.body.appendChild(p)
const form = document.getElementById('noteForm1');
const div = document.getElementById('div1');

async function loadNote(){
const response = await fetch(`http://localhost:8080/api/notes/${noteId}`);
const note = await response.json();
console.log(note);
const listItem = document.createElement('p');
listItem.innerText =
           `id: ${note.id}
            Context: ${note.context}
            Status: ${note.status_note}
            Created at:${note.created_at}\n`;
div.appendChild(listItem)
}

const button = document.getElementById('but')
const buttonDel = document.getElementById('butDel')

buttonDel.addEventListener('click', async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:8080/api/notes/${noteId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    });
    location.reload();
});
    button.addEventListener('click', async (event) => {
        event.preventDefault();
        const text = document.createElement('input');
        text.type = 'text';
        text.placeholder = 'New note';
        text.id = 'noteText'
        form.appendChild(text);
        const statusNote = document.createElement('input');
        statusNote.type = 'text';
        statusNote.placeholder = 'New status';
        statusNote.id = 'noteStatus';
        form.appendChild(statusNote);
        const buttFofm = document.createElement('button');
        buttFofm.type = 'submit'
        buttFofm.textContent = 'Enter'
        form.appendChild(buttFofm);
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const text = document.getElementById('noteText').value;
        const noteStatus = document.getElementById('noteStatus').value;
        const response = await fetch(`http://localhost:8080/api/notes/${noteId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({context: text, status_note: noteStatus})
        });

        const listItem = await response.json();
        console.log(listItem)
        form.reset();
        location.reload();
    });
    loadNote()

