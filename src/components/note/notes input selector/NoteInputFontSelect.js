import React, { useEffect, useRef, useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import "../note-sass/NotesInputFontSelect.scss";

export default function NoteInputFontSelect() {
  const node = useRef()
  const [fOpen, setFOpen] = useState(false);
  const { font, setFont } = useStateContext();
  const fonts = [
    "Sans-serif",
    "Cursive",
    "Fantasy",
    "Pattaya",
    "Dancing Script",
  ];
  
  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setFOpen(false);
  };

  useEffect(() => {
    if (fOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fOpen]);

  return (
    <div style={{zIndex: `${fOpen ? '4' : ''}`}} ref={node} className="fontSelect" onClick={() => setFOpen(!fOpen)}>
      <div className="title">Font</div>
      <div
        className="selectDefault"
        style={{
          fontFamily: `${font}`,
        }}
      >
        {font}
      </div>
      <div
        className="fontCon"
        style={{
          height: `${fOpen ? "250px" : ""}`,
          opacity: `${fOpen ? "1" : ""}`,
          pointerEvents: `${fOpen ? "all" : ""}`,
        }}
      >
        {fonts.map((font) => (
          <div key={font} className="fontOption" style={{}}>
            <input
              key={font}
              type="radio"
              name="font"
              value={font}
              onChange={(e) => setFont(e.target.value)}
            />
            <div
              className={font}
              style={{
                fontFamily: `${font}`,
              }}
            >
              {font}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}