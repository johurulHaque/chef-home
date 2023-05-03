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

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>{
      console.log('logged user',loggedUser);
      setUser(loggedUser);
    })

    return ()=> {
      unsubscribe();
    }
  },[])

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSign = () => {
    return signInWithPopup(auth, provider);
  };

  const githubSign = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const updateUser = (name,obj)=>{
    return updateProfile(name,obj);
  }

    const allSignOut = () => {
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
