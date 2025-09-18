import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { apiFetch } from "../utils/api";
import Footer from "../components/footer";
import "./signup.scss";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await apiFetch("/api/customers/login", {
        method: "POST",
        body: { email, password },
      });
      login(res.user, res.token);
      navigate("/");
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
            <div className="col-xl-5 col-lg-6 col-md-10">
              <div className="auth-card">
                <div className="auth-header">
                  <h2>Sign In</h2>
                  <p>Welcome back! Please enter your details.</p>
                </div>

                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <form className="auth-form" onSubmit={onSubmit}>
                  <fieldset>
                    <label>Email address</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      type="email"
                      placeholder="Email address"
                    />
                  </fieldset>
                  <fieldset>
                    <label>Password</label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      type="password"
                      placeholder="Password"
                    />
                  </fieldset>
                  <div className="actions between">
                    <Link className="text-link" to="/forgot">
                      Forgot your password?
                    </Link>
                    <button
                      className="tf-button submit"
                      disabled={loading}
                      type="submit"
                    >
                      {loading ? "Signing in..." : "Sign In"}
                    </button>
                  </div>
                </form>

                <div className="auth-footer">
                  New here? <Link to="/signup">Sign up for free</Link>
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

export default Login;
