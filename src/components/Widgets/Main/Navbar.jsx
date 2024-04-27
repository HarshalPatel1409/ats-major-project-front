import { Stack } from "@mui/material";
import React from "react";

const Navbar = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="main-navbar">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <label>DALAL</label>
        <button className="login-btn" onClick={redirectToLogin}>
          Login
        </button>
      </Stack>
    </div>
  );
};

export default Navbar;
