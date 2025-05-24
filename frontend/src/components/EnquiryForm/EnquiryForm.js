import React, { useState, useEffect } from "react";
import "./EnquiryForm.css"; // Make sure this CSS file is in the same directory

const EnquiryForm = () => {
  // State for controlling the modal visibility
  const [isFormOpen, setIsFormOpen] = useState(false);

  // State for form fields, using a single object
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  // State to track the form submission process
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState("");

  const courses = [
    "Select a Course",
    "Training Program",
    "Call SUbscription",
    "Online Course",
    "Portfolio",
    "Investment",
    "Finance",
  ];

  // Reset all states when the modal is closed
  const resetComponentState = () => {
    setIsFormOpen(false);
    setSubmissionStatus("idle");
    setSubmissionMessage("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    });
  };

  // Effect to handle 'Escape' key press for closing the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        resetComponentState();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Universal input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleForm = () => {
    if (isFormOpen) {
      resetComponentState();
    } else {
      setIsFormOpen(true);
    }
  };

  // The new handleSubmit function with backend logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    setSubmissionMessage("Submitting your enquiry... Please wait.");

    try {
      const API_ENDPOINT =
        "https://api.centuryfinancelimited.com/api/enquiries/submit";
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmissionStatus("success");
        setSubmissionMessage(
          result.message ||
            "Enquiry submitted successfully! We'll be in touch soon."
        );
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(
          result.message ||
            `Submission failed. Server responded with status: ${response.status}. Please try again.`
        );
      }
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        "An error occurred. Please check your network connection and try again."
      );
      console.error("Network or other error during submission:", error);
    }
  };

  return (
    <div>
      <button
        onClick={toggleForm}
        className="enquire-now-button-fixed"
        aria-label="Open enquiry form">
        Enquire Now
      </button>

      {isFormOpen && (
        <div
          className="modal-overlay"
          onClick={submissionStatus !== "loading" ? toggleForm : undefined}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="form-header">
              <h2>Enquire Now</h2>
              {submissionStatus !== "loading" && (
                <button
                  onClick={toggleForm}
                  className="close-button"
                  aria-label="Close form">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"></path>
                  </svg>
                </button>
              )}
            </div>

            <div className="form-body">
              {/* --- Submission Status Messages --- */}
              {submissionMessage && (
                <div className={`status-message status-${submissionStatus}`}>
                  {submissionMessage}
                </div>
              )}

              {/* --- The Form --- */}
              {submissionStatus !== "success" && (
                <form onSubmit={handleSubmit} className="form-content">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="form-input"
                    disabled={submissionStatus === "loading"}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="form-input"
                    disabled={submissionStatus === "loading"}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="form-input"
                    pattern="[0-9]{10,15}"
                    title="Please enter a valid phone number."
                    disabled={submissionStatus === "loading"}
                  />
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    disabled={submissionStatus === "loading"}>
                    {courses.map((course, index) => (
                      <option
                        key={index}
                        value={index === 0 ? "" : course}
                        disabled={index === 0}>
                        {course}
                      </option>
                    ))}
                  </select>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="4"
                    className="form-input"
                    required
                    disabled={submissionStatus === "loading"}></textarea>
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={submissionStatus === "loading"}>
                    {submissionStatus === "loading" ? (
                      <>
                        <svg className="spinner" viewBox="0 0 50 50">
                          <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"></circle>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "SUBMIT"
                    )}
                  </button>
                </form>
              )}

              {/* --- Close button after success --- */}
              {submissionStatus === "success" && (
                <button
                  onClick={toggleForm}
                  className="submit-button success-close-button">
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryForm;
