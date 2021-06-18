import React, { useContext, useState } from 'react'

const StateContext = React.createContext()

export const useStateContext = () => {
    return useContext(StateContext)
}

export const StateProvider = ( { children } ) => {
    const [addNote, setAddNote] = useState(false);
    const [text, setText] = useState("");
    const [notes, setNotes] = useState([]);
    const [noteBackgroundColor, setNoteBackgroundColor] = useState("#ffffff");
    const [textColor, setTextColor] = useState('#000000')
    const [font, setFont] = useState('Sans-serif')
    const [fontSize, setFontSize] = useState('25')
    const [title, setTitle] = useState('')
    const [sort, setSort] = useState('title')
    const [currentNote, setCurrentNote] = useState({})
    const [preview, setPreview] = useState(false);
    const [edit, setEdit] = useState(false);
    const [sideNavbar, setSideNavbar] = useState(false)
    const [themes, setThemes] = useState(false)
    const [defaultTheme, setDefaultTheme] = useState(['#ececec','#fff','#000','#dfdfdf','#bbb'])

    const value = {
        addNote,
        setAddNote,
        text,
        setText,
        notes,
        setNotes,
        noteBackgroundColor,
        setNoteBackgroundColor,
        textColor,
        setTextColor,
        font,
        setFont,
        fontSize,
        setFontSize,
        title,
        setTitle,
        sort,
        setSort,
        currentNote,
        setCurrentNote,
        preview,
        setPreview,
        edit,
        setEdit,
        sideNavbar,
        setSideNavbar,
        themes,
        setThemes,
        defaultTheme,
        setDefaultTheme
    }
    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}