import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions/auth.actions";

const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };
  return (
    <>
      <nav className="bg-dark p-4 d-flex justify-content-around">
        <a
          href="/"
          className="text-capitalize text-light text-decoration-none h3"
        >
          Mylibrary
        </a>
        {auth.authenticate ? (
          <div className="d-flex justify-content-around login">
            <h3
              className="text-capitalize text-dark text-decoration-none btn btn-light "
              onClick={logout}
            >
              Logout
            </h3>
          </div>
        ) : (
          <div className="d-flex justify-content-around login">
            <a
              href="/signup"
              className="text-capitalize text-dark text-decoration-none btn btn-light mr-4"
            >
              Sign up
            </a>
            <a
              href="/signin"
              className="text-capitalize text-dark text-decoration-none btn btn-light "
            >
              Sign in
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
