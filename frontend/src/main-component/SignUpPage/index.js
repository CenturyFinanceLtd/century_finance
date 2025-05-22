// frontend/src/main-component/SignUpPage/index.js
import React, { useState, useRef, Fragment } from "react"; // Removed useEffect as validator is stable with useRef
import { Helmet } from "react-helmet";
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

import "./style.scss"; // Ensure your styles are correctly linked

const SignUpPage = (props) => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    full_name: "", // Will be mapped to fullName on backend
    password: "",
    confirm_password: "",
    phoneNumber: "", // New field
    fatherName: "", // New field
    universityOrCollege: "", // New field (optional)
  });

  const [loading, setLoading] = useState(false);

  // Using a ref for the validator is often more stable with functional components.
  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage", // Class for styling validation messages
      validators: {
        phone: {
          // Custom phone validator
          message:
            "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.",
          rule: (val, params, validatorInstance) => {
            // Renamed validator to validatorInstance to avoid conflict
            return (
              validatorInstance.helpers.testRegex(val, /^[6-9]\d{9}$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
      },
    })
  );

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // Show message for the field being changed if it was already touched
    if (validator.current.fields[e.target.name]) {
      validator.current.showMessageFor(e.target.name);
    }
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
      validator.current.hideMessages(); // Hide all messages before new submission

      const userDataForApi = {
        fullName: value.full_name,
        email: value.email,
        password: value.password,
        confirmPassword: value.confirm_password,
        phoneNumber: value.phoneNumber,
        fatherName: value.fatherName,
        universityOrCollege: value.universityOrCollege,
      };

      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDataForApi),
          }
        );

        const data = await response.json();
        setLoading(false);

        if (response.ok && data.status === "success") {
          toast.success(
            data.message || "OTP sent to your email! Please verify."
          );

          // Data to pass to the OTP verification page
          // For new users, we pass all submitted data so it can be used to create the final user record
          // For existing unverified users, only email and action might be strictly needed by OTP page,
          // but backend's signup response gives `action` which helps OTP page decide.
          const signupDataForOtpPage = {
            fullName: value.full_name,
            password: value.password, // Send plain password for final registration step
            phoneNumber: value.phoneNumber,
            fatherName: value.fatherName,
            universityOrCollege: value.universityOrCollege,
          };

          navigate("/verify-otp", {
            state: {
              email: value.email,
              action: data.data?.action, // 'verifyNewUser' or 'verifyExistingUser'
              // Only pass full signupData if the backend indicates it's for a new user verification
              signupData:
                data.data?.action === "verifyNewUser"
                  ? signupDataForOtpPage
                  : null,
            },
          });
        } else {
          toast.error(data.message || "Signup failed. Please try again.");
        }
      } catch (error) {
        setLoading(false);
        console.error("Signup API error:", error);
        toast.error("An error occurred during signup. Please try again.");
      }
    } else {
      validator.current.showMessages(); // Show all validation errors
      toast.error("Please fill all required fields correctly.");
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Sign-Up - Century Finance Limited</title>
        <meta
          name="description"
          content="Get in touch with Century Finance Limited for any inquiries or support. We're here to help with your financial needs."
        />
        <meta
          name="keywords"
          content="Contact, Century Finance, Financial Services, Support, Contact Us"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Sign-Up"} pagesub={"Sign-Up"} />
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
                  onBlur={touchMessageHandler}
                  onChange={changeHandler}
                  error={
                    validator.current.message(
                      "full_name",
                      value.full_name,
                      "required|alpha_space"
                    )
                      ? true
                      : false
                  }
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
                  type="tel"
                  placeholder="Phone Number"
                  value={value.phoneNumber}
                  variant="outlined"
                  name="phoneNumber"
                  label="Phone Number"
                  InputLabelProps={{ shrink: true }}
                  onBlur={touchMessageHandler}
                  onChange={changeHandler}
                  error={
                    validator.current.message(
                      "phoneNumber",
                      value.phoneNumber,
                      "required|phone"
                    )
                      ? true
                      : false
                  }
                />
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
                  error={
                    validator.current.message(
                      "fatherName",
                      value.fatherName,
                      "required|alpha_space"
                    )
                      ? true
                      : false
                  }
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
                  onBlur={touchMessageHandler}
                  onChange={changeHandler}
                  // Optional field, so error prop might not be needed unless specific validation is added
                  error={
                    validator.current.message(
                      "universityOrCollege",
                      value.universityOrCollege,
                      "alpha_space"
                    )
                      ? true
                      : false
                  }
                />
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
                  placeholder="Password (min 6 characters)"
                  value={value.password}
                  variant="outlined"
                  name="password"
                  label="Password"
                  InputLabelProps={{ shrink: true }}
                  onBlur={touchMessageHandler}
                  onChange={changeHandler}
                  error={
                    validator.current.message(
                      "password",
                      value.password,
                      "required|min:6"
                    )
                      ? true
                      : false
                  }
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
                  value={value.confirm_password} // Ensure this is value.confirm_password
                  variant="outlined"
                  name="confirm_password"
                  label="Confirm Password"
                  InputLabelProps={{ shrink: true }}
                  onBlur={touchMessageHandler}
                  onChange={changeHandler}
                  error={
                    validator.current.message(
                      "confirm_password",
                      value.confirm_password,
                      `required|in:${value.password}`
                    )
                      ? true
                      : false
                  }
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
                    disabled={loading}
                    variant="contained" // Added for better MUI styling
                    color="primary" // Added for better MUI styling
                  >
                    {loading ? (
                      <CircularProgress size={24} style={{ color: "white" }} />
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </Grid>
                <p className="noteHelp">
                  Already have an account?{" "}
                  <Link to="/login">Return to Sign In</Link>
                </p>
              </Grid>
            </Grid>
          </form>
          <div className="shape-img">
            <i className="fi flaticon-honeycomb"></i>{" "}
            {/* Ensure flaticon is set up */}
          </div>
        </Grid>
      </Grid>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default SignUpPage;
