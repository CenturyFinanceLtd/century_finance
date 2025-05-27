import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirecting to /login
import "./RegistrationForm.css"; // Make sure this CSS file exists and is correctly styled

const RegistrationForm = () => {
  const navigate = useNavigate(); // Initialize navigate for redirection
  const [isOpen, setIsOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // For payment processing
  const [isCheckingAuth, setIsCheckingAuth] = useState(false); // For the backend auth check
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    address: "",
    pinCode: "",
    state: "",
    city: "",
    fatherName: "",
    collegeName: "",
    semester: "",
    degree: "",
    fieldSpecialization: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsOpen(false);
    setFormStep(1);
    setIsLoading(false);
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      address: "",
      pinCode: "",
      state: "",
      city: "",
      fatherName: "",
      collegeName: "",
      semester: "",
      degree: "",
      fieldSpecialization: "",
    });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key] === "") {
        const fieldName = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase());
        alert(`Please fill out the ${fieldName} field.`);
        return;
      }
    }
    setFormStep(2);
  };

  // THIS FUNCTION NOW CHECKS LOGIN STATUS WITH THE BACKEND
  const handleOpenForm = async () => {
    setIsCheckingAuth(true); // Show loading state for the button
    try {
      // Ensure REACT_APP_API_URL is correctly set in your .env file
      const authCheckEndpoint = `${process.env.REACT_APP_API_URL}/api/auth/check-status`;

      // Prepare fetch options. Include credentials if using cookies.
      // Add Authorization header if using Bearer tokens.
      const fetchOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Example: If you use Bearer tokens stored in localStorage:
          // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        // Example: If your backend uses HttpOnly cookies for auth, you might need this:
        // credentials: 'include',
      };

      const response = await fetch(authCheckEndpoint, fetchOptions);

      if (!response.ok) {
        // If server responds with an error (e.g., 500 for server issue, 401 if middleware wasn't optional and token invalid)
        // Treat as not logged in or an error occurred.
        console.error(
          "Auth check API call failed with status:",
          response.status
        );
        alert(
          "Could not verify your login status at this time. Please try logging in again."
        );
        navigate("/login"); // Redirect to login
        return;
      }

      const authData = await response.json();

      if (authData.isLoggedIn) {
        console.log("User is logged in. Opening form.");
        setIsOpen(true);
        setFormStep(1);
      } else {
        console.log("User is not logged in. Redirecting to login.");
        alert(
          "You need to be logged in to register for a course. Redirecting to login page..."
        );
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during authentication check:", error);
      alert(
        "An error occurred while checking your login status. Please ensure you are connected and try again, or log in."
      );
      // Optionally redirect to login here too, or show a more generic error.
      // navigate("/login");
    } finally {
      setIsCheckingAuth(false); // Hide loading state for the button
    }
  };

  // Razorpay payment handler (remains the same)
  const handleRazorpayPayment = async () => {
    setIsLoading(true);
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-razorpay-order`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, paymentGateway: "razorpay" }),
      });

      const order = await response.json();
      if (!response.ok)
        throw new Error(order.message || "Failed to create Razorpay order");

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: order.name || "Century Finance Limited",
        description: order.description || "Online Course Registration",
        order_id: order.order_id,
        handler: async function (rzpResponse) {
          try {
            setIsLoading(true);
            const verifyResponse = await fetch(
              `${process.env.REACT_APP_API_URL}/api/register/verify-razorpay-payment`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  razorpay_order_id: rzpResponse.razorpay_order_id,
                  razorpay_payment_id: rzpResponse.razorpay_payment_id,
                  razorpay_signature: rzpResponse.razorpay_signature,
                }),
              }
            );

            const verificationResult = await verifyResponse.json();
            if (!verifyResponse.ok)
              throw new Error(
                verificationResult.message || "Payment verification failed."
              );

            alert(
              "Payment Successful & Verified! Payment ID: " +
                rzpResponse.razorpay_payment_id
            );
            resetForm();
          } catch (verifyError) {
            alert(`Payment Verification Error: ${verifyError.message}`);
          } finally {
            setIsLoading(false);
          }
        },
        prefill: {
          name: order.prefill_name || formData.fullName,
          email: order.prefill_email || formData.email,
          contact: order.prefill_contact || formData.mobileNumber,
        },
        notes: {
          address: formData.address,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      if (!window.Razorpay) {
        alert(
          "Razorpay SDK not loaded. Please check index.html and your internet connection."
        );
        setIsLoading(false);
        return;
      }
      const rzpay = new window.Razorpay(options);
      rzpay.on("payment.failed", function (paymentResponse) {
        alert(
          "Razorpay Payment Failed: " +
            paymentResponse.error.description +
            (paymentResponse.error.reason
              ? ` (Reason: ${paymentResponse.error.reason})`
              : "")
        );
        setIsLoading(false);
      });
      rzpay.open();
    } catch (error) {
      alert(`Razorpay Initiation Error: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpenForm} // This now calls the function with the backend check
        className="register-now-btn"
        disabled={isCheckingAuth} // Button is disabled during the auth check
      >
        {isCheckingAuth ? "Checking Status..." : "Register Now for Rs.500"}
      </button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h2>Online Course Registration</h2>
              <button onClick={resetForm} className="close-btn">
                &times;
              </button>
            </div>
            <div className="modal-body">
              {formStep === 1 && (
                <form onSubmit={handleNextStep} className="registration-form">
                  {/* All your input fields for Step 1 */}
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                  />
                  <input
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="Mobile Number *"
                    required
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email ID *"
                    type="email"
                    required
                  />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address *"
                    required></textarea>
                  <input
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleInputChange}
                    placeholder="PIN Code *"
                    required
                  />
                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="State *"
                    required
                  />
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City *"
                    required
                  />
                  <input
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Father's Name *"
                    required
                  />
                  <input
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    placeholder="College Name *"
                    required
                  />
                  <input
                    name="degree"
                    value={formData.degree}
                    onChange={handleInputChange}
                    placeholder="Degree (e.g., B.Tech) *"
                    required
                  />
                  <input
                    name="fieldSpecialization"
                    value={formData.fieldSpecialization}
                    onChange={handleInputChange}
                    placeholder="Field & Specialization (e.g., CSE) *"
                    required
                  />
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    required
                    className="form-input">
                    <option value="" disabled>
                      Select a Semester...
                    </option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        Semester {i + 1}
                      </option>
                    ))}
                  </select>
                  <button type="submit" className="next-btn">
                    Pay to Register
                  </button>
                </form>
              )}

              {formStep === 2 && (
                <div className="payment-step">
                  <h3>Proceed with Razorpay</h3>
                  <div
                    className="gateway-option selected"
                    style={{ cursor: "default" }}>
                    <div className="gateway-info">
                      <svg
                        className="gateway-icon"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor">
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-80-216h160v32H176v-32zm0-64h160v32H176v-32z" />
                      </svg>
                      <span>Razorpay</span>
                    </div>
                    <span className="gateway-note">Cards, UPI, Wallets</span>
                  </div>
                  <button
                    onClick={handleRazorpayPayment}
                    className="pay-btn"
                    disabled={isLoading}>
                    {isLoading ? "Processing..." : "Pay ₹500 with Razorpay"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegistrationForm;
