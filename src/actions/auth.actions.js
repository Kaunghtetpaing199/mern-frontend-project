import { authConstants } from "./constants";
import axiosIntace from "../helpers/axios";

export const login = (user) => {
  return async (dispatch) => {
    const res = await axiosIntace.post(`/signin`, {
      ...user,
    });
    if (res.status === 200) {
      const { user, token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({ type: authConstants.LOGIN_FAILURE });
    }
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to logged in" },
      });
    }
  };
};

export const signup = (user) => {
  return async (dispatch) => {
    const res = await axiosIntace.post(`/signup`, {
      ...user,
    });
    if (res.status === 201) {
      dispatch({ type: authConstants.SIGNUP_SUCCESS });
    } else {
      dispatch({ type: authConstants.SIGNUP_FAILURE });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axiosIntace.post(`/signout`);
    if (res.status === 200) {
      window.localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
