// frontend/src/main-component/ForgotPassword/VerifyResetOtp.js
import React, { useState, useEffect, useRef, Fragment } from "react"; // Fragment is now imported
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

// Assuming you might have a shared SCSS file or a dedicated one
// import './style.scss';

const VerifyResetOtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  useEffect(() => {
    if (!location.state?.email) {
      toast.warn(
        "Email not found. Please try the 'Forgot Password' process again or enter your email."
      );
      // navigate('/forgot-password'); // Optional: redirect if email is missing
    }
  }, [location.state, navigate]);

  const otpChangeHandler = (e) => {
    setOtp(e.target.value);
    if (validator.current.fields.otp) {
      // Show message on change if field was touched
      validator.current.showMessageFor("otp");
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (validator.current.fields.email) {
      // Show message on change if field was touched
      validator.current.showMessageFor("email");
    }
  };

  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force re-render for validator messages by updating the relevant state
    if (e.target.name === "otp") setOtp((prev) => prev + ""); // Minor change to trigger re-render
    if (e.target.name === "email") setEmail((prev) => prev + ""); // Minor change to trigger re-render
  };

  const submitOtpForReset = async (e) => {
    e.preventDefault();

    // Manually trigger validation for all fields before submission attempt
    const isEmailFieldValid = validator.current.check(email, "required|email");
    const isOtpFieldValid = validator.current.check(
      otp,
      "required|numeric|min:6|max:6"
    );
    validator.current.showMessages(); // Show all messages

    // Force re-render to display messages immediately
    // A common trick is to slightly change the state to ensure UI updates with validator messages
    setEmail((prevEmail) => (prevEmail === email ? email + " " : email)); // Add a space then trim to force update
    setEmail((prevEmail) => prevEmail.trim());
    setOtp((prevOtp) => (prevOtp === otp ? otp + " " : otp));
    setOtp((prevOtp) => prevOtp.trim());

    if (!isEmailFieldValid || !isOtpFieldValid || !email || !otp) {
      toast.error("Please fill in the fields correctly.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/verify-reset-otp",
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
          data.message ||
            "OTP verified successfully! You can now set a new password."
        );
        // Navigate to the reset password page, passing email and OTP (or a temporary token if backend provides one)
        navigate("/reset-password", { state: { email: email, otp: otp } });
      } else {
        toast.error(
          data.message || "OTP verification failed. Please try again."
        );
      }
    } catch (error) {
      setLoading(false);
      console.error("Verify Reset OTP API error:", error);
      toast.error(
        "An error occurred during OTP verification. Please try again."
      );
    }
  };

  const handleResendPasswordResetOtp = async () => {
    if (!email) {
      validator.current.showMessageFor("email");
      setEmail((prev) => prev + (prev.endsWith(" ") ? "" : " "));
      setEmail((prev) => prev.trim());
      toast.error("Please enter your email address to resend OTP.");
      return;
    }
    if (!validator.current.fieldValid("email")) {
      validator.current.showMessageFor("email");
      setEmail((prev) => prev + (prev.endsWith(" ") ? "" : " "));
      setEmail((prev) => prev.trim());
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email }),
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.ok && data.status === "success") {
        toast.success(
          data.message ||
            "A new password reset OTP has been sent to your email."
        );
      } else {
        toast.error(data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error resending OTP.");
    }
  };

  return (
    <Fragment>
      {" "}
      {/* Using Fragment here */}
      {/* You might want to include your Navbar and PageTitle components here */}
      {/* <Navbar /> */}
      {/* <PageTitle pageTitle={"Verify Reset Code"} pagesub={"Password Reset"} /> */}
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
              Verify OTP
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              An OTP has been sent to <strong>{email || "your email"}</strong>{" "}
              to reset your password.
            </Typography>
            <Box
              component="form"
              onSubmit={submitOtpForReset}
              noValidate
              sx={{ mt: 1 }}>
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
                    validator.current.message("email", email, "required|email")
                      ? true
                      : false
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
                type="text"
                id="otp"
                inputProps={{
                  maxLength: 6,
                  style: { textAlign: "center", letterSpacing: "0.3em" },
                }}
                value={otp}
                onChange={otpChangeHandler}
                onBlur={touchMessageHandler}
                autoFocus={!!location.state?.email} // AutoFocus OTP if email is prefilled
                error={
                  validator.current.message(
                    "otp",
                    otp,
                    "required|numeric|min:6|max:6"
                  )
                    ? true
                    : false
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
                  "Verify OTP"
                )}
              </Button>
              <Button
                fullWidth
                variant="text"
                onClick={handleResendPasswordResetOtp}
                disabled={loading || !email} // Disable if email field is empty
                sx={{ mb: 2 }}>
                {loading ? "Sending..." : "Resend OTP"}
              </Button>
              <Typography variant="body2">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Back to Login
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      {/* <Footer /> */}
      {/* <Scrollbar /> */}
    </Fragment>
  );
};

export default VerifyResetOtpPage;
