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
  const auth = getAuth();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err.message));
  };

  const signupUsingEmailAndPassword = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;

        setUser(user);
        alert("Signup successful.");
      }
    );
  };
  const signInUsingEmailAndPassword = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      (userCredential) => {
        const user = userCredential.user;
        setUser(user);
        alert("Login Successful");
      }
    );
  };
  console.log(loginEmail, loginPassword);
  const logOut = () => {
    signOut(auth).then(() => {
      console.log("signout");
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
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
  };
};

export default useFirebase;
