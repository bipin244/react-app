import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfXFJJvKC-nfdIopelN3NqhCw5WSOgSps",
    authDomain: "fiverr-19dce.firebaseapp.com",
    databaseURL: "https://fiverr-19dce.firebaseio.com",
    projectId: "fiverr-19dce",
    storageBucket: "fiverr-19dce.appspot.com",
    messagingSenderId: "376328416704"
});

const db = firebaseApp.firestore();

export { db };