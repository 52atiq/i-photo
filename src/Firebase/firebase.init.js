// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCUxrvvTsWTyBI12obciIBijb7YtnmsRYk",
  authDomain: "photographer-d5ce8.firebaseapp.com",
  projectId: "photographer-d5ce8",
  storageBucket: "photographer-d5ce8.appspot.com",
  messagingSenderId: "612976885559",
  appId: "1:612976885559:web:7020ddaecb71699b2b24b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app;