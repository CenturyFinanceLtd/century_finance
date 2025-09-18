import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch } from '../utils/api';
import Footer from '../components/footer';
import './signup.scss';

function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState('request');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const requestOtp = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await apiFetch('/api/customers/forgot/request', { method: 'POST', body: { email } });
      setStep('reset');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) return setError('Passwords do not match');
    try {
      await apiFetch('/api/customers/forgot/reset', { method: 'POST', body: { email, otp, password } });
      alert('Password reset successful. Please sign in.');
      navigate('/signin');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <section className="tf-section auth-section">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="auth-card">
                <div className="auth-header">
                  <h2>Forgot Password</h2>
                  <p>We’ll send a one-time code to your email.</p>
                </div>

                <div className="auth-steps">
                  <div className={`step ${step === 'request' ? 'active' : ''}`}>
                    <span className="dot">1</span>
                    <span className="text">Request</span>
                  </div>
                  <div className={`step ${step === 'reset' ? 'active' : ''}`}>
                    <span className="dot">2</span>
                    <span className="text">Reset</span>
                  </div>
                </div>

                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                {step === 'request' && (
                  <form className="auth-form" onSubmit={requestOtp}>
                    <fieldset>
                      <label>Email address</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" />
                    </fieldset>
                    <div className="actions between">
                      <Link className="text-link" to="/signin">Back to sign in</Link>
                      <button className="tf-button submit" disabled={loading} type="submit">{loading ? 'Sending...' : 'Send OTP'}</button>
                    </div>
                  </form>
                )}

                {step === 'reset' && (
                  <form className="auth-form" onSubmit={resetPassword}>
                    <fieldset>
                      <label>Email address</label>
                      <input value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" placeholder="Enter your email" />
                    </fieldset>
                    <fieldset>
                      <label>Email OTP</label>
                      <input value={otp} onChange={(e)=>setOtp(e.target.value)} required type="text" placeholder="Enter OTP" />
                    </fieldset>
                    <fieldset>
                      <label>New password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="New password" />
                    </fieldset>
                    <fieldset>
                      <label>Confirm password</label>
                      <input value={confirm} onChange={(e)=>setConfirm(e.target.value)} required type="password" placeholder="Confirm password" />
                    </fieldset>
                    <div className="actions between">
                      <button className="tf-button alt" type="button" onClick={requestOtp} disabled={loading}>Resend OTP</button>
                      <button className="tf-button submit" type="submit">Reset Password</button>
                    </div>
                  </form>
                )}

                <div className="auth-footer">
                  Remembered it? <Link to="/signin">Sign in</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ForgotPassword;
