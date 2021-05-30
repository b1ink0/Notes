import React, { useState } from 'react'
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from '../../context/StateContext'
import './note-sass/SideNav.scss'

export default function SideNav() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const { logOut } = useAuth();
    const { sideNavbar, setSideNavbar } = useStateContext()
    const handleLogOut = async () => {
      try {
        setError("");
        setLoading(true);
        await logOut();
        auth.onAuthStateChanged((user) => {
          if (!user) {
            history.push("/Notes/login");
          }
          return;
        });
      } catch {
        setError("Failed to logOUt");
      }
      setLoading(false);
    };  
    const handleClose = () => {
      document.querySelector('.sideNav').classList.add('navBarOut')
      setTimeout(()=>{
        setSideNavbar(false)
      },400)
    }
    return (
        <div className='sideNav'>
            <button onClick={handleClose}>
              <div className='burger'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
            <div className='optionCon'>
              <div className='themes'>Themes</div>
              <div className='about'>About</div>
              <div className='contact'>Contact</div>
              <div className='logOut' onClick={handleLogOut}>Log Out</div>
            </div>
        </div>
    )
}
