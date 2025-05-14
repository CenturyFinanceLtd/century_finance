// frontend/src/main-component/LoginPage/index.js
import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux"; // Import useDispatch
import { loginSuccess } from "../../store/actions/authActions"; // Import your loginSuccess action

import "./style.scss"; // Your existing styles

const LoginPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch

  const [value, setValue] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [loading, setLoading] = useState(false);

  // Initialize validator with useRef for stability in functional components
  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage", // Class for styling validation messages
    })
  );

  // Handles changes in input fields
  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // Handles the "Remember Me" checkbox
  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  // Shows validation message for a field when it loses focus (onBlur)
  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force a re-render to ensure messages update if validator state doesn't trigger it
    setValue((prev) => ({ ...prev }));
  };

  // Handles form submission
  const submitForm = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      // Check if all fields pass validation
      setLoading(true); // Show loading indicator
      validator.current.hideMessages(); // Hide previous validation messages

      try {
        // API call to the backend login endpoint
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: value.email,
              password: value.password,
            }),
          }
        );

        const data = await response.json(); // Parse the JSON response from the backend
        setLoading(false); // Hide loading indicator

        if (response.ok && data.status === "success" && data.token) {
          toast.success("Login successful!");

          // Dispatch loginSuccess action to update Redux state and localStorage
          dispatch(loginSuccess(data.data.user, data.token));

          setValue({ email: "", password: "", remember: false }); // Clear form
          navigate("/home"); // Navigate to home or dashboard
        } else {
          // Display error message from backend or a generic one
          toast.error(
            data.message ||
              "Login failed. Please check your credentials or verify your email."
          );
        }
      } catch (error) {
        setLoading(false); // Hide loading indicator
        console.error("Login API error:", error);
        toast.error("An error occurred during login. Please try again.");
      }
    } else {
      validator.current.showMessages(); // Show all validation messages
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler} // Validate on blur
                onChange={changeHandler}
                error={
                  validator.current.message(
                    "email",
                    value.email,
                    "required|email"
                  )
                    ? true
                    : false
                }
              />
              {validator.current.message(
                "email",
                value.email,
                "required|email"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
                label="Password"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler} // Validate on blur
                onChange={changeHandler}
                error={
                  validator.current.message(
                    "password",
                    value.password,
                    "required"
                  )
                    ? true
                    : false
                }
              />
              {validator.current.message(
                "password",
                value.password,
                "required"
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.remember}
                      onChange={rememberHandler}
                      color="primary"
                    />
                  }
                  label="Remember Me"
                />
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtnTheme cBtnLarge"
                  type="submit"
                  disabled={loading}
                  variant="contained"
                  color="primary">
                  {loading ? (
                    <CircularProgress size={24} style={{ color: "white" }} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create free account</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>{" "}
          {/* Ensure this flaticon class is available */}
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
