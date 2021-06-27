import React, { useEffect } from 'react'
import './note-sass/PreviewNote.scss'
import { useStateContext } from '../../context/StateContext';

export default function PreviewNote( { note } ) {

    const { defaultTheme } = useStateContext()

    // First Load
    useEffect(() => {
        document.querySelector("body").style.background = defaultTheme[0];
      }, [defaultTheme]);

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
