// frontend/src/components/EnquiryFormPopup.js
import React, { useState } from "react";

// The 'closeModal' prop is passed from ModalContext.js
const EnquiryFormPopup = ({ closeModal }) => {
  // State for form fields - useful for more complex validation or clearing form
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  // State for submission status
  const [submissionStatus, setSubmissionStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'
  const [submissionMessage, setSubmissionMessage] = useState("");

  const resetFormFields = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setCourse("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus("loading");
    setSubmissionMessage("Submitting your enquiry... Please wait.");

    const formData = {
      fullName,
      email,
      phone,
      course,
      message,
    };

    console.log("Form Data to be sent:", formData);

    try {
      // *** IMPORTANT: Use the full URL to your production backend ***
      const API_ENDPOINT =
        "https://api.centuryfinancelimited.com/api/enquiries/submit";

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmissionStatus("success");
        setSubmissionMessage(
          result.message ||
            "Enquiry submitted successfully! We'll be in touch soon."
        );
        console.log("Submission successful:", result);
        resetFormFields(); // Clear the form fields
        // Optionally close modal after a delay, or let user close it
        setTimeout(() => {
          if (closeModal) closeModal(); // Close modal if function is provided
        }, 3000);
      } else {
        setSubmissionStatus("error");
        setSubmissionMessage(
          result.message ||
            `Submission failed. Server responded with status: ${response.status}. Please try again.`
        );
        console.error("Submission failed:", result);
      }
    } catch (error) {
      setSubmissionStatus("error");
      setSubmissionMessage(
        "An error occurred while submitting the form. Please check your network connection and try again."
      );
      console.error("Network or other error during submission:", error);
    }
  };

  // Prevent modal from closing when clicking inside the form content
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id="modalOverlay"
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ease-in-out z-[60]" // Ensure z-index is high
      onClick={submissionStatus !== "loading" ? closeModal : undefined} // Prevent close on overlay click during loading
    >
      <div
        id="modalContent"
        className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-lg transform scale-100 transition-transform duration-300 ease-in-out overflow-y-auto max-h-[90vh]"
        onClick={handleModalContentClick}>
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Enquire Now
          </h2>
          {submissionStatus !== "loading" && (
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-red-500 transition-colors rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              aria-label="Close modal">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Submission Status Messages */}
        {submissionStatus === "loading" && (
          <div className="mb-4 p-3 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-sm text-center animate-pulse">
            {submissionMessage}
          </div>
        )}
        {submissionMessage && submissionStatus === "success" && (
          <div className="mb-4 p-3 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm text-center">
            {submissionMessage}
          </div>
        )}
        {submissionMessage && submissionStatus === "error" && (
          <div className="mb-4 p-3 rounded-md bg-red-50 border border-red-200 text-red-700 text-sm text-center">
            {submissionMessage}
          </div>
        )}

        {/* Enquiry Form: Hide form after successful submission */}
        {submissionStatus !== "success" && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={submissionStatus === "loading"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow sm:text-sm placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="e.g., John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submissionStatus === "loading"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow sm:text-sm placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                disabled={submissionStatus === "loading"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow sm:text-sm placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="e.g., 9876543210"
              />
            </div>

            <div>
              <label
                htmlFor="course"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Select a Course <span className="text-red-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                disabled={submissionStatus === "loading"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed">
                <option value="" disabled>
                  Choose a course...
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={submissionStatus === "loading"}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-shadow sm:text-sm placeholder-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your message or query here..."></textarea>
            </div>

            <div className="pt-3 flex flex-col sm:flex-row sm:justify-end sm:space-x-3 space-y-3 sm:space-y-0">
              <button
                type="button"
                onClick={closeModal}
                disabled={submissionStatus === "loading"}
                className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed">
                Cancel
              </button>
              <button
                type="submit"
                disabled={submissionStatus === "loading"}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center">
                {submissionStatus === "loading" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Submit Enquiry"
                )}
              </button>
            </div>
          </form>
        )}
        {/* Show a close button if submission was successful and form is hidden */}
        {submissionStatus === "success" && (
          <div className="text-center mt-6">
            <button
              type="button"
              onClick={closeModal}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryFormPopup;
