// frontend/src/main-component/CourseSinglePage/TrainingProgramTabs/BookingModal.js
import React, { useState, useEffect, useRef } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { useSelector } from "react-redux";

// Define your LIVE API base URL
const API_BASE_URL = "https://api.centuryfinancelimited.com/api"; // UPDATED to live URL

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
  currentUserData,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    universityOrCollege: "",
  });
  const [loading, setLoading] = useState(false);
  const [paymentGateway, setPaymentGateway] = useState("");

  const { token: authToken } = useSelector((state) => state.auth);

  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage",
      validators: {
        phone: {
          message: "Please enter a valid 10-digit Indian phone number.",
          rule: (val, params, validatorInstance) =>
            validatorInstance.helpers.testRegex(val, /^[6-9]\d{9}$/i) &&
            params.indexOf(val) === -1,
        },
      },
    })
  );

  useEffect(() => {
    if (isOpen) {
      if (currentUserData) {
        setFormData({
          name: currentUserData.fullName || "",
          email: currentUserData.email || "",
          phoneNumber: currentUserData.phoneNumber || "",
          universityOrCollege: currentUserData.universityOrCollege || "",
        });
      }
      validator.current.hideMessages();
    } else {
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        universityOrCollege: "",
      });
      setPaymentGateway("");
      setLoading(false);
      validator.current.hideMessages();
    }
  }, [currentUserData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validator.current.fields[name]) {
      validator.current.showMessageFor(name);
    }
  };

  const touchMessageHandler = (e) => {
    const { name } = e.target;
    if (validator.current.fields[name] || !validator.current.fieldValid(name)) {
      validator.current.showMessageFor(name);
      setFormData((prev) => ({ ...prev }));
    }
  };

  const handlePaymentGatewaySelection = (gateway) => {
    setPaymentGateway(gateway);
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
        amountToPay: planPrice, // Full amount
        userName: formData.name,
        userEmail: formData.email,
        userPhoneNumber: formData.phoneNumber,
        userUniversityOrCollege: formData.universityOrCollege,
        selectedPaymentGateway: paymentGateway,
        paymentStatus: "pending",
        bookingDate: new Date().toISOString(),
      };

      try {
        const response = await fetch(
          `${API_BASE_URL}/course-bookings/initiate`, // Uses the live API_BASE_URL
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(bookingDetails),
          }
        );

        if (!response.ok) {
          const errorResult = await response
            .json()
            .catch(() => ({
              message: response.statusText || "Failed to initiate booking.",
            }));
          console.error(
            "Booking initiation failed:",
            response.status,
            errorResult
          );
          toast.error(errorResult.message || `Error: ${response.status}`);
          setLoading(false);
          return;
        }

        const result = await response.json();

        if (result.status === "success" && result.data) {
          toast.success("Booking initiated! Processing payment...");
          console.log("Backend response for booking initiation:", result.data);

          if (result.data.gateway === "paypal") {
            console.log(
              "PayPal selected. Frontend SDK integration needed here to use Order ID:",
              result.data.gatewayOrderId
            );
            // TODO: Implement PayPal JS SDK integration here
            // Example: window.paypal.Buttons({ createOrder: () => result.data.gatewayOrderId, onApprove: (data, actions) => { ... } }).render('#paypal-button-container');
            // For now, simulating confirmation:
            setTimeout(() => {
              confirmPayment(
                result.data.bookingId,
                "paypal",
                result.data.gatewayOrderId,
                `simulatedPayPalTransaction_${Date.now()}`
              );
            }, 3000);
          } else if (
            result.data.gateway === "razorpay" &&
            result.data.razorpayKeyId
          ) {
            console.log(
              "Razorpay selected. Frontend SDK integration needed here."
            );
            toast.info(
              "Razorpay is selected but currently disabled in this example flow."
            );
            setLoading(false);
          } else if (
            result.data.message &&
            (result.data.message.includes("not implemented") ||
              result.data.message.includes("disabled") ||
              result.data.message.includes("unavailable"))
          ) {
            toast.info(result.data.message);
            setLoading(false);
          } else {
            toast.warn(
              "Payment gateway not fully supported on frontend yet or unexpected response."
            );
            setLoading(false);
          }
        } else {
          setLoading(false);
          toast.error(
            result.message || "Failed to initiate booking. Please try again."
          );
        }
      } catch (error) {
        setLoading(false);
        console.error("Booking submission error (catch block):", error);
        toast.error(
          "An error occurred while initiating your booking. Please check your connection."
        );
      }
    } else {
      validator.current.showMessages();
      toast.error("Please fill all required fields correctly.");
      setFormData((prev) => ({ ...prev }));
    }
  };

  const confirmPayment = async (
    internalBookingId,
    gatewayIdentifier,
    paypalOrderID,
    paypalTransactionID,
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature
  ) => {
    setLoading(true);
    try {
      const payload = {
        internalBookingId,
        gateway: gatewayIdentifier,
        paypalOrderID,
        paypalTransactionID,
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      };

      const paymentConfirmationResponse = await fetch(
        `${API_BASE_URL}/course-bookings/confirm-payment`, // Uses the live API_BASE_URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!paymentConfirmationResponse.ok) {
        const errorResult = await paymentConfirmationResponse
          .json()
          .catch(() => ({
            message:
              paymentConfirmationResponse.statusText ||
              "Payment confirmation request failed.",
          }));
        toast.error(
          errorResult.message || `Error: ${paymentConfirmationResponse.status}`
        );
        setLoading(false);
        return;
      }

      const paymentResult = await paymentConfirmationResponse.json();
      setLoading(false);

      if (paymentResult.status === "success") {
        toast.success(paymentResult.message || "Course booking successful!");
        onClose();
      } else {
        toast.error(
          paymentResult.message ||
            "Payment confirmation failed. Please contact support."
        );
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        "An error occurred during payment confirmation. Please contact support."
      );
      console.error("Payment confirmation error (catch block):", error);
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
          sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}>
          Book Your Course
        </Typography>

        <Paper
          elevation={0}
          sx={{
            padding: { xs: 1.5, sm: 2 },
            marginBottom: 3,
            backgroundColor: "grey.100",
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "grey.300",
          }}>
          <Typography variant="h6" gutterBottom>
            Course: {courseName}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Plan: {planName}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "primary.main" }}>
            Total Price: ₹{planPrice?.toLocaleString("en-IN")}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "success.main", fontWeight: "medium" }}>
            Amount Payable: ₹{planPrice?.toLocaleString("en-IN")} (Full Amount)
          </Typography>
        </Paper>

        <form onSubmit={handleSubmitBooking} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={touchMessageHandler}
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
                required
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={touchMessageHandler}
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                onBlur={touchMessageHandler}
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="University/College Name"
                name="universityOrCollege"
                value={formData.universityOrCollege}
                onChange={handleChange}
                onBlur={touchMessageHandler}
                error={
                  !!validator.current.message(
                    "universityOrCollege",
                    formData.universityOrCollege,
                    "required|alpha_space"
                  )
                }
                helperText={validator.current.message(
                  "universityOrCollege",
                  formData.universityOrCollege,
                  "required|alpha_space"
                )}
                variant="outlined"
                margin="dense"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2, mb: 1 }}>
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ fontWeight: "medium" }}>
                Select Payment Gateway:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexWrap: "wrap",
                  gap: "10px",
                }}>
                {["PayPal", "PhonePe", "Razorpay"].map((gateway) => (
                  <Button
                    key={gateway}
                    variant={
                      paymentGateway === gateway.toLowerCase()
                        ? "contained"
                        : "outlined"
                    }
                    onClick={() =>
                      handlePaymentGatewaySelection(gateway.toLowerCase())
                    }
                    sx={{ flexGrow: 1, minWidth: "100px" }}
                    color="secondary">
                    {gateway}
                  </Button>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} sx={{ mt: 1 }}>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ textAlign: "center", color: "text.secondary" }}>
                * You will be charged the full amount for the selected plan.
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={
                  loading || !paymentGateway || !validator.current.allValid()
                }
                sx={{ py: 1.5, fontWeight: "bold" }}>
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  `Pay ₹${planPrice?.toLocaleString("en-IN")} & Book`
                )}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                onClick={onClose}
                sx={{ mt: 1 }}
                variant="outlined"
                color="inherit">
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
