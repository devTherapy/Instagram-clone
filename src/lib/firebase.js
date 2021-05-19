import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA-m7qW6KmCwAunLD9LfpRT0_necMOtRtE",
    authDomain: "instagram-db-f6d29.firebaseapp.com",
    projectId: "instagram-db-f6d29",
    storageBucket: "instagram-db-f6d29.appspot.com",
    messagingSenderId: "1020933046254",
    appId: "1:1020933046254:web:970efa000a48ffef9d98ff",
  };
//initialize firebase
  const firebase = Firebase.initializeApp(firebaseConfig);
  const {FieldValue} = Firebase.firestore;
console.log(firebase);
export {firebase, FieldValue};