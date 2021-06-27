import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/SideNav.scss";
import Edit from './img/Edit'
import EditProfile from "../nav/EditProfile";
import DefaultProfileImg from "../nav/DefaultProfileImg";

export default function SideNav() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [out, setOut] = useState(false);
  const history = useHistory();
  const { logOut } = useAuth();
  const {
    sideNavbar,
    setSideNavbar,
    setThemes,
    defaultTheme,
    about,
    setAbout,
    setContact,
    setProfileEdit,
    profileEdit,
    userName,
    setUserName,
    defaultProfileImg,
    setDefaultProfileImg,
    setDefaultTheme
  } = useStateContext();
  const defaultThemeStyle = {
    background: defaultTheme[1],
    color: defaultTheme[2],
    boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
  }
  const handleLogOut = async () => {
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setOut(false);
      try {
        setError("");
        setLoading(true);
        setUserName('User-420')
        setSideNavbar(false);
        setDefaultProfileImg(1)
        setDefaultTheme(["#ececec","#ffffff","#000000","#c3c3c3","#bbbbbb","#c990ff","#00b300","1","#bbbbbb"])
        logOut();
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
    }, 300);
  };
  const handleClose = () => {
    document.querySelector(".sideNav").classList.add("navBarOut");
    setTimeout(() => {
      setSideNavbar(false);
    }, 400);
  };
  const handleOpen = async () => {
    await setOut(true);
    document.querySelector(".delCon").classList.add("openAnime");
  };
  const handleCancel = async () => {
    await document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setOut(false);
    }, 300);
  };
  return (
    <div className="sideNav" style={{ background: defaultTheme[0] }}>
      {out && (
        <div className="delCon">
          <div
            className="del"
            style={{ background: defaultTheme[1], color: defaultTheme[2] }}
          >
            <h1>Are you sure ?</h1>
            <div>
              <button
                className="cancelDel"
                style={{ background: defaultTheme[3] }}
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button className="deleteDel" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
      <button
        className="navClose"
        onClick={handleClose}
        style={{ background: defaultTheme[0] }}
      >
        <div className="burger">
          <div style={{ background: defaultTheme[8] }}></div>
          <div style={{ background: defaultTheme[8] }}></div>
          <div style={{ background: defaultTheme[8] }}></div>
        </div>
      </button>
      <div className="profile">
        <div className="profileImgCon" style={{boxShadow: `0px 0px 10px ${defaultTheme[4]}`}}>
          <DefaultProfileImg defaultImg={defaultProfileImg}/>
        </div>
        <div className="profileNameCon">
          <h1 style={{ color: defaultTheme[2] }}>{userName}</h1>
          <button style={{ background: defaultTheme[8] }} onClick={()=> setProfileEdit(true)}>
            <Edit/>
          </button>
        </div>
      </div>
      {
        profileEdit && <EditProfile/>
      }
      <div className="optionCon">
        <button
          className="themes"
          style={defaultThemeStyle}
          onClick={() => setThemes(true)}
        >
          Themes
        </button>
        <button
          className="about"
          style={defaultThemeStyle}
          onClick={() => setAbout(true)}
        >
          About
        </button>
        <button
          className="contact"
          style={defaultThemeStyle}
          onClick={()=>setContact(true)}
        >
          Contact
        </button>
        <button
          disabled={loading}
          className="logOut"
          style={defaultThemeStyle}
          onClick={handleOpen}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
