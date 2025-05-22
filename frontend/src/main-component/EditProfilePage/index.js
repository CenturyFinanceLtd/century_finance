// frontend/src/main-component/EditProfilePage/index.js
import React, { Fragment, useState, useEffect, useRef } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";

import Header from "../../components/header/Header"; // Adjust path if needed
import PageTitle from "../../components/pagetitle/PageTitle"; // Adjust path if needed
import Footer from "../../components/footer/Footer"; // Adjust path if needed
import Scrollbar from "../../components/scrollbar/scrollbar"; // Adjust path if needed

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet";

// Assuming you have this action to update user in store after successful API call
import { loginSuccess } from "../../store/actions/authActions";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    isAuthenticated,
    user: authUser,
    token: authToken,
  } = useSelector((state) => state.auth);

  const [details, setDetails] = useState({
    fullName: "",
    phoneNumber: "",
    fatherName: "",
    universityOrCollege: "",
  });
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [loadingDetails, setLoadingDetails] = useState(false);
  const [loadingPassword, setLoadingPassword] = useState(false);

  // Initialize validators using useRef
  const detailsValidator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
      validators: {
        // Custom validator for phone number
        phone: {
          message:
            "Please enter a valid 10-digit phone number starting with 6, 7, 8, or 9.",
          rule: (val, params, validatorInstance) => {
            return (
              validatorInstance.helpers.testRegex(val, /^[6-9]\d{9}$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
      },
    })
  );
  const passwordValidator = useRef(
    new SimpleReactValidator({ className: "errorMessage" })
  );

  useEffect(() => {
    if (authUser) {
      setDetails({
        fullName: authUser.fullName || "",
        phoneNumber: authUser.phoneNumber || "",
        fatherName: authUser.fatherName || "",
        universityOrCollege: authUser.universityOrCollege || "",
      });
    }
  }, [authUser]); // Re-populate form if authUser changes (e.g., after an update)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const handleDetailsChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordDetails({ ...passwordDetails, [e.target.name]: e.target.value });
  };

  // Shows validation message when a field loses focus
  const touchMessageHandler = (e, validatorInstance) => {
    validatorInstance.current.showMessageFor(e.target.name);
    // Force re-render to show message, as validator state might not trigger it directly
    if (e.target.form.id === "detailsForm") setDetails((prev) => ({ ...prev }));
    if (e.target.form.id === "passwordForm")
      setPasswordDetails((prev) => ({ ...prev }));
  };

  const handleUpdateDetails = async (e) => {
    e.preventDefault();
    if (detailsValidator.current.allValid()) {
      setLoadingDetails(true);
      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/update-my-details",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`, // Send JWT token
            },
            body: JSON.stringify(details),
          }
        );
        const data = await response.json();
        setLoadingDetails(false);

        if (response.ok && data.status === "success") {
          toast.success("Profile details updated successfully!");
          // Update user in Redux store and localStorage
          dispatch(loginSuccess(data.data.user, authToken));
        } else {
          toast.error(data.message || "Failed to update details.");
        }
      } catch (error) {
        setLoadingDetails(false);
        toast.error("An error occurred while updating details.");
        console.error("Update details error:", error);
      }
    } else {
      detailsValidator.current.showMessages();
      toast.error("Please correct the errors in your details.");
      setDetails((prev) => ({ ...prev })); // Force re-render for validator messages
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (passwordValidator.current.allValid()) {
      setLoadingPassword(true);
      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/auth/update-my-password",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`, // Send JWT token
            },
            body: JSON.stringify({
              currentPassword: passwordDetails.currentPassword,
              newPassword: passwordDetails.newPassword,
              confirmNewPassword: passwordDetails.confirmNewPassword,
            }),
          }
        );
        const data = await response.json();
        setLoadingPassword(false);

        if (response.ok && data.status === "success") {
          toast.success(
            "Password changed successfully! Your session has been updated."
          );
          // Backend sends a new token after password change, update it in store
          dispatch(loginSuccess(data.data.user, data.token));
          setPasswordDetails({
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }); // Clear password fields
          // Optional: navigate('/some-other-page-or-stay');
        } else {
          toast.error(
            data.message ||
              "Failed to change password. Check your current password."
          );
        }
      } catch (error) {
        setLoadingPassword(false);
        toast.error("An error occurred while changing password.");
        console.error("Change password error:", error);
      }
    } else {
      passwordValidator.current.showMessages();
      toast.error("Please correct the errors in the password form.");
      setPasswordDetails((prev) => ({ ...prev })); // Force re-render for validator messages
    }
  };

  return (
    <Fragment>
      <Helmet>
              <title>Edit Account - Century Finance Limited</title>
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
      <Header /> {/* Adjust props as needed */}
      <PageTitle pageTitle={"Edit Profile"} pagesub={"My Account"} />
      <Box sx={{ padding: { xs: 2, md: 4 }, marginY: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Edit Profile Details Form */}
          <Grid item xs={12} md={8} lg={5}>
            <Paper elevation={3} sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ mb: 3, textAlign: "center" }}>
                Update Your Details
              </Typography>
              <form onSubmit={handleUpdateDetails} id="detailsForm" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      variant="outlined"
                      value={authUser?.email || ""}
                      disabled
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      name="fullName"
                      value={details.fullName}
                      onChange={handleDetailsChange}
                      onBlur={(e) => touchMessageHandler(e, detailsValidator)}
                      error={
                        !!detailsValidator.current.message(
                          "fullName",
                          details.fullName,
                          "required|alpha_space"
                        )
                      }
                      helperText={detailsValidator.current.message(
                        "fullName",
                        details.fullName,
                        "required|alpha_space"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      name="phoneNumber"
                      value={details.phoneNumber}
                      onChange={handleDetailsChange}
                      onBlur={(e) => touchMessageHandler(e, detailsValidator)}
                      error={
                        !!detailsValidator.current.message(
                          "phoneNumber",
                          details.phoneNumber,
                          "required|phone"
                        )
                      }
                      helperText={detailsValidator.current.message(
                        "phoneNumber",
                        details.phoneNumber,
                        "required|phone"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Father's Name"
                      variant="outlined"
                      name="fatherName"
                      value={details.fatherName}
                      onChange={handleDetailsChange}
                      onBlur={(e) => touchMessageHandler(e, detailsValidator)}
                      error={
                        !!detailsValidator.current.message(
                          "fatherName",
                          details.fatherName,
                          "required|alpha_space"
                        )
                      }
                      helperText={detailsValidator.current.message(
                        "fatherName",
                        details.fatherName,
                        "required|alpha_space"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="University/College Name (Optional)"
                      variant="outlined"
                      name="universityOrCollege"
                      value={details.universityOrCollege}
                      onChange={handleDetailsChange}
                      onBlur={(e) => touchMessageHandler(e, detailsValidator)}
                      error={
                        !!detailsValidator.current.message(
                          "universityOrCollege",
                          details.universityOrCollege,
                          "alpha_space"
                        )
                      }
                      helperText={detailsValidator.current.message(
                        "universityOrCollege",
                        details.universityOrCollege,
                        "alpha_space"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={loadingDetails}
                      size="large">
                      {loadingDetails ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Save Details"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Change Password Form */}
          <Grid item xs={12} md={8} lg={5}>
            <Paper elevation={3} sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ mb: 3, textAlign: "center" }}>
                Change Password
              </Typography>
              <form
                onSubmit={handleChangePassword}
                id="passwordForm"
                noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Current Password"
                      variant="outlined"
                      type="password"
                      name="currentPassword"
                      value={passwordDetails.currentPassword}
                      onChange={handlePasswordChange}
                      onBlur={(e) => touchMessageHandler(e, passwordValidator)}
                      error={
                        !!passwordValidator.current.message(
                          "currentPassword",
                          passwordDetails.currentPassword,
                          "required"
                        )
                      }
                      helperText={passwordValidator.current.message(
                        "currentPassword",
                        passwordDetails.currentPassword,
                        "required"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="New Password (min 6 characters)"
                      variant="outlined"
                      type="password"
                      name="newPassword"
                      value={passwordDetails.newPassword}
                      onChange={handlePasswordChange}
                      onBlur={(e) => touchMessageHandler(e, passwordValidator)}
                      error={
                        !!passwordValidator.current.message(
                          "newPassword",
                          passwordDetails.newPassword,
                          "required|min:6"
                        )
                      }
                      helperText={passwordValidator.current.message(
                        "newPassword",
                        passwordDetails.newPassword,
                        "required|min:6"
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Confirm New Password"
                      variant="outlined"
                      type="password"
                      name="confirmNewPassword"
                      value={passwordDetails.confirmNewPassword}
                      onChange={handlePasswordChange}
                      onBlur={(e) => touchMessageHandler(e, passwordValidator)}
                      error={
                        !!passwordValidator.current.message(
                          "confirmNewPassword",
                          passwordDetails.confirmNewPassword,
                          `required|in:${passwordDetails.newPassword}`
                        )
                      }
                      helperText={passwordValidator.current.message(
                        "confirmNewPassword",
                        passwordDetails.confirmNewPassword,
                        `required|in:${passwordDetails.newPassword}`
                      )}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={loadingPassword}
                      size="large">
                      {loadingPassword ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Change Password"
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EditProfilePage;
