import React, { useState } from "react";
import "./note-sass/CreateProfile.scss";
import Edit from "./img/Edit";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import LoadingSvg from "./img/LoadingSvg";
import ProfileImg from "../nav/ProfileImg";
import DefaultProfileImg from "../nav/DefaultProfileImg";

export default function CreateProfile() {
  const { userName, setUserName, setProfileExist, profileChoose, setProfileChoose, defaultTheme, defaultProfileImg } = useStateContext()
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
            profileImg: defaultProfileImg
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
      {profileChoose && <ProfileImg/>}
      <form className="passForm" onSubmit={handleSubmit}>
        <div className="profileImg">
          <DefaultProfileImg defaultImg={defaultProfileImg}/>
          <button
            type="button"
            className="profileImgEdit"
            style={{ background: defaultTheme[5], color: defaultTheme[2] }}
            onClick={()=> setProfileChoose(true)}
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
