import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBeUhYI6obVoXWLrawPhMKwOYJTlHBqho",
    authDomain: "nurtur-e.firebaseapp.com",
    databaseURL: "https://nurtur-e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "nurtur-e",
    storageBucket: "nurtur-e.appspot.com",
    messagingSenderId: "670577835044",
    appId: "1:670577835044:web:c4f7972cb5fcb144c1acb1",
    measurementId: "G-5LTC6RDJC9"
};

// Initialize Firebase app
const app = firebase.initializeApp(firebaseConfig)
// Get a Firestore instance
const db = firebase.firestore();

export { app, db }; // Export app and db
