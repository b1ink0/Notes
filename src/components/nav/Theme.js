import React from "react";
import { useAuth } from "../../context/AuthContext";
import { StateProvider, useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./nav-sass/Theme.scss";

export default function Theme({
  theme,
  backgroundColor,
  background,
  color,
  boxShadow,
  on,
}) {
  const { setDefaultTheme, update, setUpdate, setSavingTheme } = useStateContext()
  const { currentUser } = useAuth()

  const handleTheme = (e) => {
    setSavingTheme(true)
    let something = JSON.parse(e.target.id)
    if (currentUser) {
      database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        database.users.doc(currentUser.uid).update({
          theme: something,
        });
        setUpdate(!update)
        setSavingTheme(false)
      })
    }
  }
  return (
    <div
      className="themeCon"
      id={theme}
      value='1'
      style={{ background: backgroundColor, color: color }}
      onClick={handleTheme}
    >
      <h1
        style={{
          background: background,
          boxShadow: `0px 0px 10px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
        }}
      >
        Notes
      </h1>
      <div
        style={{
          background: background,
          boxShadow: `0px 0px 10px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
        }}
        className="theme1"
      >
        Note...
      </div>
      {
        on === 'true' ?
      <div className='theme2'>
        <div className='theme21'>
          <div></div>
          <div></div>
        </div>
      </div> : ''
      }
    </div>
  );
}
