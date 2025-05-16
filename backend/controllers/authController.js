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

    // Check if email is already registered AND verified in the main User table
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

    // Check if email exists in the main User table but is NOT verified
    const existingUnverifiedUser = await User.findOne({
      email,
      isEmailVerified: false,
    });
    if (existingUnverifiedUser) {
      console.log(
        `Email ${email} exists in User table but not verified. Resending OTP to existing User record.`
      );
      const newOtp = existingUnverifiedUser.generateEmailVerificationOtp(); // Method on User model
      await existingUnverifiedUser.save({ validateBeforeSave: true });

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
        data: {
          email: existingUnverifiedUser.email,
          action: "verifyExistingUser",
        },
      });
    }

    // If email does not exist in User table at all, it's a completely new registration attempt.
    console.log(
      `New registration attempt for ${email}. Generating OTP and storing temporarily in PendingUser.`
    );
    const plainOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedOtpForPending = await bcrypt.hash(plainOtp, salt);

    await PendingUser.deleteMany({ email }); // Remove any old pending entries for this email

    const pendingUser = new PendingUser({
      email,
      otp: hashedOtpForPending,
      otpExpires: Date.now() + 15 * 60 * 1000, // OTP valid for 15 minutes
      fullName,
      password, // Store plain password temporarily; User model will hash it upon final creation
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
      await PendingUser.deleteOne({ _id: pendingUser._id });
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
      data: { email, action: "verifyNewUser" },
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
 * @desc    Verify OTP. If for a new user, creates User record. If for existing unverified, verifies them.
 * @route   POST /api/auth/verify-otp
 * @access  Public
 */
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res
        .status(400)
        .json({ status: "fail", message: "Email and OTP are required." });
    }

    // Scenario 1: Check if this OTP is for an existing but unverified user in the MAIN User table
    let user = await User.findOne({
      email,
      emailVerificationOtp: otp, // User model stores plain OTP for its own verification flow
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
      createSendToken(user, 200, res);
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

    const isOtpValid = await pendingUser.compareOtp(otp);

    if (!isOtpValid) {
      return res
        .status(400)
        .json({
          status: "fail",
          message: "Invalid OTP. Please check and try again.",
        });
    }

    // OTP is valid for a new registration. Create the user in the main User collection.
    console.log(
      `OTP verified for new user ${email}. Creating user in main User table.`
    );

    const newUser = new User({
      fullName: pendingUser.fullName,
      email: pendingUser.email,
      password: pendingUser.password, // Pass the plain password; User model's pre-save hook will hash it
      phoneNumber: pendingUser.phoneNumber,
      fatherName: pendingUser.fatherName,
      universityOrCollege: pendingUser.universityOrCollege,
      isEmailVerified: true, // Mark as verified now
    });
    await newUser.save();

    await PendingUser.deleteOne({ _id: pendingUser._id }); // Delete the pending user record

    createSendToken(newUser, 201, res); // 201 for resource created
  } catch (error) {
    console.error("Verify OTP Controller Error:", error);
    if (error.code === 11000) {
      // Duplicate key error if email somehow got created in User table
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

// --- LOGIN --- (Remains the same)
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
    console.log(`User ${user.email} Signed up successfully.`);
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
      passwordResetOtp: otp, // Assumes User model stores plain OTP for reset
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
      passwordResetOtp: otp, // Assumes User model stores plain OTP for reset
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
    user.password = password; // Pre-save hook in User model will hash
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
      if (universityOrCollege !== undefined) fieldsToUpdate.universityOrCollege = universityOrCollege;


      if (Object.keys(fieldsToUpdate).length === 0) {
          return res.status(400).json({ status: 'fail', message: 'Please provide at least one field to update.' });
      }

      const updatedUser = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
          new: true, // Return the modified document rather than the original
          runValidators: true, // Ensure schema validations are run
      }).select('-password'); // Exclude password from the returned user object

      if (!updatedUser) {
          return res.status(404).json({ status: 'fail', message: 'User not found.' });
      }

      res.status(200).json({
          status: 'success',
          data: {
              user: updatedUser,
          },
      });
  } catch (error) {
      console.error("Update Details Controller Error:", error);
      if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(val => val.message);
          return res.status(400).json({ status: 'fail', message: messages.join('. ') });
      }
      res.status(500).json({ status: 'error', message: 'Something went wrong updating details.', errorDetails: error.message });
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
          return res.status(400).json({ status: 'fail', message: 'Please provide current password, new password, and confirm new password.' });
      }

      if (newPassword !== confirmNewPassword) {
          return res.status(400).json({ status: 'fail', message: 'New passwords do not match.' });
      }

      if (newPassword.length < 6) {
          return res.status(400).json({ status: 'fail', message: 'New password must be at least 6 characters long.' });
      }

      // 1) Get user from collection (req.user is set by protect middleware, but doesn't have password)
      const user = await User.findById(req.user.id).select('+password');

      // 2) Check if posted current password is correct
      if (!user || !(await user.comparePassword(currentPassword))) {
          return res.status(401).json({ status: 'fail', message: 'Your current password is incorrect.' });
      }

      // 3) If so, update password
      user.password = newPassword; // The pre('save') hook in User model will hash it
      await user.save(); // This will trigger the pre-save hook

      // 4) Log user in, send new JWT
      createSendToken(user, 200, res);

  } catch (error) {
      console.error("Update Password Controller Error:", error);
      if (error.name === 'ValidationError') {
          const messages = Object.values(error.errors).map(val => val.message);
          return res.status(400).json({ status: 'fail', message: messages.join('. ') });
      }
      res.status(500).json({ status: 'error', message: 'Something went wrong updating password.', errorDetails: error.message });
  }
};