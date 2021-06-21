import React, { useState } from "react";
import "./note-sass/CreateProfile.scss";
import Edit from "./img/Edit";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import LoadingSvg from "./img/LoadingSvg";

export default function CreateProfile() {
  const { userName, setUserName, setProfileExist } = useStateContext()
  const { currentUser } = useAuth()
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [saved , setSaved] = useState(false)
  const [tempPass, setTempPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (currentUser){
      if (currentUser) {
        database.users
          .doc(currentUser.uid)
          .update({
            name: userName,
            password: tempPass,
          }).then(()=>{
            setLoading(false)
            setSaved(true)
            setTimeout(()=>{
              setProfileExist(false)
            },300)
          })
      }
    }
  }
  return (
    <div className={`enterPassCon ${saved && 'fadeOutProfileExist'}`}>
      {loading && <div className='loading'><LoadingSvg/></div>}
      <form className="passForm" onSubmit={handleSubmit}>
        <div className="profileImg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M 12 4 C 9.789063 4 8 5.789063 8 8 C 8 10.210938 9.789063 12 12 12 C 14.210938 12 16 10.210938 16 8 C 16 5.789063 14.210938 4 12 4 Z M 9.03125 13.40625 C 5.253906 14.550781 4 17.65625 4 17.65625 L 4 20 L 20 20 L 20 17.65625 C 20 17.65625 18.746094 14.550781 14.96875 13.40625 C 14.761719 14.863281 13.511719 16 12 16 C 10.488281 16 9.238281 14.863281 9.03125 13.40625 Z"></path>
          </svg>
          <button
            type="button"
            className="profileImgEdit"
          >
            <Edit />
          </button>
        </div>
        <div className="inputCon">
          <label>Enter Username:</label>
          <input
            type="text"
            minLength="3"
            maxLength="15"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete='username'
            required
          />
          <h1>{userName.length}/15</h1>
          <label>Create password:</label>
          <input autoComplete='current-password' type={show ? 'text' : 'password'} placeholder="Enter..." minLength='8' value={tempPass} required maxLength='32' onChange={(e)=>setTempPass(e.target.value)}/>
          <div className='showPass' onClick={()=>setShow(!show)} >{show ? 'Hide' : 'Show'}</div>
        </div>    
        <button type="submit" >Save</button>
      </form>
    </div>
  );
}
