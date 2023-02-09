import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState("")

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth)
    }

    function googleInicio() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const inscribirse = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            inscribirse();
        }
    }, [])

    return (
        <UserAuthContext.Provider value={{ user, signUp, logIn, logOut, googleInicio }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default UserAuthContextProvider
