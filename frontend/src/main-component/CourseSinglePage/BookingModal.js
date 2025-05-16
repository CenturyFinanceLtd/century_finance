// frontend/src/main-component/CourseSinglePage/TrainingProgramTabs/BookingModal.js
import React, { useState, useEffect, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useSelector } from "react-redux"; // To get auth token if needed for API calls

// Basic styling for the modal (can be moved to a SCSS file)
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: 24,
  p: { xs: 2, sm: 3, md: 4 },
  maxHeight: "90vh",
  overflowY: "auto",
};

const BookingModal = ({
  isOpen,
  onClose,
  courseName,
  planName,
  planPrice,
  currentUserData, // Expected: { fullName, email, phoneNumber, fatherName, universityOrCollege }
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    fatherName: "",
    universityOrCollege: "",
  });
  const [loading, setLoading] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState(""); // e.g., 'paypal', 'phonepe', 'razorpay'

  const { token: authToken } = useSelector((state) => state.auth); // Get auth token for API calls

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
      validators: {
        phone: {
          message: "Please enter a valid 10-digit phone number.",
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

  useEffect(() => {
    if (currentUserData) {
      setFormData({
        name: currentUserData.fullName || "",
        email: currentUserData.email || "",
        phoneNumber: currentUserData.phoneNumber || "",
        fatherName: currentUserData.fatherName || "",
        universityOrCollege: currentUserData.universityOrCollege || "",
      });
    }
  }, [currentUserData, isOpen]); // Re-populate form if currentUserData or isOpen changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validator.current.fields[e.target.name]) {
      validator.current.showMessageFor(e.target.name);
    }
  };

  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force re-render for validator messages
    setFormData((prev) => ({ ...prev }));
  };

  const handlePaymentGatewaySelection = (gateway) => {
    setPaymentGateway(gateway);
    // Here you might immediately proceed to payment or wait for a final confirm button
    toast.info(
      `Selected payment gateway: ${gateway}. Click "Pay & Book" to proceed.`
    );
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      if (!paymentGateway) {
        toast.error("Please select a payment gateway.");
        return;
      }
      setLoading(true);

      const bookingDetails = {
        courseName,
        planName,
        planPrice,
        amountToPay: planPrice,
        userName: formData.name,
        userEmail: formData.email,
        userPhoneNumber: formData.phoneNumber,
        userFatherName: formData.fatherName,
        userUniversityOrCollege: formData.universityOrCollege,
        selectedPaymentGateway: paymentGateway,
        paymentStatus: "pending", // Initial status
      };

      try {
        // API Call to save to 'pendingcoursebookings'
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/course-bookings/initiate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`, // Send auth token
            },
            body: JSON.stringify(bookingDetails),
          }
        );

        const result = await response.json();

        if (response.ok && result.status === "success") {
          toast.success("Booking initiated! Proceeding to payment...");
          // Here, you would integrate with the actual payment gateway SDK or redirect
          // For example, if Razorpay, you'd use result.data.orderId, result.data.key etc.
          console.log("Backend response for booking initiation:", result.data);

          // --- SIMULATE PAYMENT GATEWAY INTERACTION ---
          // In a real app, this would be replaced by actual payment gateway logic
          // For now, let's simulate a successful payment after a delay
          setTimeout(() => {
            // Simulate calling another backend endpoint to confirm payment
            confirmPayment(
              result.data.bookingId,
              result.data.razorpayOrderId || "simulatedPaymentId123"
            );
          }, 3000);
        } else {
          setLoading(false);
          toast.error(
            result.message || "Failed to initiate booking. Please try again."
          );
        }
      } catch (error) {
        setLoading(false);
        console.error("Booking submission error:", error);
        toast.error("An error occurred while initiating your booking.");
      }
    } else {
      validator.current.showMessages();
      toast.error("Please fill all required fields correctly.");
      setFormData((prev) => ({ ...prev })); // Force re-render
    }
  };

  // Simulate confirming payment with backend
  const confirmPayment = async (
    internalBookingId,
    paymentGatewayTransactionId
  ) => {
    // This function would be called by the payment gateway's success callback in a real app
    try {
      const paymentConfirmationResponse = await fetch(
        "https://api.centuryfinancelimited.com/api/course-bookings/confirm-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({
            internalBookingId,
            transactionId: paymentGatewayTransactionId,
            paymentStatus: "paid", // 'paid' or 'failed'
          }),
        }
      );
      const paymentResult = await paymentConfirmationResponse.json();
      setLoading(false);
      if (
        paymentConfirmationResponse.ok &&
        paymentResult.status === "success"
      ) {
        toast.success(paymentResult.message || "Course booking successful!");
        onClose(); // Close modal on success
      } else {
        toast.error(
          paymentResult.message ||
            "Payment confirmation failed. Please contact support."
        );
        // Update status to failed in backend if possible, or handle locally
      }
    } catch (error) {
      setLoading(false);
      toast.error("An error occurred during payment confirmation.");
      console.error("Payment confirmation error:", error);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="booking-modal-title"
      aria-describedby="booking-modal-description">
      <Box sx={modalStyle}>
        <Typography
          id="booking-modal-title"
          variant="h5"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", mb: 3 }}>
          Book Your Course
        </Typography>

        <Paper
          elevation={0}
          sx={{
            padding: 2,
            marginBottom: 2,
            backgroundColor: "#f9f9f9",
            borderRadius: "4px",
          }}>
          <Typography variant="h6">Course: {courseName}</Typography>
          <Typography variant="subtitle1">Plan: {planName}</Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Price: ₹{planPrice?.toLocaleString("en-IN")}
          </Typography>
        </Paper>

        <form onSubmit={handleSubmitBooking} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={(e) => touchMessageHandler(e)}
                error={
                  !!validator.current.message(
                    "name",
                    formData.name,
                    "required|alpha_space"
                  )
                }
                helperText={validator.current.message(
                  "name",
                  formData.name,
                  "required|alpha_space"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={(e) => touchMessageHandler(e)}
                error={
                  !!validator.current.message(
                    "email",
                    formData.email,
                    "required|email"
                  )
                }
                helperText={validator.current.message(
                  "email",
                  formData.email,
                  "required|email"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                type="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={(e) => touchMessageHandler(e)}
                error={
                  !!validator.current.message(
                    "phoneNumber",
                    formData.phoneNumber,
                    "required|phone"
                  )
                }
                helperText={validator.current.message(
                  "phoneNumber",
                  formData.phoneNumber,
                  "required|phone"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
                type="tel"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Father's Name"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                onBlur={(e) => touchMessageHandler(e)}
                error={
                  !!validator.current.message(
                    "fatherName",
                    formData.fatherName,
                    "required|alpha_space"
                  )
                }
                helperText={validator.current.message(
                  "fatherName",
                  formData.fatherName,
                  "required|alpha_space"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="University/College Name (Optional)"
                name="universityOrCollege"
                value={formData.universityOrCollege}
                onChange={handleChange}
                onBlur={(e) => touchMessageHandler(e)}
                error={
                  !!validator.current.message(
                    "universityOrCollege",
                    formData.universityOrCollege,
                    "alpha_space"
                  )
                }
                helperText={validator.current.message(
                  "universityOrCollege",
                  formData.universityOrCollege,
                  "alpha_space"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2, mb: 1 }}>
              <Typography variant="subtitle2" gutterBottom>
                Select Payment Gateway:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  gap: "10px",
                }}>
                <Button
                  variant={
                    paymentGateway === "paypal" ? "contained" : "outlined"
                  }
                  onClick={() => handlePaymentGatewaySelection("paypal")}
                  sx={{ flexGrow: 1 }}>
                  PayPal
                </Button>
                <Button
                  variant={
                    paymentGateway === "phonepe" ? "contained" : "outlined"
                  }
                  onClick={() => handlePaymentGatewaySelection("phonepe")}
                  sx={{ flexGrow: 1 }}>
                  PhonePe
                </Button>
                <Button
                  variant={
                    paymentGateway === "razorpay" ? "contained" : "outlined"
                  }
                  onClick={() => handlePaymentGatewaySelection("razorpay")}
                  sx={{ flexGrow: 1 }}>
                  Razorpay
                </Button>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ textAlign: "center" }}>
                * You will pay 50% (₹{(planPrice / 2).toLocaleString("en-IN")})
                now. The remaining 50% is due after course completion.
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={loading || !paymentGateway}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  `Pay ₹${(planPrice / 2).toLocaleString("en-IN")} & Book`
                )}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth onClick={onClose} sx={{ mt: 1 }}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
