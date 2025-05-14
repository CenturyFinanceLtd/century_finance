// backend/controllers/authController.js
const User = require("../models/User"); // Your User model
const sendEmail = require("../utils/sendEmail"); // Email utility
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // Node.js crypto module, though User model handles OTP generation

// Helper function to generate JWT token
const signToken = (id) => {
  // Ensure JWT_SECRET and JWT_EXPIRES_IN are loaded from .env
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    console.error(
      "🔴 JWT_SECRET or JWT_EXPIRES_IN is not defined in .env file!"
    );
    // Handle this error appropriately in a real app, maybe throw or use a default
    // For now, this will likely cause an error if JWT generation is attempted without them.
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Helper function to send token in response
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  // Remove password from output before sending user object
  const userOutput = { ...user.toObject() }; // Convert Mongoose document to plain object
  delete userOutput.password;
  delete userOutput.emailVerificationOtp;
  delete userOutput.emailVerificationOtpExpires;
  delete userOutput.passwordResetOtp;
  delete userOutput.passwordResetOtpExpires;
  // Also remove __v if you don't want it
  delete userOutput.__v;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user: userOutput,
    },
  });
};

/**
 * @desc    Register a new user / Initiate Email Verification
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

    // Basic validation
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

    // Check if user already exists with this email
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
      // User exists but not verified, update their details and resend OTP
      console.log(
        `User ${email} exists but not verified. Updating details and resending OTP.`
      );
      existingUser.fullName = fullName;
      existingUser.password = password; // Password will be re-hashed by pre-save hook
      existingUser.phoneNumber = phoneNumber;
      existingUser.fatherName = fatherName;
      existingUser.universityOrCollege = universityOrCollege || ""; // Handle optional field
      // isEmailVerified remains false, OTP fields will be reset by generateEmailVerificationOtp
      userToSave = existingUser;
    } else {
      // Create new user
      console.log(`Creating new user for ${email}.`);
      userToSave = new User({
        fullName,
        email,
        password, // Will be hashed by pre-save hook
        phoneNumber,
        fatherName,
        universityOrCollege: universityOrCollege || "", // Handle optional field
        isEmailVerified: false,
      });
    }

    const verificationOtp = userToSave.generateEmailVerificationOtp(); // Generates and sets OTP on userToSave instance
    // The pre-save hook in User.js will hash the password if it's new or modified.
    await userToSave.save(); // Save/update user with OTP and potentially new/updated details

    // Send OTP to user's email
    const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${verificationOtp}\nThis OTP is valid for 10 minutes.`;
    try {
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
        // If sendEmail returns false, it means there was an issue (logged by sendEmail utility)
        console.error(
          `Failed to send OTP email to ${userToSave.email}. Cleaning up OTP fields.`
        );
        userToSave.emailVerificationOtp = undefined;
        userToSave.emailVerificationOtpExpires = undefined;
        await userToSave.save({ validateBeforeSave: false }); // Clear OTP if email failed

        return res.status(500).json({
          status: "error",
          message:
            "There was an error sending the verification email. Please try again.",
        });
      }

      res.status(200).json({
        // Use 200 for OTP sent, or 201 if truly creating a resource for the first time.
        status: "success",
        message:
          "OTP sent to your email. Please verify to complete registration.",
        data: { email: userToSave.email },
      });
    } catch (emailError) {
      // Catch any unexpected errors from sendEmail itself
      console.error("Unexpected error during email sending:", emailError);
      userToSave.emailVerificationOtp = undefined;
      userToSave.emailVerificationOtpExpires = undefined;
      await userToSave.save({ validateBeforeSave: false });

      return res.status(500).json({
        status: "error",
        message:
          "An unexpected error occurred while sending the verification email.",
      });
    }
  } catch (error) {
    console.error("Signup Controller Error:", error);
    if (error.code === 11000) {
      // MongoDB duplicate key error
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
 * @desc    Verify Email OTP and complete registration
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
      emailVerificationOtpExpires: { $gt: Date.now() }, // Check if OTP is not expired
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

    // User is verified, create and send token for immediate login
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

/**
 * @desc    Login an existing user
 * @route   POST /api/auth/login
 * @access  Public
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // 1) Check if email and password exist
    if (!email || !password) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Please provide email and password.",
        });
    }

    // 2) Check if user exists && password is correct
    // We need to explicitly select the password field as it's set to 'select: false' in the schema
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.comparePassword(password))) {
      return res
        .status(401)
        .json({ status: "fail", message: "Incorrect email or password." });
    }

    // 3) Check if email is verified
    if (!user.isEmailVerified) {
      return res.status(401).json({
        status: "fail",
        message: "Email not verified. Please verify your email first.",
        // Optionally, provide a way for the frontend to trigger a resend OTP flow
        // data: { emailNotVerified: true, email: user.email }
      });
    }

    // 4) If everything ok, send token to client
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

/**
 * @desc    Forgot Password - Send Reset OTP
 * @route   POST /api/auth/forgot-password
 * @access  Public
 */
exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide an email address." });
    }

    // 1) Get user based on POSTed email
    const user = await User.findOne({ email: email });

    if (!user) {
      // For security, don't reveal if the user exists or not.
      // Send the same success message to prevent user enumeration.
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

    // 2) Generate the random reset OTP
    const resetOtp = user.generatePasswordResetOtp();
    await user.save({ validateBeforeSave: false }); // Save OTP and expiry to user doc

    // 3) Send it to user's email
    const message = `Your One-Time Password (OTP) for Century Finance password reset is: ${resetOtp}\nThis OTP is valid for 10 minutes. If you didn't request this, please ignore this email.`;
    try {
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
    } catch (err) {
      // Catch unexpected errors from sendEmail
      console.error(
        "Unexpected error during password reset email sending:",
        err
      );
      user.passwordResetOtp = undefined;
      user.passwordResetOtpExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return res
        .status(500)
        .json({
          status: "error",
          message:
            "An unexpected error occurred sending the password reset email.",
        });
    }
  } catch (error) {
    console.error("Forgot Password Controller Error:", error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Something went wrong.",
        errorDetails: error.message,
      });
  }
};

/**
 * @desc    Verify Password Reset OTP
 * @route   POST /api/auth/verify-reset-otp
 * @access  Public
 */
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

    // OTP is valid. For enhanced security, you might want to issue a temporary, single-use token here
    // that must be sent with the actual password reset request, instead of relying on sending the OTP again.
    // For now, we'll just confirm OTP validity.
    console.log(`Password reset OTP verified for ${email}.`);
    res.status(200).json({
      status: "success",
      message: "OTP verified. You can now reset your password.",
      // Optionally, you could send a temporary token here for the next step:
      // resetToken: 'some_short_lived_token_for_password_reset'
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

/**
 * @desc    Reset Password (after OTP verification)
 * @route   POST /api/auth/reset-password
 * @access  Public
 */
exports.resetPassword = async (req, res, next) => {
  try {
    // For enhanced security, instead of otp, you'd expect a temporary resetToken
    // that was issued after successful OTP verification.
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

    // 1. Find user by email and still valid OTP.
    // The OTP should ideally be cleared after the verify-reset-otp step and a new token used.
    // Re-validating OTP here provides some check if the flow is direct.
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

    // 2. Set new password (pre-save hook in User.js will hash it)
    user.password = password;
    user.passwordResetOtp = undefined; // Clear OTP fields
    user.passwordResetOtpExpires = undefined;
    // user.passwordChangedAt = Date.now(); // Optional: track when password was last changed

    await user.save();

    // 3. Log the user in by sending a new JWT
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
