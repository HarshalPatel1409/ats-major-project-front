import React, { useState } from "react";
import { auth, provider } from "./../../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Home = () => {
  const handleLogin = () => {
    window.location.href = "/candidate";
  };
  const handleLoginAdmin = () => {
    window.location.href = "/employer";
  };

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log("Google data => ", data);
    });
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login Candidate</button>
      <button onClick={handleLoginAdmin}>Login Employer</button>
      <button onClick={handleGoogleClick}>Sign In with google</button>
    </div>
  );
};

export default Home;
