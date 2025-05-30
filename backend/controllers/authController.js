// backend/controllers/authController.js
const User = require("../models/User");
const PendingUser = require("../models/PendingUser"); // For temporary storage of new signups
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // For hashing OTP for PendingUser

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
 * @desc    Initiate Signup:
 * 1. Checks if email is already verified in User table -> error.
 * 2. Checks if email is unverified in User table -> resends OTP to that User.
 * 3. If new email -> stores data temporarily in PendingUser, sends OTP.
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

    console.log(`[Signup Attempt] Email: ${email}`);

    // --- Input Validation --- (Looks good)
    if (
      !fullName ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !fatherName
    ) {
      return res.status(400).json({
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
      return res.status(400).json({
        status: "fail",
        message: "Password must be at least 6 characters long.",
      });
    }

    const existingVerifiedUser = await User.findOne({
      email,
      isEmailVerified: true,
    });
    if (existingVerifiedUser) {
      console.log(
        `[Signup Fail] Email ${email} already registered and verified.`
      );
      return res.status(400).json({
        status: "fail",
        message: "This email is already registered and verified. Please login.",
      });
    }

    const existingUnverifiedUser = await User.findOne({
      email,
      isEmailVerified: false,
    });
    if (existingUnverifiedUser) {
      console.log(
        `[Signup Info] Email ${email} exists in User table (unverified). Resending OTP.`
      );
      // CRITICAL: Ensure existingUnverifiedUser.generateEmailVerificationOtp() in User.js:
      // 1. Generates a PLAIN TEXT OTP.
      // 2. Stores this PLAIN TEXT OTP in existingUnverifiedUser.emailVerificationOtp.
      // 3. Sets existingUnverifiedUser.emailVerificationOtpExpires (e.g., Date.now() + 10 * 60 * 1000).
      const newOtp = existingUnverifiedUser.generateEmailVerificationOtp();
      await existingUnverifiedUser.save({ validateBeforeSave: true }); // Ensure save is successful
      console.log(
        `[Signup Info] OTP for existing unverified user ${email}: ${newOtp} (Expires: ${existingUnverifiedUser.emailVerificationOtpExpires})`
      );

      const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${newOtp}\nThis OTP is valid for 10 minutes.`;
      const emailSent = await sendEmail({
        email: existingUnverifiedUser.email,
        subject: "Verify Your Email - Century Finance (New OTP)",
        message,
        html: `<p>Your new One-Time Password (OTP) for Century Finance email verification is: <strong>${newOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
      });

      if (!emailSent) {
        console.error(`[Signup Error] Failed to resend OTP email to ${email}.`);
        return res.status(500).json({
          status: "error",
          message:
            "There was an error resending the verification email. Please try again.",
        });
      }
      return res.status(200).json({
        status: "success",
        message: "This email is pending verification. A new OTP has been sent.",
        data: {
          email: existingUnverifiedUser.email,
          action: "verifyExistingUser",
        },
      });
    }

    console.log(
      `[Signup Info] New registration for ${email}. Storing in PendingUser.`
    );
    const plainOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedOtpForPending = await bcrypt.hash(plainOtp, salt);

    await PendingUser.deleteMany({ email });

    const pendingUser = new PendingUser({
      email,
      otp: hashedOtpForPending, // HASHED OTP for PendingUser
      otpExpires: Date.now() + 15 * 60 * 1000,
      fullName,
      password,
      phoneNumber,
      fatherName,
      universityOrCollege: universityOrCollege || "",
    });
    await pendingUser.save();
    console.log(
      `[Signup Info] OTP for new user ${email}: ${plainOtp} (Hashed: ${hashedOtpForPending}, Expires: ${pendingUser.otpExpires})`
    );

    const message = `Your One-Time Password (OTP) for Century Finance email verification is: ${plainOtp}\nThis OTP is valid for 10 minutes.`;
    const emailSent = await sendEmail({
      email: email,
      subject: "Verify Your Email - Century Finance",
      message,
      html: `<p>Your One-Time Password (OTP) for Century Finance email verification is: <strong>${plainOtp}</strong></p><p>This OTP is valid for 10 minutes.</p>`,
    });

    if (!emailSent) {
      console.error(
        `[Signup Error] Failed to send OTP email to new user ${email}. Rolling back PendingUser.`
      );
      await PendingUser.deleteOne({ _id: pendingUser._id });
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
      data: { email, action: "verifyNewUser" },
    });
  } catch (error) {
    console.error("[Signup Controller Error]:", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong during the signup process.",
      errorDetails: error.message,
    });
  }
};

/**
 * @desc    Verify OTP. If for a new user, creates User record. If for existing unverified, verifies them.
 * @route   POST /api/auth/verify-otp
 * @access  Public
 */
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    console.log(`[Verify OTP Attempt] Email: ${email}, OTP: ${otp}`);

    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and OTP are required." });
    }

    // Scenario 1: Check existing unverified user in User table
    console.log(
      `[Verify OTP] Checking User table for email: ${email} with PLAIN OTP: ${otp}`
    );
    let user = await User.findOne({
      email,
      emailVerificationOtp: otp, // Query expects PLAIN emailVerificationOtp in User model
      emailVerificationOtpExpires: { $gt: Date.now() },
    });

    if (user) {
      // User found matching email, PLAIN OTP, and not expired
      if (!user.isEmailVerified) {
        console.log(
          `[Verify OTP Success] Scenario 1: Verified existing User ${email}.`
        );
        user.isEmailVerified = true;
        user.emailVerificationOtp = undefined;
        user.emailVerificationOtpExpires = undefined;
        await user.save();
        createSendToken(user, 200, res);
        return;
      } else {
        // This case should ideally not be hit if signup logic is correct (prevents signup if already verified)
        console.log(
          `[Verify OTP Info] User ${email} is already verified. Proceeding to login.`
        );
        // Potentially, you could just log them in here if OTP matches an already verified user's last OTP,
        // but current flow is to complete verification.
        // For robustness, you might want to prevent re-verification or handle it differently.
        // For now, let's assume this means they are trying to verify an already verified account.
        // The `signup` flow should prevent reaching here if user is already verified.
        // If they are here, it means `isEmailVerified` was false.
        return res.status(400).json({
          status: "fail",
          message: "This email is already verified. Please login.",
        });
      }
    } else {
      console.log(
        `[Verify OTP] No User found matching email, plain OTP, and expiry. Or user already verified. Checking PendingUser.`
      );
    }

    // Scenario 2: Check new user from PendingUser collection
    console.log(`[Verify OTP] Checking PendingUser table for email: ${email}`);
    const pendingUser = await PendingUser.findOne({
      email,
      otpExpires: { $gt: Date.now() },
    });

    if (!pendingUser) {
      console.log(
        `[Verify OTP Fail] No pending OTP request found for ${email}, or OTP expired (PendingUser).`
      );
      return res.status(400).json({
        status: "fail",
        message:
          "No pending OTP request found for this email, or OTP has expired. Please try signing up again.",
      });
    }
    console.log(
      `[Verify OTP] Found PendingUser for ${email}. Expires: ${pendingUser.otpExpires}. Comparing input OTP with stored HASHED OTP.`
    );

    // CRITICAL: Ensure pendingUser.compareOtp(otp) in PendingUser.js:
    // Compares the PLAIN input 'otp' with the HASHED 'pendingUser.otp'.
    const isOtpValid = await pendingUser.compareOtp(otp);
    console.log(
      `[Verify OTP] OTP for PendingUser ${email} is valid: ${isOtpValid}`
    );

    if (!isOtpValid) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid OTP. Please check and try again.",
      });
    }

    console.log(
      `[Verify OTP Success] Scenario 2: Verified new user ${email} from PendingUser. Creating User record.`
    );
    const newUser = new User({
      fullName: pendingUser.fullName,
      email: pendingUser.email,
      password: pendingUser.password, // User model's pre-save hook should hash this
      phoneNumber: pendingUser.phoneNumber,
      fatherName: pendingUser.fatherName,
      universityOrCollege: pendingUser.universityOrCollege,
      isEmailVerified: true,
    });
    await newUser.save();
    await PendingUser.deleteOne({ _id: pendingUser._id });
    createSendToken(newUser, 201, res);
  } catch (error) {
    console.error("[Verify OTP Controller Error]:", error);
    if (error.code === 11000) {
      return res.status(400).json({
        status: "fail",
        message: "This email has just been registered. Please try logging in.",
      });
    }
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res
        .status(400)
        .json({ status: "fail", message: messages.join(". ") });
    }
    res.status(500).json({
      status: "error",
      message: "Something went wrong during account finalization.",
      errorDetails: error.message,
    });
  }
};

// --- LOGIN --- (Remains the same)
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
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
    console.log(`User ${user.email} Signed up successfully.`);
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("Login Controller Error:", error);
    res.status(500).json({
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
    console.log(`[Forgot Password Attempt] Email: ${email}`);
    if (!email) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide an email address." });
    }
    const user = await User.findOne({ email: email });
    if (!user) {
      console.log(
        `[Forgot Password Info] Attempt for non-existent email: ${email}. Sending generic success.`
      );
      return res.status(200).json({
        status: "success",
        message:
          "If an account with that email exists, a password reset OTP has been sent.",
      });
    }
    if (!user.isEmailVerified) {
      console.log(
        `[Forgot Password Fail] Attempt for unverified email: ${email}.`
      );
      return res.status(400).json({
        status: "fail",
        message:
          "Please verify your email address first before attempting a password reset.",
      });
    }

    // CRITICAL: Ensure user.generatePasswordResetOtp() in User.js:
    // 1. Generates a PLAIN TEXT OTP.
    // 2. Stores this PLAIN TEXT OTP in user.passwordResetOtp.
    // 3. Sets user.passwordResetOtpExpires (e.g., Date.now() + 10 * 60 * 1000).
    const resetOtp = user.generatePasswordResetOtp();
    await user.save({ validateBeforeSave: false }); // Save OTP and expiry
    console.log(
      `[Forgot Password Info] OTP for ${email}: ${resetOtp} (Expires: ${user.passwordResetOtpExpires})`
    );

    const message = `Your One-Time Password (OTP) for Century Finance password reset is: ${resetOtp}\nThis OTP is valid for 10 minutes. If you didn't request this, please ignore this email.`;
    const emailSent = await sendEmail({
      email: user.email,
      subject: "Your Password Reset OTP (valid for 10 min) - Century Finance",
      message,
      html: `<p>Your One-Time Password (OTP) for Century Finance password reset is: <strong>${resetOtp}</strong></p><p>This OTP is valid for 10 minutes. If you didn't request this, please ignore this email.</p>`,
    });

    if (!emailSent) {
      console.error(
        `[Forgot Password Error] Failed to send reset OTP to ${user.email}. Cleaning up OTP fields.`
      );
      user.passwordResetOtp = undefined;
      user.passwordResetOtpExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return res.status(500).json({
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
    console.error("[Forgot Password Controller Error]:", error);
    // OTP cleanup logic in catch block (looks okay)
    if (req.body.email && error.name !== "MongoServerError") {
      /* ... */
    }
    res.status(500).json({
      status: "error",
      message: "Something went wrong.",
      errorDetails: error.message,
    });
  }
};

exports.verifyPasswordResetOtp = async (req, res, next) => {
  try {
    const { email, otp } = req.body;
    console.log(`[Verify Reset OTP Attempt] Email: ${email}, OTP: ${otp}`);

    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: "fail", message: "Please provide email and OTP." });
    }

    console.log(
      `[Verify Reset OTP] Checking User table for email: ${email} with PLAIN OTP: ${otp}`
    );
    const user = await User.findOne({
      email,
      passwordResetOtp: otp, // Query expects PLAIN passwordResetOtp in User model
      passwordResetOtpExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.log(
        `[Verify Reset OTP Fail] OTP invalid or expired for ${email}.`
      );
      // To provide more specific feedback, you could query without the OTP first, then check OTP, then expiry.
      // Example:
      // const userExists = await User.findOne({ email });
      // if (!userExists) { /* message: "No user found..." */ }
      // else if (userExists.passwordResetOtp !== otp) { /* message: "Invalid OTP..." */ }
      // else if (userExists.passwordResetOtpExpires <= Date.now()) { /* message: "OTP expired..." */ }
      return res
        .status(400)
        .json({ status: "fail", message: "OTP is invalid or has expired." });
    }

    console.log(`[Verify Reset OTP Success] OTP verified for ${email}.`);
    // Note: OTP fields are cleared in resetPassword, not here. This is fine.
    res.status(200).json({
      status: "success",
      message: "OTP verified. You can now reset your password.",
    });
  } catch (error) {
    console.error("[Verify Reset OTP Controller Error]:", error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong.",
      errorDetails: error.message,
    });
  }
};

exports.resetPassword = async (req, res, next) => {
  try {
    const { email, otp, password, confirmPassword } = req.body;
    console.log(`[Reset Password Attempt] Email: ${email}`);

    // --- Input Validation --- (Looks good)
    if (!email || !otp || !password || !confirmPassword) {
      return res.status(400).json({
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
      return res.status(400).json({
        status: "fail",
        message: "New password must be at least 6 characters long.",
      });
    }

    console.log(
      `[Reset Password] Checking User table for email: ${email} with PLAIN OTP: ${otp} for reset.`
    );
    const user = await User.findOne({
      email,
      passwordResetOtp: otp, // Query expects PLAIN passwordResetOtp
      passwordResetOtpExpires: { $gt: Date.now() },
    });

    if (!user) {
      console.log(
        `[Reset Password Fail] Invalid/expired OTP or user not found for ${email}.`
      );
      return res.status(400).json({
        status: "fail",
        message:
          "Invalid or expired OTP, or user not found. Please try the forgot password process again.",
      });
    }

    user.password = password; // User model's pre-save hook should hash this
    user.passwordResetOtp = undefined;
    user.passwordResetOtpExpires = undefined;
    await user.save();
    console.log(
      `[Reset Password Success] Password reset for ${user.email}. Logging in.`
    );
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("[Reset Password Controller Error]:", error);
    if (error.name === "ValidationError") {
      /* ... */
    }
    res.status(500).json({
      status: "error",
      message: "Something went wrong resetting password.",
      errorDetails: error.message,
    });
  }
};

// --- NEW FUNCTIONS FOR PROFILE UPDATE ---

/**
 * @desc    Update current logged-in user's details (name, phone, fatherName, college)
 * @route   PATCH /api/auth/update-my-details
 * @access  Protected
 */
exports.updateMyDetails = async (req, res, next) => {
  try {
    const { fullName, phoneNumber, fatherName, universityOrCollege } = req.body;

    // Email cannot be updated here to avoid re-verification complexities in this simple update.
    // Create a separate flow if email change with verification is needed.

    const fieldsToUpdate = {};
    if (fullName) fieldsToUpdate.fullName = fullName;
    if (phoneNumber) fieldsToUpdate.phoneNumber = phoneNumber;
    if (fatherName) fieldsToUpdate.fatherName = fatherName;
    // Allow unsetting universityOrCollege by passing empty string or handle explicitly
    if (universityOrCollege !== undefined)
      fieldsToUpdate.universityOrCollege = universityOrCollege;

    if (Object.keys(fieldsToUpdate).length === 0) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide at least one field to update.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      fieldsToUpdate,
      {
        new: true, // Return the modified document rather than the original
        runValidators: true, // Ensure schema validations are run
      }
    ).select("-password"); // Exclude password from the returned user object

    if (!updatedUser) {
      return res
        .status(404)
        .json({ status: "fail", message: "User not found." });
    }

    res.status(200).json({
      status: "success",
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    console.error("Update Details Controller Error:", error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res
        .status(400)
        .json({ status: "fail", message: messages.join(". ") });
    }
    res.status(500).json({
      status: "error",
      message: "Something went wrong updating details.",
      errorDetails: error.message,
    });
  }
};

/**
 * @desc    Update current logged-in user's password
 * @route   PATCH /api/auth/update-my-password
 * @access  Protected
 */
exports.updateMyPassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      return res.status(400).json({
        status: "fail",
        message:
          "Please provide current password, new password, and confirm new password.",
      });
    }

    if (newPassword !== confirmNewPassword) {
      return res
        .status(400)
        .json({ status: "fail", message: "New passwords do not match." });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        status: "fail",
        message: "New password must be at least 6 characters long.",
      });
    }

    // 1) Get user from collection (req.user is set by protect middleware, but doesn't have password)
    const user = await User.findById(req.user.id).select("+password");

    // 2) Check if posted current password is correct
    if (!user || !(await user.comparePassword(currentPassword))) {
      return res.status(401).json({
        status: "fail",
        message: "Your current password is incorrect.",
      });
    }

    // 3) If so, update password
    user.password = newPassword; // The pre('save') hook in User model will hash it
    await user.save(); // This will trigger the pre-save hook

    // 4) Log user in, send new JWT
    createSendToken(user, 200, res);
  } catch (error) {
    console.error("Update Password Controller Error:", error);
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res
        .status(400)
        .json({ status: "fail", message: messages.join(". ") });
    }
    res.status(500).json({
      status: "error",
      message: "Something went wrong updating password.",
      errorDetails: error.message,
    });
  }
};


// --- PROFILE UPDATE FUNCTIONS --- (Look okay, ensure req.user.id is available from 'protect' middleware)
exports.updateMyDetails = async (req, res, next) => { /* ... */ };
exports.updateMyPassword = async (req, res, next) => { /* ... */ };  