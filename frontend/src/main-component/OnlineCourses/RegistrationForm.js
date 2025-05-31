import React, { useState, useEffect } from "react";
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
  const [selectedGateway, setSelectedGateway] = useState(null); // 'razorpay' or 'payu'

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsOpen(false);
    setFormStep(1);
    setIsLoading(false);
    setSelectedGateway(null);
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

  const handleProceedToPayment = () => {
    if (!selectedGateway) {
      alert("Please select a payment gateway.");
      return;
    }
    if (selectedGateway === "razorpay") {
      handleRazorpayPayment();
    } else if (selectedGateway === "payu") {
      handlePayUPayment();
    }
  };

  const handleRazorpayPayment = async () => {
    setIsLoading(true);
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-razorpay-order`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          amount: 500,
          paymentGateway: "razorpay",
        }), // Assuming amount is 500
      });

      const order = await response.json();
      if (!response.ok) {
        throw new Error(
          order.message || "Failed to create Razorpay order (backend error)"
        );
      }

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount, // Amount in paisa
        currency: order.currency,
        name: order.name || "Century Finance Limited", // Replace with your company name
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
            if (!verifyResponse.ok) {
              throw new Error(
                verificationResult.message || "Payment verification failed."
              );
            }
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
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobileNumber,
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
          "Razorpay SDK not loaded. Please check index.html and your internet connection, then hard refresh (Ctrl+Shift+R)."
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

  const handlePayUPayment = async () => {
    setIsLoading(true);
    // This endpoint on your backend will generate the hash and other necessary PayU params
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-payu-order`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send all necessary data for your backend to construct the hash
        body: JSON.stringify({
          ...formData,
          amount: "500.00", // PayU expects amount as a string with two decimal places
          productinfo: "Online Course Registration",
        }),
      });

      const payUData = await response.json();

      if (!response.ok || !payUData.hash || !payUData.txnid) {
        throw new Error(
          payUData.message ||
            "Failed to get PayU transaction details from backend."
        );
      }

      // Dynamically create and submit a form to PayU
      const form = document.createElement("form");
      form.method = "POST";
      form.action = process.env.REACT_APP_PAYU_PAYMENT_URL;

      const params = {
        key: process.env.REACT_APP_PAYU_KEY,
        txnid: payUData.txnid, // Transaction ID from your backend
        amount: payUData.amount, // Amount from your backend (should match what hash was made with)
        productinfo: payUData.productinfo, // Product Info from your backend
        firstname: formData.fullName.split(" ")[0] || "N/A",
        email: formData.email,
        phone: formData.mobileNumber,
        surl: process.env.REACT_APP_PAYU_SURL, // Your backend success URL
        furl: process.env.REACT_APP_PAYU_FURL, // Your backend failure URL
        hash: payUData.hash, // Generated hash from your backend
        // Optional parameters (add as needed, ensure they are part of hash calculation if mandatory)
        // lastname: formData.fullName.split(" ").slice(1).join(" ") || "",
        // address1: formData.address,
        // city: formData.city,
        // state: formData.state,
        // country: "India", // Or determine dynamically
        // zipcode: formData.pinCode,
        // service_provider: 'payu_paisa', // Usually not needed if you have only one PG type with PayU
      };

      console.log("Parameters being sent to PayU:", params); // Add this line

      for (const key in params) {
        if (params[key]) {
          // Add only if value exists
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = params[key];
          form.appendChild(input);
        }
      }
      document.body.appendChild(form);
      form.submit();
      // User will be redirected to PayU. setIsLoading(false) might not be hit if redirect is too fast.
      // Consider handling loading state on the page redirected to by surl/furl.
    } catch (error) {
      alert(`PayU Initiation Error: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setFormStep(1);
          setSelectedGateway(null); // Reset gateway selection when opening modal
        }}
        className="register-now-btn">
        Register Now for Rs.500
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
                  {/* --- Your existing form inputs --- */}
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
                      {" "}
                      Select a Semester...{" "}
                    </option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {" "}
                        Semester {i + 1}{" "}
                      </option>
                    ))}
                  </select>
                  {/* --- End of existing form inputs --- */}
                  <button type="submit" className="next-btn">
                    {" "}
                    Proceed to Payment{" "}
                  </button>
                </form>
              )}

              {formStep === 2 && (
                <div className="payment-step">
                  <h3>Select Payment Gateway</h3>
                  {/* Razorpay Option */}
                  <div
                    className={`gateway-option ${
                      selectedGateway === "razorpay" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedGateway("razorpay")}>
                    <div className="gateway-info">
                      {/* You might want a proper Razorpay logo SVG here */}
                      <svg
                        className="gateway-icon"
                        viewBox="0 0 280 280"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M139.996 279.992C217.319 279.992 279.992 217.319 279.992 139.996C279.992 62.6727 217.319 0 139.996 0C62.6727 0 0 62.6727 0 139.996C0 217.319 62.6727 279.992 139.996 279.992Z"
                          fill="#3A85FF"
                        />
                        <path
                          d="M117.736 80.2607L140.003 123.969L162.269 80.2607H191.03L152.365 148.366L191.03 216.471H162.269L140.003 172.763L117.736 216.471H88.9745L127.64 148.366L88.9745 80.2607H117.736Z"
                          fill="white"
                        />
                      </svg>
                      <span>Razorpay</span>
                    </div>
                    <span className="gateway-note">Cards, UPI, Wallets</span>
                  </div>

                  {/* PayU Option */}
                  <div
                    className={`gateway-option ${
                      selectedGateway === "payu" ? "selected" : ""
                    }`}
                    onClick={() => setSelectedGateway("payu")}>
                    <div className="gateway-info">
                      {/* You might want a proper PayU logo SVG here */}
                      <svg
                        className="gateway-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                        fill="#F9A825">
                        <path d="M32,2C15.432,2,2,15.432,2,32s13.432,30,30,30s30-13.432,30-30S48.568,2,32,2z M42.889,36.854 c-1.053,2.941-3.158,5.031-6.316,6.277c-3.158,1.247-6.658,1.247-9.816,0c-3.158-1.247-5.263-3.336-6.316-6.277 c-1.053-2.941-0.789-6.277,0.789-8.979c1.579-2.702,4.01-4.616,7.094-5.733c0.947-0.33,1.926-0.54,2.906-0.635v-4.932h5.263v4.838 c2.926,0.316,5.452,1.895,7.094,4.522C43.678,30.578,43.942,33.913,42.889,36.854z" />
                        <path
                          d="M34.632,25.181c-0.947-1.579-2.527-2.632-4.421-2.632c-1.895,0-3.474,1.053-4.421,2.632 c-0.947,1.579-1.053,3.552-0.316,5.263c0.737,1.71,2.105,3.015,3.989,3.573v3.573h1.579v-3.573 c1.884-0.557,3.252-1.862,3.989-3.573C35.685,28.733,35.579,26.76,34.632,25.181z"
                          fill="#FFFFFF"
                        />
                      </svg>
                      <span>PayU Money</span>
                    </div>
                    <span className="gateway-note">
                      Cards, NetBanking, UPI, Wallets
                    </span>
                  </div>

                  <button
                    onClick={handleProceedToPayment}
                    className="pay-btn"
                    disabled={isLoading || !selectedGateway}>
                    {isLoading
                      ? "Processing..."
                      : `Pay ₹500 with ${
                          selectedGateway === "razorpay"
                            ? "Razorpay"
                            : selectedGateway === "payu"
                            ? "PayU"
                            : "..."
                        }`}
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
