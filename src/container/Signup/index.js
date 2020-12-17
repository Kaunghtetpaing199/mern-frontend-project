import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../actions/auth.actions";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignup = (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };
    dispatch(signup(user));
  };
  const auth = useSelector((state) => state.auth);
  return auth.authenticating ? (
    <Redirect to="/signin" />
  ) : (
    <>
      <div className="container mt-4">
        <form onSubmit={userSignup}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <div className="text-danger mt-2"></div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
            <div className="text-danger mt-2"></div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="text-danger mt-2"></div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="text-danger mt-2"></div>
          </div>

          <div className="mb-2">
            <Link to="/signin">Already created?</Link>
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

export default Signup;
