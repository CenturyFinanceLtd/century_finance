// frontend/src/main-component/ForgotPassword/index.js
import React, { useState, useRef } from "react"; // Added useRef
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Assuming you use MUI Button
import CircularProgress from "@mui/material/CircularProgress"; // For loading state
import { Link, useNavigate } from "react-router-dom";

import "./style.scss"; // Your existing styles

const ForgotPassword = (props) => {
  const navigate = useNavigate(); // Changed from push for React Router v6+

  const [value, setValue] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);

  // Initialize validator with useRef for stability in functional components
  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // Optionally show message on change if field was touched
    // if (validator.current.fields[e.target.name]) {
    //    validator.current.showMessageFor(e.target.name);
    // }
  };

  // To show validation messages when a field loses focus
  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force a re-render to ensure messages update if validator state doesn't trigger it
    setValue((prev) => ({ ...prev }));
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      validator.current.hideMessages();

      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: value.email }),
          }
        );

        const data = await response.json();
        setLoading(false);

        if (response.ok && data.status === "success") {
          toast.success(
            data.message ||
              "If your email is registered, a password reset OTP has been sent."
          );
          // Navigate to a page where the user can enter the OTP and then new password
          navigate("/verify-reset-otp", { state: { email: value.email } });
        } else {
          // Even if backend returns 404 for user not found, the message is generic for security
          // So, data.message should be displayed.
          toast.error(
            data.message || "Failed to send reset OTP. Please try again."
          );
        }
      } catch (error) {
        setLoading(false);
        console.error("Forgot Password API error:", error);
        toast.error("An error occurred. Please try again.");
      }
    } else {
      validator.current.showMessages();
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <Grid className="loginWrapper">
      {" "}
      {/* Assuming loginWrapper class provides centering and styling */}
      <Grid className="loginForm">
        {" "}
        {/* Assuming loginForm class provides form styling */}
        <h2>Forgot Password</h2>
        <p>Enter your email to reset your password</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline" // Your custom class for styling
                fullWidth
                placeholder="E-mail address"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
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
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme" // Your theme button classes
                  type="submit"
                  disabled={loading}
                  variant="contained" // MUI specific
                  color="primary" // MUI specific
                >
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Send Reset OTP"
                  )}
                </Button>
              </Grid>
              <p
                className="noteHelp"
                style={{ textAlign: "center", marginTop: "20px" }}>
                Remember your password? <Link to="/login">Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>{" "}
          {/* Ensure flaticon CSS is loaded */}
        </div>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
