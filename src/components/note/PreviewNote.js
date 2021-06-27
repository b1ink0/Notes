import React, { useEffect } from 'react'
import './note-sass/PreviewNote.scss'
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from '../../context/StateContext';

export default function PreviewNote( { note } ) {
    const { currentUser } = useAuth()
    const { defaultTheme } = useStateContext()
    useEffect(() => {
        document.querySelector("body").style.background = defaultTheme[0];
      }, []);
    useEffect(()=>{
        if(currentUser){
            database.users.doc(currentUser.uid)
        }
    },[])
    return (
        <div className='previewCon'>
            <div className='preview' 
            style={{
                background: note.backgroundColor,
                color: note.textColor,
                fontFamily:note.font,
                boxShadow: `0px 0px 10px ${defaultTheme[4]}`
            }}>
                <h1>
                    {note.title}
                </h1>
                <div style={{fontSize:`${note.fontSize}px`}}>
                    {note.note}
                </div>
                <p style={{color:note.textColor}}>
                    {note.date}
                </p>
            </div>
        </div>
    )
}
