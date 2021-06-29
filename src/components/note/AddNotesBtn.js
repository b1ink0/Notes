import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/AddNotesBtn.scss";

export default function AddNotesBtn() {
  const { setAddNote, defaultTheme, setFadeOut } = useStateContext();
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Handle Add Note
  const handleClick = () => {
    if (navigator.onLine) {
      setFadeOut(true)
      setTimeout(()=>{
        setAddNote(true);
      },200)
    }
    if (navigator.onLine === false) {
      setOnlineStatus(false);
    }
  };

  return (
    <>
      {!onlineStatus && (
        <div className="offline">
          <div
            style={{
              background: defaultTheme[1],
              color: defaultTheme[2],
              boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
            }}
          >
            <p>Check your internet connection and try again.</p>
            <button onClick={() => setOnlineStatus(true)}>Close</button>
          </div>
        </div>
      )}
      <span
        className="addNotesBtn"
        onClick={handleClick}
        style={{
          background: defaultTheme[1],
          boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
        }}
      >
        <div style={{ background: defaultTheme[2] }}></div>
        <div style={{ background: defaultTheme[2] }}></div>
      </span>
    </>
  );
}
