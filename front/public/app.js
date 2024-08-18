const form = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.getElementById('noteText').value;
    const noteStatus = document.getElementById('noteStatus').value;
    console.log(text)
    const response = await fetch(`/api/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: text, status_note: noteStatus})
    });
    const newNote = await response.json();
    console.log(newNote)
    const listItem = document.createElement('li');
    listItem.textContent = newNote.text;
    listItem.textContent = newNote.status_note;
    notesList.appendChild(listItem);
    form.reset();
    location.reload();


});


 async function addNoteToList(note) {
    const listItem = document.createElement('li');
    const infoLink = document.createElement('a')
     const br = document.createElement('br');
    listItem.textContent = `СОДЕРЖАНИЕ: ${note.content}`
    infoLink.textContent = `info`
    infoLink.href = `note.html?id=${note.id}`;
    console.log(infoLink.href);
     listItem.appendChild(br);
    listItem.appendChild(infoLink);
    notesList.appendChild(listItem);


}


async function loadNotes() {
    const response = await fetch('/api/notes');

    if (response.ok) {
        const notes = await response.json();
        notesList.innerHTML = '';
        notes.forEach(note => {
             addNoteToList(note);
        });
    } else {
        console.error('Ошибка при загрузке заметок:', response.statusText);
    }
}

    loadNotes().then(r =>console.log(r) )


