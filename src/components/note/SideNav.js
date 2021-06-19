import React, { useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/SideNav.scss";

export default function SideNav() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [out, setOut] = useState(false);
  const history = useHistory();
  const { logOut } = useAuth();
  const { sideNavbar, setSideNavbar, setThemes, defaultTheme } =
    useStateContext();
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
