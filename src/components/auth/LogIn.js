import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.scss";
import gIcon from "./img/gIcon.svg";

export default function LogIn() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { logIn } = useAuth();

  // Log In
  const handleLogIn = async () => {
    try {
      setError("");
      setLoading(true);
      await logIn();
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
