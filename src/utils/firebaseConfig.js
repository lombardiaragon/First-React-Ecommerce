// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnElnGZlkOsD8nH4NTh04IfBGgpGHVg0",
  authDomain: "fedeecommerce166.firebaseapp.com",
  projectId: "fedeecommerce166",
  storageBucket: "fedeecommerce166.appspot.com",
  messagingSenderId: "417665997692",
  appId: "1:417665997692:web:9004a2eb19758ebfe1e2f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db=getFirestore(app)

export default db