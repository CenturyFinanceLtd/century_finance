// frontend/src/main-component/VerifyOtpPage/index.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
// import './style.scss'; // Create and link if needed

const VerifyOtpPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState("");
  // Attempt to get email from navigation state, or prompt user if not available
  const [email, setEmail] = useState(location.state?.email || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location.state?.email) {
      // If email is not passed, ideally redirect back to signup or show an error
      // For now, we'll allow manual input if not passed, but this is less secure/ideal
      toast.info(
        "Please enter the email you registered with if not pre-filled."
      );
    }
  }, [location.state]);

  const changeHandler = (e) => {
    setOtp(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const submitOtp = async (e) => {
    e.preventDefault();
    if (!email || !otp) {
      toast.error("Please enter your email and the OTP.");
      return;
    }
    if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
      toast.error("OTP must be a 6-digit number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/verify-email",
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
        toast.success("Email verified successfully! You are now logged in.");
        // Store the token (data.token) and user data (data.data.user) in your app's state/context/localStorage
        // For example, using localStorage (consider security implications):
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.data.user));

        // TODO: Update your application's global state to reflect login
        // e.g., dispatch an action if using Redux, or update context

        navigate("/"); // Navigate to homepage or dashboard
      } else {
        toast.error(
          data.message || "OTP verification failed. Please try again."
        );
      }
    } catch (error) {
      setLoading(false);
      console.error("OTP verification API error:", error);
      toast.error(
        "An error occurred during OTP verification. Please try again."
      );
    }
  };

  // Optional: Resend OTP Logic
  const resendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email address to resend OTP.");
      return;
    }
    setLoading(true);
    try {
      // We need to call the signup endpoint again to trigger OTP resend for an unverified user
      // The backend's signup logic handles existing unverified users by resending OTP.
      // We only need to send the email for this.
      // A more dedicated /resend-otp endpoint would be cleaner on the backend.
      // For now, we'll simulate a partial signup request.
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/signup",
        {
          // Or a dedicated /resend-otp
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Send minimal data required by your signup endpoint to trigger OTP for existing unverified user
          // This depends on how your backend handles this. Ideally, just email is needed.
          // For the current backend, it expects more fields. A dedicated resend OTP would be better.
          // For now, let's assume we need to send dummy data for other required fields if backend requires them.
          body: JSON.stringify({
            email: email,
            // Provide dummy or previously entered values if your backend /signup strictlys requires them for unverified users
            fullName: "Resend OTP User", // Placeholder
            password: "Password123", // Placeholder
            confirmPassword: "Password123", // Placeholder
            phoneNumber: "0000000000", // Placeholder
            fatherName: "Resend Father", // Placeholder
          }),
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.ok && data.status === "success") {
        toast.success("A new OTP has been sent to your email.");
      } else {
        toast.error(data.message || "Failed to resend OTP.");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error resending OTP.");
    }
  };

  return (
    <Grid
      className="loginWrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}>
      <Grid
        className="loginForm"
        style={{ maxWidth: 400, padding: "20px", textAlign: "center" }}>
        <h2>Verify Your Email</h2>
        <p>
          An OTP has been sent to{" "}
          {location.state?.email || "your email address"}.
        </p>
        <form onSubmit={submitOtp}>
          <Grid container spacing={3} direction="column">
            {!location.state?.email && ( // Show email input if not passed via state
              <Grid item xs={12} style={{ width: "100%" }}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  placeholder="E-mail"
                  value={email}
                  variant="outlined"
                  name="email"
                  label="E-mail"
                  type="email"
                  InputLabelProps={{ shrink: true }}
                  onChange={emailChangeHandler}
                  required
                />
              </Grid>
            )}
            <Grid item xs={12} style={{ width: "100%" }}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Enter 6-digit OTP"
                value={otp}
                variant="outlined"
                name="otp"
                label="OTP"
                InputLabelProps={{ shrink: true }}
                onChange={changeHandler}
                inputProps={{ maxLength: 6 }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                className="cBtn cBtnLarge cBtnTheme"
                type="submit"
                disabled={loading}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Verify OTP"
                )}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="text"
                onClick={resendOtp}
                disabled={loading || !email}>
                {loading ? "Sending..." : "Resend OTP"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default VerifyOtpPage;
