import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuAPHtg1yrVwRdqRBDNkDU3gR-0a0zDDI",
  authDomain: "exptracker-6f52e.firebaseapp.com",
  projectId: "exptracker-6f52e",
  storageBucket: "exptracker-6f52e.firebasestorage.app",
  messagingSenderId: "521212463825",
  appId: "1:521212463825:web:2c71d929130cb98ec3d3f0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();