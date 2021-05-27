import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB0ycsiwIld8m5Goys4c3bKoA2VZEq22no",
    authDomain: "react-firebase-login-e1311.firebaseapp.com",
    projectId: "react-firebase-login-e1311",
    storageBucket: "react-firebase-login-e1311.appspot.com",
    messagingSenderId: "1034958110903",
    appId: "1:1034958110903:web:7ceb76197bddc1c2c14d32"
}

const fire = firebase.initializeApp(firebaseConfig);
export default fire