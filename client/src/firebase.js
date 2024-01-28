// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-app-99b2d.firebaseapp.com",
  projectId: "realestate-app-99b2d",
  storageBucket: "realestate-app-99b2d.appspot.com",
  messagingSenderId: "228219850770",
  appId: "1:228219850770:web:797b9fc286d01f9b9848cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);