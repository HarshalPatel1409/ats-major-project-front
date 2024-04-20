import React, { useState } from "react";
import { auth, provider } from "./../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { authenticate } from "./../../services/Login/Login.service";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";

import { Box, Stack, Typography } from "@mui/material";

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
    <div className="authentication-page">
      <h2>Log In </h2>
      {authorize ? (
        <Typography fontWeight="500" variant="h4" mb={1}>
          {authorize}
        </Typography>
      ) : null}
      {errorMessage}
      <Stack direction="column">
        {authorize !== null ? (
          <form onSubmit={handleSubmit}>
            <Box>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </Box>
            <Box mt="25px">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Box>
            <br />
            <button className="common-button" type="submit">
              Login
            </button>
          </form>
        ) : (
          ""
        )}
      </Stack>
      <div style={{ margin: "1%" }}>
        <button
          className="common-button"
          onClick={() => setAuthorize("candidate")}
        >
          Candidate
        </button>
        <button
          className="common-button"
          onClick={() => setAuthorize("employer")}
        >
          Employer
        </button>
        <button className="common-button" onClick={handleGoogleClick}>
          <GoogleIcon /> Sign In with google
        </button>
      </div>
    </div>
  );
};

export default Login;
