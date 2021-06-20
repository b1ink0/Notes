import React, { useState } from "react";
import "./nav-sass/Themes.scss";
import BackSvg from "../note/img/BackSvg";
import { useStateContext } from "../../context/StateContext";
import Theme from "./Theme";
import LoadingSvg from "../note/img/LoadingSvg";

export default function Themes() {
  const [themeClose, setThemeClose] = useState(false);
  const { setThemes, defaultTheme, savingTheme } = useStateContext();
  const handleClose = () => {
    setThemeClose(true);
    setTimeout(() => {
      setThemes(false);
    }, 400);
  };
  return (
    <div
      className={`themesCon ${themeClose && "themeClose"}`}
      style={{ background: defaultTheme[0] }}
    >
      {savingTheme && (
        <div className="loading">
          <LoadingSvg />
        </div>
      )}
      <div
        className="navInput"
        style={{
          background: defaultTheme[1],
          color: defaultTheme[2],
          boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
        }}
      >
        <button
          className="backInput"
          onClick={handleClose}
          style={{ background: defaultTheme[3] }}
        >
          <BackSvg />
        </button>
        <h1>Themes</h1>
      </div>
      <div
        className="theme"
        style={{
          background: defaultTheme[1],
          boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
        }}
      >
        <Theme
          id="theme_1"
          on={defaultTheme[7] === "1" ? "true" : "false"}
          backgroundColor="#ececec"
          background="white"
          color="blace"
          boxShadow="#bbb"
          theme={['#ececec','#ffffff','#000000','#dfdfdf','#bbbbbb','#c990ff','#00b300','1','#bbbbbb','']}
        />
        <Theme
          id="theme_2"
          on={defaultTheme[7] === "2" ? "true" : "false"}
          backgroundColor="#000"
          background="#232323"
          color="white"
          boxShadow="rgba(0,0,0,0)"
          theme={['#000000','#353535','#ffffff','#585858','#3c3c3c00','#353535','#00b300','2','#585858','']}
        />
        <Theme
          id="theme_3"
          on={defaultTheme[7] === "3" ? "true" : "false"}
          backgroundColor="#9400d3"
          background="#b826f7"
          color="white"
          boxShadow="rgba(0,0,0,0)"
          theme={['#9400d3','#b826f7','#ffffff','#cb52ff','#3c3c3c00','#b826f7','#00b300','3','#cb52ff','']}
        />
        <Theme
          theme="Notes"
          id="theme_4"
          on={defaultTheme[7] === "4" ? "true" : "false"}
          backgroundColor="#3aafa9"
          background="#47d4cd"
          color="white"
          boxShadow="rgba(0,0,0,0)"
          theme={['#3aafa9','#47d4cd','#ffffff','#52ece5','#3c3c3c00','#52ece5','#00b300','4','#52ece5','']}
        />
        <Theme
          theme="Notes"
          id="theme_5"
          on={defaultTheme[7] === "5" ? "true" : "false"}
          backgroundColor="#d83f87"
          background="#ef5aa0"
          color="white"
          boxShadow="rgba(0,0,0,0)"
          theme={['#d83f87','#ef5aa0','#ffffff','#ff76b6','#3c3c3c00','#ff76b6','#00b300','5','#ff76b6','']}
        />
        <Theme
          theme="Notes"
          id="theme_6"
          on={defaultTheme[7] === "6" ? "true" : "false"}
          backgroundColor="#ffa500"
          background="#ffc252"
          color="white"
          boxShadow="rgba(0,0,0,0)"
          theme={['#ffa500','#ffc252','#ffffff','#ffd280','#3c3c3c00','#ffd280','#00b300','6','#ffd280','']}
        />
      </div>
    </div>
  );
}
