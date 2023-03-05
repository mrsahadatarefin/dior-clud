import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
export const AuthContext = createContext();
const auth = getAuth(app)

const ContextProvider = ({children}) => {
    const [user,setUser] = useState(null) 
   const [loading,setLoading]= useState(true)


   const googleSign = (provider)=>{
   
    return signInWithPopup(auth, provider)
 
    }


   const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)

   } 


   const updateUser = ( userInfo)=>{
    setLoading(false)
    return updateProfile(auth.currentUser,userInfo);
   
}

   const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);

   }

   const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
   }

     

   useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,createUser => {

    console.log('user observing')
    setUser(createUser)
    setLoading(false)
  })
return ()=> unsubscribe() ;
   },[])



   const authInfo = {

    createUser,
    signIn,
    user,
    logOut,
    updateUser,
    loading,
    googleSign,
    setLoading

   }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider >
    );
};

export default ContextProvider;