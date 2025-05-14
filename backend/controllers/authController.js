// backend/controllers/authController.js
const User = require("../models/User"); // Uses the main User model
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
// const crypto = require('crypto'); // Not strictly needed here if User model handles OTP generation

// --- Helper Functions (signToken, createSendToken) ---
const signToken = (id) => {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    console.error(
      "🔴 JWT_SECRET or JWT_EXPIRES_IN is not defined in .env file! Cannot sign token."
    );
    // This will cause jwt.sign to fail if env vars are missing.
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const userOutput = { ...user.toObject() };
  delete userOutput.password; // Ensure password is not sent
  delete userOutput.emailVerificationOtp;
  delete userOutput.emailVerificationOtpExpires;
  delete userOutput.passwordResetOtp;
  delete userOutput.passwordResetOtpExpires;
  delete userOutput.__v;

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user: userOutput },
  });
};

// --- Authentication Controller Functions ---

/**
 * @desc    Register a new user or resend OTP to unverified existing user.
 * Saves user data immediately to User collection with isEmailVerified: false.
 * @route   POST /api/auth/signup
 * @access  Public
 */
exports.signup = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      phoneNumber,
      fatherName,
      universityOrCollege,
    } = req.body;

    // --- Input Validation ---
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !fatherName
    ) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Please provide all required fields (Full Name, Email, Password, Confirm Password, Phone Number, Father Name).",
        });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: "fail", message: "Passwords do not match." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Password must be at least 6 characters long.",
        });
    }

    let user = await User.findOne({ email });

    if (user && user.isEmailVerified) {
      // Case 1: Email exists and is already verified
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "This email is already registered and verified. Please login.",
        });
    }

    if (user && !user.isEmailVerified) {
      // Case 2: Email exists but is not verified. Update details and resend OTP.
      console.log(
        `User ${email} exists but not verified. Updating details and resending OTP.`
      );
      user.fullName = fullName;
      user.password = password; // Password will be re-hashed by pre-save hook
      user.phoneNumber = phoneNumber;
      user.fatherName = fatherName;
      user.universityOrCollege = universityOrCollege || "";
      // isEmailVerified remains false. OTP fields will be updated by generateEmailVerificationOtp.
    } else if (!user) {
      // Case 3: New user. Create the user document.
      console.log(`Creating new user for ${email}.`);
      user = new User({
        fullName,
        email,
        password, // Will be hashed by pre-save hook
        phoneNumber,
        fatherName,
        universityOrCollege: universityOrCollege || "",
        isEmailVerified: false, // Explicitly set
      });
    }
    // If user was null, it's now a new User instance. If it was an existing unverified user, it's that user instance.

    // Generate and set OTP on the user document (new or existing unverified)
    const verificationOtp = user.generateEmailVerificationOtp(); // This method is on the User model

    // Save the user (new or updated with new OTP) to the database.
    // The pre-save hook in User.js will hash the password if it's new or modified.
    await user.save();

    // Send OTP to user's email
    const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${verificationOtp}\nThis OTP is valid for 10 minutes.`;
    try {
      console.log(`Attempting to send verification OTP to ${user.email}...`);
      const emailSent = await sendEmail({
        email: user.email,
        subject: "Verify Your Email - Century Finance",
        message: message,
        html: `<p>Your One-Time Password (OTP) for Century Finance email verification is: <strong>${verificationOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
      });

      if (!emailSent) {
        console.error(
          `Failed to send OTP email to ${user.email}. Note: User data is saved but OTP fields might need manual reset or retry.`
        );
        return res.status(500).json({
          status: "error",
          message:
            "User data saved, but there was an error sending the verification email. Please try verifying later or request a new OTP.",
        });
      }

      res.status(200).json({
        status: "success",
        message:
          "OTP sent to your email. Please verify to complete registration.",
        data: { email: user.email }, // Send email back for frontend to use on OTP page
      });
    } catch (emailError) {
      console.error(
        "Unexpected error during email sending in signup:",
        emailError
      );
      return res.status(500).json({
        status: "error",
        message:
          "User data saved, but an unexpected error occurred while sending the verification email.",
      });
    }
  } catch (error) {
    console.error("Signup Controller Error:", error);
    if (error.code === 11000) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "An account with this email already exists.",
        });
    }
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
        message: "Something went wrong during the signup process.",
        errorDetails: error.message,
      });
  }
};

/**
 * @desc    Verify Email OTP for a user (whose data is in User collection with isEmailVerified:false)
 * @route   POST /api/auth/verify-email
 * @access  Public
 */
exports.verifyEmailOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Please provide both email and OTP.",
        });
    }

    const user = await User.findOne({
      email,
      emailVerificationOtp: otp,
      emailVerificationOtpExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Invalid or expired OTP. Please request a new OTP if needed or try signing up again.",
        });
    }

    if (user.isEmailVerified) {
      console.log(`User ${email} is already verified. Proceeding to login.`);
      createSendToken(user, 200, res);
      return;
    }

    user.isEmailVerified = true;
    user.emailVerificationOtp = undefined;
    user.emailVerificationOtpExpires = undefined;
    await user.save();

    console.log(`Email verified for ${user.email}. Logging in.`);
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("Verify Email OTP Controller Error:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong during OTP verification.",
        errorDetails: error.message,
      });
  }
};

// --- LOGIN ---
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Please provide email and password.",
        });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ status: "fail", message: "Incorrect email or password." });
    }
    if (!user.isEmailVerified) {
      return res.status(401).json({
        status: "fail",
        message: "Email not verified. Please verify your email first.",
      });
    }
    console.log(`User ${user.email} logged in successfully.`);
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("Login Controller Error:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong during login.",
        errorDetails: error.message,
      });
  }
};

// --- FORGOT/RESET PASSWORD ---
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide an email address." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log(`Forgot password attempt for non-existent email: ${email}`);
      return res
        .status(200)
        .json({
          status: "success",
          message:
            "If an account with that email exists, a password reset OTP has been sent.",
        });
    }
    if (!user.isEmailVerified) {
      console.log(`Forgot password attempt for unverified email: ${email}`);
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Please verify your email address first before attempting a password reset.",
        });
    }
    const resetOtp = user.generatePasswordResetOtp();
    await user.save({ validateBeforeSave: false });
    const message = `Your One-Time Password (OTP) for Century Finance password reset is: ${resetOtp}\nThis OTP is valid for 10 minutes. If you didn't request this, please ignore this email.`;
    console.log(`Attempting to send password reset OTP to ${user.email}...`);
    const emailSent = await sendEmail({
      email: user.email,
      subject: "Your Password Reset OTP (valid for 10 min) - Century Finance",
      message,
      html: `<p>Your One-Time Password (OTP) for Century Finance password reset is: <strong>${resetOtp}</strong></p><p>This OTP is valid for 10 minutes. If you didn't request this, please ignore this email.</p>`,
    });
    if (!emailSent) {
      console.error(
        `Failed to send password reset OTP to ${user.email}. Cleaning up OTP fields.`
      );
      user.passwordResetOtp = undefined;
      user.passwordResetOtpExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return res
        .status(500)
        .json({
          status: "error",
          message:
            "There was an error sending the password reset email. Try again later.",
        });
    }
    res.status(200).json({
      status: "success",
      message: "Password reset OTP sent to email!",
    });
  } catch (error) {
    console.error("Forgot Password Controller Error:", error);
    if (req.body.email && error.name !== "MongoServerError") {
      try {
        const userForCleanup = await User.findOne({ email: req.body.email });
        if (userForCleanup) {
          userForCleanup.passwordResetOtp = undefined;
          userForCleanup.passwordResetOtpExpires = undefined;
          await userForCleanup.save({ validateBeforeSave: false });
        }
      } catch (cleanupError) {
        console.error(
          "Error during OTP cleanup in forgotPassword error handler:",
          cleanupError
        );
      }
    }
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong.",
        errorDetails: error.message,
      });
  }
};

exports.verifyPasswordResetOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide email and OTP." });
    }
    const user = await User.findOne({
      email,
      passwordResetOtp: otp,
      passwordResetOtpExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ status: "fail", message: "OTP is invalid or has expired." });
    }
    console.log(`Password reset OTP verified for ${email}.`);
    res.status(200).json({
      status: "success",
      message: "OTP verified. You can now reset your password.",
    });
  } catch (error) {
    console.error("Verify Reset OTP Controller Error:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong.",
        errorDetails: error.message,
      });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, otp, password, confirmPassword } = req.body;
    if (!email || !otp || !password || !confirmPassword) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Missing required fields (email, otp, password, confirmPassword).",
        });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ status: "fail", message: "New passwords do not match." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "New password must be at least 6 characters long.",
        });
    }
    const user = await User.findOne({
      email,
      passwordResetOtp: otp,
      passwordResetOtpExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Invalid or expired OTP, or user not found. Please try the forgot password process again.",
        });
    }
    user.password = password; // Pre-save hook will hash
    user.passwordResetOtp = undefined;
    user.passwordResetOtpExpires = undefined;
    await user.save();
    console.log(`Password reset successfully for ${user.email}. Logging in.`);
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("Reset Password Controller Error:", error);
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
        message: "Something went wrong resetting password.",
        errorDetails: error.message,
      });
  }
};
