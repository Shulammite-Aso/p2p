import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAC4WuIqoA0bG7B9WiMFVpUUsiBS7GUaBQ",
    authDomain: "portfolia-b40c4.firebaseapp.com",
    projectId: "portfolia-b40c4",
    storageBucket: "portfolia-b40c4.appspot.com",
    messagingSenderId: "715659525075",
    appId: "1:715659525075:web:a554901c10f5e6c58ccd26",
    measurementId: "G-WTBLFP55GS"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();