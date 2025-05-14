// frontend/src/main-component/SignUpPage/index.js
import React, { useState, useEffect } from "react"; // Added useEffect
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress"; // For loading state

import "./style.scss"; // Ensure your styles are correctly linked

const SignUpPage = (props) => {
  const navigate = useNavigate(); // Changed from push to navigate for React Router v6+

  const [value, setValue] = useState({
    email: "",
    full_name: "", // Will be mapped to fullName on backend
    password: "",
    confirm_password: "",
    phoneNumber: "", // New field
    fatherName: "", // New field
    universityOrCollege: "", // New field (optional)
  });

  const [loading, setLoading] = useState(false); // For API call loading state

  // useEffect to initialize the validator.
  // Using a ref for the validator is often more stable with functional components.
  const validator = React.useRef(
    new SimpleReactValidator({
      className: "errorMessage",
      validators: {
        // Optional: Custom validator for phone number if needed
        phone: {
          message: "Please enter a valid 10-digit phone number.",
          rule: (val, params, validator) => {
            return (
              validator.helpers.testRegex(val, /^[6-9]\d{9}$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
      },
    })
  );

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // For immediate feedback, you can choose to show messages on change or blur
    // validator.current.showMessages();
  };

  // To re-render and show messages after a field is touched and loses focus
  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force a re-render if necessary, though typically state change does this.
    // If using a ref for validator, you might need to force update if messages don't show.
    // For simplicity, we'll rely on validator.current.allValid() in submit.
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      validator.current.hideMessages();

      const userData = {
        fullName: value.full_name,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirm_password,
        phoneNumber: value.phoneNumber,
        fatherName: value.fatherName,
        universityOrCollege: value.universityOrCollege,
      };

      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const data = await response.json();
        setLoading(false);

        if (response.ok && data.status === "success") {
          toast.success(
            data.message || "OTP sent to your email! Please verify."
          );
          // Navigate to OTP verification page, passing the email
          navigate("/verify-otp", { state: { email: value.email } });
        } else {
          toast.error(data.message || "Signup failed. Please try again.");
        }
      } catch (error) {
        setLoading(false);
        console.error("Signup API error:", error);
        toast.error("An error occurred during signup. Please try again.");
      }
    } else {
      validator.current.showMessages();
      toast.error("Please fill all required fields correctly.");
    }
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Signup</h2>
        <p>Signup your account</p>
        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={value.full_name}
                variant="outlined"
                name="full_name"
                label="Full Name"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler} // Show message on blur
                onChange={changeHandler}
              />
              {validator.current.message(
                "full_name",
                value.full_name,
                "required|alpha_space"
              )}
            </Grid>
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
                onBlur={touchMessageHandler}
                onChange={changeHandler}
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
                type="tel" // Use type="tel" for phone numbers
                placeholder="Phone Number"
                value={value.phoneNumber}
                variant="outlined"
                name="phoneNumber"
                label="Phone Number"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler}
                onChange={changeHandler}
              />
              {/* Using custom phone validator or a simple required numeric */}
              {validator.current.message(
                "phoneNumber",
                value.phoneNumber,
                "required|phone"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Father's Name"
                value={value.fatherName}
                variant="outlined"
                name="fatherName"
                label="Father's Name"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler}
                onChange={changeHandler}
              />
              {validator.current.message(
                "fatherName",
                value.fatherName,
                "required|alpha_space"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="University/College Name (Optional)"
                value={value.universityOrCollege}
                variant="outlined"
                name="universityOrCollege"
                label="University/College Name"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler} // Still good to have for consistency if you add rules later
                onChange={changeHandler}
              />
              {/* No validation message shown if it's truly optional and has no rules */}
              {/* If you add rules like 'alpha_space', it will show if invalid */}
              {validator.current.message(
                "universityOrCollege",
                value.universityOrCollege,
                "alpha_space"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                type="password"
                placeholder="Password (min 6 chars)"
                value={value.password}
                variant="outlined"
                name="password"
                label="Password"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler}
                onChange={changeHandler}
              />
              {validator.current.message(
                "password",
                value.password,
                "required|min:6"
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                type="password"
                placeholder="Confirm Password"
                value={value.confirm_password} // Corrected to use confirm_password state
                variant="outlined"
                name="confirm_password"
                label="Confirm Password"
                InputLabelProps={{ shrink: true }}
                onBlur={touchMessageHandler}
                onChange={changeHandler}
              />
              {validator.current.message(
                "confirm_password",
                value.confirm_password,
                `required|in:${value.password}`
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                  disabled={loading}>
                  {loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </Grid>
              {/* Social login buttons can be implemented later */}
              {/* <Grid className="loginWithSocial">
                                <Button className="facebook"><i className="fa fa-facebook"></i></Button>
                                <Button className="twitter"><i className="fa fa-twitter"></i></Button>
                                <Button className="linkedin"><i className="fa fa-linkedin"></i></Button>
                            </Grid> */}
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpPage;
