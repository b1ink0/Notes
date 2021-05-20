import React, { useRef, useState, useEffect } from 'react'
import { useStateContext } from '../../../context/StateContext'
import '../note-sass/NoteInputFontSizeSelect.scss'

export default function NoteInputFontSizeSelect() {
    const node = useRef()
    const { fontSize, setFontSize } = useStateContext()
    const [fSOpen, setFSOpen] = useState(false)
    const fontSizes = [15,25,35,45]

    const handleClickOutside = e => {
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
        <div ref={node} className="fontSizeSelect" onClick={() => setFSOpen(!fSOpen)}>
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
    )
}
