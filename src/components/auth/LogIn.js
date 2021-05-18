import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useAuth } from "../../context/AuthContext"
import { auth } from "../../firebase"

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

      console.log('signed in')
      auth.onAuthStateChanged((user)=> {
        if (user) {
          console.log('push')
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
      <>
       <button disabled={loading} onClick={handleLogIn}>sign in</button>
      </>
    )
}