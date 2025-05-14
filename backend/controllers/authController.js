// backend/controllers/authController.js
const User = require("../models/User");
const PendingUser = require("../models/PendingUser"); // New model for temporary data
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Needed for hashing password before temporary store

// --- Helper Functions (signToken, createSendToken - remain the same) ---
const signToken = (id) => {
  if (!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) {
    console.error(
      "🔴 JWT_SECRET or JWT_EXPIRES_IN is not defined in .env file! Cannot sign token."
    );
  }
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

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
    data: { user: userOutput },
  });
};

// --- Authentication Controller Functions ---

/**
 * @desc    Initiate Signup: Check email. If new, send OTP and store data temporarily.
 * If existing but unverified, resend OTP. If verified, reject.
 * @route   POST /api/auth/signup
 * @access  Public
 */
exports.signup = async (req, res) => {
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

    const existingVerifiedUser = await User.findOne({
      email,
      isEmailVerified: true,
    });
    if (existingVerifiedUser) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "This email is already registered and verified. Please login.",
        });
    }

    // Handle existing but unverified user in the main User table (resend OTP to them)
    const existingUnverifiedUser = await User.findOne({
      email,
      isEmailVerified: false,
    });
    if (existingUnverifiedUser) {
      console.log(
        `Email ${email} exists in User table but not verified. Resending OTP.`
      );
      const newOtp = existingUnverifiedUser.generateEmailVerificationOtp(); // Method on User model
      await existingUnverifiedUser.save({ validateBeforeSave: false }); // Save new OTP details to User

      const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${newOtp}\nThis OTP is valid for 10 minutes.`;
      const emailSent = await sendEmail({
        email: existingUnverifiedUser.email,
        subject: "Verify Your Email - Century Finance (New OTP)",
        message,
        html: `<p>Your new One-Time Password (OTP) for Century Finance email verification is: <strong>${newOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
      });

      if (!emailSent) {
        return res
          .status(500)
          .json({
            status: "error",
            message:
              "There was an error resending the verification email. Please try again.",
          });
      }
      return res.status(200).json({
        status: "success",
        message: "This email is pending verification. A new OTP has been sent.",
        data: { email: existingUnverifiedUser.email, existingUnverified: true }, // Flag for frontend
      });
    }

    // If email does not exist in User table, it's a completely new registration attempt.
    // Store data temporarily in PendingUser collection.
    console.log(
      `New registration attempt for ${email}. Generating OTP and storing temporarily.`
    );
    const plainOtp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    const salt = await bcrypt.genSalt(10);
    const hashedOtp = await bcrypt.hash(plainOtp, salt);
    const hashedPasswordForPending = await bcrypt.hash(password, salt); // Hash password for temporary storage

    // Delete any previous pending registration for this email
    await PendingUser.deleteMany({ email });

    const pendingUser = new PendingUser({
      email,
      otp: hashedOtp, // Store hashed OTP
      otpExpires: Date.now() + 15 * 60 * 1000, // OTP valid for 15 minutes
      fullName,
      hashedPassword: hashedPasswordForPending, // Store pre-hashed password
      phoneNumber,
      fatherName,
      universityOrCollege: universityOrCollege || "",
    });
    await pendingUser.save();

    const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${plainOtp}\nThis OTP is valid for 10 minutes.`;
    const emailSent = await sendEmail({
      email: email,
      subject: "Verify Your Email - Century Finance",
      message,
      html: `<p>Your One-Time Password (OTP) for Century Finance email verification is: <strong>${plainOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
    });

    if (!emailSent) {
      await PendingUser.deleteOne({ _id: pendingUser._id }); // Clean up if email fails
      return res
        .status(500)
        .json({
          status: "error",
          message:
            "There was an error sending the verification email. Please try again.",
        });
    }

    res.status(200).json({
      status: "success",
      message:
        "OTP sent to your email. Please verify to complete registration.",
      data: { email },
    });
  } catch (error) {
    console.error("Signup Controller Error:", error);
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
 * @desc    Verify OTP and Complete Registration (for new users) OR Verify existing unverified user.
 * @route   POST /api/auth/verify-otp
 * @access  Public
 */
exports.verifyOtpAndCompleteRegistration = async (req, res) => {
  try {
    const {
      email,
      otp,
      fullName,
      password,
      phoneNumber,
      fatherName,
      universityOrCollege,
    } = req.body;

    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and OTP are required." });
    }

    // Scenario 1: Check if this OTP is for an existing but unverified user in the MAIN User table
    let user = await User.findOne({
      email,
      emailVerificationOtp: otp, // Assumes User model stores plain OTP for this flow
      emailVerificationOtpExpires: { $gt: Date.now() },
    });

    if (user && !user.isEmailVerified) {
      console.log(
        `Verifying OTP for existing unverified user in User table: ${email}`
      );
      user.isEmailVerified = true;
      user.emailVerificationOtp = undefined;
      user.emailVerificationOtpExpires = undefined;
      await user.save();
      createSendToken(user, 200, res); // Log them in
      return;
    }

    // Scenario 2: Check if this OTP is for a NEW user from the PendingUser collection
    const pendingUser = await PendingUser.findOne({
      email,
      otpExpires: { $gt: Date.now() },
    });

    if (!pendingUser) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "No pending OTP request found for this email, or OTP has expired. Please try signing up again.",
        });
    }

    const isOtpValid = await pendingUser.compareOtp(otp); // Use compareOtp method from PendingUser model

    if (!isOtpValid) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Invalid OTP. Please check and try again.",
        });
    }

    // OTP is valid for a new registration. Now create the user in the main User collection.
    // All necessary data should have been sent again from the client or was stored in PendingUser.
    // Here, we expect client to resend all data.
    if (!fullName || !password || !phoneNumber || !fatherName) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "Missing required user details for registration completion (Full Name, Password, Phone, Father Name).",
        });
    }
    if (password.length < 6) {
      // Re-validate password length
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Password must be at least 6 characters long.",
        });
    }

    console.log(
      `OTP verified for new user ${email}. Creating user in main User table.`
    );
    const newUser = new User({
      fullName: pendingUser.fullName, // Use data from pendingUser store
      email: pendingUser.email,
      password: pendingUser.hashedPassword, // Use the pre-hashed password from pending store
      phoneNumber: pendingUser.phoneNumber,
      fatherName: pendingUser.fatherName,
      universityOrCollege: pendingUser.universityOrCollege,
      isEmailVerified: true, // Mark as verified now
    });
    // IMPORTANT: The User model's pre-save hook will try to re-hash 'password'.
    // Since we are setting 'password' with an already hashed value,
    // we need to tell mongoose it's not modified in the traditional sense if we want to avoid double hashing,
    // OR ensure the pre-save hook only runs if `this.isModified('password')` and the password field is not already a hash.
    // A simpler way for this flow: User model's pre-save hook hashes `password`.
    // So, we should pass the PLAIN password again from client, or store plain password in PendingUser (less secure).
    // Let's assume client resends plain password and User model handles hashing.

    const finalNewUser = new User({
      fullName: fullName || pendingUser.fullName, // Prioritize fresh data from client if available
      email: email, // From request
      password: password, // From request, will be hashed by User model's pre-save
      phoneNumber: phoneNumber || pendingUser.phoneNumber,
      fatherName: fatherName || pendingUser.fatherName,
      universityOrCollege:
        universityOrCollege || pendingUser.universityOrCollege || "",
      isEmailVerified: true,
    });

    await finalNewUser.save();

    // Delete the pending user record as it's now processed
    await PendingUser.deleteOne({ _id: pendingUser._id });

    createSendToken(finalNewUser, 201, res); // 201 for resource created
  } catch (error) {
    console.error(
      "Verify OTP & Complete Registration Controller Error:",
      error
    );
    if (error.code === 11000) {
      return res
        .status(400)
        .json({
          status: "fail",
          message:
            "This email has just been registered. Please try logging in.",
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
        message: "Something went wrong during account finalization.",
        errorDetails: error.message,
      });
  }
};

// --- LOGIN --- (Remains the same, checking isEmailVerified)
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

// --- FORGOT/RESET PASSWORD --- (Remains largely the same)
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

// Remove or repurpose the old verifyEmailOtp if verifyOtpAndCompleteRegistration covers all cases
// exports.verifyEmailOtp = ... (old function)
