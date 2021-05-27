import "./App.css";
import React, { useState, useEffect } from "react";
import fire from "./fire";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = () => {
    fire.auth().signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err) {
        case 'auth/invalid-email':
        case 'auth/user-disabled':
        case 'auth/user-not-found':
          setEmailError(err.message)
          break
        case 'auth/wrong-password':
          setPasswordError(err.message)
          break
      }
    })
  };

  const handleSignup = () => {
    fire.auth().createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch (err) {
        case 'auth/email-already-in-use':
        case 'auth/invalid-email':
          setEmailError(err.message)
          break
        case 'auth/weak-password':
          setPasswordError(err.message)
          break
      }
    })
  };

const handleLogout = () => {
  fire.auth().signOut()
}

  return <h1>app</h1>;
};

export default App;
