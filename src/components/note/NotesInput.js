import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import "./note-sass/NotesInput.scss";
import NoteInputFontSelect from "./notes input selector/NoteInputFontSelect";
import NoteInputFontSizeSelect from "./notes input selector/NoteInputFontSizeSelect";
import NotesInputSelect from "./notes input selector/NotesInputColorSelect";

export default function NotesInput() {
  const {
    setAddNote,
    notes,
    setNotes,
    text,
    setText,
    noteBackgroundColor,
    setNoteBackgroundColor,
    textColor,
    setTextColor,
    font,
    fontSize,
    title,
    setTitle,
  } = useStateContext();

  const [close, setClose] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        note: text,
        title: title,
        id: Math.random() * 1000,
        backgroundColor: noteBackgroundColor,
        textColor: textColor,
        fontSize: fontSize
      },
    ]);
    setText("");
    setAddNote(false);
    setNoteBackgroundColor("White");
  };
  const handleClose = () => {
    setClose(true);
    // setTimeout(() => {
      setAddNote(false);
      setClose(false);
    // }, 500);
  };
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="titleInput"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title..."
          style={{
            background: `${noteBackgroundColor}`,
            color: `${textColor}`,
            transition: "all 0.35s",
            fontFamily: `${font}`,   
          }}
        />
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder="Note..."
          style={{
            background: `${noteBackgroundColor}`,
            color: `${textColor}`,
            transition: "all 0.35s",
            fontFamily: `${font}`,   
            fontSize: `${fontSize}px` ,        
          }}
        />
        <div className='selectContainer'>
          <NotesInputSelect
            title="Background"
            paddingT="0px"
            paddingB="0px"
            align_1='0'
            color={noteBackgroundColor}
            setColor={setNoteBackgroundColor}
            colors={["#ffffff",'#f2cdaf','#f9e2cf', "#fcd9dd", "#b6dee7"]}
          />
          <NotesInputSelect
            title="Text Color"
            paddingT="10px"
            paddingB="0px"
            align_2='0'
            color={textColor}
            setColor={setTextColor}
            colors={["#000000",'#ffffff','#ff0000', "#9500ff", "#ff00ff"]}
          />
          <NoteInputFontSelect/>
          <NoteInputFontSizeSelect/>
        </div>
        <button type="submit">Save</button>
      </form>
      <button className="inputCloseBtn" onClick={handleClose}>
        <div className={close ? "close-1" : ""}></div>
        <div className={close ? "close-2" : ""}></div>
      </button>
    </div>
  );
}
