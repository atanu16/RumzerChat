import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCLlDLGqN_NLqcY1TB5YVIQobAyD7U4fwQ",
  authDomain: "charlar-test.firebaseapp.com",
  projectId: "charlar-test",
  storageBucket: "charlar-test.appspot.com",
  messagingSenderId: "417824106131",
  appId: "1:417824106131:web:ed340aaa1b4fb9d6d48f66",
  measurementId: "G-XDBX0F42HP"
}).auth()
