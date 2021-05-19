import React, { useEffect, useRef, useState } from 'react'
import '../note-sass/NotesInputColorSelect.scss'

export default function NotesInputSelect({ color, setColor, title, paddingT, paddingB}) {
  const node = useRef()  
  const [bgOpen, setBgOpen] = useState(false);
  const colors = ["white",'red', "green",'yellow', "blue"];

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setBgOpen(false)
  }

  useEffect(() => {
    if (bgOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return ()=> {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [bgOpen])
    return (
        <div ref={node} className="selectCon" style={{ paddingTop: `${paddingT}`, paddingBottom: `${paddingB}`}}>
          <div
            className="select"
            style={{ width: `${bgOpen ? "95vw" : ""}` }}
            onClick={() => setBgOpen(!bgOpen)}
          >
            <p>{title}</p>
            <div
              className="selected"
              style={{
                pointerEvents: `${bgOpen ? "none" : ""}`,
                opacity: `${bgOpen ? "0" : ""}`,
                background: `${color}`
              }}
            ></div>
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
                    margin: `${bgOpen ? "7%" : ""}`,
                  }}
                >
                  <div
                    className={color}
                    style={{ background: `${color}` }}
                  ></div>
                  <input
                    key={color}
                    type="radio"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    )
}
