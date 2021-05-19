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
  console.log(fontSize)

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
    setTimeout(() => {
      setAddNote(false);
      setClose(false);
    }, 500);
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
            color={noteBackgroundColor}
            setColor={setNoteBackgroundColor}
          />
          <NotesInputSelect
            title="Text Color"
            paddingT="10px"
            paddingB="0px"
            color={textColor}
            setColor={setTextColor}
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
