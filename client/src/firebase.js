// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6befd.firebaseapp.com",
  projectId: "mern-estate-6befd",
  storageBucket: "mern-estate-6befd.appspot.com",
  messagingSenderId: "293315211712",
  appId: "1:293315211712:web:bda3a1e1be64eb31771825"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);