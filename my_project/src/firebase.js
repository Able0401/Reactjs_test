// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfnB7_WIVy84zfUoz-q02DrHh7oLEAkR0",
  authDomain: "test-d3fc0.firebaseapp.com",
  projectId: "test-d3fc0",
  storageBucket: "test-d3fc0.appspot.com",
  messagingSenderId: "215112878582",
  appId: "1:215112878582:web:8d617ee22413ce29a9dfd7",
  measurementId: "G-BVWYFNZ6R3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
