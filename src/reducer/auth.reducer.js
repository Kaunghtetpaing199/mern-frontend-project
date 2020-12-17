import { authConstants } from "../actions/constants";

const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },
  authenticate: false,
  authenticating: false,
  loading: true,
  error: null,
  message: "",
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  if (action.type === authConstants.LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
      loading: false,
      authenticate: true,
    };
  }
  if (action.type === authConstants.SIGNUP_SUCCESS) {
    return {
      ...state,
      authenticating: true,
      loading: false,
    };
  }
  if (action.type === authConstants.LOGIN_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
    };
  }
  if (action.type === authConstants.LOGOUT_SUCCESS) {
    return {
      ...state,
      loading: false,
      authenticate: false,
    };
  }

  return state;
};

export default authReducer;
