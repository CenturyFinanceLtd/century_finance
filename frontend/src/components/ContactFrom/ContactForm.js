// frontend/src/components/ContactFrom/ContactForm.js
import React, { useState, useRef } from "react"; // Added useRef
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify"; // For displaying messages
import CircularProgress from "@mui/material/CircularProgress"; // For loading indicator
import Button from "@mui/material/Button"; // Using MUI Button for consistency if desired

// Assuming your styles are in a corresponding SCSS file or global styles
// import './ContactForm.scss';

const ContactForm = () => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phoneNumber: "", // Changed from 'phone' to match backend Query model
    message: "",
    service: "", // Optional: if you have a service dropdown
  });

  const [loading, setLoading] = useState(false);

  // Use useRef for the validator for stability in functional components
  const validator = useRef(
    new SimpleReactValidator({
      className: "errorMessage", // Class for styling validation messages
      validators: {
        // Optional: Custom validator for phone
        phone: {
          message: "Please enter a valid 10-digit phone number.",
          rule: (val, params, validatorInstance) => {
            return (
              validatorInstance.helpers.testRegex(val, /^[6-9]\d{9}$/i) &&
              params.indexOf(val) === -1
            );
          },
        },
      },
    })
  );

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    // Show message for the field being changed if it was already touched
    if (validator.current.fields[e.target.name]) {
      validator.current.showMessageFor(e.target.name);
    }
  };

  // To show validation messages when a field loses focus
  const touchMessageHandler = (e) => {
    validator.current.showMessageFor(e.target.name);
    // Force a re-render to ensure messages update
    setForms((prev) => ({ ...prev }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      setLoading(true);
      validator.current.hideMessages();

      const queryData = {
        name: forms.name,
        email: forms.email,
        subject: forms.subject,
        phoneNumber: forms.phoneNumber,
        message: forms.message,
        service: forms.service, // Include if you have this field
      };

      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/queries/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(queryData),
          }
        );

        const data = await response.json();
        setLoading(false);

        if (response.ok && data.status === "success") {
          toast.success(
            data.message ||
              "Query submitted successfully! We will get back to you soon."
          );
          setForms({
            // Clear the form
            name: "",
            email: "",
            subject: "",
            phoneNumber: "",
            message: "",
            service: "",
          });
          validator.current.hideMessages(); // Ensure messages are hidden after successful clear
        } else {
          toast.error(
            data.message || "Failed to submit query. Please try again."
          );
        }
      } catch (error) {
        setLoading(false);
        console.error("Contact form API error:", error);
        toast.error(
          "An error occurred while submitting your query. Please try again."
        );
      }
    } else {
      validator.current.showMessages();
      toast.error("Please fill in all required fields correctly.");
    }
  };

  return (
    <form
      onSubmit={submitHandler} // Corrected: pass the function reference
      className="contact-validation-active" // Your existing class
    >
      <div className="row">
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.name}
              type="text"
              name="name"
              onBlur={touchMessageHandler} // Use touchMessageHandler
              onChange={changeHandler}
              placeholder="Your Name*"
            />
            {validator.current.message(
              "name",
              forms.name,
              "required|alpha_space"
            )}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.email}
              type="email"
              name="email"
              onBlur={touchMessageHandler}
              onChange={changeHandler}
              placeholder="Your Email*"
            />
            {validator.current.message("email", forms.email, "required|email")}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.phoneNumber} // Changed from forms.phone
              type="tel" // Changed from type="phone" to "tel" for better semantics
              name="phoneNumber" // Changed from "phone"
              onBlur={touchMessageHandler}
              onChange={changeHandler}
              placeholder="Your Phone Number*"
            />
            {validator.current.message(
              "phoneNumber",
              forms.phoneNumber,
              "required|phone"
            )}
          </div>
        </div>
        <div className="col col-lg-6 col-12">
          <div className="form-field">
            <input
              value={forms.subject} // Corrected: use forms.subject
              type="text" // Corrected: type should be "text" for subject
              name="subject"
              onBlur={touchMessageHandler}
              onChange={changeHandler}
              placeholder="Subject*"
            />
            {validator.current.message("subject", forms.subject, "required")}
          </div>
        </div>
        {/* Optional: Service Dropdown - Uncomment and adapt if needed
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select
                            value={forms.service}
                            name="service"
                            onBlur={touchMessageHandler}
                            onChange={changeHandler}
                        >
                            <option value="" disabled>Select a Service (Optional)</option>
                            <option value="Training Program">Training Program</option>
                            <option value="Portfolio Management">Portfolio Management</option>
                            <option value="Finance/Loans">Finance/Loans</option>
                            <option value="Investment Plans">Investment Plans</option>
                            <option value="Call Subscriptions">Call Subscriptions</option>
                            <option value="Other">Other</option>
                        </select>
                        {validator.current.message("service", forms.service, "")} // No validation rule, just to show message if needed
                    </div>
                </div>
                */}
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            {" "}
            {/* Added wrapper for consistency */}
            <textarea
              onBlur={touchMessageHandler}
              onChange={changeHandler}
              value={forms.message}
              name="message" // Name attribute was missing
              placeholder="Message*"></textarea>
            {validator.current.message("message", forms.message, "required")}
          </div>
        </div>
      </div>
      <div className="submit-area">
        <Button
          type="submit"
          className="theme-btn" // Your existing class
          variant="contained" // Optional: MUI variant for styling
          disabled={loading}
          sx={{ minWidth: "150px" }} // Example styling for button width
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            "Submit Now"
          )}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
