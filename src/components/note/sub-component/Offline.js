import React, { useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import "../sub-component-scss/Offline.scss";

export default function Offline() {
  const { defaultTheme, setOnlineStatus } = useStateContext();
  const [fadeOut, setFadeOut] = useState(false)

  const handleClose = () => {
    setFadeOut(true)
    setTimeout(() => {
      setOnlineStatus(false)
    }, 300);
  }
  
  return (
    <div className={`offline ${fadeOut && 'closeOffline'}`}>
      <div
        style={{
          background: defaultTheme[1],
          color: defaultTheme[2],
          boxShadow: `0px 0px 5px ${defaultTheme[4]}`,
        }}
      >
        <p>Check your internet connection and try again.</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
