// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_423VCopyTNZ5nS8yVRQyagX4-3DPZCI",
  authDomain: "netflix-7890d.firebaseapp.com",
  projectId: "netflix-7890d",
  storageBucket: "netflix-7890d.appspot.com",
  messagingSenderId: "461654465309",
  appId: "1:461654465309:web:74764ff7c8ee22c2821ff4",
  measurementId: "G-PC7EX20MVG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);