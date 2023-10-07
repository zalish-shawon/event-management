/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

 const createAccountWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
 }


 const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
 }

 //google login
 const provider = new GoogleAuthProvider

 const googleLogin = () => {
    return signInWithPopup(auth, provider)
 }

 const logOut = () => {
   return signOut(auth)
 }



 useEffect(() => {

  const unsubscribe =  onAuthStateChanged(auth, (user) => {
        setUser(user)
    });
    return () => {
        unsubscribe()
    }
 }, [])

 const authInfo = {
    createAccountWithPassword,
    loginUser,
    user,
    logOut,
    googleLogin,
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;