import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./nav-sass/Contact.scss";
import BackSvg from "../note/img/BackSvg";
import ContactImg from "./img/ContactImg.jpeg";
import GithubIcon from "./img/GithubIcon";
import InstagramIcon from "./img/InstagramIcon";
import YoutubeIcon from "./img/YoutubeIcon";
import Linkedin from "./img/Linkedin"; 

export default function Contact() {
  const { defaultTheme, setContact } = useStateContext();
  const [contactClose, setContactClose] = useState();
  const defaultThemeStyle = {
    background: defaultTheme[1],
    color: defaultTheme[2],
    boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
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
        <h1>Contact</h1>
      </div>
      <div className="contact" style={defaultThemeStyle}>
        <div className="contactLogo">
          <div>
            <img src={ContactImg} />
          </div>
          <h1 style={{ color: defaultTheme[2] }}>404</h1>
        </div>
        <div className="intro"></div>
        <div className='socialMedia'>
            <div className='social'>
                <a href='https://github.com/stupidgaming' target="_blank"></a>
                <GithubIcon style={{width: '60px',height: '60px'}}/>
            </div>
            <div className='social'>
                <a href='https://github.com/stupidgaming'></a>
                <InstagramIcon/>
            </div>
            <div className='social'>
                <a></a>
                <YoutubeIcon/>
            </div>
            <div className='social'>
                <a></a>
                <Linkedin/>
            </div>
        </div>
      </div>
    </div>
  );
}
