import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const auth = useSelector((state) => state.auth);

  return !auth.authenticate ? (
    <Redirect to="/signin" />
  ) : (
    <>
      <h3>Home Page</h3>
    </>
  );
};

export default Home;
