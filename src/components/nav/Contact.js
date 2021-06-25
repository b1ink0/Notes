import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./nav-sass/Contact.scss";
import BackSvg from "../note/img/BackSvg";
import ContactImg from "./img/ContactImg.jpeg";
import GithubIcon from "./img/GithubIcon.svg";
import InstagramIcon from "./img/InstagramIcon.svg";
import YoutubeIcon from "./img/YoutubeIcon.svg";
import Linkedin from "./img/Linkedin.svg"; 

export default function Contact() {
  const { defaultTheme, setContact } = useStateContext();
  const [contactClose, setContactClose] = useState();
  const defaultThemeStyle = {
    background: defaultTheme[1],
    color: defaultTheme[2],
    boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
  };
  const handleClose = () => {
    setContactClose(true);
    setTimeout(() => {
      setContact(false);
    }, 400);
  };
  return (
    <div className={`contactCon ${contactClose && "contactClose"}`} style={{background:defaultTheme[0]}}>
      <div
        className="navInput"
        style={{
          background: defaultTheme[1],
          color: defaultTheme[2],
          boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
        }}
      >
        <button
          className="backInput"
          onClick={handleClose}
          style={{ background: defaultTheme[3] }}
        >
          <BackSvg />
        </button>
        <h1>Contact</h1>
      </div>
      <div className="contact" style={defaultThemeStyle}>
        <div className="contactLogo">
          <div style={defaultThemeStyle}>
            <img src={ContactImg} />
          </div>
          <h1 style={{ color: defaultTheme[2] }}>Aditya</h1>
        </div>
        <div className="intro">I am proficient in Firebase, ES6, React/Redux.</div>
        <div className='socialMedia'>
            <div className='social' style={defaultThemeStyle}>
                <a href='https://github.com/stupidgaming' target="_blank"></a>
                <img src={GithubIcon}/>
            </div>
            <div className='social' style={defaultThemeStyle}>
                <a href='https://www.instagram.com/stupid__gaming/' target="_blank"></a>
                <img src={InstagramIcon}/>
            </div>
            <div className='social' style={defaultThemeStyle}>
                <a href='https://www.youtube.com/channel/UCPn2C-ck6pabad0PEXNQW5w' target="_blank"></a>
                <img src={YoutubeIcon}/>
            </div>
            <div className='social' style={defaultThemeStyle}>
                <a href='https://www.linkedin.com/in/aditya-dhade-b04891207' target="_blank"></a>
                <img src={Linkedin}/>
            </div>
            <h1 style={{ color: defaultTheme[2] }}>^_^</h1>
        </div>
      </div>
    </div>
  );
}
