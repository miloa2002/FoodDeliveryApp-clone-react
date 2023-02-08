// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhluz7EwynXQ6jZ1GufoBKw6Wz8fg18CA",
  authDomain: "deliveryapp-65033.firebaseapp.com",
  projectId: "deliveryapp-65033",
  storageBucket: "deliveryapp-65033.appspot.com",
  messagingSenderId: "933619970413",
  appId: "1:933619970413:web:a30698462094a3d664aa64",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
