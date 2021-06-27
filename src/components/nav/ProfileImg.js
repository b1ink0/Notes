import React, { useState } from "react";
import "./nav-sass/ProfileImg.scss";
import DefaultProfileImg from "./DefaultProfileImg";
import { useStateContext } from "../../context/StateContext";

export default function ProfileImg() {
  const { defaultTheme, setProfileChoose, defaultProfileImg, setDefaultProfileImg } = useStateContext();
  const imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [profileImgFadeOut, setProfileImgFadeOut] = useState(false)

  // Profile Img Select Close
  const handleClose = () => {
    setProfileImgFadeOut(true)
    setTimeout(() => {
        setProfileChoose(false)
    }, 300);
  }

  // Update Profile Img
  const handleProfileImg = (e) => {
    setDefaultProfileImg(parseInt(e.target.id))
    handleClose()
  }
  
  return (
    <div className={`profileChooseCon ${profileImgFadeOut && `fadeOutProfileImg`}`}>
      <div className="profileChoose"   style={{ background: defaultTheme[0] }}>
        <button onClick={handleClose}>
          <div style={{ background: defaultTheme[8] }}></div>
          <div style={{ background: defaultTheme[8] }}></div>
        </button>
        {imgs.map((img) => (
          <div className="profileChooseImg" id={img} key={img} onClick={(e) => handleProfileImg(e)}>
            <DefaultProfileImg defaultImg={img} />
            <div className={defaultProfileImg === img ? "overlay" : ""}>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
