import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxOIm7rswOnGn346ArhDWVXwmUwcAAyqY",
    authDomain: "todo-list-backend-3d745.firebaseapp.com",
    projectId: "todo-list-backend-3d745",
    storageBucket: "todo-list-backend-3d745.appspot.com",
    messagingSenderId: "424400323009",
    appId: "1:424400323009:web:15da67f3e5b7fb2f5d6f40",
    measurementId: "G-KLQJS36Z99",
    databaseURL: "https://todo-list-backend-3d745-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ----------- Cloud Firestore ---------------------------------------------------


// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Example that works
/* await addDoc(collection(db, "todo-items"), {
    status: "Incomplete",
    text: "Take out trash"
  }); */