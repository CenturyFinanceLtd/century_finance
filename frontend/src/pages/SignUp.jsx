import React, { useContext, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { apiFetch } from '../utils/api';
import Footer from '../components/footer';
import './signup.scss';

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  location: '',
  occupation: 'job',
  company: '',
  college: '',
};

function SignUp() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stage, setStage] = useState('details');
  const [userId, setUserId] = useState('');
  const [emailMasked, setEmailMasked] = useState('');
  const [emailOtp, setEmailOtp] = useState('');
  const [resendLoading, setResendLoading] = useState({ email: false });
  const [resendMsg, setResendMsg] = useState({ email: '' });
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const companyOrCollegeRequired = form.occupation === 'job' ? 'company' : 'college';

  const passwordStrong = useMemo(() => {
    // min 8, upper, lower, number, special
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(password);
  }, [password]);

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const startRegistration = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const lastKey = 'register:initiate:last';
      const now = Date.now();
      const last = parseInt(localStorage.getItem(lastKey) || '0', 10);
      const minInterval = 60000; // 60s client-side throttle to avoid 429 bursts
      if (last && now - last < minInterval) {
        const waitMs = minInterval - (now - last);
        const waitSec = Math.ceil(waitMs / 1000);
        throw new Error(`Please wait ${waitSec}s before trying again.`);
      }
      const payload = { ...form };
      if (form.occupation === 'job') delete payload.college; else delete payload.company;
      const res = await apiFetch('/api/customers/register/initiate', { method: 'POST', body: payload });
      setUserId(res.userId);
      setEmailMasked(res.emailMasked || form.email);
      setStage('verify');
      localStorage.setItem(lastKey, String(Date.now()));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyEmail = async () => {
    setError('');
    setLoading(true);
    try {
      await apiFetch('/api/customers/verify/email', { method: 'POST', body: { userId, otp: emailOtp } });
      setEmailVerified(true);
      setStage('password');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // mobile OTP removed

  const goPasswordStage = () => setStage('password');

  const setUserPassword = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) return setError('Passwords do not match');
    if (!passwordStrong) return setError('Password is not strong enough');
    setLoading(true);
    try {
      const res = await apiFetch('/api/customers/set-password', {
        method: 'POST',
        body: { userId, password },
      });
      login(res.user, res.token);
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="tf-section auth-section">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="auth-card" data-stage={stage}>
                <div className="auth-header">
                  <h2>Create Account</h2>
                  <p>Join Century Finance Limited and get started.</p>
                </div>

                <div className="auth-steps">
                  <div className={`step ${stage === 'details' ? 'active' : ''}`}>
                    <span className="dot">1</span>
                    <span className="text">Details</span>
                  </div>
                  <div className={`step ${stage === 'verify' ? 'active' : ''}`}>
                    <span className="dot">2</span>
                    <span className="text">Verify</span>
                  </div>
                  <div className={`step ${stage === 'password' ? 'active' : ''}`}>
                    <span className="dot">3</span>
                    <span className="text">Password</span>
                  </div>
                </div>

                {error && <div className="alert alert-danger" role="alert">{error}</div>}

                {stage === 'details' && (
                  <form className="auth-form" onSubmit={startRegistration}>
                    <fieldset>
                      <label>Full name</label>
                      <input name="name" value={form.name} onChange={onChange} required type="text" placeholder="Full name" />
                    </fieldset>
                    <fieldset>
                      <label>Email address</label>
                      <input name="email" value={form.email} onChange={onChange} required type="email" placeholder="Email address" />
                    </fieldset>
                    <div className="two-cols">
                      <fieldset>
                        <label>Mobile number</label>
                        <input name="mobile" value={form.mobile} onChange={onChange} required type="tel" placeholder="Mobile number" />
                      </fieldset>
                      <fieldset>
                        <label>Current location</label>
                        <input name="location" value={form.location} onChange={onChange} required type="text" placeholder="Current location" />
                      </fieldset>
                    </div>
                    <div className="two-cols">
                      <fieldset>
                        <label>Occupation</label>
                        <div className="select">
                          <select name="occupation" value={form.occupation} onChange={onChange}>
                            <option value="job">Job</option>
                            <option value="student">Student</option>
                          </select>
                        </div>
                      </fieldset>
                      {form.occupation === 'job' ? (
                        <fieldset>
                          <label>Company name</label>
                          <input name="company" value={form.company} onChange={onChange} required type="text" placeholder="Company name" />
                        </fieldset>
                      ) : (
                        <fieldset>
                          <label>College name</label>
                          <input name="college" value={form.college} onChange={onChange} required type="text" placeholder="College name" />
                        </fieldset>
                      )}
                    </div>
                    <div className="actions">
                      <button className="tf-button submit" disabled={loading} type="submit">{loading ? 'Please wait...' : 'Continue'}</button>
                    </div>
                  </form>
                )}

                {stage === 'verify' && (
                  <div className="auth-form">
                    <p className="hint">Enter the OTP sent to your email <strong>({emailMasked})</strong>.</p>
                    <fieldset>
                      <label>Email OTP</label>
                      <input value={emailOtp} onChange={(e)=>setEmailOtp(e.target.value)} type="text" placeholder="Enter email OTP" />
                    </fieldset>
                    <div className="actions two">
                      <button className="tf-button submit" disabled={loading || !emailOtp} onClick={verifyEmail}>Verify Email</button>
                      <button className="tf-button alt" type="button" disabled={resendLoading.email} onClick={async ()=>{
                        setResendMsg((m)=>({...m,email:''}));
                        setResendLoading((s)=>({...s,email:true}));
                        try {
                          const res = await apiFetch('/api/customers/verify/resend/email', { method: 'POST', body: { userId } });
                          setResendMsg((m)=>({...m,email: res.message || 'Email OTP resent'}));
                        } catch (e) {
                          setResendMsg((m)=>({...m,email: e.message}));
                        } finally {
                          setResendLoading((s)=>({...s,email:false}));
                        }
                      }}>{resendLoading.email ? 'Resending...' : 'Resend OTP'}</button>
                    </div>
                    {resendMsg.email && <div className="tiny-msg">{resendMsg.email}</div>}
                  </div>
                )}

                {stage === 'password' && (
                  <form className="auth-form" onSubmit={setUserPassword}>
                    <fieldset>
                      <label>Create a strong password</label>
                      <input value={password} onChange={(e)=>setPassword(e.target.value)} required type="password" placeholder="At least 8 characters, strong" />
                    </fieldset>
                    <fieldset>
                      <label>Confirm password</label>
                      <input value={confirm} onChange={(e)=>setConfirm(e.target.value)} required type="password" placeholder="Re-enter password" />
                    </fieldset>
                    {!passwordStrong && password && (
                      <p className="hint warning">Password must be 8+ chars with upper, lower, number, and symbol.</p>
                    )}
                    <div className="actions">
                      <button className="tf-button submit" disabled={loading} type="submit">{loading ? 'Please wait...' : 'Finish & Sign In'}</button>
                    </div>
                  </form>
                )}

                <div className="auth-footer">
                  Already a user? <Link to="/signin">Sign in</Link>
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

export default SignUp;
