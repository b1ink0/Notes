import React from 'react'

export default function NotesRender({ notes }) {
    return (
        <ul>
            {
                notes.map(note => <li style={{color: `${note.color}`}} key={note.id}>{note.note}</li>)
            }   
        </ul>
    )
}
