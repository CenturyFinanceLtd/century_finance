// frontend/src/main-component/LoginPage/index.js (or your file path)
import React, { useState, useRef, useEffect } from "react"; // Added useRef, useEffect
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import "./style.scss"; // Your existing styles

const LoginPage = (props) => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "", // Start with empty fields for better UX
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
    // Optionally, trigger validation message display on change:
    // if (validator.current.fields[e.target.name]) {
    //    validator.current.showMessageFor(e.target.name);
    // }
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

          // Store authentication token and user data in localStorage
          // Note: For higher security, consider HttpOnly cookies set by the backend.
          localStorage.setItem("authToken", data.token);
          localStorage.setItem("authUser", JSON.stringify(data.data.user));

          // TODO: IMPORTANT - Update global application state (e.g., using Context API or Redux)
          // This will allow other components (like your Header) to know the user is logged in.
          // Example: authContext.login(data.data.user, data.token);

          // Clear form fields (optional, as navigating away)
          setValue({ email: "", password: "", remember: false });

          navigate("/home"); // Navigate to the home page or user dashboard
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
                  disabled={loading}>
                  {loading ? (
                    <CircularProgress size={24} style={{ color: "white" }} />
                  ) : (
                    "Login"
                  )}
                </Button>
              </Grid>
              {/* Social login buttons can be implemented later if needed */}
              {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> 
                            */}
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
