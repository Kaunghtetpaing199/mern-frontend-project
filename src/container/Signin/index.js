import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../actions/auth.actions";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = { email, password };

    dispatch(login(user));
  };
  const auth = useSelector((state) => state.auth);

  return auth.authenticate ? (
    <Redirect to="/" />
  ) : (
    <>
      <div className="container mt-4">
        <form onSubmit={userLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              onChange={(e) => setEmail(() => e.target.value.toString())}
            />
            <div className="text-danger mt-2"></div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(() => e.target.value.toString())}
            />

            <div className="text-danger mt-2"></div>
          </div>

          <div className="mb-2">
            <Link to="/signup">To create account?</Link>
          </div>
          <a href="/" className="btn btn-secondary">
            Cancel
          </a>
          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-primary ml-2"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
