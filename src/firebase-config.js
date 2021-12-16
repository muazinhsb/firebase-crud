import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsG4alHw_xOA1nd9LrxIcbVrk5do8hDMY",
  authDomain: "fir-crud-cbd2d.firebaseapp.com",
  projectId: "fir-crud-cbd2d",
  storageBucket: "fir-crud-cbd2d.appspot.com",
  messagingSenderId: "563166727896",
  appId: "1:563166727896:web:bc860af90659e0523891ad",
  measurementId: "G-2EDFBR6C9E"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)