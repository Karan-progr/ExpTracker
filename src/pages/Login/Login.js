import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import API_URL from "../../config"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-header">

      </div>
      <div className="login-card">
        <h1>Track Mony</h1>
        <p>Take control of every rupee.</p>

        <button onClick={
          async function login() {
              const result = await signInWithPopup(auth, provider);

              const idToken = await result.user.getIdToken();

              localStorage.setItem("JWT", idToken)

              const res = await fetch (`${API_URL}/login`, {
                method:"POST",
                headers:{
                  Authorization:`Bearer ${idToken}`
                }
              });

              console.log ("login succesfull");

          }
        }>
          Continue with Google
        </button>
        <Link>Terms & conditions</Link>
      </div>
    </div>
  );
};

export default Login;