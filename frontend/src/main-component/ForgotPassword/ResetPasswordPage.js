// frontend/src/main-component/ResetPasswordPage/index.js
import React, { useState, useEffect, useRef, Fragment } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SimpleReactValidator from "simple-react-validator";
import { loginSuccess } from "../../store/actions/authActions"; // To log in user after successful reset

// import './style.scss'; // Or link to your loginWrapper/loginForm styles

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [email, setEmail] = useState(location.state?.email || "");
  const [otp, setOtp] = useState(location.state?.otp || ""); // OTP received from previous step
  const [loading, setLoading] = useState(false);

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  useEffect(() => {
    if (!location.state?.email || !location.state?.otp) {
      toast.error(
        "Verification data missing. Please start the password reset process again."
      );
      navigate("/forgot-password");
    }
  }, [location.state, navigate]);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (validator.current.fields.newPassword)
      validator.current.showMessageFor("newPassword");
  };

  const handleConfirmNewPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
    if (validator.current.fields.confirmNewPassword)
      validator.current.showMessageFor("confirmNewPassword");
  };

  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    if (e.target.name === "newPassword") setNewPassword((prev) => prev + "");
    if (e.target.name === "confirmNewPassword")
      setConfirmNewPassword((prev) => prev + "");
  };

  const submitNewPasswordForm = async (e) => {
    e.preventDefault();
    const isNewPasswordValid = validator.current.check(
      newPassword,
      "required|min:6"
    );
    const isConfirmValid = validator.current.check(
      confirmNewPassword,
      `required|in:${newPassword}`
    );
    validator.current.showMessages();

    setNewPassword((prev) => prev + "");
    setConfirmNewPassword((prev) => prev + "");

    if (!isNewPasswordValid || !isConfirmValid) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://api.centuryfinancelimited.com/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            password: newPassword, // This is the newPassword
            confirmPassword: confirmNewPassword,
          }),
        }
      );

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.status === "success" && data.token) {
        toast.success(
          "Password has been reset successfully! You are now logged in."
        );
        dispatch(loginSuccess(data.data.user, data.token)); // Log the user in
        navigate("/home"); // Navigate to home or dashboard
      } else {
        toast.error(
          data.message || "Failed to reset password. Please try again."
        );
        if (
          data.message &&
          (data.message.toLowerCase().includes("invalid or expired otp") ||
            data.message.toLowerCase().includes("user not found"))
        ) {
          navigate("/forgot-password"); // If OTP is now invalid, restart flow
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Reset Password API error:", error);
      toast.error(
        "An error occurred while resetting your password. Please try again."
      );
    }
  };

  return (
    <Fragment>
      {/* <Navbar /> */}
      {/* <PageTitle pageTitle={"Set New Password"} pagesub={"Password Reset"} /> */}
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
              Set New Password
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              Enter your new password for <strong>{email}</strong>.
            </Typography>
            <Box
              component="form"
              onSubmit={submitNewPasswordForm}
              noValidate
              sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="newPassword"
                label="New Password (min 6 characters)"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={handleNewPasswordChange}
                onBlur={touchMessageHandler}
                error={
                  validator.current.message(
                    "newPassword",
                    newPassword,
                    "required|min:6"
                  )
                    ? true
                    : false
                }
                helperText={validator.current.message(
                  "newPassword",
                  newPassword,
                  "required|min:6"
                )}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmNewPassword"
                label="Confirm New Password"
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={handleConfirmNewPasswordChange}
                onBlur={touchMessageHandler}
                error={
                  validator.current.message(
                    "confirmNewPassword",
                    confirmNewPassword,
                    `required|in:${newPassword}`
                  )
                    ? true
                    : false
                }
                helperText={validator.current.message(
                  "confirmNewPassword",
                  confirmNewPassword,
                  `required|in:${newPassword}`
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
                disabled={loading}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Reset Password & Login"
                )}
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

export default ResetPasswordPage;
