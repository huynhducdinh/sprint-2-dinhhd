// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCRYeHpxy0IJMA6wEXzuGdp9RSNT4UERlg",
    authDomain: "fruit-21a21.firebaseapp.com",
    projectId: "fruit-21a21",
    storageBucket: "fruit-21a21.appspot.com",
    messagingSenderId: "871225878730",
    appId: "1:871225878730:web:7c7a4dcabd578dd908ac33",
    measurementId: "G-05LH9Z05WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);