import React from "react";
import { Stack } from "@mui/material";

const Main = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="main-home-container">
      <div className="body-content">
        <span className="heading-text">
          Effortless Hiring and Management: Welcome to Our ATS Platform
        </span>
        <span className="subheading-text">
          Discover a complete suite of HRMS and ATS solutions designed to
          empower your business at every stage of the employee lifecycle. From
          seamless recruitment and onboarding to efficient management and
          employee engagement, streamline your HR processes with our innovative
          platform.
        </span>
        <Stack direction="row">
          <button className="main-btn" onClick={redirectToLogin}>
            Let's Try
          </button>
          <button className="other-btn">Blogs</button>
        </Stack>
      </div>
    </div>
  );
};

export default Main;
