import React, { useState } from "react";
import "./PopupForm.css";
import qrImage from "../../images/icon/new1.png"; // Make sure to add your QR image here

const PopupForm = ({ isOpen, onClose }) => {
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
    degree: "",
    fieldSpecialization: "",
    semester: "",
    transactionId: "",
    screenshot: null,
  });
    
  const degreeOptions = [
    "BE/B.Tech",
    "BCA",
    "BSc",
    "BBA",
    "M.Tech",
    "MCA",
    "MSc",
    "MBA",
    "BA.LLB",
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "screenshot") {
      setFormData({ ...formData, screenshot: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    for (let key in formData) payload.append(key, formData[key]);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: payload,
      });

      if (res.ok) {
        alert("Form submitted successfully!");
        onClose();
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      console.error(err);
      alert("Error during submission.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-form-overlay">
      <div className="popup-form-container">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h2>Online Course Registration</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <input
            name="fullName"
            placeholder="Full Name *"
            required
            onChange={handleChange}
          />
          <input
            name="mobileNumber"
            placeholder="Mobile Number *"
            required
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email ID *"
            required
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address *"
            required
            onChange={handleChange}></textarea>
          <input
            name="pinCode"
            placeholder="PIN Code *"
            required
            onChange={handleChange}
          />
          <input
            name="state"
            placeholder="State *"
            required
            onChange={handleChange}
          />
          <input
            name="city"
            placeholder="City *"
            required
            onChange={handleChange}
          />
          <input
            name="fatherName"
            placeholder="Father's Name *"
            required
            onChange={handleChange}
          />
          <input
            name="collegeName"
            placeholder="College Name *"
            required
            onChange={handleChange}
          />
          <select name="degree" required>
            <option value="">Select Degree *</option>
            {degreeOptions.map((degree, index) => (
              <option key={index} value={degree}>
                {degree}
              </option>
            ))}
          </select>
          <input
            name="fieldSpecialization"
            placeholder="Field & Specialization (e.g., CSE) *"
            required
            onChange={handleChange}
          />
          <select name="semester" required onChange={handleChange}>
            <option value="">Select a Semester</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>

          {/* QR Payment Section */}
          <div className="qr-section">
            <img src={qrImage} alt="QR Code for Payment" />
            <span>Scan the QR Code above to pay ₹500 + 18% GST</span>
          </div>

          <input
            name="transactionId"
            placeholder="Transaction ID *"
            required
            onChange={handleChange}
          />
          <input
            type="file"
            name="screenshot"
            accept="image/*"
            required
            onChange={handleChange}
          />
          <button type="submit" className="next-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
