// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi2sfFAgoIXH8hPVDT4b2nOBEB-_YT7pY",
  authDomain: "portfolio-28378.firebaseapp.com",
  projectId: "portfolio-28378",
  storageBucket: "portfolio-28378.appspot.com",
  messagingSenderId: "973867672562",
  appId: "1:973867672562:web:3b7a835d3b1b6914cbc16b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)