// backend/utils/sendEmail.js
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Ensure .env is loaded from the correct path relative to where this script might be called from
// If server.js is at the root of /backend and utils is inside /backend, this path is fine.
dotenv.config({ path: require("path").resolve(__dirname, "../.env") });

const sendEmail = async (options) => {
  // 1. Create a transporter using your domain's SMTP settings
  // Ensure EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS are correctly set in your .env file.
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_PORT ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    console.error(
      "🔴 Email SMTP configuration is missing in .env file. Cannot send email."
    );
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10), // Ensure port is an integer
    secure: parseInt(process.env.EMAIL_PORT, 10) === 465, // true for 465 (SSL), false for other ports (like 587 for TLS)
    auth: {
      user: process.env.EMAIL_USER, // Your domain email address (e.g., otp@centuryfinancelimited.com)
      pass: process.env.EMAIL_PASS, // Password for that email account
    },
    // Some SMTP servers might require specific TLS options, e.g., for self-signed certificates (not typical for production)
    // tls: {
    //   ciphers:'SSLv3', // Example, adjust as needed or remove if not necessary
    //   rejectUnauthorized: false // Only for development with self-signed certs
    // }
  });

  // 2. Define the email options
  // EMAIL_FROM_ADDRESS should be the same as EMAIL_USER or an alias authorized to send through it.
  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME || "Century Finance"}" <${
      process.env.EMAIL_FROM_ADDRESS || process.env.EMAIL_USER
    }>`,
    to: options.email, // The recipient's email address
    subject: options.subject,
    text: options.message, // Plain text body
    html: options.html || `<p>${options.message.replace(/\n/g, "<br>")}</p>`, // HTML body, convert newlines in text to <br> if no HTML provided
  };

  // 3. Actually send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(
      `✅ Email sent successfully to ${options.email}: ${info.response}`
    );
    return true;
  } catch (error) {
    console.error(`🔴 Error sending email to ${options.email}: `, error);
    // Log more details for troubleshooting
    if (error.responseCode)
      console.error(`SMTP Error Code: ${error.responseCode}`);
    if (error.response) console.error(`SMTP Error Response: ${error.response}`);
    return false;
  }
};

module.exports = sendEmail;
