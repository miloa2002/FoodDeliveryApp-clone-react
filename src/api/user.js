import { db } from "../firebase/firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const userCollection = collection(db, "usuarios");

export const crearUsuario = async (usuario, id) =>
  await setDoc(doc(userCollection, id), usuario);
