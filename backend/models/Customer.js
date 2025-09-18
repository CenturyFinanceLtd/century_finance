const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  location: { type: String, required: true },
  occupation: { type: String, enum: ['job', 'student'], required: true },
  company: { type: String },
  college: { type: String },
  passwordHash: { type: String },

  isEmailVerified: { type: Boolean, default: false },
  isMobileVerified: { type: Boolean, default: false },

  emailOtpHash: { type: String },
  emailOtpExpiresAt: { type: Date },
  mobileOtpHash: { type: String },
  mobileOtpExpiresAt: { type: Date },

  resetOtpHash: { type: String },
  resetOtpExpiresAt: { type: Date },
}, { timestamps: true, collection: 'customer' });

customerSchema.methods.setPassword = async function(password) {
  const saltRounds = 10;
  this.passwordHash = await bcrypt.hash(password, saltRounds);
};

customerSchema.methods.comparePassword = async function(password) {
  if (!this.passwordHash) return false;
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = mongoose.model('Customer', customerSchema);

