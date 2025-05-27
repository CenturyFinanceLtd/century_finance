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

  // No longer need selectedGateway state if only Razorpay is an option

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

  // Renamed to handleRazorpayPayment, as it's the only option now
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
        onClick={() => {
          setIsOpen(true);
          setFormStep(1);
        }}
        className="register-now-btn">
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
                  {/* All form input fields remain the same */}
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name *"
                    required
                  />
                  {/* ... other input fields ... */}
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

              {/* SIMPLIFIED STEP 2 - ONLY RAZORPAY */}
              {formStep === 2 && (
                <div className="payment-step">
                  <h3>Proceed with Razorpay</h3>
                  <div
                    className="gateway-option selected"
                    style={{ cursor: "default" }}>
                    {" "}
                    {/* No onClick needed now */}
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
