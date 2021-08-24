/** @format */
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWbL6eMlLz7K_bz_KYj4uQJ2lDk--tSZo",
  authDomain: "i-message-f832b.firebaseapp.com",
  databaseURL: "https://i-message-f832b.firebaseio.com",
  projectId: "i-message-f832b",
  storageBucket: "i-message-f832b.appspot.com",
  messagingSenderId: "814497243541",
  appId: "1:814497243541:web:c52039c01303dd8d33969c",
  measurementId: "G-KSYC1DFYV3",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
