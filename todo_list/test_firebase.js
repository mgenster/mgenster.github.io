// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBpNacRJOo4dLXngVZ-iOCcirvAiaeMIg",
    authDomain: "todo-list-e63a7.firebaseapp.com",
    databaseURL: "https://todo-list-e63a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todo-list-e63a7",
    storageBucket: "todo-list-e63a7.appspot.com",
    messagingSenderId: "36588320959",
    appId: "1:36588320959:web:459f781ca5c0a7140fae0a",
    measurementId: "G-F58B4W9ZGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);