import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCHBkgcjtT1UUogXs1Dq_BASPwYtKJF6R4",
    authDomain: "onndway.firebaseapp.com",
    projectId: "onndway",
    storageBucket: "onndway.appspot.com",
    messagingSenderId: "552371272720",
    appId: "1:552371272720:web:47d98028ecf37316b19e95"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();