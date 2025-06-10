const mongoose = require("mongoose");

const TrainingRegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    universityName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    degree: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    address: { type: String, required: true },
    planName: { type: String, default: "Basic Plan" },
    transactionId: { type: String, required: true, unique: true },
    transactionScreenshot: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// The third argument specifies the exact collection name in MongoDB
module.exports = mongoose.model(
  "TrainingRegistration",
  TrainingRegistrationSchema,
  "trainingplan_registration"
);
