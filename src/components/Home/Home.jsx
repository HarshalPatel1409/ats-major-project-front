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
import Scroll from "./Scroll";
import SomeCards from "./SomeCards";
const Home = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div className="container">
      <Navbar />
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Main />
        {/* <Features /> */}
        {/* //! Features card */}
        <SomeCards />
        <Company />
        {/* <Scroll /> */}
        <Review />
        <Pricing />
        <Blog />
        <Footer />
      </Stack>
    </div>
  );
};

export default Home;
