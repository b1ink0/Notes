import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import Edit from "../note/img/Edit";
import "./nav-sass/EditProfile.scss";
import LoadingSvg from "../note/img/LoadingSvg";

export default function EditProfile() {
  const { setProfileEdit, userName, setUserName, defaultTheme } =
    useStateContext();
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const handleClose = () => {
    setSaved(true);
    setTimeout(() => {
      setProfileEdit(false);
    }, 300);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
      setLoading(true);
      if (currentUser) {
        database.users
          .doc(currentUser.uid)
          .update({
            name: userName,
          })
          .then(() => {
            setLoading(false);
            setSaved(true);
            setTimeout(() => {
              setProfileEdit(false);
            }, 300);
          });
      }
  };
  return (
    <div className={`profileEditCon ${saved && "fadeOutProfileEdit"}`}>
      {loading && (
        <div className="loading">
          <LoadingSvg />
        </div>
      )}
      <form
        className="profileEdit"
        onSubmit={(e) => handleSubmit(e)}
        style={{ background: defaultTheme[1] }}
      >
        <div className="profileImg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M 12 4 C 9.789063 4 8 5.789063 8 8 C 8 10.210938 9.789063 12 12 12 C 14.210938 12 16 10.210938 16 8 C 16 5.789063 14.210938 4 12 4 Z M 9.03125 13.40625 C 5.253906 14.550781 4 17.65625 4 17.65625 L 4 20 L 20 20 L 20 17.65625 C 20 17.65625 18.746094 14.550781 14.96875 13.40625 C 14.761719 14.863281 13.511719 16 12 16 C 10.488281 16 9.238281 14.863281 9.03125 13.40625 Z"></path>
          </svg>
          <button
            type="button"
            className="profileImgEdit"
            style={{ background: defaultTheme[3], color: defaultTheme[2] }}
          >
            <Edit />
          </button>
        </div>
        <div className="inputCon">
          <input
            type="text"
            minLength="3"
            maxLength="15"
            value={userName}
            style={{ background: defaultTheme[1], color: defaultTheme[2] }}
            onChange={(e) => setUserName(e.target.value)}
          />
          <h1>{userName.length}/15</h1>
        </div>
        <div className="buttonCon">
          <button
            style={{ background: defaultTheme[3], color: defaultTheme[2] }}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            style={{ background: defaultTheme[3], color: defaultTheme[2] }}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
