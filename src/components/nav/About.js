import React from 'react'
import './nav-sass/About.scss'
import { useStateContext } from '../../context/StateContext'

export default function About() {
    const { setAbout } = useStateContext()
    return (
        <div className='aboutCon'>
            hello
            <button onClick={()=>setAbout(false)}>close</button>
        </div>
    )
}
