import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBy76PvlT7O3juhuOq4cSv_hG2jrrVMr-0",
  authDomain: "class71-b6b78.firebaseapp.com",
  projectId: "class71-b6b78",
  storageBucket: "class71-b6b78.appspot.com",
  messagingSenderId: "523875463728",
  appId: "1:523875463728:web:48eb4e319c558e90b8f3f5"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
