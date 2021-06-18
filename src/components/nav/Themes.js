import React from "react";
import "./nav-sass/Themes.scss";
import BackSvg from "../note/img/BackSvg";
import { useStateContext } from "../../context/StateContext";
import Theme from "./Theme";

export default function Themes() {
  const { setThemes } = useStateContext();
  const handleClose = () => {
    setThemes(false);
  };
  return (
    <div className="themesCon">
      <div className="navInput">
        <button className="backInput" onClick={handleClose}>
          <BackSvg />
        </button>
        <h1>Themes</h1>
      </div>
      <div className="theme">
        <Theme theme='Notes' on='true' backgroundColor='#ececec' background='white' color='blace' boxShadow='#bbb'/>
        <Theme theme='Notes' backgroundColor='#000' background='#232323' color='white' boxShadow='rgba(0,0,0,0)'/>
        <Theme theme='Notes' backgroundColor='#9400d3' background='#b826f7' color='white' boxShadow='rgba(0,0,0,0)'/>
        <Theme theme='Notes' backgroundColor='#3aafa9' background='#47d4cd' color='white' boxShadow='rgba(0,0,0,0)'/>
        <Theme theme='Notes' backgroundColor='#d83f87' background='#ef5aa0' color='white' boxShadow='rgba(0,0,0,0)'/>
        <Theme theme='Notes' backgroundColor='orange' background='#ffc252' color='white' boxShadow='rgba(0,0,0,0)'/>
      </div>
    </div>
  );
}
