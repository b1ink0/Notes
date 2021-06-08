import React, { useState } from "react"
import { useHistory } from "react-router"
import { useAuth } from "../../context/AuthContext"
import { auth } from "../../firebase"
import './Login.scss'
import gIcon from './img/gIcon.svg'
import bg from './img/bg.svg'

export default function LogIn() {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { logIn } = useAuth()

  auth.onAuthStateChanged(user => {
    if (user){
      history.push('/Notes')
    }
    return
  })
  const handleLogIn = async () => {
    try {
      setError('')
      setLoading(true)
      await logIn()

      auth.onAuthStateChanged((user)=> {
        if (user) {
          history.push('/Notes')
        }
        return
      })
    } catch {
      setError('Failed to Log in')
    }
    setLoading(false)
  }
 
  
  return (
      <div className='loginCon'>
        <img className='bgImg' src={bg}></img>
        <div className="navPreview">
          <h1>Notes Log In</h1>
        </div>
        <div>
          <h1>Sign Up / Log In</h1>
          <p/>
          <button disabled={loading} onClick={handleLogIn}><img src={gIcon}></img>Continue with Google</button>
        </div>
      </div>
    )
}