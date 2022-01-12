import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const signupUsingEmailAndPassword = (e) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUsingEmailAndPassword = (e) => {
    return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  };
  const logOut = () => {
    signOut(auth).then(() => {
      console.log("signout");
    });
  };
  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubcribed;
  }, [auth]);
  return {
    signInWithGoogle,
    signupUsingEmailAndPassword,
    signInUsingEmailAndPassword,
    user,
    logOut,
    setEmail,
    setPassword,
    setLoginEmail,
    setLoginPassword,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
