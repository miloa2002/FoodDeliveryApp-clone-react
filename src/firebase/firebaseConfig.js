// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_BACKEND_AUTHDOMAIN,
  projectId: import.meta.env.VITE_BACKEND_PROJECTID,
  storageBucket: import.meta.env.VITE_BACKEND_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_BACKEND_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_BACKEND_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
