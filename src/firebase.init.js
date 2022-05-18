// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtlaUsjgIhLy1tVVF-yT66Zdb_QZ7r2XA",
    authDomain: "to-do-website-e9d14.firebaseapp.com",
    projectId: "to-do-website-e9d14",
    storageBucket: "to-do-website-e9d14.appspot.com",
    messagingSenderId: "247353164208",
    appId: "1:247353164208:web:f49664a8fe1b0a2ef89675"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;