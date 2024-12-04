// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgFU49NxNmkIIDGNRJiS6NZLNfRBEWmms",
  authDomain: "colosseummgmt9.firebaseapp.com",
  projectId: "colosseummgmt9",
  storageBucket: "colosseummgmt9.firebasestorage.app",
  messagingSenderId: "847790339333",
  appId: "1:847790339333:web:18671482536f13e0ce736c",
  measurementId: "G-4N9RXZX0HC"
};

// Initialize Firebase
let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
