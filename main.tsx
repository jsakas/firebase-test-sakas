import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAPevsjJofOzRQdrHhOUZ-d3uTHuZH7M50",
  authDomain: "fir-test-sakas.firebaseapp.com",
  projectId: "firebase-test-sakas",
  storageBucket: "firebase-test-sakas.appspot.com",
  messagingSenderId: "870470449013",
  appId: "1:870470449013:web:1e8ee3b17bedff5952c53c"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const functions = firebase.functions(app);
const database = firebase.firestore(app);
const storage = firebase.storage(app);
const auth = firebase.auth(app);
const firestore = firebase.firestore;

export { app, functions, database, storage, auth, firestore }
