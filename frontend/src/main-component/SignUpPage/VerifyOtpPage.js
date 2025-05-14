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
  // Get email and original signup data from navigation state
  const [email, setEmail] = useState(location.state?.email || "");
  // originalSignupData will contain fullName, password, phoneNumber, etc. for new users
  const [originalSignupData, setOriginalSignupData] = useState(
    location.state?.signupData || null
  );
  const [actionType, setActionType] = useState(
    location.state?.action || "verifyNewUser"
  ); // 'verifyNewUser' or 'verifyExistingUser'

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!location.state?.email) {
      toast.info(
        "Email not found. Please try signing up again or enter your email."
      );
      // navigate('/register'); // Or handle as an error
    }
    if (
      location.state?.action === "verifyNewUser" &&
      !location.state?.signupData
    ) {
      toast.error(
        "Signup data missing for new user verification. Please try signing up again."
      );
      // navigate('/register'); // Critical data missing
    }
    setActionType(location.state?.action || "verifyNewUser");
    setOriginalSignupData(location.state?.signupData || null);
  }, [location.state, navigate]);

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

    let requestBody = { email, otp };

    // If this is for a new user whose data was in PendingUser,
    // we need to send all their original signup details again.
    if (actionType === "verifyNewUser") {
      if (!originalSignupData) {
        toast.error(
          "Original signup data is missing. Cannot complete registration."
        );
        setLoading(false);
        return;
      }
      requestBody = {
        ...requestBody,
        fullName: originalSignupData.fullName,
        password: originalSignupData.password, // Send plain password again
        phoneNumber: originalSignupData.phoneNumber,
        fatherName: originalSignupData.fatherName,
        universityOrCollege: originalSignupData.universityOrCollege,
      };
    }
    // For 'verifyExistingUser', only email and OTP are strictly needed by the backend
    // as user data already exists in the main User table.

    try {
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/verify-otp", // Updated endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.status === "success") {
        toast.success("Email verified successfully! You are now logged in.");
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("authUser", JSON.stringify(data.data.user));

        // TODO: Update global application state (Context/Redux)
        // authContext.login(data.data.user, data.token);

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

  const resendOtp = async () => {
    if (!email) {
      toast.error("Please enter your email address to resend OTP.");
      return;
    }
    setLoading(true);
    try {
      // The backend /api/auth/signup endpoint handles resending OTP
      // if the email is recognized (either in PendingUser or User as unverified).
      // It needs the original signup fields if it's to re-populate PendingUser,
      // or just email if it's an existing User.
      // For simplicity, if originalSignupData exists (new user flow), send it.
      // Otherwise (existing unverified user flow), send minimal data.
      let resendBody = { email };
      if (actionType === "verifyNewUser" && originalSignupData) {
        resendBody = { ...originalSignupData, email }; // Send all original data again
      } else {
        // For existing unverified user, backend signup might need more than just email
        // to find and update. This part needs careful alignment with backend's signup.
        // The current backend signup expects full details even for resend to existing unverified.
        resendBody = {
          email: email,
          fullName: originalSignupData?.fullName || "User", // Provide placeholders if needed
          password: originalSignupData?.password || "Password123",
          confirmPassword: originalSignupData?.password || "Password123",
          phoneNumber: originalSignupData?.phoneNumber || "0000000000",
          fatherName: originalSignupData?.fatherName || "Father",
        };
      }

      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(resendBody),
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.ok && data.status === "success") {
        toast.success(data.message || "A new OTP has been sent to your email.");
        // Update actionType if backend provides it, for consistency
        if (data.data?.action) {
          setActionType(data.data.action);
        }
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
      className="loginWrapper" // Assuming you have styles for this
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh", // Example height
      }}>
      <Grid
        className="loginForm" // Assuming styles
        style={{
          maxWidth: 400,
          padding: "20px",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}>
        <h2>Verify Your Email</h2>
        <p>
          An OTP has been sent to{" "}
          <strong>{email || "your email address"}</strong>.
        </p>
        <form onSubmit={submitOtp}>
          <Grid container spacing={2} direction="column" alignItems="center">
            {!location.state?.email && ( // Show email input if not passed via state
              <Grid item xs={12} style={{ width: "100%" }}>
                <TextField
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
                  margin="normal"
                />
              </Grid>
            )}
            <Grid item xs={12} style={{ width: "100%" }}>
              <TextField
                fullWidth
                placeholder="Enter 6-digit OTP"
                value={otp}
                variant="outlined"
                name="otp"
                label="OTP"
                InputLabelProps={{ shrink: true }}
                onChange={changeHandler}
                inputProps={{
                  maxLength: 6,
                  style: { textAlign: "center", letterSpacing: "0.5em" },
                }}
                required
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} style={{ width: "100%", marginTop: "10px" }}>
              <Button
                fullWidth
                className="cBtn cBtnLarge cBtnTheme" // Use your theme button classes
                type="submit"
                variant="contained" // MUI variant
                color="primary" // MUI color
                disabled={loading}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Verify OTP"
                )}
              </Button>
            </Grid>
            <Grid item xs={12} style={{ width: "100%", marginTop: "5px" }}>
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
