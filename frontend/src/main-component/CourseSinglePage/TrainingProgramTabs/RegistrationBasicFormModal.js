import React, { useState, useEffect } from "react";
import axios from "axios";
import qrCodeImage from "../../../images/about/shape.png"; // Make sure this path is correct

// Reusable CSS for the modal
const styles = {
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalContent: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "800px",
    maxHeight: "90vh",
    overflowY: "auto",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "15px",
    right: "15px",
    background: "transparent",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    lineHeight: 1,
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  fullWidth: {
    gridColumn: "1 / -1",
  },
  paymentSection: {
    gridColumn: "1 / -1",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    background: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  qrCode: {
    flex: 1,
    textAlign: "center",
    minWidth: "200px",
  },
  paymentDetails: {
    flex: 2,
    minWidth: "250px",
  },
};

const RegistrationFormModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    universityName: "",
    email: "",
    mobileNumber: "",
    degree: "",
    year: "",
    branch: "",
    address: "",
    planName: "Basic Plan",
    // 👇 CHANGE #1: Add transactionId to the state
    transactionId: "",
  });

  const [screenshot, setScreenshot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setScreenshot(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!screenshot) {
      setError("Please upload the transaction screenshot.");
      return;
    }
    setIsLoading(true);
    setError("");

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });
    submissionData.append("transactionScreenshot", screenshot);

    try {
      await axios.post("http://localhost:5001/api/register", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Registration Successful! We will get in touch with you shortly.");
      onClose();
      // Reset form state
      setFormData({
        name: "",
        universityName: "",
        email: "",
        mobileNumber: "",
        degree: "",
        year: "",
        branch: "",
        address: "",
        planName: "Basic Plan",
        transactionId: "",
      });
      setScreenshot(null);
    } catch (err) {
      setError(
        err.response?.data?.message || "Submission failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!show) {
    return null;
  }

  const baseAmount = 45000;
  const gstRate = 0.18;
  const totalAmount = baseAmount * (1 + gstRate);

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className="mb-4 text-center">Training Program Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGrid}>
            {/* All other form fields remain the same */}
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>University/College Name</label>
              <input
                type="text"
                className="form-control"
                name="universityName"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                className="form-control"
                name="mobileNumber"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Degree</label>
              <select
                className="form-control"
                name="degree"
                onChange={handleInputChange}
                required>
                <option value="">-- Select Degree --</option>
                <option value="BE/B-Tech">BE/B-Tech</option>
                <option value="BSc">BSc</option>
                <option value="BCA">BCA</option>
                <option value="BA">BA</option>
                <option value="BBA">BBA</option>
                <option value="BA-LLB">BA-LLB</option>
                <option value="M-Tech">M-Tech</option>
                <option value="MSc">MSc</option>
                <option value="MCA">MCA</option>
                <option value="MBA">MBA</option>
              </select>
            </div>
            <div className="form-group">
              <label>Year of Study</label>
              <select
                className="form-control"
                name="year"
                onChange={handleInputChange}
                required>
                <option value="">-- Select Year --</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year (for integrated courses)</option>
              </select>
            </div>
            <div className="form-group" style={styles.fullWidth}>
              <label>Branch / Specialization</label>
              <input
                type="text"
                className="form-control"
                name="branch"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group" style={styles.fullWidth}>
              <label>Full Address</label>
              <textarea
                className="form-control"
                name="address"
                rows="3"
                onChange={handleInputChange}
                required></textarea>
            </div>

            {/* Payment Section */}
            <div style={styles.paymentSection}>
              <div style={styles.paymentDetails}>
                <h5>Payment Details</h5>
                <p className="mb-1">
                  <strong>Plan Name:</strong> {formData.planName}
                </p>
                <p className="mb-1">
                  <strong>Amount:</strong> ₹45,000 + 18% GST
                </p>
                <h4 className="mb-3">
                  <strong>
                    Total Payable: ₹{totalAmount.toLocaleString("en-IN")}
                  </strong>
                </h4>
                <p>
                  Scan the QR code, then enter the Transaction ID and upload the
                  screenshot below.
                </p>

                {/* 👇 CHANGE #2: ADD THE TRANSACTION ID FIELD HERE */}
                <div className="form-group mt-3">
                  <label htmlFor="transactionId">
                    <strong>Enter Transaction ID / UTR</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="transactionId"
                    name="transactionId"
                    onChange={handleInputChange}
                    placeholder="e.g., T123456789"
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="transactionScreenshot">
                    <strong>Upload Transaction Screenshot</strong>
                  </label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="transactionScreenshot"
                    name="transactionScreenshot"
                    accept="image/*"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <div style={styles.qrCode}>
                <img
                  src={qrCodeImage}
                  alt="Payment QR Code"
                  style={{ maxWidth: "200px", border: "1px solid #ccc" }}
                />
              </div>
            </div>
          </div>

          {error && <div className="alert alert-danger mt-3">{error}</div>}

          <div className="text-center mt-4">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={isLoading}
              style={{ padding: "12px 30px", fontSize: "1.1rem" }}>
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormModal;
