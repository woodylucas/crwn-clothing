import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAuXhlPTq4qNWmQTxTgfWkM_zLVWgUmIBg",
  authDomain: "crwn-db-3fc60.firebaseapp.com",
  projectId: "crwn-db-3fc60",
  storageBucket: "crwn-db-3fc60.appspot.com",
  messagingSenderId: "16195426889",
  appId: "1:16195426889:web:75c170891e5624b03b3d98",
  measurementId: "G-5Z0B0PYE0M",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
