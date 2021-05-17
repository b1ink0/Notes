import React from 'react'

export default function NotesRender({ notes }) {
    function reverseArr(input) {
        let ret = [];
        for(let i = input.length-1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    }
    let notesReverse = reverseArr(notes);
    return (
        <ul>
            {
                notesReverse.map(note => <li style={{color: `${note.color}`}} key={note.id}>{note.note}</li>)
            }   
        </ul>
    )
}
