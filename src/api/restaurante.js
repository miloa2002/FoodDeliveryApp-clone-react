import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const getRestaurantes = async () => {
  const res = await getDocs(collection(db, "restaurantes"));
  return res;
};
