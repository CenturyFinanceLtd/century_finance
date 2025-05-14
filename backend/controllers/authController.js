// backend/controllers/authController.js
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // Node.js crypto module

// Helper function to generate JWT token
const signToken = (id) => {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    console.error(
      "🔴 JWT_SECRET or JWT_EXPIRES_IN is not defined in .env file! Cannot sign token."
    );
    // In a real app, you might throw an error or return null, then handle it.
    // For now, this will cause jwt.sign to fail if env vars are missing.
    // It's better to ensure they are set.
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Helper function to send token in response
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const userOutput = { ...user.toObject() };
  delete userOutput.password;
  delete userOutput.emailVerificationOtp;
  delete userOutput.emailVerificationOtpExpires;
  delete userOutput.passwordResetOtp;
  delete userOutput.passwordResetOtpExpires;
  delete userOutput.__v;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: userOutput,
    },
  });
};

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

    let existingUser = await User.findOne({ email });

    if (existingUser && existingUser.isEmailVerified) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "An account with this email already exists and is verified.",
        });
    }

    let userToSave;
    if (existingUser && !existingUser.isEmailVerified) {
      console.log(
        `User ${email} exists but not verified. Updating details and resending OTP.`
      );
      existingUser.fullName = fullName;
      existingUser.password = password;
      existingUser.phoneNumber = phoneNumber;
      existingUser.fatherName = fatherName;
      existingUser.universityOrCollege = universityOrCollege || "";
      userToSave = existingUser;
    } else {
      console.log(`Creating new user for ${email}.`);
      userToSave = new User({
        fullName,
        email,
        password,
        phoneNumber,
        fatherName,
        universityOrCollege: universityOrCollege || "",
        isEmailVerified: false,
      });
    }

    const verificationOtp = userToSave.generateEmailVerificationOtp();
    await userToSave.save();

    const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${verificationOtp}\nThis OTP is valid for 10 minutes.`;
    console.log(
      `Attempting to send verification OTP to ${userToSave.email}...`
    );
    const emailSent = await sendEmail({
      email: userToSave.email,
      subject: "Verify Your Email - Century Finance",
      message: message,
      html: `<p>Your One-Time Password (OTP) for Century Finance email verification is: <strong>${verificationOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
    });

    if (!emailSent) {
      console.error(
        `Failed to send OTP email to ${userToSave.email}. Cleaning up OTP fields.`
      );
      userToSave.emailVerificationOtp = undefined;
      userToSave.emailVerificationOtpExpires = undefined;
      await userToSave.save({ validateBeforeSave: false });
      return res.status(500).json({
        status: "error",
        message:
          "There was an error sending the verification email. Please try again.",
      });
    }

    res.status(200).json({
      status: "success",
      message:
        "OTP sent to your email. Please verify to complete registration.",
      data: { email: userToSave.email },
    });
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
            "Invalid or expired OTP. Please request a new one if needed.",
        });
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
    // Catch unexpected errors from sendEmail or other operations
    console.error("Forgot Password Controller Error:", error);
    // Ensure OTP fields are cleared if an error occurs after generation but before successful email send
    if (req.body.email && error.name !== "MongoServerError") {
      // Avoid trying to save if it's a DB error itself
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
    user.password = password;
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
