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

import useAxiosPublic from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
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

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            setLoader(false);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoader(false);
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);
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
      // ki ki set korbo seta define kore dicchi and user er registration er pore update hocche forebase e
      displayName: name,
      photoURL: photo,
    }).then(() => {
      // setUser({ ...user, displayName: name, photoURL: photo });...first time user er name photo set korechi, pore edit user er page e jokhn change korbo seta ekhan theke ager tar sathe new value add kore dibo

      setUser((prevUser) => ({
        ...prevUser,
        displayName: name,
        photoURL: photo,
      }));
      setLoader(false);
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
