import React, { useEffect } from 'react'
import './note-sass/PreviewNote.scss'
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";

export default function PreviewNote( { note } ) {
    const { currentUser } = useAuth()
    useEffect(()=>{
        if(currentUser){
            database.users.doc(currentUser.uid)
        }
    },[])
    return (
        <div className='previewCon'>
            <div className='preview' 
            style={{
                background:`${note.backgroundColor}`,
                color:`${note.textColor}`,
                fontFamily:`${note.font}`
            }}>
                <h1>
                    {note.title}
                </h1>
                <div style={{fontSize:`${note.fontSize}px`}}>
                    {note.note}
                </div>
                <p>
                    {note.date}
                </p>
            </div>
        </div>
    )
}
