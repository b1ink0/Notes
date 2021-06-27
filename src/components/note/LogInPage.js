import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useStateContext } from '../../context/StateContext'
import { auth } from '../../firebase'
import LogIn from '../auth/LogIn'
import NotesRender from './NotesRender'

export default function LogInPage() {
    const { currentUser } = useAuth()
    const { logInCheck, setLogInCheck } = useStateContext()
    if (currentUser){
        auth.onAuthStateChanged((user) => {
            if (user) {
              setLogInCheck(true)
            } else if (!user){
                setLogInCheck(false)
            }
            return;
          });
    }
    return (
        <>
            {
                logInCheck ? <NotesRender/> : <LogIn/>   
            }
        </>
    )
}
