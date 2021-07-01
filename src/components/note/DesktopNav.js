import React, { useState } from "react";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/SideNav.scss";
import "./note-sass/DesktopNav.scss";
import Edit from "./img/Edit";
import EditProfile from "../nav/EditProfile";
import Offline from "./sub-component/Offline";
import DefaultProfileImg from "../nav/DefaultProfileImg";

export default function DesktopNav() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [out, setOut] = useState(false);
  const { logOut } = useAuth();
  const {
    setLogInCheck,
    setNoteData,
    setSideNavbar,
    setThemes,
    defaultTheme,
    setAbout,
    setContact,
    setProfileEdit,
    profileEdit,
    userName,
    setUserName,
    defaultProfileImg,
    setDefaultProfileImg,
    setDefaultTheme,
    setOnlineStatus,
    onlineStatus,
  } = useStateContext();

  // Default Style
  const defaultThemeStyle = {
    background: defaultTheme[1],
    color: defaultTheme[2],
    boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
  };

  // Notes Log Out
  const handleLogOut = async () => {
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setOut(false);
      try {
        logOut();
        setError("");
        setLoading(true);
        setUserName("User-420");
        setSideNavbar(false);
        setDefaultProfileImg(1);
        setDefaultTheme([
          "#ececec",
          "#ffffff",
          "#000000",
          "#c3c3c3",
          "#bbbbbb",
          "#c990ff",
          "#00b300",
          "1",
          "#bbbbbb",
        ]);
        setLogInCheck(false);
        setNoteData("");
        auth.onAuthStateChanged((user) => {
          if (!user) {
            setLogInCheck(false);
          }
          return;
        });
      } catch {
        setError("Failed to logOUt");
        console.log(error);
      }
      setLoading(false);
    }, 300);
  };

  // Close Nav
  const handleClose = () => {
    document.querySelector(".sideNav").classList.add("navBarOut");
    setTimeout(() => {
      setSideNavbar(false);
    }, 400);
  };

  // Open Log Out Menu
  const handleOpen = async () => {
    await setOut(true);
    document.querySelector(".delCon").classList.add("openAnime");
  };

  // Close Log Out Menu
  const handleCancel = async () => {
    await document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setOut(false);
    }, 300);
  };

  const handleEdit = () => {
    if (navigator.onLine) {
      setProfileEdit(true);
    }
    if (navigator.onLine === false) {
      setOnlineStatus(true);
      console.log("offline");
    }
  };
  return (
    <div className="sideNav deskTop" style={{ background: defaultTheme[1] }}>
      {onlineStatus && <Offline />}
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
        <div
          className="profileImgCon"
          onClick={handleEdit}
          style={{ boxShadow: `0px 0px 10px ${defaultTheme[4]}` }}
        >
          <DefaultProfileImg defaultImg={defaultProfileImg} />
        </div>
        <div className="profileNameCon">
          <h1 style={{ color: defaultTheme[2] }}>{userName}</h1>
          <button style={{ background: defaultTheme[8] }}>
            <Edit />
          </button>
        </div>
      </div>
      {profileEdit && <EditProfile />}
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
          onClick={() => setContact(true)}
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
