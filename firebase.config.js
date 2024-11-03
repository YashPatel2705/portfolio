import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiZ4okMZmJ4rKx-rp6_7SLTf0wVElHX8Q",
  authDomain: "portfolio-47419.firebaseapp.com",
  projectId: "portfolio-47419",
  storageBucket: "portfolio-47419.firebasestorage.app",
  messagingSenderId: "203263876947",
  appId: "1:203263876947:web:4f949ee9d56924891f4ba6",
  measurementId: "G-Y3P0BBE1K3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);