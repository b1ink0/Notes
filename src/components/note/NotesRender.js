import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { auth, database } from "../../firebase";
import AddNotesBtn from "./AddNotesBtn";
import NotesInput from "./NotesInput";
import "./note-sass/NotesRender.scss";

export default function NotesRender() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [noteData, setNoteData] = useState();
  const history = useHistory();
  const { logOut, currentUser } = useAuth();

  const handleLogOut = async () => {
    try {
      setError("");
      setLoading(true);
      await logOut();
      auth.onAuthStateChanged((user) => {
        if (!user) {
          history.push("/Notes/login");
        }
        return;
      });
    } catch {
      setError("Failed to logOUt");
    }
    setLoading(false);
  };

  const { notes, addNote } = useStateContext();

  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }
  let notesReverse = reverseArr(notes);
  if (currentUser) {
    const com = database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          return;
        } else {
          database.users.doc(currentUser.uid).set({
            note: [],
            uid: currentUser.uid,
          });
        }
      });
  }
  useEffect(async () => {
    await database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        let tempData = doc.data().note;
        console.log(tempData);
        setNoteData(tempData);
        console.log(noteData);
      });
  }, [addNote]);
  return (
    <>
      {addNote ? (
        <NotesInput />
      ) : (
        <div className="notesContainer">
          <ul>
            {noteData &&
              noteData.map((note) => (
                <li
                  style={{
                    background: `${note.backgroundColor}`,
                    color: `${note.textColor}`,
                    fontFamily: `${note.font}`,
                    fontSize: `${note.fontSize}px`,
                  }}
                  key={note.noteId}
                >
                  {note.title}
                </li>
              ))}
            {/* {notesReverse.map((note) => (
              <li style={{ color: `${note.color}` }} key={note.id}>
                {note.note}
              </li>
            ))} */}
          </ul>
          <AddNotesBtn />
          <button disabled={loading} onClick={handleLogOut}>
            log out
          </button>
        </div>
      )}
    </>
  );
}
