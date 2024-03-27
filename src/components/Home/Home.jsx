import React, { useState } from "react";
import { auth, provider } from "./../../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogin}>Login Candidate</button>
      <button onClick={handleLoginAdmin}>Login Employer</button>
      <button onClick={handleGoogleClick}>Sign In with google</button>
    </div>
  );
};

export default Home;
