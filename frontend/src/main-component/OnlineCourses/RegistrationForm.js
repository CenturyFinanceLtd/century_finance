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
    // Optionally clear form data here
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    // Simple validation: check if all fields are filled
    for (const key in formData) {
      if (formData[key] === "") {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }
    setFormStep(2);
  };

  const handleFinalPayment = async () => {
    setIsLoading(true);
    try {
      // Send data to your backend to create an order
      const response = await fetch(
        "http://localhost:5000/api/register/create-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to create payment order.");

      const session = await response.json();

      // Redirect to Cashfree payment page
      window.location.href = session.payment_link;
    } catch (error) {
      alert(error.message);
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
              {/* Step 1: Registration Details */}
              {formStep === 1 && (
                <form onSubmit={handleNextStep} className="registration-form">
                  {/* All form inputs go here... */}
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
                  <div className="semester-group">
                    <label>Semester *</label>
                    <div className="radio-options">
                      {[...Array(8)].map((_, i) => (
                        <label key={i + 1}>
                          <input
                            type="radio"
                            name="semester"
                            value={i + 1}
                            onChange={handleInputChange}
                            required
                          />{" "}
                          {i + 1}
                        </label>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="next-btn">
                    Pay to Register
                  </button>
                </form>
              )}

              {/* Step 2: Payment Gateway Selection */}
              {formStep === 2 && (
                <div className="payment-step">
                  <h3>Choose Payment Method</h3>
                  <div className="gateway-option selected">
                    <span>Cashfree Payments</span>
                    <img
                      src="https://www.cashfree.com/images/press-kit/logo-variant-1.png"
                      alt="Cashfree Payments"
                    />
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
