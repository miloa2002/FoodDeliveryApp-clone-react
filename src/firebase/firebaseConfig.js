// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtaJkgceYGXfTO11-_iQUI5ItCKt9aiCM",
  authDomain: "fooddeliveryapp-ef852.firebaseapp.com",
  projectId: "fooddeliveryapp-ef852",
  storageBucket: "fooddeliveryapp-ef852.appspot.com",
  messagingSenderId: "346583729139",
  appId: "1:346583729139:web:af5d67bcb8ab0fae8b4886",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
