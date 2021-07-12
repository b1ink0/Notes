import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import "../note-sass/NotesInputColorSelect.scss";

export default function NotesInputSelect({
  color,
  setColor,
  title,
  paddingT,
  paddingB,
  align_1,
  align_2,
  colors
}) {
  const node = useRef();
  const [bgOpen, setBgOpen] = useState(false);
  const [zi, setZi] = useState(3)
  const { defaultTheme } = useStateContext()

  // Auto Close
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setBgOpen(false);
  };
  useEffect(() => {
    if (!bgOpen) {
    }
    if (bgOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [bgOpen]);

  // Z Index
  useEffect(()=>{
    if(bgOpen){
      setZi(6)
    }else{
      setTimeout(()=>{
        setZi(1)
      }, 300)
    }
  },[bgOpen])

  return (
    <div
      ref={node}
      className="selectCon"
      style={{
        paddingTop: `${paddingT}`,
        paddingBottom: `${paddingB}`,
        top: `${align_1}`,
        bottom: `${align_2}`,
        zIndex: `${zi}`,
      }}
    >
      <div
        className="select"
        style={{
          width: `${bgOpen ? "95vw" : ""}`,
          height: `${bgOpen ? "80px" : ""}`,
          borderRadius: `${bgOpen ? "15px" : ""}`,
          boxShadow: `0px 0px 0px ${defaultTheme[4]}`,
          background:defaultTheme[1],
          color:defaultTheme[2]
        }}
        onClick={() => {
          setBgOpen(!bgOpen);
        }}
      >
        <p>{title}</p>
        <div
          className="selected"
          style={{
            pointerEvents: `${bgOpen ? "none" : ""}`,
            opacity: `${bgOpen ? "0" : ""}`,
            background: `${color}`,
          }}
        >
          <div id="tick-mark"></div>
        </div>
        <div
          className="colorInput optionCon"
          style={{
            width: `${bgOpen ? "100%" : ""}`,
            opacity: `${bgOpen ? "1" : ""}`,
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              className="colorContainer option"
              style={{
                pointerEvents: `${bgOpen ? "all" : ""}`,
                margin: `${bgOpen ? "4%" : ""}`,
              }}
            >
              <div className={color} style={{ background: `${color}` }}></div>
              <input
                key={color}
                type="radio"
                name="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          ))}
          <div    
            className="colorContainer option"
            style={{
              pointerEvents: `${bgOpen ? "all" : ""}`,
              margin: `${bgOpen ? "4%" : ""}`,
            }}
          >
            <div></div>
            <input type='color' value={color} onChange={ e => setColor(e.target.value)}/>
          </div>
        </div>
      </div>
    </div>
  );
}
