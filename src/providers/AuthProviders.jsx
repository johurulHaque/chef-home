import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProviders = ({ children }) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
      // console.log('logged user',loggedUser);
      setUser(loggedUser);
      setLoading(false)
    })

    return ()=> {
      unsubscribe();
    }
  },[])

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSign = () => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const githubSign = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  const updateUser = (name,obj)=>{

    // dfgfddddddddddddddd
    setLoading(true)
    return updateProfile(name,obj);
  }

    const allSignOut = () => {
      setLoading(true)
      return signOut(auth);
    };



  const authInfo = {
    user,
    createUser,
    signIn,
    googleSign,
    githubSign,
    updateUser,
    allSignOut,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
