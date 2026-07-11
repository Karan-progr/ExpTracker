import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import API_URL from "../../config"

const Login = () => {
  return (
    <div className="Login">
      <div className="login-card">
        <h1>Exp Track</h1>
        <p>Take control of every rupee.</p>

        <button onClick={
          async function login() {
              const result = await signInWithPopup(auth, provider);

              const idToken = await result.user.getIdToken();

              localStorage.setItem({idToken:idToken})

              await fetch("http://10.248.103.245:3500/login", {
                  method: "POST",
                  headers: {
                      Authorization: `Bearer ${idToken}`,
                  },
              });
          }
        }>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;