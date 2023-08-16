
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc } from "firebase/firestore";
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js';
//import { getAuth } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxOIm7rswOnGn346ArhDWVXwmUwcAAyqY",
    authDomain: "todo-list-backend-3d745.firebaseapp.com",
    projectId: "todo-list-backend-3d745",
    storageBucket: "todo-list-backend-3d745.appspot.com",
    messagingSenderId: "424400323009",
    appId: "1:424400323009:web:15da67f3e5b7fb2f5d6f40",
    measurementId: "G-KLQJS36Z99"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  