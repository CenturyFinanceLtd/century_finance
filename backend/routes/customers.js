const express = require('express');
const bcrypt = require('bcryptjs');
const Customer = require('../models/Customer');
const { authRequired, signToken } = require('../middleware/auth');
const { sendEmailOtp } = require('../utils/notify');
const { checkAndRecord } = require('../utils/rateLimiter');

const router = express.Router();

const otpExpiryMinutes = 10;

const maskEmail = (email) => {
  const [user, domain] = email.split('@');
  const maskedUser = user.length <= 2 ? user[0] + '*' : user[0] + '***' + user[user.length - 1];
  return `${maskedUser}@${domain}`;
};

// Mobile OTP flow removed; keeping email-only verification.

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

async function hashValue(value) {
  const saltRounds = 10;
  return bcrypt.hash(value, saltRounds);
}

async function compareHash(value, hash) {
  return bcrypt.compare(value, hash || '');
}

// POST /api/customers/register/initiate
router.post('/customers/register/initiate', async (req, res) => {
  try {
    const { name, email, mobile, location, occupation, company, college } = req.body;
    if (!name || !email || !mobile || !location || !occupation) return res.status(400).json({ error: 'Missing fields' });
    const rl = checkAndRecord(`register:${email.toLowerCase()}`, { windowMs: 60 * 60 * 1000, max: 5, minIntervalMs: 60 * 1000 });
    if (!rl.allowed) return res.status(429).json({ error: rl.reason });

    const existing = await Customer.findOne({ $or: [{ email }, { mobile }] });
    if (existing && existing.passwordHash) {
      return res.status(400).json({ error: 'User already exists. Please sign in.' });
    }

    const emailOtp = generateOtp();

    const payload = {
      name, email, mobile, location, occupation,
      company: occupation === 'job' ? company : undefined,
      college: occupation === 'student' ? college : undefined,
      isEmailVerified: false,
      emailOtpHash: await hashValue(emailOtp),
      emailOtpExpiresAt: new Date(Date.now() + otpExpiryMinutes * 60 * 1000),
      // mobile OTP removed
    };

    let customer;
    if (existing) {
      Object.assign(existing, payload);
      customer = await existing.save();
    } else {
      customer = await Customer.create(payload);
    }

    // Send Email OTP only
    await sendEmailOtp(email, emailOtp);

    return res.json({ userId: customer._id, emailMasked: maskEmail(email) });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/customers/verify/email
router.post('/customers/verify/email', async (req, res) => {
  try {
    const { userId, otp } = req.body;
    const customer = await Customer.findById(userId);
    if (!customer) return res.status(404).json({ error: 'User not found' });
    if (!customer.emailOtpHash || !customer.emailOtpExpiresAt) return res.status(400).json({ error: 'No OTP to verify' });
    if (customer.emailOtpExpiresAt < new Date()) return res.status(400).json({ error: 'OTP expired' });
    const ok = await compareHash(otp, customer.emailOtpHash);
    if (!ok) return res.status(400).json({ error: 'Invalid OTP' });
    customer.isEmailVerified = true;
    customer.emailOtpHash = undefined;
    customer.emailOtpExpiresAt = undefined;
    await customer.save();
    return res.json({ success: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Mobile OTP verification removed

// POST /api/customers/verify/resend/email
router.post('/customers/verify/resend/email', async (req, res) => {
  try {
    const { userId } = req.body;
    const customer = await Customer.findById(userId);
    if (!customer) return res.status(404).json({ error: 'User not found' });
    const rl = checkAndRecord(`resend:${customer.email.toLowerCase()}`, { windowMs: 60 * 60 * 1000, max: 5, minIntervalMs: 60 * 1000 });
    if (!rl.allowed) return res.status(429).json({ error: rl.reason });
    const emailOtp = generateOtp();
    customer.emailOtpHash = await hashValue(emailOtp);
    customer.emailOtpExpiresAt = new Date(Date.now() + otpExpiryMinutes * 60 * 1000);
    await customer.save();
    await sendEmailOtp(customer.email, emailOtp);
    return res.json({ message: 'Email OTP resent' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// Mobile OTP resend removed

// POST /api/customers/set-password
router.post('/customers/set-password', async (req, res) => {
  try {
    const { userId, password } = req.body;
    const customer = await Customer.findById(userId);
    if (!customer) return res.status(404).json({ error: 'User not found' });
    if (!customer.isEmailVerified) return res.status(400).json({ error: 'Verify email first' });

    await customer.setPassword(password);
    await customer.save();

    const token = signToken({ id: customer._id, name: customer.name, email: customer.email });
    return res.json({
      token,
      user: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location,
        occupation: customer.occupation,
        company: customer.company,
        college: customer.college,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/customers/login
router.post('/customers/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer || !(await customer.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = signToken({ id: customer._id, name: customer.name, email: customer.email });
    return res.json({
      token,
      user: {
        id: customer._id,
        name: customer.name,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location,
        occupation: customer.occupation,
        company: customer.company,
        college: customer.college,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/customers/forgot/request
router.post('/customers/forgot/request', async (req, res) => {
  try {
    const { email } = req.body;
    const rl = checkAndRecord(`forgot:${(email||'').toLowerCase()}`, { windowMs: 60 * 60 * 1000, max: 5, minIntervalMs: 60 * 1000 });
    if (!rl.allowed) return res.status(429).json({ error: rl.reason });
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(200).json({ message: 'If the email exists, OTP was sent' });
    const otp = generateOtp();
    customer.resetOtpHash = await hashValue(otp);
    customer.resetOtpExpiresAt = new Date(Date.now() + otpExpiryMinutes * 60 * 1000);
    await customer.save();
    await sendEmailOtp(email, otp);
    return res.json({ message: 'OTP sent to email' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/customers/forgot/reset
router.post('/customers/forgot/reset', async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(404).json({ error: 'User not found' });
    if (!customer.resetOtpHash || !customer.resetOtpExpiresAt) return res.status(400).json({ error: 'No reset OTP' });
    if (customer.resetOtpExpiresAt < new Date()) return res.status(400).json({ error: 'OTP expired' });
    const ok = await compareHash(otp, customer.resetOtpHash);
    if (!ok) return res.status(400).json({ error: 'Invalid OTP' });
    await customer.setPassword(password);
    customer.resetOtpHash = undefined;
    customer.resetOtpExpiresAt = undefined;
    await customer.save();
    return res.json({ message: 'Password reset successful' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/customers/me
router.get('/customers/me', authRequired, async (req, res) => {
  try {
    const customer = await Customer.findById(req.user.id);
    if (!customer) return res.status(404).json({ error: 'User not found' });
    return res.json({ user: {
      id: customer._id,
      name: customer.name,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location,
      occupation: customer.occupation,
      company: customer.company,
      college: customer.college,
    }});
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/customers/change-password
router.post('/customers/change-password', authRequired, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) return res.status(400).json({ error: 'Missing fields' });
    const customer = await Customer.findById(req.user.id);
    if (!customer) return res.status(404).json({ error: 'User not found' });
    const ok = await customer.comparePassword(currentPassword);
    if (!ok) return res.status(400).json({ error: 'Current password is incorrect' });
    // Minimal strength check
    if (newPassword.length < 8) return res.status(400).json({ error: 'Password must be at least 8 characters' });
    await customer.setPassword(newPassword);
    await customer.save();
    return res.json({ message: 'Password changed successfully' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
