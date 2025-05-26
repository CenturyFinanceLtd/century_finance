import React from "react";
import abimg from "../../../images/about/learning.png"; // Replace with actual image if needed
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const AdvancePremiumPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/*  Alert Box */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
             <strong>Advance Premium Plan</strong> – ₹45,000/- Paid
          </div>

          {/*  Intro */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">The Ultimate Long-Term Investment Advisory for Market Leaders</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹45,000/-</p>
            <p><strong>Validity:</strong> 6 Months (Only Market Days)</p>
            <p><strong>Total Signals:</strong> Unlimited Equity & Commodity + 45 Crypto/Foreign Calls</p>
            <blockquote className="blockquote">✅ <em>"Designed to maximize wealth creation, minimize risk, and support long-term strategic trading."</em></blockquote>
          </div>

          {/*  What is the Plan */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Advance Premium Plan?</h4>
            <p>
              The <strong>Advance Premium Plan</strong> is the most elite, all-inclusive market advisory package by Century Finance,
              offering comprehensive coverage across equities, commodities, and foreign/crypto markets with expert support,
              advanced signals, and exclusive insights.
            </p>
          </div>

          {/*  Who is this for */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>✅ Long-Term Serious Traders</li>
              <li>✅ Equity and Commodity Market Professionals</li>
              <li>✅ Crypto Investors & Blockchain Enthusiasts</li>
              <li>✅ Financial Advisors / Brokers</li>
              <li>✅ High-Net-Worth Individuals (HNIs)</li>
            </ul>
          </div>

          {/*  Equity */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity Coverage – Unlimited Equity Calls</h4>
            <ul>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Nifty</li>
              <li>Nifty Fifty</li>
              <li>Fin Nifty</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">Tailored for intraday, swing, and positional equity traders with unrestricted call frequency.</p>
          </div>

          {/*  Commodity */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Market – Unlimited Commodity Calls</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">Pro-level insights with stop-loss and trend confirmation for maximum impact.</p>
          </div>

          {/*  Crypto/Foreign */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Foreign / Crypto Market – 45 High-Value Calls</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Delivered with technical analysis and risk guidelines for short-term and long-term investors.</p>
          </div>

          {/*  Technical Support */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Advance Technical Call Support</h4>
            <ul>
              <li>Trend lines, price zones, RSI, MACD setups</li>
              <li>Fibonacci levels</li>
              <li>Breakout zone alerts</li>
              <li>Market structure reviews</li>
            </ul>
          </div>

          {/*  Financial Guidance */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">Additional Financial Guidance Included</h4>
            <ul>
              <li>Support and Resistance Guidelines</li>
              <li>Mutual Fund Planning (SIP, Lumpsum, ELSS)</li>
              <li>Sovereign Gold Bond (SGB) Advisory</li>
              <li>BANKex Sector Rotation Strategy</li>
              <li>Margin Trading Facility (MTF) Borrowings Explained</li>
            </ul>
          </div>

          {/*  Benefits */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold"> Why Choose the Advance Premium Plan?</h4>
            <ul>
              <li>✔️ Unlimited Equity & Commodity Calls</li>
              <li>✔️ 45 Exclusive Foreign Market Calls</li>
              <li>✔️ Advanced Technical Tools</li>
              <li>✔️ Bonus Portfolio Advisory</li>
              <li>✔️ 6 Months of Continuous Support</li>
              <li>✔️ All-In-One Research & Support Platform</li>
            </ul>
          </div>

          {/* ❓ FAQ */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info fw-bold">❓ Frequently Asked Questions (FAQs)</h4>
            <ul>
              <li><strong>How often will I receive calls?</strong> — Daily and multiple times per day for equity & commodity.</li>
              <li><strong>Are the calls intraday or positional?</strong> — Both, clearly specified per signal.</li>
              <li><strong>Is this plan beginner-friendly?</strong> — Recommended for experienced traders and serious learners.</li>
              <li><strong>What makes this plan different from Advance Prime?</strong> — Longer validity, more crypto calls, extended advisory support.</li>
              <li><strong>Is personalized assistance available?</strong> — Yes, support is available for portfolio and strategy clarification.</li>
            </ul>
          </div>

          {/* ✅ CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Get full-spectrum support and advanced insights to master every market movement."
            </blockquote>
            <h5 className="text-warning">🚀 Ready to Take Full Control of Your Market Journey?</h5>
            <p>
              Join the <strong>Advance Premium Plan</strong> for ₹45,000 and elevate your trading and investing strategies for the next 6 months.
            </p>
            <Link onClick={ClickHandler} to="" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹45,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancePremiumPlan;
