import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useStateContext } from "../../context/StateContext";
import { database } from "../../firebase";
import "./nav-sass/CustomTheme.scss";
import LoadingSvg from "../note/img/LoadingSvg";

export default function CustomTheme() {
  const {
    update,
    setUpdate,
    defaultTheme,
    customColor,
    setCustomColor,
    setCustomThemeOn,
  } = useStateContext();
  const { currentUser } = useAuth();
  const [anime, setAnime] = useState(false);
  const [lightHex, setLightHex] = useState("000000");
  const [loading, setLoading] = useState(false);
  const [moreLightHex, setMoreLightHex] = useState("000000");

  useEffect(() => {
    function LightenDarkenColor(col, amt) {
      col = parseInt(col, 16);
      return (
        ((col & 0x0000ff) + amt) |
        ((((col >> 8) & 0x00ff) + amt) << 8) |
        (((col >> 16) + amt) << 16)
      ).toString(16);
    }
    let tempColor = customColor.substring(1);
    setLightHex(LightenDarkenColor(tempColor, 20));
    setMoreLightHex(LightenDarkenColor(tempColor, 40));
  }, [customColor]);

  const handleClose = () => {
    setCustomColor(defaultTheme[0]);
    setAnime(true);
    setTimeout(() => {
      setCustomThemeOn(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let tempArr = [
      customColor,
      `#${lightHex}`,
      `${customColor === "#ffffff" ? "#000000" : "#ffffff"}`,
      `#${moreLightHex}`,
      "#00000000",
      `#${moreLightHex}`,
      "#00b300",
      "7",
      `#${moreLightHex}`,
    ];
    if (currentUser) {
      database.users
        .doc(currentUser.uid)
        .get()
        .then((doc) => {
          database.users.doc(currentUser.uid).update({
            theme: tempArr,
          });
          setUpdate(!update);
          handleClose();
          setLoading(false);
        });
    }
  };

  return (
    <div className={`customThemeCon ${anime && "fadeOutCustomTheme"}`}>
      {loading && (
        <div className="loading">
          <LoadingSvg />
        </div>
      )}
      <form style={{background: defaultTheme[0]}} className="customTheme" onSubmit={(e) => handleSubmit(e)}>
        <div
          className="themeCon"
          value="1"
          style={{ background: customColor, color: "#ffffff" }}
        >
          <input
            type="color"
            value={customColor}
            onChange={(e) => setCustomColor(e.target.value)}
          />
          <h1
            style={{
              background: `#${lightHex}`,
              boxShadow: `0px 0px 10px #00000000,0 10px 5px rgba(0,0,0,0)`,
            }}
          >
            Notes
          </h1>
          <div
            className="theme1"
            style={{
              background: `#${lightHex}`,
              boxShadow: `0px 0px 10px #00000000,0 10px 5px rgba(0,0,0,0)`,
            }}
          >
            Click to select custom color for theme.
          </div>
        </div>
        <div className="btnCon">
          <button type="button" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
