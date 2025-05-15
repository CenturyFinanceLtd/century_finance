// backend/controllers/queryController.js
const Query = require("../models/Query");
const sendEmail = require("../utils/sendEmail"); // Your existing email utility

/**
 * @desc    Submit a new contact query
 * @route   POST /api/queries/submit
 * @access  Public
 */
exports.submitQuery = async (req, res) => {
  try {
    const { name, email, subject, message, phoneNumber, service } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Please provide name, email, subject, and message.",
        });
    }

    // Create new query instance
    const newQuery = new Query({
      name,
      email,
      subject,
      message,
      phoneNumber: phoneNumber || "", // Handle optional fields
      service: service || "", // Handle optional fields
    });

    // Save query to database
    const savedQuery = await newQuery.save();

    // Send email notification to customer service
    const notificationSubject = `New Contact Query Received: ${savedQuery.subject}`;
    const notificationMessage = `
            A new contact form submission has been received:

            Name: ${savedQuery.name}
            Email: ${savedQuery.email}
            Phone Number: ${savedQuery.phoneNumber || "Not provided"}
            Service of Interest: ${savedQuery.service || "Not specified"}
            Subject: ${savedQuery.subject}

            Message:
            ${savedQuery.message}

            Received At: ${new Date(savedQuery.createdAt).toLocaleString(
              "en-IN",
              { timeZone: "Asia/Kolkata" }
            )}
        `;
    const notificationHtml = `
            <p>A new contact form submission has been received:</p>
            <ul>
                <li><strong>Name:</strong> ${savedQuery.name}</li>
                <li><strong>Email:</strong> ${savedQuery.email}</li>
                <li><strong>Phone Number:</strong> ${
                  savedQuery.phoneNumber || "Not provided"
                }</li>
                <li><strong>Service of Interest:</strong> ${
                  savedQuery.service || "Not specified"
                }</li>
                <li><strong>Subject:</strong> ${savedQuery.subject}</li>
            </ul>
            <p><strong>Message:</strong></p>
            <p>${savedQuery.message.replace(/\n/g, "<br>")}</p>
            <hr>
            <p><em>Received At: ${new Date(savedQuery.createdAt).toLocaleString(
              "en-IN",
              { timeZone: "Asia/Kolkata" }
            )}</em></p>
        `;

    const customerServiceEmail = "customerservice@centuryfinancelimited.com";
    // EMAIL_USER from .env is no-reply@centuryfinancelimited.com
    // EMAIL_FROM_ADDRESS can also be used if defined, otherwise it defaults to EMAIL_USER

    const emailSent = await sendEmail({
      email: customerServiceEmail, // Recipient
      subject: notificationSubject,
      message: notificationMessage,
      html: notificationHtml,
    });

    if (!emailSent) {
      console.error(
        `Query saved (ID: ${savedQuery._id}), but failed to send email notification to ${customerServiceEmail}.`
      );
      // Decide if this should be a client-facing error or just logged
      // For now, we'll still return success to the user as their query was saved.
    } else {
      console.log(
        `Query saved (ID: ${savedQuery._id}) and email notification sent to ${customerServiceEmail}.`
      );
    }

    res.status(201).json({
      status: "success",
      message:
        "Your query has been submitted successfully! We will get back to you soon.",
      data: {
        queryId: savedQuery._id,
      },
    });
  } catch (error) {
    console.error("Submit Query Controller Error:", error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res
        .status(400)
        .json({ status: "fail", message: messages.join(". ") });
    }
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong while submitting your query.",
        errorDetails: error.message,
      });
  }
};
