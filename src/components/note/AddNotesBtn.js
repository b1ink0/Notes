import React from 'react'
import { useStateContext } from '../../context/StateContext'
import './note-sass/AddNotesBtn.scss'

export default function AddNotesBtn() {
    const { setAddNote } = useStateContext()
    const handleClick = () => {
        setAddNote(true)
    }
    return (
        <span className='addNotesBtn' onClick={handleClick}>
            <div></div>
            <div></div>
        </span>
    )
}
