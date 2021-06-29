import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./nav-sass/Theme.scss";
import Offline from "../note/sub-component/Offline";

export default function Theme({
  theme,
  backgroundColor,
  background,
  color,
  boxShadow,
  on,
  custom,
}) {
  const {
    update,
    setUpdate,
    setSavingTheme,
    customColor,
    setCustomThemeOn,
    onlineStatus,
    setOnlineStatus,
  } = useStateContext();
  const { currentUser } = useAuth();

  // 'Theme Update
  const handleTheme = (e) => {
    if (navigator.onLine) {
      if (custom) {
        setCustomThemeOn(true);
      } else if (!custom) {
        setSavingTheme(true);
        let something = JSON.parse(e.target.id);
        if (currentUser) {
          database.users
            .doc(currentUser.uid)
            .get()
            .then((doc) => {
              database.users.doc(currentUser.uid).update({
                theme: something,
              });
              setUpdate(!update);
              setSavingTheme(false);
            });
        }
      }
    }
    if (navigator.onLine === false) {
      setOnlineStatus(true);
      console.log("offline");
    }
  };

  return (
    <>
      {onlineStatus && <Offline />}
      <div
        className="themeCon"
        id={theme}
        value="1"
        style={{
          background: custom ? customColor : backgroundColor,
          color: custom ? "#ffffff" : color,
        }}
        onClick={handleTheme}
      >
        <h1
          className={custom && "customTheme"}
          style={{
            background: custom ? customColor : background,
            boxShadow: `0px 0px 10px ${
              custom ? "#00000000" : boxShadow
            },0 10px 5px rgba(0,0,0,0)`,
          }}
        >
          Notes
        </h1>
        <div
          className={`theme1 ${custom && "customTheme"}`}
          style={{
            background: custom ? customColor : background,
            boxShadow: `0px 0px 10px ${
              custom ? "#00000000" : boxShadow
            },0 10px 5px rgba(0,0,0,0)`,
          }}
        >
          {custom ? "Click to select custom color for theme." : "Note..."}
        </div>
        {on === "true" ? (
          <div className="theme2">
            <div className="theme21">
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
