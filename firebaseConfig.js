// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAeI6dCmI8blXfCrw-HmN9XVjFaQrSLffg",
  authDomain: "react-native-570ed.firebaseapp.com",
  projectId: "react-native-570ed",
  storageBucket: "react-native-570ed.appspot.com",
  messagingSenderId: "739537378950",
  appId: "1:739537378950:web:3a0fdd61aa8af3bdc03b07",
  measurementId: "G-VD3GEHQ3BC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const analytics = getAnalytics(app);

export { auth };