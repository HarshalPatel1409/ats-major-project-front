import React from "react";
import Navbar from "../Widgets/Main/Navbar";
import { Stack } from "@mui/material";
import Main from "./Main";
import Features from "./Features";
import Company from "./Company";
import Pricing from "./Pricing";
import Footer from "../Widgets/Main/Footer";
import Review from "./Review";
import Blog from "./Blog";
const Home = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <Navbar />
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Main />
        <Features />
        <Company />
        <Review />
        <Pricing />
        <Blog />
        <Footer />
      </Stack>
    </div>
  );
};

export default Home;
