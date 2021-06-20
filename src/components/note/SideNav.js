import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/SideNav.scss";
import Edit from './img/Edit'
import EditProfile from "../nav/EditProfile";

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
    setProfileEdit,
    profileEdit,
    userName
  } = useStateContext();
  const handleLogOut = async () => {
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setOut(false);
      try {
        setError("");
        setLoading(true);
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
        <div className="profileImgCon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M 12 4 C 9.789063 4 8 5.789063 8 8 C 8 10.210938 9.789063 12 12 12 C 14.210938 12 16 10.210938 16 8 C 16 5.789063 14.210938 4 12 4 Z M 9.03125 13.40625 C 5.253906 14.550781 4 17.65625 4 17.65625 L 4 20 L 20 20 L 20 17.65625 C 20 17.65625 18.746094 14.550781 14.96875 13.40625 C 14.761719 14.863281 13.511719 16 12 16 C 10.488281 16 9.238281 14.863281 9.03125 13.40625 Z"></path>
          </svg>
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
          style={{
            background: defaultTheme[1],
            color: defaultTheme[2],
            boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
          }}
          onClick={() => setThemes(true)}
        >
          Themes
        </button>
        <button
          className="about"
          style={{
            background: defaultTheme[1],
            color: defaultTheme[2],
            boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
          }}
          onClick={() => setAbout(true)}
        >
          About
        </button>
        <button
          className="contact"
          style={{
            background: defaultTheme[1],
            color: defaultTheme[2],
            boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
          }}
        >
          Contact
        </button>
        <button
          disabled={loading}
          className="logOut"
          style={{
            background: defaultTheme[1],
            color: defaultTheme[2],
            boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
          }}
          onClick={handleOpen}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
