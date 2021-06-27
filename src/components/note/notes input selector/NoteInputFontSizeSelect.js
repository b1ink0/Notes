import React, { useRef, useState, useEffect } from "react";
import { useStateContext } from "../../../context/StateContext";
import "../note-sass/NoteInputFontSizeSelect.scss";

export default function NoteInputFontSizeSelect() {
  const node = useRef();
  const { fontSize, setFontSize, defaultTheme } = useStateContext();
  const [fSOpen, setFSOpen] = useState(false);
  const fontSizes = [15, 25, 35, 45];

  // Auto Close
  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setFSOpen(false);
  };
  useEffect(() => {
    if (fSOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fSOpen]);

  return (
    <div
      ref={node}
      className="fontSizeSelect"
      style={{
        background: defaultTheme[1],
        color: defaultTheme[2],
        boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
        zIndex: `${fSOpen ? 2 : 1}`,
      }}
      onClick={() => setFSOpen(true)}
    >
      <div
        className="fontSizeSelectDefault"
        style={{
          fontSize: `${fontSize}px`,
        }}
      >
        {fontSize}
      </div>
      <div
        className="fontSizeCon"
        style={{
          height: `${fSOpen ? "210px" : ""}`,
          opacity: `${fSOpen ? "1" : ""}`,
          pointerEvents: `${fSOpen ? "all" : ""}`,
          background: defaultTheme[1],
        }}
      >
        {fontSizes.map((fontSize) => (
          <div key={fontSize} className="fontSizeOption" style={{}}>
            <input
              key={fontSize}
              type="radio"
              name="fontSize"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
            />
            <div
              className={fontSize}
              style={{
                fontSize: `${fontSize}px`,
              }}
            >
              {fontSize}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
