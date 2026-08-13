// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbrXCYt16WeVu1P9J3E4imBcY0CxrDl10",
  authDomain: "daiel-tech-lms.firebaseapp.com",
  projectId: "daiel-tech-lms",
  storageBucket: "daiel-tech-lms.firebasestorage.app",
  messagingSenderId: "303324443122",
  appId: "1:303324443122:web:b50c2b6614d0ebffebfb6b",
  measurementId: "G-5WQ4FV9CG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };

