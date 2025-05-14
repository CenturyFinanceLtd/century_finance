// frontend/src/store/actions/authActions.js
import { LOGIN_SUCCESS, LOGOUT_USER, USER_LOADED } from "./type";

/**
 * Action creator for successful login.
 * Stores token and user data in localStorage and dispatches LOGIN_SUCCESS.
 * @param {object} userData - The user object from the backend.
 * @param {string} token - The JWT token from the backend.
 */
export const loginSuccess = (userData, token) => (dispatch) => {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", JSON.stringify(userData));

  dispatch({
    type: LOGIN_SUCCESS,
    payload: { user: userData, token },
  });
};

/**
 * Action creator for user logout.
 * Removes token and user data from localStorage and dispatches LOGOUT_USER.
 */
export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");

  dispatch({
    type: LOGOUT_USER,
  });
};

/**
 * Action creator to load user from localStorage on initial app load.
 */
export const loadUserFromStorage = () => (dispatch) => {
  const token = localStorage.getItem("authToken");
  const userString = localStorage.getItem("authUser");

  if (token && userString) {
    try {
      const user = JSON.parse(userString);
      dispatch({
        type: USER_LOADED,
        payload: { user, token },
      });
    } catch (e) {
      console.error(
        "Could not parse user from localStorage during loadUser:",
        e
      );
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      dispatch({ type: LOGOUT_USER });
    }
  }
};
