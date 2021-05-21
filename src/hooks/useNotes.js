import { useEffect, useReducer } from "react"
import { useAuth } from "../context/AuthContext"

const ACTIONS = {
    SET_NOTES: 'set-notes'
}
const reduser = (state, {type, payload}) => {
    switch(type){
        case ACTIONS.SET_NOTES:
            return {
                notesId: payload.notesId,
                notes: [...state, payload.notes]
            }
    }
}
export const useNotes = ( notesId = null, notes = null ) => {
    const [state, dispatch] = useReducer(reduser, {
        notesId,
        notes:[]
    })
    const { currentUser } = useAuth()
    useEffect(()=>{
        dispatch({type: ACTIONS.SET_NOTES, payload:{
            notesId,
            notes
        }})
    }, [notesId,notes])
    return state
}
