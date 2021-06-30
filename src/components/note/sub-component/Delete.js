import React, { useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import { database } from "../../../firebase";
import LoadingSvg from "../img/LoadingSvg";
import Offline from "./Offline";
import CryptoJS from "crypto-js";
import "../sub-component-scss/Delete.scss";
import { useAuth } from "../../../context/AuthContext";

export default function Delete({ note }) {
  const {
    defaultTheme,
    setDel,
    setPreview,
    setFadeOut,
    setUpdate,
    update,
    onlineStatus,
    setOnlineStatus,
  } = useStateContext();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const [fadeOutDelete, setFadeOutDelete] = useState(false);

  const handleCancel = () => {
    setFadeOutDelete(true);
    setTimeout(() => {
      setDel(false);
    }, 300);
  };

  const handleDelete = (e) => {
    if (navigator.onLine) {
      setLoading(true);
      let delId = e.target.id;
      database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            let tempNote = doc.data().note;
            let decryptedNote = "";
            if (tempNote !== "") {
              decryptedNote = JSON.parse(
                CryptoJS.AES.decrypt(tempNote, doc.data().password).toString(
                  CryptoJS.enc.Utf8
                )
              );
              let b = -1;
              decryptedNote.map((tNote) => {
                b = b + 1;
                if (tNote.noteId === delId) {
                  decryptedNote.splice(b, 1);
                  return decryptedNote;
                }
                return tNote;
              });
              let tempNoteEncrypted = CryptoJS.AES.encrypt(
                JSON.stringify(decryptedNote),
                doc.data().password
              ).toString();
              database.users.doc(currentUser.uid).update({
                note: tempNoteEncrypted,
              });
            }
            handleCancel();
            setUpdate(!update);
            setFadeOut(false);
            setTimeout(() => {
              setLoading(false);
              setPreview(false);
            }, 500);
          }
        });
    }
    if (navigator.onLine === false) {
      setOnlineStatus(true);
      console.log("offline");
    }
  };

  return (
    <div className={`delCon ${fadeOutDelete && "cancelDelete"}`}>
      {loading && <LoadingSvg />}
      {onlineStatus && <Offline />}
      <div
        className="del"
        style={{ background: defaultTheme[1], color: defaultTheme[2] }}
      >
        <h1>Are you sure ?</h1>
        <div>
          <button
            className="cancelDel"
            onClick={handleCancel}
            style={{ background: defaultTheme[3] }}
          >
            Cancel
          </button>
          <button className="deleteDel" id={note.noteId} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
