import React from "react";
const Home = () => {
  const redirectToLogin = () => {
    window.location.href = "/login";
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={redirectToLogin}>Go to Login</button>
    </div>
  );
};

export default Home;
