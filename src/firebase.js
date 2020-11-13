// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "challenge-yt.firebaseapp.com",
  databaseURL: "https://challenge-yt.firebaseio.com",
  projectId: "challenge-yt",
  storageBucket: "challenge-yt.appspot.com",
  messagingSenderId: "877102223097",
  appId: "1:877102223097:web:e6a482ca80bf7d04089c28",
  measurementId: "G-KPZZMCSP8Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };