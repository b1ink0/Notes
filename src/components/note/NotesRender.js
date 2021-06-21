import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import AddNotesBtn from "./AddNotesBtn";
import NotesInput from "./NotesInput";
import "./note-sass/NotesRender.scss";
import PreviewNote from "./PreviewNote";
import NotesEdit from "./NotesEdit";
import Delete from "./img/Delete";
import Edit from "./img/Edit";
import SideNav from "./SideNav";
import BackSvg from "./img/BackSvg";
import LoadingSvg from "./img/LoadingSvg";
import Themes from "../nav/Themes";
import About from "../nav/About";
import CryptoJS from 'crypto-js'
import CreateProfile from "./CreateProfile";

export default function NotesRender() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [noteData, setNoteData] = useState();
  const [preNote, setPreNote] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [del, setDel] = useState(false);
  // const [decryptedNote, setDecryptedNote] = useState('')
  const { currentUser } = useAuth();
  const {
    addNote,
    setNotes,
    setNoteBackgroundColor,
    setTextColor,
    sort,
    setSort,
    setCurrentNote,
    preview,
    setPreview,
    edit,
    setEdit,
    sideNavbar,
    setSideNavbar,
    themes,
    defaultTheme,
    setDefaultTheme,
    update,
    about,
    setUserName,
    profileExist,
    setProfileExist
  } = useStateContext();

  useEffect(() => {
    // console.log(defaultTheme)
    // let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(defaultTheme), 'a').toString();
    // console.log(ciphertext)
    // var bytes = CryptoJS.AES.decrypt(ciphertext, 'a');
    // var decryptedData = JSON.parse(CryptoJS.AES.decrypt(ciphertext, 'a').toString(CryptoJS.enc.Utf8));
    // console.log(decryptedData)
    document.querySelector("body").style.background = defaultTheme[0];
  }, []);

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
          if (doc.data()){
            if (doc.data().password){
              return
            }else {
              setProfileExist(true)
            }
          }
          return;
        } else {
          setProfileExist(true)
          database.users.doc(currentUser.uid).set({
            note: '',
            uid: currentUser.uid,
            theme: ["#ececec","#ffffff","#000000","#dfdfdf","#bbbbbb","#c990ff","#00b300","1","#bbbbbb",""],
            name: `User-${Math.floor(Math.random()*1000)}`
          });
        }
      });
  }
  useEffect(() => {
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data()){
          if (doc.data().theme){
            setDefaultTheme(doc.data().theme)
          }
          if (doc.data().name){
            setUserName(doc.data().name)
          }
          let tempData = doc.data().note;
          if (tempData !== ''){
            let decryptedNote = JSON.parse(CryptoJS.AES.decrypt(tempData, doc.data().password).toString(CryptoJS.enc.Utf8))
            tempData = reverseArr(decryptedNote);
            setNoteData(tempData);
            setNotes(tempData);
            setFirstLoad(false);
          } else {
              setFirstLoad(false);
          }
        }
      });
  }, [addNote, edit, deleting,update]);

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

  const handleSee = (e) => {
    let show = e.target.id;
    const hShow = document.getElementById(`${show}`).dataset;
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
  let burger = false;
  const handleBurger = async () => {
    burger = !burger;
    setSideNavbar(!sideNavbar);
  };
  useEffect(() => {
    handleBurgerSub();
  }, [sideNavbar]);
  const handleBurgerSub = () => {
    const el = document.querySelector(".burger").children;
    if (sideNavbar) {
      el.item(0).classList.remove("closeBurger1");
      el.item(1).classList.remove("closeBurger2");
      el.item(2).classList.remove("closeBurger3");
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add("openBurger1");
      el.item(1).classList.add("openBurger2");
      el.item(2).classList.add("openBurger3");
    } else if (!sideNavbar) {
      el.item(0).classList.remove("openBurger1");
      el.item(1).classList.remove("openBurger2");
      el.item(2).classList.remove("openBurger3");
      void el.item(0).offsetWidth;
      void el.item(1).offsetWidth;
      void el.item(2).offsetWidth;
      el.item(0).classList.add("closeBurger1");
      el.item(1).classList.add("closeBurger2");
      el.item(2).classList.add("closeBurger3");
    }
  };
  useEffect(() => {
    document.querySelector("body").style.background = defaultTheme[0];
  }, [themes]);

  return (
    <>
      {sideNavbar && <SideNav />}
      {themes && <Themes />}
      {about && <About/>}
      {profileExist && <CreateProfile/>}
      {preview && !edit && (
        <div className="preCon" style={{ background: defaultTheme[0] }}>
          <div
            className="navPreview"
            style={{
              background: defaultTheme[1],
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
              color:defaultTheme[2]
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
              onClick={() => setEdit(true)}
            >
              <Edit />
            </button>
            <button
              className="delete"
              style={{ background: defaultTheme[3] }}
              onClick={handleOpen}
            >
              <Delete />
            </button>
          </div>
          {del && (
            <div className="delCon">
              <div
                className="del"
                style={{ background: defaultTheme[1], color: defaultTheme[2] }}
              >
                <h1>Are you sure to delete?</h1>
                <div>
                  <button
                    className="cancelDel"
                    onClick={handleCancel}
                    style={{ background: defaultTheme[3] }}
                  >
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
            <div className="loading">
              <LoadingSvg />
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
        <div
          className="notesContainer"
          style={{ background: defaultTheme[0], color: defaultTheme[2] }}
        >
          <h1
            className="logo"
            style={{
              background: defaultTheme[1],
              boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
            }}
          >
            Notes
            <button onClick={handleBurger}>
              <div className="burger" style={{ background: defaultTheme[3] }}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </h1>
          {firstLoad && (
            <div className="loading">
              <LoadingSvg />
            </div>
          )}
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
                    boxShadow: `6px 6px 5px ${defaultTheme[4]}`,
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
        </div>
      )}
    </>
  );
}
