// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl2ZK1rdG4My-01KxTaQvCKBI5flZXEPA",
  authDomain: "buybusy-d1c47.firebaseapp.com",
  projectId: "buybusy-d1c47",
  storageBucket: "buybusy-d1c47.appspot.com",
  messagingSenderId: "526712011180",
  appId: "1:526712011180:web:a2b775f3481cc16fd86209",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
