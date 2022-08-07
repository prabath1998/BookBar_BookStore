// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtolJG6P5pTQpw5bzVNYfAT3q2vOMmtAE",
  authDomain: "bookbar-angular.firebaseapp.com",
  projectId: "bookbar-angular",
  storageBucket: "bookbar-angular.appspot.com",
  messagingSenderId: "384886898621",
  appId: "1:384886898621:web:0d48c64fa90e7725a79cd4"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
