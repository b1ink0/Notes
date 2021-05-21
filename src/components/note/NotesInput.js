import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./note-sass/NotesInput.scss";
import NoteInputFontSelect from "./notes input selector/NoteInputFontSelect";
import NoteInputFontSizeSelect from "./notes input selector/NoteInputFontSizeSelect";
import NotesInputSelect from "./notes input selector/NotesInputColorSelect";
import { firestore } from '../../firebase'

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
    setFont,
    fontSize,
    setFontSize,
    title,
    setTitle,
  } = useStateContext();
  
  const [close, setClose] = useState(false);
  const [noteHelp, setNoteHelp] = useState(false)
  const [saving, setSaving] = useState(false)
  const { currentUser } = useAuth()
  const handleRipples = (e) => {
    setNoteHelp(!noteHelp)
    let ripplesClassName = e.target.className
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px'
    document.querySelector(`.${ripplesClassName}`).appendChild(ripples)
    setTimeout(()=>{
        ripples.remove()
    },500)
  }

  const handleUpdate = () => {
    database.users
      .doc(currentUser.uid)
      .get()
      .then( doc => {
        if (doc.exists){
          console.log('geting data')
          let tempNote = doc.data().note
          console.log('setData')
          tempNote = [
            ...tempNote,
            {
              title: title,
              note: text,
              backgroundColor: noteBackgroundColor,
              textColor: textColor,
              font: font,
              fontSize: fontSize,
              noteId: Math.random() * 1000
            }
          ]
          console.log('updated data')
          database.users.doc(currentUser.uid).update({
            note: tempNote
          }).then( e =>{
            console.log('updated note at server')
            setText("");
            setTitle('')
            setTextColor('#000000')
            setFont('Sans-serif')
            setFontSize('25')
            setNoteBackgroundColor("#ffffff");
            setSaving(false)
            setAddNote(false);
          })
          console.log('updated server data')
        }
      })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true)
    await handleUpdate()  
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
      {
        saving && <div className='saving'>Saving...</div>
      }
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
        <button type="submit" className='save' onClick={handleRipples}>
          Save
        </button>
      </form>
      <button className="inputCloseBtn" onClick={handleClose}>
        <div className={close ? "close-1" : ""}></div>
        <div className={close ? "close-2" : ""}></div>
      </button>
    </div>
  );
}
