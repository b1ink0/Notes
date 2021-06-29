import React, { useEffect, useState } from "react";
import "./note-sass/PreviewNote.scss";
import BackSvg from "./img/BackSvg";
import Edit from "./img/Edit";
import DeleteSvg from "./img/Delete";
import Delete from "./sub-component/Delete";
import Offline from "./sub-component/Offline";
import { useStateContext } from "../../context/StateContext";

export default function PreviewNote({ note }) {
  const {
    defaultTheme,
    setPreview,
    setEdit,
    setFadeOut,
    del,
    setDel,
    setOnlineStatus,
    onlineStatus,
  } = useStateContext();
  const [close, setClose] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  // First Load
  useEffect(() => {
    document.querySelector("body").style.background = defaultTheme[0];
  }, [defaultTheme]);

  const handleBack = () => {
    setFadeOut(false);
    setClose(true);
    setTimeout(() => {
      setPreview(false);
    }, 300);
  };

  const handleEdit = () => {
    setOpenEdit(true);
    setTimeout(() => {
      setEdit(true);
    }, 200);
  };

  const handleOpen = () => {
    if (navigator.onLine) {
      setDel(true);
    }
    if (navigator.onLine === false) {
      setOnlineStatus(true);
      console.log("offline");
    }
  };

  return (
    <div
      className={`preCon ${close && "previewBack"} ${
        openEdit && "previewEdit"
      }`}
      style={{ background: defaultTheme[0] }}
    >
      {del && <Delete note={note} />}
      {onlineStatus && <Offline />}
      <div
        className="navPreview"
        style={{
          background: defaultTheme[1],
          boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
          color: defaultTheme[2],
        }}
      >
        <button
          className="back"
          style={{ background: defaultTheme[3] }}
          onClick={() => handleBack()}
        >
          <BackSvg />
        </button>
        <h1>Note</h1>
        <button
          className="edit"
          style={{ background: defaultTheme[3] }}
          onClick={handleEdit}
        >
          <Edit />
        </button>
        <button className="delete" onClick={handleOpen}>
          <DeleteSvg />
        </button>
      </div>
      <div className="previewCon">
        <div
          className="preview"
          style={{
            background: note.backgroundColor,
            color: note.textColor,
            fontFamily: note.font,
            boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
          }}
        >
          <h1>{note.title}</h1>
          <div style={{ fontSize: `${note.fontSize}px` }}>{note.note}</div>
          <p style={{ color: note.textColor }}>{note.date}</p>
        </div>
      </div>
    </div>
  );
}
