import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  //============ 1. USER CREATE/ REGISTRATION =================//
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //============ 2. USER LOGIN ===============================//
  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //============ 3 . USER OBSERVATION ===============================//

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser);
      setUser(currentUser);
      setLoader(false);
      return () => {
        return unSubscribe();
      };
    });
  }, []);
  //============ 4 . USER LOGOUT===============================//
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //============ 4 . USER reset password ===============================//
  const resetPassword = (email) => {
    setLoader(true);
    return sendPasswordResetEmail(auth, email);
  };
  //============ 5 . USER UPDATE  ===============================//

  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const emailVerify = () => {
    setLoader(true);
    return sendEmailVerification(auth.currentUser);
  };
  const authInfo = {
    user,
    loader,
    createUser,
    login,
    logOut,
    updateUserProfile,
    emailVerify,
    resetPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
