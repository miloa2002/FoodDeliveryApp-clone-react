import { db } from "../firebase/firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";

const userCollection = collection(db, "usuarios");

export const crearUsuario = async (usuario, id) =>
  await setDoc(doc(userCollection, id), usuario);
