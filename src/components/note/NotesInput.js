import React, { useState } from "react";
import { useStateContext } from "../../context/StateContext";
import './note-sass/NotesInput.scss'

export default function NotesInput() {
  const {
    setAddNote,
    notes,
    setNotes,
    text,
    setText,
    noteColor,
    setNoteColor,
    title,
    setTitle
  } = useStateContext();
  const [close, setClose] = useState(false)
  const colors = ["red", "green", "blue"];
  // const color = []
  // color = colors.map(color => (
  //   <input
  //   key={color}
  //   type="radio"
  //   name="color"
  //   value={color}
  //   onChange={(e) => setNoteColor(e.target.value)}
  //  />
  // ))
  // console.log(color)
  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        note: text,
        title: title,
        id: Math.random() * 1000,
        color: noteColor,
      },
    ]);
    setText("");
    setAddNote(false);
    setNoteColor("red");
  };
  const handleClose = () => {
    setClose(true)
    setTimeout(()=> {
      setAddNote(false)
      setClose(false)
    },500)
  }
  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <input 
          className='titleInput'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder='Title...'
        />
        <textarea
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          placeholder='Note...'
        />
        <div className="colorInput">
          {colors.map((color) => (
            <div key={color} className='colorContainer'>
                <div className={color} style={{ background: `${color}`}}></div>
                <input
                key={color}
                type="radio"
                name="color"
                value={color}
                onChange={(e) => setNoteColor(e.target.value)}
              />
            </div>
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
      <button className='inputCloseBtn' onClick={handleClose}>
        <div className={close ? 'close-1' : ''}></div>
        <div className={close ? 'close-2' : ''}></div>
      </button>
    </div>
  );
}
