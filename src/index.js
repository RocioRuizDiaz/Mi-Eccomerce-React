import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNa-DeaaNAE_3LST3x_DTYhBiFpYB7lZ0",
  authDomain: "mangashonnen-11187.firebaseapp.com",
  projectId: "mangashonnen-11187",
  storageBucket: "mangashonnen-11187.appspot.com",
  messagingSenderId: "1026953686154",
  appId: "1:1026953686154:web:f0cfac2c6b12a95a729173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <App />
    //</React.StrictMode>
);




