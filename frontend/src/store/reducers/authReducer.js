// frontend/src/store/reducers/authReducer.js
import { LOGIN_SUCCESS, LOGOUT_USER, USER_LOADED } from "../actions/type";

const initialState = {
  isAuthenticated: false,
  user: null, // Will store user details like { fullName, email, _id, etc. }
  token: null, // Will store the JWT token
};

// Helper to initialize state from localStorage.
// This is useful for the initial state before Redux Persist rehydrates.
const getInitialStateFromStorage = () => {
  const token = localStorage.getItem("authToken");
  const userString = localStorage.getItem("authUser");
  if (token && userString) {
    try {
      const user = JSON.parse(userString);
      return {
        isAuthenticated: true,
        user: user,
        token: token,
      };
    } catch (e) {
      // If parsing fails, clear potentially corrupted storage
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      return initialState;
    }
  }
  return initialState;
};

const authReducer = (state = getInitialStateFromStorage(), action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
    case USER_LOADED: // Handle loading user from storage
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user,
        token: payload.token,
      };
    case LOGOUT_USER:
      // localStorage is cleared by the action creator or component triggering logout
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
