import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import AddNotesBtn from "./AddNotesBtn";
import NotesInput from "./NotesInput";
import "./note-sass/NotesRender.scss";
import PreviewNote from "./PreviewNote";
import NotesEdit from "./NotesEdit";
import DesktopNav from "./DesktopNav";
import SideNav from "./SideNav";
import LoadingSvg from "./img/LoadingSvg";
import EmptyNote from "./img/EmptyNote";
import Themes from "../nav/Themes";
import About from "../nav/About";
import Contact from "../nav/Contact";
import CryptoJS from "crypto-js";
import CreateProfile from "./CreateProfile";

export default function NotesRender() {
  const [loading, setLoading] = useState(true);
  const [zeroNote, setZeroNote] = useState(false);
  const [noteData, setNoteData] = useState();
  const [preNote, setPreNote] = useState({});
  const { currentUser } = useAuth();
  const {
    addNote,
    setNotes,
    setCurrentNote,
    preview,
    setPreview,
    edit,
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
    setCustomColor,
    fadeOut,
    setFadeOut,
  } = useStateContext();

  // Body Theme
  useEffect(() => {
    setFadeOut(false);
    document.querySelector("body").style.background = defaultTheme[0];
  }, [defaultTheme, setFadeOut]);

  // ReverseArr
  function reverseArr(input) {
    let ret = [];
    for (let i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }

  // First load
  useEffect(() => {
    let com;
    if (currentUser) {
      com = database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (doc.data()) {
              if (doc.data().password) {
                return;
              } else {
                setProfileExist(true);
              }
            }
            return;
          } else {
            setNoteData("");
            setUserName(`User-${Math.floor(Math.random() * 1000)}`);
            setDefaultProfileImg(1);
            setDefaultTheme([
              "#ececec",
              "#ffffff",
              "#000000",
              "#c3c3c3",
              "#bbbbbb",
              "#c990ff",
              "#00b300",
              "1",
              "#bbbbbb",
            ]);
            setProfileExist(true);
            database.users.doc(currentUser.uid).set({
              note: "",
              uid: currentUser.uid,
              theme: [
                "#ececec",
                "#ffffff",
                "#000000",
                "#c3c3c3",
                "#bbbbbb",
                "#c990ff",
                "#00b300",
                "1",
                "#bbbbbb",
              ],
              name: `User-${Math.floor(Math.random() * 1000)}`,
              profileImg: 1,
            });
          }
        });
    }
    return com;
  }, [
    currentUser,
    setProfileExist,
    setDefaultProfileImg,
    setDefaultTheme,
    setUserName,
  ]);

  // Saving Data
  useEffect(() => {
    setTimeout(() => {
      database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data()) {
            if (doc.data().theme) {
              setDefaultTheme(doc.data().theme);
              setCustomColor(doc.data().theme[0]);
            }
            if (doc.data().name) {
              setUserName(doc.data().name);
            }
            let tempData = doc.data().note;
            if (tempData !== "") {
              let decryptedNote = JSON.parse(
                CryptoJS.AES.decrypt(tempData, doc.data().password).toString(
                  CryptoJS.enc.Utf8
                )
              );
              tempData = reverseArr(decryptedNote);
              if (tempData.length === 0) {
                setZeroNote(true);
              } else {
                setZeroNote(false);
              }
              console.log("==", tempData);
              setNoteData(tempData);
              setNotes(tempData);
            } else {
            }
            if (doc.data().profileImg) {
              setDefaultProfileImg(doc.data().profileImg);
            }
            setLoading(false);
          }
        });
    }, 200);
  }, [
    addNote,
    edit,
    update,
    currentUser.uid,
    setDefaultProfileImg,
    setDefaultTheme,
    setNotes,
    setUserName,
    setCustomColor,
  ]);

  // Preview
  const handleSee = (e) => {
    setFadeOut(true);
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
    setTimeout(() => {
      setPreview(true);
    }, 200);
  };

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
      {about && <About />}
      {contact && <Contact />}
      {profileExist && <CreateProfile />}
      {preview && !edit && <PreviewNote note={preNote} />}
      {edit && <NotesEdit />}
      {addNote && !preview && <NotesInput />}
      {!addNote && !preview && (
        <div
          className={`notesContainer ${fadeOut && "notesFadeOut"}`}
          style={{ background: defaultTheme[0], color: defaultTheme[2] }}
        >
          <div
            className="logo"
            style={{
              background: defaultTheme[1],
              boxShadow: `0px 0px 10px ${defaultTheme[4]}`,
            }}
          >
            <DesktopNav />
            <h1>Notes</h1>
            <button onClick={handleBurger}>
              <div className="burger" style={{ background: defaultTheme[3] }}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </button>
          </div>
          {loading && <LoadingSvg />}
          {zeroNote && <EmptyNote />}
          {navigator.onLine === false && (
            <div
              style={{ background: defaultTheme[1] }}
              className="offlineAlert"
            >
              You are offline ⚠
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
                  <p style={{ color: `${note.textColor}` }} className="date">
                    {note.date}
                  </p>
                </div>
              ))}
          </div>
          <AddNotesBtn />
        </div>
      )}
    </>
  );
}
