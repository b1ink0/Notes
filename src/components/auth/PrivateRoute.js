import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../../context/AuthContext'

export default function PrivateRoute( { component: Component, ...rest } ) {
    const { currentUser } = useAuth()
    return (
        <Route {...rest} render={props => {
            return currentUser ? <Component {...props}/> : <Redirect to='/Notes/login'/>
        }}>
        </Route>
    )
}
