import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { apiFetch } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';
import './profile.scss';

function Profile() {
  const { user, token, logout, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pwError, setPwError] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const initial = useMemo(() => (user?.name ? user.name.trim().charAt(0).toUpperCase() : 'U'), [user]);

  useEffect(() => {
    if (!token) {
      navigate('/signin');
      return;
    }
    const fetchMe = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await apiFetch('/api/customers/me', { token });
        setUser(res.user);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMe();
  }, [token, navigate, setUser]);

  const onLogout = () => {
    logout();
    navigate('/');
  };

  if (!token) return null;

  return (
    <div>
      <PageTitle title="Profile" />
      <section className="tf-section profile-page">
        <div className="tf-container">
          {loading && <p>Loading...</p>}
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {user && (
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-12">
                <div className="profile-card">
                  <div className="avatar" aria-hidden>{initial}</div>
                  <h3 className="name">{user.name}</h3>
                  <p className="email">{user.email}</p>

                  <ul className="profile-meta">
                    {user.mobile && (
                      <li>
                        <span className="label">Mobile</span>
                        <span className="value">{user.mobile}</span>
                      </li>
                    )}
                    {user.location && (
                      <li>
                        <span className="label">Location</span>
                        <span className="value">{user.location}</span>
                      </li>
                    )}
                    {user.occupation && (
                      <li>
                        <span className="label">Occupation</span>
                        <span className="value text-capitalize">{user.occupation}</span>
                      </li>
                    )}
                    {user.company && (
                      <li>
                        <span className="label">Company</span>
                        <span className="value">{user.company}</span>
                      </li>
                    )}
                    {user.college && (
                      <li>
                        <span className="label">College</span>
                        <span className="value">{user.college}</span>
                      </li>
                    )}
                  </ul>

                  <div className="actions">
                    <button className="tf-button w-100" onClick={onLogout}><i className="icon-fl-logout" style={{marginRight:8}}></i>Sign out</button>
                  </div>
                </div>
              </div>

              <div className="col-xl-8 col-lg-7 col-md-12">
                <div className="security-card">
                  <h4>Change Password</h4>
                  <p className="hint">Use a strong password with upper, lower, number, and symbol.</p>
                  {pwError && <div className="alert alert-danger" role="alert">{pwError}</div>}
                  {pwMessage && <div className="alert alert-success" role="alert">{pwMessage}</div>}
                  <form className="profile-form" onSubmit={async (e) => {
                    e.preventDefault();
                    setPwError('');
                    setPwMessage('');
                    if (newPassword !== confirmPassword) {
                      setPwError('New passwords do not match');
                      return;
                    }
                    try {
                      const res = await apiFetch('/api/customers/change-password', {
                        method: 'POST',
                        token,
                        body: { currentPassword, newPassword },
                      });
                      setPwMessage(res.message || 'Password changed successfully');
                      setCurrentPassword('');
                      setNewPassword('');
                      setConfirmPassword('');
                    } catch (err) {
                      setPwError(err.message);
                    }
                  }}>
                    <div className="form-row">
                      <fieldset>
                        <label>Current password</label>
                        <input type="password" value={currentPassword} onChange={(e)=>setCurrentPassword(e.target.value)} required placeholder="Enter current password" />
                      </fieldset>
                    </div>
                    <div className="form-row two-cols">
                      <fieldset>
                        <label>New password</label>
                        <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required placeholder="Create new password" />
                      </fieldset>
                      <fieldset>
                        <label>Confirm new password</label>
                        <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required placeholder="Re-enter new password" />
                      </fieldset>
                    </div>
                    <div className="submit-row">
                      <button className="tf-button submit" type="submit">Update Password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Profile;
