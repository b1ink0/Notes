import React, { useContext, useState } from 'react'

const StateContext = React.createContext()

export const useStateContext = () => {
    return useContext(StateContext)
}

export const StateProvider = ( { children } ) => {
    const [addNote, setAddNote] = useState(false);
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);
    const [noteColor, setNoteColor] = useState("red");
    const [title, setTitle] = useState('')

    const value = {
        addNote,
        setAddNote,
        text,
        setText,
        notes,
        setNotes,
        noteColor,
        setNoteColor,
        title,
        setTitle
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}