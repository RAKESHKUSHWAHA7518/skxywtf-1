// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth ,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX-ah5n0jZk3jzW7yQrX7bplbg_ls3F50",
  authDomain: "skxywtf-20700.firebaseapp.com",
  projectId: "skxywtf-20700",
  storageBucket: "skxywtf-20700.appspot.com",
  messagingSenderId: "845419789686",
  appId: "1:845419789686:web:81e136579caf2b6e2fce57",
  measurementId: "G-B15BDV1P0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth= getAuth(app)

export const db= getFirestore(app);

const provider= new GoogleAuthProvider ()

export {auth, provider}