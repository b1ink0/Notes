import React from 'react'

export default function AddNotesBtn({ addNote, setAddNote}) {
    const handleClick = () => {
        setAddNote(true)
    }
    return (
        <span onClick={handleClick}>
            +
        </span>
    )
}
