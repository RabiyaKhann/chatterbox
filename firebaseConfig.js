// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-98OFn026NHEEX_RRDVCWWCUS1QDNqa0",
  authDomain: "chatterbox-6242b.firebaseapp.com",
  databaseURL: "https://chatterbox-6242b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatterbox-6242b",
  storageBucket: "chatterbox-6242b.appspot.com",
  messagingSenderId: "1077082845612",
  appId: "1:1077082845612:web:887d39e7c73ee55ce50a09",
  measurementId: "G-YTMFMRW34S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);