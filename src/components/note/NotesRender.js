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
import Contact from "../nav/Contact";
import CryptoJS from 'crypto-js'
import CreateProfile from "./CreateProfile";

export default function NotesRender() {
  const [firstLoad, setFirstLoad] = useState(true);
  const [noteData, setNoteData] = useState();
  const [preNote, setPreNote] = useState({});
  const [deleting, setDeleting] = useState(false);
  const [del, setDel] = useState(false);
  const { currentUser } = useAuth();
  const {
    addNote,
    setNotes,
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
    contact,
    setUserName,
    profileExist,
    setProfileExist,
    setDefaultProfileImg,
    setCustomColor
  } = useStateContext();

  // Body Theme
  useEffect(() => {
    document.querySelector("body").style.background = defaultTheme[0];
  }, [defaultTheme]);

  // ReverseArr
  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }

  // First load
  useEffect(()=>{
    let com
    if (currentUser) {
      com = database.users
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
            setNoteData('')
            setUserName(`User-${Math.floor(Math.random()*1000)}`)
            setDefaultProfileImg(1)
            setDefaultTheme(["#ececec","#ffffff","#000000","#c3c3c3","#bbbbbb","#c990ff","#00b300","1","#bbbbbb"])
            setProfileExist(true)
            database.users.doc(currentUser.uid).set({
              note: '',
              uid: currentUser.uid,
              theme: ["#ececec","#ffffff","#000000","#c3c3c3","#bbbbbb","#c990ff","#00b300","1","#bbbbbb"],
              name: `User-${Math.floor(Math.random()*1000)}`,
              profileImg: 1
            });
          }
        });
    }
    return com;
  },[currentUser , setProfileExist, setDefaultProfileImg, setDefaultTheme, setUserName])

  // Saving Data
  useEffect(() => {
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data()){
          if (doc.data().theme){
            setDefaultTheme(doc.data().theme)
            setCustomColor(doc.data().theme[0])
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
          if (doc.data().profileImg){
            setDefaultProfileImg(doc.data().profileImg)
          }
          setFirstLoad(false);
        }
      });
      setFirstLoad(false);
  }, [addNote, edit, deleting,update, currentUser.uid, setDefaultProfileImg, setDefaultTheme, setNotes, setUserName,setCustomColor]);

  // Ripples
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

  // Preview
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

  // Preview Close
  const handleBack = () => {
    document.querySelector(".preCon").classList.add("back1");
    setTimeout(() => {
      setPreview(false);
    }, 400);
  };

  // Deleting Note
  const handleDelete = (e) => {
    handleRipples(e);
    document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
    setDeleting(true);
    let delId = e.target.id;
    database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          let tempNote = doc.data().note;
          let decryptedNote = ''
          if (tempNote !== ''){
            decryptedNote = JSON.parse(CryptoJS.AES.decrypt(tempNote, doc.data().password).toString(CryptoJS.enc.Utf8))
            let b = -1;
            decryptedNote.map((tNote) => {
              b = b + 1;
              if (tNote.noteId === delId) {
                decryptedNote.splice(b, 1);
                return decryptedNote;
              }
              return tNote;
            });
            let tempNoteEncrypted = CryptoJS.AES.encrypt(JSON.stringify(decryptedNote), doc.data().password).toString();
            database.users.doc(currentUser.uid).update({
              note: tempNoteEncrypted,
            });
          }
          setDeleting(false);
          setPreview(false);
        }
      });
  };

  // Open Delete Menu
  const handleOpen = async () => {
    await setDel(true);
    document.querySelector(".delCon").classList.add("openAnime");
  };

  // Close Delete Menu
  const handleCancel = async () => {
    await document.querySelector(".delCon").classList.remove("openAnime");
    document.querySelector(".delCon").classList.add("cancelAnime");
    setTimeout(() => {
      setDel(false);
    }, 300);
  };

  // Open Edit
  const handleEdit = () => {
    setEdit(true)
  }

  // Burger Animation
  let burger = false;
  const handleBurger = async () => {
    burger = !burger;
    setSideNavbar(!sideNavbar);
  };
  useEffect(() => {
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
    handleBurgerSub();
  }, [sideNavbar]);
  return (
    <>
      {sideNavbar && <SideNav />}
      {themes && <Themes />}
      {about && <About/>}
      {contact && <Contact/>}
      {profileExist && <CreateProfile/>}
      {preview && !edit && (
        <div className="preCon" style={{ background: defaultTheme[0] }}>
          <div
            className="navPreview"
            style={{
              background: defaultTheme[1],
              boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
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
              onClick={handleEdit}
            >
              <Edit />
            </button>
            <button
              className="delete"
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
              boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
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
                    boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
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
                  <p style={{ color: `${note.textColor}`}} className="date">{note.date}</p>
                </div>
              ))}
          </div>
          <AddNotesBtn />
        </div>
      )}
    </>
  );
}
