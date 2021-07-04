import React, { useState } from "react";
import "./nav-sass/About.scss";
import { useStateContext } from "../../context/StateContext";
import BackSvg from "../note/img/BackSvg";
import CustomizeImg from "./img/CustomizeImg.svg";
import ThemeChange from "./img/ThemeChange.svg";
import EncryptedImg from "./img/EncryptedImg.svg";
import SourceCodeIcon from "./img/SourceCodeIcon.svg";
import Logo from "./img/Logo";

export default function About() {
  const { setAbout, defaultTheme } = useStateContext();
  const [aboutClose, setAboutClose] = useState(false);

  // Default Style
  const defaultThemeStyle = {
    background: defaultTheme[1],
    color: defaultTheme[2],
    boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
  };

  // Default Style
  const defaultThemeStyleSub = {
    background: defaultTheme[3],
    color: defaultTheme[2],
    boxShadow: `0px 0px 0px ${defaultTheme[4]}`,
  };

  // About Close
  const handleClose = () => {
    setAboutClose(true);
    setTimeout(() => {
      setAbout(false);
    }, 400);
  };

  return (
    <div
      className={`aboutCon ${aboutClose && `aboutClose`}`}
      style={{ background: defaultTheme[0] }}
    >
      <div className="navInput" style={defaultThemeStyle}>
        <button
          className="backInput"
          onClick={handleClose}
          style={{ background: defaultTheme[3] }}
        >
          <BackSvg />
        </button>
        <h1>About</h1>
      </div>
      <div className="about" style={defaultThemeStyle}>
        <div className="aboutLogo">
          <div style={defaultThemeStyleSub}>
            <Logo />
          </div>
          <h1 style={{ color: defaultTheme[2] }}>Notes</h1>
        </div>
        <ul>
          <li style={defaultThemeStyleSub}>
            Create Notes
            <div
              className="add"
              style={
                (defaultThemeStyle,
                {
                  boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
                  background: defaultTheme[1],
                })
              }
            >
              <div style={{ background: defaultTheme[2] }}></div>
              <div style={{ background: defaultTheme[2] }}></div>
            </div>
          </li>
          <li style={defaultThemeStyleSub}>
            Customize Notes
            <div
              className="add"
              style={
                (defaultThemeStyle,
                {
                  boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
                  background: defaultTheme[1],
                })
              }
            >
              <img alt="" src={CustomizeImg} />
            </div>
          </li>
          <li style={defaultThemeStyleSub}>
            Change Themes
            <div
              className="add"
              style={
                (defaultThemeStyle,
                {
                  boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
                  background: defaultTheme[1],
                })
              }
            >
              <img alt="" src={ThemeChange} />
            </div>
          </li>
          <li style={defaultThemeStyleSub}>
            Encrypted Data
            <div
              className="add"
              style={
                (defaultThemeStyle,
                {
                  boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
                  background: defaultTheme[1],
                })
              }
            >
              <img alt="" src={EncryptedImg} />
            </div>
          </li>
          <li style={defaultThemeStyleSub}>
            <a
              rel="noreferrer"
              href="https://github.com/b1ink0/Notes"
              target="_blank"
            >
              {" "}
            </a>
            Source Code
            <div
              className="add"
              style={
                (defaultThemeStyle,
                {
                  boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
                  background: defaultTheme[1],
                })
              }
            >
              <img alt="" src={SourceCodeIcon} />
            </div>
          </li>
        </ul>
        <h1 style={{ color: defaultTheme[2] }}>Version 1.0.1</h1>
      </div>
    </div>
  );
}
