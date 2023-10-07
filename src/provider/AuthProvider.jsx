/* eslint-disable react/prop-types */
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebaseConfig";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
const auth = getAuth(app)

 const createAccountWithPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
 }


 const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
 }

 const authInfo = {
    createAccountWithPassword,
    loginUser
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;