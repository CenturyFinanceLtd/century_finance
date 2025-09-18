const { haveGraphEnv, sendGraphEmail } = require('./graphMailer');

async function sendEmail(to, subject, html) {
  // Prefer Graph (modern auth)
  if (haveGraphEnv()) {
    try {
      await sendGraphEmail(to, subject, html);
      return { status: 'sent_via_graph' };
    } catch (e) {
      console.warn(`[OTP] Graph send failed: ${e.message}`);
    }
  }

  // Nothing configured
  console.warn('[OTP] No email provider configured; email not sent.');
  throw new Error('Email delivery not configured');
}

async function sendEmailOtp(email, otp) {
  const subject = 'Your Verification Code';
  const html = `<p>Your OTP is: <b>${otp}</b>. It expires in 10 minutes.</p>`;
  return sendEmail(email, subject, html);
}

module.exports = { sendEmailOtp };
