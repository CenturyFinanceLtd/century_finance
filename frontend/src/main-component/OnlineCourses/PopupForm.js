import React, { useState } from "react";
import "./PopupForm.css";

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
        const formPayload = new FormData();
        for (let key in formData) formPayload.append(key, formData[key]);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: formPayload,
            });

            if (res.ok) {
                alert("Registration submitted successfully!");
                onClose();
            } else {
                alert("Submission failed. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Error submitting form!");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="popup-form-overlay">
            <div className="popup-form-container">
                <button className="popup-close" onClick={onClose}>×</button>
                <h2>Online Course Registration</h2>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <input name="fullName" placeholder="Full Name *" required onChange={handleChange} />
                    <input name="mobileNumber" placeholder="Mobile Number *" required onChange={handleChange} />
                    <input name="email" type="email" placeholder="Email ID *" required onChange={handleChange} />
                    <textarea name="address" placeholder="Address *" required onChange={handleChange}></textarea>
                    <input name="pinCode" placeholder="PIN Code *" required onChange={handleChange} />
                    <input name="state" placeholder="State *" required onChange={handleChange} />
                    <input name="city" placeholder="City *" required onChange={handleChange} />
                    <input name="fatherName" placeholder="Father's Name *" required onChange={handleChange} />
                    <input name="collegeName" placeholder="College Name *" required onChange={handleChange} />
                    <select name="degree" required onChange={handleChange}>
                        <option value="">Select Degree...</option>
                        {["BE/B-Tech", "BSC", "BCA", "BA", "BBA", "M-Tech", "MSC", "MCA", "MBA", "BA-LLB"].map((deg) => (
                            <option key={deg} value={deg}>{deg}</option>
                        ))}
                    </select>
                    <input name="fieldSpecialization" placeholder="Field & Specialization (e.g., CSE) *" required onChange={handleChange} />
                    <select name="semester" required onChange={handleChange}>
                        <option value="" disabled>Select a Semester...</option>
                        {[...Array(8)].map((_, i) => (
                            <option key={i} value={i + 1}>Semester {i + 1}</option>
                        ))}
                    </select>
                    <p style={{ marginTop: "10px", fontWeight: "bold" }}>Amount: ₹500 + 18% GST</p>
                    <input name="transactionId" placeholder="Transaction ID *" required onChange={handleChange} />
                    <input type="file" name="screenshot" accept="image/*" required onChange={handleChange} />
                    <button type="submit" className="next-btn">Proceed to Payment</button>
                </form>
            </div>
        </div>
    );
};

export default PopupForm;
