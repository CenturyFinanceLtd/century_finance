import React from "react";
import abimg from "../../../images/about/premium.png"; // Replace with specific image if needed
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const AdvancePrimePlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert Section */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
            🚀 <strong>Advance Prime Plan</strong> – ₹37,000/- Paid
          </div>

          {/* 🌟 Hero Info */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Advance Prime Plan – Strategic Market Mastery for 4 Full Months</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹37,000/-</p>
            <p><strong>Validity:</strong> 4 Months (Market Days)</p>
            <p><strong>Total Signals:</strong> Unlimited Equity, 40 Commodity, 25 Crypto + Advanced Technical Calls</p>
            <blockquote className="blockquote">✅ <em>"It’s more than advisory. It’s your financial growth engine."</em></blockquote>
          </div>

          {/* 📌 What Is It */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Advance Prime Plan?</h4>
            <p>
              The <strong>Advance Prime Plan</strong> is Century Finance's elite-tier subscription offering high-frequency, cross-market insights. It's ideal for experienced traders, investors, and portfolio managers wanting 4-month access to expert-level research, live technical signals, and multi-asset strategy.
            </p>
          </div>

          {/* 👥 Who Is It For */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>Professional Traders & HNIs with capital-growth focus</li>
              <li>Portfolio Managers needing deep market coverage</li>
              <li>Advanced Traders in Equity, Commodity & Crypto</li>
              <li>Technical Analysts & Chart-Focused Investors</li>
              <li>Financial Learners seeking mentorship and tools</li>
            </ul>
          </div>

          {/* 📊 Equity Segment */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity Segment – Unlimited Calls</h4>
            <ul>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Nifty</li>
              <li>Nifty Fifty</li>
              <li>Fin Nifty</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">Full real-time guidance for intraday and swing traders who thrive on active signals.</p>
          </div>

          {/* ⚖️ Commodity Segment */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Segment – 40 Strategic Calls</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">Perfect for commodity investors using macro trends and technicals.</p>
          </div>

          {/* 🌍 Crypto Segment */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Crypto/Foreign Market – 25 Curated Calls</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Focused calls for Web3 investors and digital asset enthusiasts.</p>
          </div>

          {/* 🧠 Technical + Bonus Tools */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Advanced Technical Support + Bonus Strategy</h4>
            <ul>
              <li>Advanced Chart-Based Daily Analysis</li>
              <li>Pre-Breakout, RSI, Fibonacci Alerts</li>
              <li>Support/Resistance Strategies</li>
              <li>Mutual Funds & SGB Planning</li>
              <li>MTF Advisory + Bank Index Trends</li>
            </ul>
          </div>

          {/* 💼 Why Choose */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold">💼 Why Choose the Advance Prime Plan?</h4>
            <ul>
              <li>✔️ 4 Months of full-spectrum market coverage</li>
              <li>✔️ Unlimited Equity Calls + 65 Multi-Asset Picks</li>
              <li>✔️ Daily technical breakouts and chart alerts</li>
              <li>✔️ Personal growth with portfolio tools & analysis</li>
              <li>✔️ For traders who want more than just signals</li>
            </ul>
          </div>

          

          {/* ✅ Final CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "It’s not just a subscription — it’s your strategic edge, technical toolkit, and trading partner in one."
            </blockquote>
            <h5 className="text-warning">📢 Take Charge of Your Financial Future</h5>
            <p>
              Join the <strong>Advance Prime Plan</strong> now and unlock everything from expert trading signals to premium tools and long-term growth strategies.
            </p>
            <Link onClick={ClickHandler} to="/about" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹37,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvancePrimePlan;
