import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../firebase";
import "./Login.scss";
import gIcon from "./img/gIcon.svg";

export default function LogIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { logIn } = useAuth();

  // Loged In ?
  auth.onAuthStateChanged((user) => {
    if (user) {
      history.push("/Notes");
    }
    return;
  });

  // Log In
  const handleLogIn = async () => {
    try {
      setError("");
      setLoading(true);
      await logIn();

      auth.onAuthStateChanged((user) => {
        if (user) {
          history.push("/Notes");
        }
        return;
      });
    } catch {
      setError("Failed to Log in");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="loginCon">
      <div className="bgImg"></div>
      <div className="navPreview">
        <h1>Notes</h1>
      </div>
      <div>
        <h1>Log In</h1>
        <p />
        <button disabled={loading} onClick={handleLogIn}>
          <img src={gIcon} alt=''/>Continue with Google
        </button>
      </div>
    </div>
  );
}
