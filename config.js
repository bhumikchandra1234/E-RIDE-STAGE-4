import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDL93jSQ_avN9tFj1iDE32Y5EWGYxD62RY",
    authDomain: "e-ride-stage-4-37d52.firebaseapp.com",
    projectId: "e-ride-stage-4-37d52",
    storageBucket: "e-ride-stage-4-37d52.appspot.com",
    messagingSenderId: "149859089320",
    appId: "1:149859089320:web:5bc452fb01764d90f83b9d"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();