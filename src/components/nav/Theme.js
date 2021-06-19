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
    let something = e.target.id
    let i = 0
    let arr = []
    let a = ''
    while( something.length > i ){
      if(something[i] === ','){
        console.log(',,,,')
        arr.push(a)
        console.log(a)
        a = ''
      } else {
        a = a + something[i]
      }
      i++;
    }
    console.log(arr)
  
    if (currentUser) {
      database.users
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        database.users.doc(currentUser.uid).set({
          note: doc.data().note,
          uid: doc.data().uid,
          theme: arr
        });
        setUpdate(!update)
        setSavingTheme(false)
      })
    }
    // setDefaultTheme(arr)
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
          boxShadow: `6px 6px 5px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
        }}
      >
        Notes
      </h1>
      <div
        style={{
          background: background,
          boxShadow: `6px 6px 5px ${boxShadow},0 10px 5px rgba(0,0,0,0)`,
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
