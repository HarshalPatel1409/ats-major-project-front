import React, { useState } from "react";
import { auth, provider } from "./../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { authenticate } from "./../../services/Login/Login.service";

const Login = () => {
  const [authorize, setAuthorize] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //! Login Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const credentials = { email, password, authorize };

      const response = await authenticate(credentials);
      const { message, data } = response;

      // Check if authentication was successful
      if (message === "Authentication successful" && data && data.length > 0) {
        const { _id, name, email } = data[0];
        localStorage.setItem(
          "user",
          JSON.stringify({ _id, name, email, authorize })
        );

        setErrorMessage(null);
        setEmail("");
        setPassword("");
        setAuthorize(null);
        window.location.href = `/${authorize}`;
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      console.error("Error while Login:", error);
      throw error;
    }
  };

  const handleGoogleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log("Google data => ", data);
    });
  };

  return (
    <div>
      <h2>Login {authorize}</h2>
      {errorMessage}
      {authorize !== null ? (
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
      ) : (
        ""
      )}

      <button onClick={() => setAuthorize("candidate")}>Login Candidate</button>
      <button onClick={() => setAuthorize("employer")}>Login Employer</button>
      <button onClick={handleGoogleClick}>Sign In with google</button>
    </div>
  );
};

export default Login;
