import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyD2lMBmnHPCBivwxFnO_R58ZCUvUUR-u0g",
    authDomain: "messenger-clone-ab3ce.firebaseapp.com",
    databaseURL: "https://messenger-clone-ab3ce.firebaseio.com",
    projectId: "messenger-clone-ab3ce",
    storageBucket: "messenger-clone-ab3ce.appspot.com",
    messagingSenderId: "1009955975405",
    appId: "1:1009955975405:web:93630dcc1668132c8a1ce4",
    measurementId: "G-MJ7B22YQQT"
  });

  const db = firebaseApp.firestore();

export default db;