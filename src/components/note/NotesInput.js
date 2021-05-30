import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./note-sass/NotesInput.scss";
import NoteInputFontSelect from "./notes input selector/NoteInputFontSelect";
import NoteInputFontSizeSelect from "./notes input selector/NoteInputFontSizeSelect";
import NotesInputSelect from "./notes input selector/NotesInputColorSelect";
import { v4 as uuidV4 } from "uuid";

export default function NotesInput() {
  const {
    setAddNote,
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
  const [noteHelp, setNoteHelp] = useState(false);
  const [saving, setSaving] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const { currentUser } = useAuth();
  const id = uuidV4();
  const handleRipples = (e) => {
    setNoteHelp(!noteHelp);
    let ripplesClassName = e.target.className;
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    document.querySelector(`.${ripplesClassName}`).appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 500);
  };

  const handleUpdate = () => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let date = new Date();
    let fullDate = `${date.getDate()} ${
      months[date.getMonth()]
    } ${date.getFullYear()}`;
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("geting data");
          let tempNote = doc.data().note;
          console.log("setData");
          tempNote = [
            ...tempNote,
            {
              title: title,
              note: text,
              backgroundColor: noteBackgroundColor,
              textColor: textColor,
              font: font,
              fontSize: fontSize,
              noteId: id,
              date: fullDate,
            },
          ];
          console.log("updated data");
          database.users
            .doc(currentUser.uid)
            .update({
              note: tempNote,
            })
            .then((e) => {
              console.log("updated note at server");
              setText("");
              setTitle("");
              setTextColor("#000000");
              setFont("Sans-serif");
              setFontSize("25");
              setNoteBackgroundColor("#ffffff");
              setSaving(false);
              setAddNote(false);
            });
          console.log("updated server data");
        }
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (navigator.onLine) {
      console.log("online");
      setSaving(true);
      handleUpdate();
    }
    if (navigator.onLine === false) {
      setOnlineStatus(false);
      console.log("offline");
    }
  };
  const handleClose = () => {
    setClose(true);
    document.querySelector(".formContainer").classList.add("close");
    setTimeout(() => {
      setAddNote(false);
      setClose(false);
    }, 300);
  };

  return (
    <div className="formContainer">
      {saving && (
        <div className="loading">
          <svg className="svgLoad2" height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              strokeLinecap="round"
              strokeWidth="10"
              fill="none"
            />
          </svg>
          <svg className="svgLoad1" height="100" width="100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="10"
              fill="none"
            />
          </svg>
        </div>
      )}
      {!onlineStatus && (
        <div className="offline">
          <div>
            <p>Check your internet connection and try again.</p>
            <button onClick={() => setOnlineStatus(true)}>Close</button>
          </div>
        </div>
      )}
      <div className="navInput">
        <button className="backInput" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 119.57 219.15"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeMiterlimit: "10",
              strokeWidth: "23px",
              width: "37px",
              height: "37px",
              overflow: "visible",
            }}
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <line
                  className="cls-1"
                  x1="10"
                  y1="109.57"
                  x2="109.57"
                  y2="10"
                />
                <line
                  className="cls-1"
                  x1="10"
                  y1="109.57"
                  x2="109.57"
                  y2="209.15"
                />
              </g>
            </g>
          </svg>
        </button>
        <h1>Add Note</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputCon">
          <input
            className="titleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Title..."
            maxLength="15"
            style={{
              background: `${noteBackgroundColor}`,
              color: `${textColor}`,
              transition: "all 0.35s",
              fontFamily: `${font}`,
            }}
          />
          <div className="chaLimit">{title.length}/15</div>
        </div>
        <div className="textareaCon">
          <textarea
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            placeholder="Note..."
            maxLength="1000"
            style={{
              background: `${noteBackgroundColor}`,
              color: `${textColor}`,
              transition: "all 0.35s",
              fontFamily: `${font}`,
              fontSize: `${fontSize}px`,
            }}
          />
          <div className="chaLimit">{text.length}/1000</div>
        </div>
        <div className="selectContainer">
          <NotesInputSelect
            title="Background"
            paddingT="0px"
            paddingB="0px"
            align_1="0"
            color={noteBackgroundColor}
            setColor={setNoteBackgroundColor}
            colors={["#ffffff", "#f2cdaf", "#f9e2cf", "#fcd9dd", "#b6dee7"]}
          />
          <NotesInputSelect
            title="Text Color"
            paddingT="10px"
            paddingB="0px"
            align_2="0"
            color={textColor}
            setColor={setTextColor}
            colors={["#000000", "#ffffff", "#ff0000", "#9500ff", "#ff00ff"]}
          />
          <NoteInputFontSelect />
          <NoteInputFontSizeSelect />
        </div>
        <button type="submit" className="save" onClick={handleRipples}>
          Save
        </button>
      </form>
    </div>
  );
}
