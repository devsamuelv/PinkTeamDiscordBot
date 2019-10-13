import firebase from "firebase";
const database = firebase.database();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB585Tc-FWf9xQ_cmU4ShPpP-FRhAKE8AI",
    authDomain: "pinkteamdiscordbot.firebaseapp.com",
    databaseURL: "https://pinkteamdiscordbot.firebaseio.com",
    projectId: "pinkteamdiscordbot",
    storageBucket: "pinkteamdiscordbot.appspot.com",
    messagingSenderId: "619134629331",
    appId: "1:619134629331:web:782e06a0413a55492b2b26"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);