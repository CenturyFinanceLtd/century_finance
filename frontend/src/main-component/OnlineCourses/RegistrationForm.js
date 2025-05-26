import React, { useState } from "react";
import "./RegistrationForm.css";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setIsOpen(false);
    setFormStep(1);
    setIsLoading(false);
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

  // --- THIS IS THE FULLY REVISED PAYMENT FUNCTION WITH DETAILED ALERTS ---
  const handleFinalPayment = async () => {
    alert("Step 1: Payment process started."); // First alert

    setIsLoading(true);
    const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/api/register/create-order`;

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResult = await response.json().catch(() => ({}));
        throw new Error(
          errorResult.message || "Failed to create payment order."
        );
      }

      const session = await response.json();
      alert(
        "Step 2: Received response from backend. Checking for session ID..."
      );
      console.log("Backend Response for SDK:", session); // Keep this for debugging

      if (session.payment_session_id) {
        alert(
          `Step 3: Found payment_session_id: ${session.payment_session_id}`
        );

        if (window.Cashfree) {
          alert("Step 4: Cashfree SDK is loaded. Initializing checkout...");
          const cashfree = new window.Cashfree(session.payment_session_id);

          cashfree
            .checkout({
              paymentStyle: "popup", // Changed back to popup as per our previous successful test.
              // If "popup" fails, try "redirect" again.
            })
            .then((result) => {
              if (result.error) {
                // This will show a specific error from Cashfree
                alert(`Cashfree SDK Error: ${result.error.message}`);
                setIsLoading(false);
              }
              if (result.redirect) {
                // This case is for non-popup checkouts where Cashfree asks to redirect
                console.log(
                  "Cashfree SDK wants to redirect. This is usually handled automatically if style is 'redirect'."
                );
                // For popup style, this block might not be directly relevant unless an error forces a redirect.
              }
              // If result.success, the payment was successful but webhook is primary confirmation.
              // You might want to reset the form or close the modal here on success from SDK,
              // but await backend webhook confirmation for actual fulfillment.
            })
            .catch((sdkError) => {
              // Catch errors from the .then() block or the checkout promise itself
              alert(`Cashfree SDK Checkout Promise Error: ${sdkError.message}`);
              setIsLoading(false);
            });

          // Note: setIsLoading(false) was moved inside .then() and .catch()
          // because checkout might be asynchronous. If the popup simply closes
          // without an error or success, we might need to adjust this.
        } else {
          throw new Error(
            "Cashfree SDK (window.Cashfree) not found. Check public/index.html."
          );
        }
      } else {
        throw new Error(
          "Payment Session ID was NOT found in the backend response."
        );
      }
    } catch (error) {
      alert(`Application Error: ${error.message}`);
      setIsLoading(false);
    }
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
                  <div className="gateway-option selected">
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
                  <button
                    onClick={handleFinalPayment}
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
