const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Full name is required."] },
  universityName: {
    type: String,
    required: [true, "University name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, "Mobile number is required."],
  },
  degree: { type: String, required: [true, "Degree is required."] },
  year: { type: String, required: [true, "Year of study is required."] },
  branch: { type: String, required: [true, "Branch is required."] },
  address: { type: String, required: [true, "Address is required."] },
  planName: { type: String, default: "Basic Plan" },
  transactionId: {
    type: String,
    required: [true, "Transaction ID is required."],
  },
  transactionScreenshotUrl: { type: String, required: true },
  transactionScreenshotId: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
});

// This will save to the 'trainingplan_registration' collection in MongoDB
const Registration = mongoose.model(
  "TrainingPlanRegistration",
  registrationSchema,
  "trainingplan_registration"
);

module.exports = Registration;
