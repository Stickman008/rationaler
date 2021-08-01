import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  apiKey: "AIzaSyC5vGpsXEt90WWNPqf3krGM-W0oEbbbDoc",
  authDomain: "rationaler-df1f5.firebaseapp.com",
  projectId: "rationaler-df1f5",
  storageBucket: "rationaler-df1f5.appspot.com",
  messagingSenderId: "647126709888",
  appId: "1:647126709888:web:3329c916550fd17f65d865",
  measurementId: "G-W6LQEDP17Z",
});

// Initialize Firebase
// firebase.analytics();

const firestore = firebaseConfig.firestore();
export const database = {
  posts: firestore.collection("posts"),
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const auth = firebaseConfig.auth();
export const storage = firebase.storage();
export default firebaseConfig;