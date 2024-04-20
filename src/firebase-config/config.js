// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyDRYNZ0EOMM5UpAsjc8BdnLeC15DekZoFc",
//     authDomain: "nurture-testing-3facd.firebaseapp.com",
//     projectId: "nurture-testing-3facd",
//     storageBucket: "nurture-testing-3facd.appspot.com",
//     messagingSenderId: "81516224614",
//     appId: "1:81516224614:web:23086208a1cb72244f8da7",
//     measurementId: "G-53H8LP4GKG"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }

// const db = firebase.firestore();
// const storage = firebase.storage();

// export { db, storage };

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
export const db = firebase.firestore()
