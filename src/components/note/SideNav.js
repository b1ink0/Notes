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
  const { sideNavbar, setSideNavbar, setThemes } = useStateContext();
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
    <div className="sideNav">
      {out && (
        <div className="delCon">
          <div className="del">
            <h1>Are you sure ?</h1>
            <div>
              <button className="cancelDel" onClick={handleCancel}>
                Cancel
              </button>
              <button className="deleteDel" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
      <button className="navClose" onClick={handleClose}>
        <div className="burger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <div className="optionCon">
        <button className="themes" onClick={()=>setThemes(true)}>Themes</button>
        <button className="about">About</button>
        <button className="contact">Contact</button>
        <button disabled={loading} className="logOut" onClick={handleOpen}>
          Log Out
        </button>
      </div>
    </div>
  );
}
