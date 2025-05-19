// frontend/src/main-component/Signup/VerifyOtpPage.js (or your preferred path)
import React, { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SimpleReactValidator from "simple-react-validator";

// Assuming API base URL is handled globally or defined here
const API_BASE_URL = "https://api.centuryfinancelimited.com/api"; // Or your local/global config

const VerifyOtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Email should be passed from the signup page via location.state
  const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  // To store what action the signup page initiated (e.g., 'verifyNewUser' or 'verifyExistingUser')
  const [actionType, setActionType] = useState(
    location.state?.action || "verifyNewUser"
  );

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage", // Ensure this class is styled for visibility
    })
  );

  useEffect(() => {
    if (!location.state?.email) {
      toast.warn(
        "Email not found. Please start the signup process again or enter your email."
      );
      // Optional: Redirect if email is crucial from previous step
      // navigate('/signup');
    }
    if (location.state?.action) {
      setActionType(location.state.action);
    }
  }, [location.state, navigate]);

  const otpChangeHandler = (e) => {
    setOtp(e.target.value);
    if (validator.current.fields.otp) {
      validator.current.showMessageFor("otp");
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (validator.current.fields.email) {
      validator.current.showMessageFor("email");
    }
  };

  // To trigger re-render and show validation messages on blur
  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    if (e.target.name === "otp") setOtp((prev) => prev + ""); // Force re-render by creating new string instance
    if (e.target.name === "email") setEmail((prev) => prev + "");
  };

  const submitOtpForVerification = async (e) => {
    e.preventDefault();

    const isEmailFieldValid = validator.current.check(email, "required|email");
    const isOtpFieldValid = validator.current.check(
      otp,
      "required|numeric|min:6|max:6" // Assuming OTP is 6 digits
    );

    validator.current.showMessages();
    setEmail((prev) => prev + ""); // Force re-render for email validation message
    setOtp((prev) => prev + ""); // Force re-render for OTP validation message

    if (!isEmailFieldValid || !isOtpFieldValid || !email || !otp) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${API_BASE_URL}/auth/verify-otp`, // Endpoint for general OTP verification
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, otp }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.status === "success") {
        toast.success(
          data.message || "Email verified successfully! You can now login."
        );
        // Navigate to login page or dashboard after successful email verification
        // The backend's createSendToken already sends a token, so user is effectively logged in.
        // You might want to store the token from data.token and user details from data.data.user in Redux/Context
        if (data.token && data.data && data.data.user) {
          // Example: dispatch(loginSuccess(data.data.user, data.token));
          console.log("User verified and logged in:", data.data.user);
        }
        navigate("/login", { replace: true }); // Or to user dashboard: navigate('/dashboard');
      } else {
        toast.error(
          data.message || "OTP verification failed. Please try again."
        );
      }
    } catch (error) {
      setLoading(false);
      console.error("Verify Email OTP API error:", error);
      toast.error(
        "An error occurred during OTP verification. Please try again."
      );
    }
  };

  const handleResendOtp = async () => {
    if (!email || !validator.current.fieldValid("email")) {
      validator.current.showMessageFor("email");
      setEmail((prev) => prev + "");
      toast.error("Please enter a valid email address to resend OTP.");
      return;
    }

    setLoading(true);
    try {
      // The /signup endpoint handles resending OTP if email is already pending or unverified in User table
      // It needs all original signup fields if it were a *new* pending user,
      // but for resending to an existing unverified user or pending user, only email matters for identification.
      // Your backend signup logic seems to handle this by checking existing users first.
      // For simplicity, we'll just send the email. If your backend strictly needs other fields for
      // a "resend" action that goes through the PendingUser creation again, you'd need to pass them.
      // However, your backend's signup logic for an *existingUnverifiedUser* only uses the email to find them.
      const payload = { email };
      // If you want to be more explicit for resending to an existing user, you might need a different endpoint
      // or ensure the signup endpoint correctly identifies this as a resend request for an existing user.
      // For now, assuming signup endpoint's logic for existingUnverifiedUser is sufficient.

      const response = await fetch(
        `${API_BASE_URL}/auth/signup`, // Signup endpoint handles OTP resend for existing unverified/pending
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Send minimal data; backend should identify existing user/pending user by email
          // If your signup *requires* all fields even for a resend to existing, this needs adjustment
          // or a dedicated resend endpoint. Your current backend `signup` checks `existingUnverifiedUser`
          // and `existingVerifiedUser` first.
          body: JSON.stringify({
            email: email,
            // Provide dummy values for other required fields if your backend's initial validation
            // for the /signup route still runs before checking existing users.
            // This depends on how strictly your /signup route validates before hitting the user checks.
            // Based on your authController, it validates first. So we might need to send placeholder for those.
            // This is a common issue with using one endpoint for multiple nuanced actions.
            // A dedicated /resend-verification-otp endpoint is cleaner.
            // For now, let's assume we try with just email, and if backend complains, adjust.
            // OR, if the actionType from signup was 'verifyExistingUser', we know other fields aren't needed.
            // If actionType was 'verifyNewUser', it implies it's a resend for a PendingUser.
            // The backend `signup` logic handles `PendingUser` by deleting old and creating new.
            // For `existingUnverifiedUser`, it just resends.
            fullName: location.state?.originalSignupData?.fullName || "N/A",
            password:
              location.state?.originalSignupData?.password || "Password123", // Dummy
            confirmPassword:
              location.state?.originalSignupData?.confirmPassword ||
              "Password123", // Dummy
            phoneNumber:
              location.state?.originalSignupData?.phoneNumber || "0000000000", // Dummy
            fatherName: location.state?.originalSignupData?.fatherName || "N/A", // Dummy
            universityOrCollege:
              location.state?.originalSignupData?.universityOrCollege || "N/A", //Dummy
          }),
        }
      );
      const data = await response.json();
      setLoading(false);

      if (response.ok && data.status === "success") {
        toast.success(data.message || "A new OTP has been sent to your email.");
        if (data.data && data.data.action) {
          setActionType(data.data.action); // Update action type if backend provides it
        }
      } else {
        toast.error(
          data.message ||
            "Failed to resend OTP. Please check the email address."
        );
      }
    } catch (error) {
      setLoading(false);
      console.error("Resend OTP error:", error);
      toast.error("Error resending OTP. Please try again.");
    }
  };

  return (
    <Fragment>
      {/* Placeholder for Navbar/PageTitle if needed */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "80vh", padding: 2 }}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper
            elevation={3}
            sx={{ padding: { xs: 2, sm: 3, md: 4 }, textAlign: "center" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Verify Your Email
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              An OTP has been sent to{" "}
              <strong>{email || "your email address"}</strong>. Please enter it
              below.
            </Typography>
            <Box
              component="form"
              onSubmit={submitOtpForVerification}
              noValidate
              sx={{ mt: 1 }}>
              {/* Conditionally show email field if not passed via state or if user needs to correct it */}
              {!location.state?.email && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus={!location.state?.email}
                  value={email}
                  onChange={emailChangeHandler}
                  onBlur={touchMessageHandler}
                  error={
                    !!validator.current.message(
                      "email",
                      email,
                      "required|email"
                    )
                  }
                  helperText={validator.current.message(
                    "email",
                    email,
                    "required|email"
                  )}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="otp"
                label="Enter 6-digit OTP"
                type="text" // Changed to text to allow easier input and validation
                id="otp"
                inputProps={{
                  maxLength: 6,
                  style: { textAlign: "center", letterSpacing: "0.3em" },
                }}
                value={otp}
                onChange={otpChangeHandler}
                onBlur={touchMessageHandler}
                autoFocus={!!location.state?.email} // Autofocus OTP if email is pre-filled
                error={
                  !!validator.current.message(
                    "otp",
                    otp,
                    "required|numeric|min:6|max:6"
                  )
                }
                helperText={validator.current.message(
                  "otp",
                  otp,
                  "required|numeric|min:6|max:6"
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 1, py: 1.5 }}
                disabled={loading}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Verify Email"
                )}
              </Button>
              <Button
                fullWidth
                variant="text"
                onClick={handleResendOtp}
                disabled={loading || !email} // Disable if loading or no email entered
                sx={{ mb: 2 }}>
                {loading && email ? "Sending..." : "Resend OTP"}
              </Button>
              <Typography variant="body2">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Back to Login
                </Link>
                <span style={{ margin: "0 8px" }}>|</span>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Back to Signup
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default VerifyOtpPage;
