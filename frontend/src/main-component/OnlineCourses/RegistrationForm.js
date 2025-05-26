import React, { useState } from "react";
import "./RegistrationForm.css"; // Make sure this CSS file exists and is correctly styled

const RegistrationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
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

  // NEW STATE for selecting the payment gateway
  const [selectedGateway, setSelectedGateway] = useState("cashfree"); // Default to cashfree

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsOpen(false);
    setFormStep(1);
    setIsLoading(false);
    // Optionally reset formData if you want the form cleared when reopened
    // setFormData({ fullName: "", mobileNumber: "", ...etc... });
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

  // --- PAYMENT HANDLING FUNCTIONS ---

  const handleInitiatePayment = () => {
    if (selectedGateway === "razorpay") {
      handleRazorpayPayment();
    } else {
      // Default to Cashfree if 'cashfree' is selected or if something is wrong
      handleCashfreePayment();
    }
  };

  const handleCashfreePayment = async () => {
    setIsLoading(true);
    // Ensure your .env file in the frontend has REACT_APP_API_URL defined
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-order`; // This is your Cashfree order endpoint

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, paymentGateway: "cashfree" }), // Send gateway type
      });

      if (!response.ok) {
        const errorResult = await response.json().catch(() => ({})); // Try to parse error, default if fails
        throw new Error(
          errorResult.message || "Failed to create Cashfree payment order."
        );
      }

      const session = await response.json();
      console.log("Cashfree Backend Response:", session);

      if (session.payment_session_id) {
        if (window.Cashfree) {
          const cashfree = new window.Cashfree(session.payment_session_id);
          cashfree
            .checkout({
              paymentStyle: "popup", // Or "redirect" if you prefer
            })
            .then((result) => {
              if (result.error) {
                alert(`Cashfree SDK Error: ${result.error.message}`);
              }
              // If successful, the user is redirected by Cashfree (for redirect style)
              // or the popup closes. The webhook will confirm the payment.
              // You might want to resetForm() here or show a pending message.
              setIsLoading(false);
            })
            .catch((sdkError) => {
              alert(`Cashfree SDK Promise Error: ${sdkError.message}`);
              setIsLoading(false);
            });
        } else {
          throw new Error(
            "Cashfree SDK (window.Cashfree) not found. Check public/index.html."
          );
        }
      } else {
        throw new Error(
          "Cashfree Payment Session ID was NOT found in the backend response."
        );
      }
    } catch (error) {
      alert(`Application Error: ${error.message}`);
      setIsLoading(false);
    }
  };

  const handleRazorpayPayment = async () => {
    setIsLoading(true);
    // Ensure your .env file in the frontend has REACT_APP_API_URL defined
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-razorpay-order`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, paymentGateway: "razorpay" }), // Send gateway type
      });

      const order = await response.json();
      if (!response.ok)
        throw new Error(order.message || "Failed to create Razorpay order");

      console.log("Razorpay Backend Response:", order);

      // Ensure your .env file in the frontend has REACT_APP_RAZORPAY_KEY_ID
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount, // Amount is in currency subunits. Paisa for INR.
        currency: order.currency,
        name: order.name || "Century Finance Limited", // Your company name
        description: order.description || "Online Course Registration",
        order_id: order.order_id, // From the backend
        handler: async function (rzpResponse) {
          // This function runs after successful Razorpay payment
          // Now, verify the payment on your backend
          try {
            setIsLoading(true); // Show loading for verification
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
            resetForm(); // Reset form and close modal
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
            setIsLoading(false); // Reset loading if user closes the Razorpay modal
          },
        },
      };

      const rzpay = new window.Razorpay(options);
      rzpay.on("payment.failed", function (response) {
        alert(
          "Razorpay Payment Failed: " +
            response.error.description +
            (response.error.reason ? ` (Reason: ${response.error.reason})` : "")
        );
        setIsLoading(false);
      });
      rzpay.open();
    } catch (error) {
      alert(`Razorpay Error: ${error.message}`);
      setIsLoading(false); // Ensure loading is reset on initial error
    }
    // Note: setIsLoading(false) is also handled by modal.ondismiss or payment.failed for Razorpay
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="register-now-btn">
        Register Now
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
                  <h3>Choose Payment Method</h3>

                  {/* Cashfree Option */}
                  <div
                    className={`gateway-option ${
                      selectedGateway === "cashfree" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedGateway("cashfree")}>
                    <div className="gateway-info">
                      <svg
                        className="gateway-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
                      </svg>
                      <span>Cashfree Payments</span>
                    </div>
                    <span className="gateway-note">Secure Gateway</span>
                  </div>

                  {/* Razorpay Option */}
                  <div
                    className={`gateway-option ${
                      selectedGateway === "razorpay" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedGateway("razorpay")}>
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
                    onClick={handleInitiatePayment}
                    className="pay-btn"
                    disabled={isLoading}>
                    {isLoading ? "Processing..." : "Pay ₹500"}
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
