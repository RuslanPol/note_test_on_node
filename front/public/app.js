
const form = document.getElementById('noteForm');
const notesList = document.getElementById('notesList');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const text = document.getElementById('noteText').value;
    const noteStatus = document.getElementById('noteStatus').value;
    console.log(text)
    const response = await fetch('http://localhost:8080/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({context: text, status_note: noteStatus})
    });

    const newNote = await response.json();
    console.log(newNote)
    const listItem = document.createElement('li');
    listItem.textContent = newNote.text;
    listItem.textContent = newNote.status_note;
    notesList.appendChild(listItem);
    form.reset();
    location.reload();
     await loadNotes();

});

async function loadNotes() {
    const response = await fetch('http://localhost:8080/api/notes');

    const notes = await response.json();
    notes.forEach(note => {
        const infoLink = document.createElement('a')
        const listItem = document.createElement('li');

        listItem.innerText =
            `Context: ${note.context}\n`;
        infoLink.textContent = `INFO`
        infoLink.href = `note.html?id=${note.id}`;
        console.log(infoLink.href);
        infoLink.target = `_blank`
        listItem.appendChild(infoLink)
        notesList.appendChild(listItem)
    });

}

    loadNotes().then(r => console.log(r));


