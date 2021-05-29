import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { auth, database } from "../../firebase";
import AddNotesBtn from "./AddNotesBtn";
import NotesInput from "./NotesInput";
import "./note-sass/NotesRender.scss";
import titleSvg from "./img/title.svg";
import gridSvg from "./img/grid.svg";
import PreviewNote from "./PreviewNote";
import backSvg from "./img/back.svg";
import NotesEdit from "./NotesEdit";
import Title from "./img/Title";
import Delete from "./img/Delete";
import Edit from "./img/Edit";

export default function NotesRender() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [noteData, setNoteData] = useState();
  const [preNote, setPreNote] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [del, setDel] = useState(false);
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

  const {
    notes,
    addNote,
    setAddNote,
    setNotes,
    sort,
    setSort,
    setCurrentNote,
    preview,
    setPreview,
    edit,
    setEdit,
  } = useStateContext();

  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }
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
  useEffect(() => {
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        let tempData = doc.data().note;
        tempData = reverseArr(tempData);
        setNoteData(tempData);
        setNotes(tempData);
        setFirstLoad(false);
      });
  }, [addNote, edit, deleting]);
 
  const handleRipples = (e) => {
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

  const handleSort = () => {
    if (sort === "title") {
      setSort("grid");
    } else if (sort === "grid") {
      setSort("title");
    } else {
    }
  };

  const handleSee = (e) => {
    let show = e.target.id;
    const hShow = document.getElementById(`${show}`).dataset
    setPreNote({
      note: hShow.note,
      title: hShow.title,
      backgroundColor: hShow.backgroundcolor,
      textColor: hShow.textcolor,
      font: hShow.font,
      fontSize: hShow.fontsize,
      date: hShow.date,
      noteId: hShow.noteid,
    });
    setCurrentNote({
      note: hShow.note,
      title: hShow.title,
      backgroundColor: hShow.backgroundcolor,
      textColor: hShow.textcolor,
      font: hShow.font,
      fontSize: hShow.fontsize,
      date: hShow.date,
      noteId: hShow.noteid,
    });
    setPreview(true);
  };
  const handleBack = () => {
    document.querySelector(".preCon").classList.add("back1");
    setTimeout(() => {
      setPreview(false);
    }, 400);
  };
  const handleDelete = (e) => {
    handleRipples(e);
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
    setDeleting(true);
    let delId = e.target.id;
    console.log(e.target.id);
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("geting data");
          let tempNote = doc.data().note;
          let b = -1;
          tempNote.map((tNote) => {
            b = b + 1;
            if (tNote.noteId === delId) {
              tempNote.splice(b, 1);
              return;
            }
          });
          database.users.doc(currentUser.uid).update({
            note: tempNote,
          });
          console.log("deleted");
          setDeleting(false);
          setPreview(false);
        }
      });
  };
  const handleOpen = async () => {
    await setDel(true);
    document.querySelector(".delCon").classList.add("openAnime");
  };
  const handleCancel = async () => {
    await document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
  };
  let burger = false
  const handleBurger = async() => {
    burger = !burger
    handleBurgerSub()
  }
  const handleBurgerSub = () => {
    const el = document.querySelector('.burger').children
    if (burger){
      el.item(0).classList.remove('closeBurger1')
      el.item(1).classList.remove('closeBurger2')
      el.item(2).classList.remove('closeBurger3')
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add('openBurger1')
      el.item(1).classList.add('openBurger2')
      el.item(2).classList.add('openBurger3')
    } else if (!burger){
      el.item(0).classList.remove('openBurger1')
      el.item(1).classList.remove('openBurger2')
      el.item(2).classList.remove('openBurger3')
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add('closeBurger1')
      el.item(1).classList.add('closeBurger2')
      el.item(2).classList.add('closeBurger3')
    }
  }
  return (
    <>
      {preview && !edit && (
        <div className="preCon">
          <div className="navPreview">
            <button className="back" onClick={() => handleBack()}>
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
                    <line className="cls-1" x1="10" y1="109.57" x2="109.57" y2="10"/>
                    <line className="cls-1" x1="10" y1="109.57" x2="109.57" y2="209.15"/>
                  </g>
                </g>
              </svg>
            </button>
            <h1>Note</h1>
            <button className="edit" onClick={() => setEdit(true)}>
              <Edit/>
            </button>
            <button className="delete" onClick={handleOpen}>
              <Delete/>
            </button>
          </div>
          {del && (
            <div className="delCon">
              <div className="del">
                <h1>Are you sure to delete?</h1>
                <div>
                  <button className="cancelDel" onClick={handleCancel}>
                    Cancel
                  </button>
                  <button
                    className="deleteDel"
                    id={`${preNote.noteId}`}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
          {deleting && (
            <div className="deleting">
              <div>
                <h1>Deleting...</h1>
              </div>
            </div>
          )}
          <PreviewNote note={preNote} />
        </div>
      )}
      {edit && (
        <div className="preCon">
          <NotesEdit />
        </div>
      )}
      {addNote && !preview && <NotesInput />}
      {!addNote && !preview && (
        <div className="notesContainer">
          <h1 className="logo">
            Notes
            {/* <button onClick={handleSort}>
              {sort === "title" ? <Title/> : gridSvg} 
            </button> */}
            <button onClick={handleBurger}>
              <div className='burger'>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </h1>
          {firstLoad && <div className="loading">Loading...</div>}
          <div className="noteCon">
            {noteData &&
              noteData.map((note) => (
                <div
                  className="notes"
                  style={{
                    background: `${note.backgroundColor}`,
                    color: `${note.textColor}`,
                    fontFamily: `${note.font}`,
                    fontSize: `${note.fontSize}px`,
                  }}
                  key={note.noteId}
                  onClick={handleSee}
                  id={`a${note.noteId}`}
                  data-note={note.note}
                  data-title={note.title}
                  data-date={note.date}
                  data-backgroundcolor={note.backgroundColor}
                  data-textcolor={note.textColor}
                  data-font={note.font}
                  data-fontsize={note.fontSize}
                  data-noteid={note.noteId}
                >
                  <h1>{note.title}</h1>
                  <div
                    style={{ padding: `${sort === "title" ? `0px` : `10px`}` }}
                  >
                    {sort === "grid" &&
                      (note.note.length > 460 && note.fontSize === "15" ? (
                        <p>
                          {note.note.slice(0, 461)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 250 && note.fontSize === "25" ? (
                        <p>
                          {note.note.slice(0, 240)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 115 && note.fontSize === "35" ? (
                        <p>
                          {note.note.slice(0, 120)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : note.note.length > 44 && note.fontSize === "45" ? (
                        <p>
                          {note.note.slice(0, 45)}
                          <a style={{ fontSize: `${note.fontSize}px` }}>...</a>
                        </p>
                      ) : (
                        note.note
                      ))}
                  </div>
                  <p className="date">{note.date}</p>
                </div>
              ))}
          </div>
          <AddNotesBtn />
          <button disabled={loading} onClick={handleLogOut}>
            log out
          </button>
        </div>
      )}
    </>
  );
}
