import React, { useState } from 'react'
import { useStateContext } from '../../context/StateContext'
import './note-sass/AddNotesBtn.scss'

export default function AddNotesBtn() {
    const { setAddNote } = useStateContext()
    const [onlineStatus, setOnlineStatus] = useState(true)

    const handleClick = () => {
        if (navigator.onLine){
            console.log('online')
            setAddNote(true)
        }
        if (navigator.onLine === false){
            setOnlineStatus(false)
            console.log('offline')
        }
    }
    return (
        <>
         {
        !onlineStatus && 
        (
          <div className='offline'>
            <div>
              <p>Check your internet connection and try again.</p>
              <button onClick={()=> setOnlineStatus(true)}>Close</button>
            </div>
          </div>
        )
        }
        <span className='addNotesBtn' onClick={handleClick}>
            <div></div>
            <div></div>
        </span>
        </>
    )
}
