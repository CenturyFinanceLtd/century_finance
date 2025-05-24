import React from "react";
import abimg from "../../../images/about/premium.png"; // Replace with elite-specific image if needed
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const EliteStockSubscriptionPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert Box */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
            👑 <strong>Elite Stock Subscription Plan</strong> – ₹55,000/- Paid
          </div>

          {/* 🌟 Intro */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Premium Market Intelligence for 9 Months of Elite Trading</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹55,000/-</p>
            <p><strong>Validity:</strong> 9 Months (Only Market Days)</p>
            <p><strong>Total Signals:</strong> Unlimited Equity & Commodity + 65 Crypto/Foreign Calls</p>
            <blockquote className="blockquote">✅ <em>"This plan isn't just advanced—it’s elite."</em></blockquote>
          </div>

          {/* 📌 Plan Overview */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Elite Stock Subscription Plan?</h4>
            <p>
              The <strong>Elite Stock Subscription Plan</strong> is the most comprehensive and long-term advisory plan by Century Finance—ideal for high-frequency traders, institutional clients, and strategic portfolio managers looking for continuous edge across all markets.
            </p>
          </div>

          {/* 👤 Target Audience */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>✅ Institutional Traders & HNIs</li>
              <li>✅ Daily Traders requiring ongoing expert alerts</li>
              <li>✅ Brokers & Advisors handling multiple portfolios</li>
              <li>✅ Crypto & Web3 Investors</li>
              <li>✅ Strategic Investors focused on long-term growth</li>
            </ul>
          </div>

          {/* 📈 Equity Section */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity – Unlimited Calls</h4>
            <ul>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Nifty</li>
              <li>Nifty Fifty</li>
              <li>Fin Nifty</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">No limits—multiple daily signals tailored for live equity trading opportunities.</p>
          </div>

          {/* ⚖️ Commodity Section */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity – Unlimited Calls</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">Frequent, technical and news-supported commodity calls for precision trades.</p>
          </div>

          {/* 🌍 Crypto/Foreign Section */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Crypto/Foreign Market – 65 High-Value Calls</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Ideal for digital asset traders looking for expert-led blockchain investment calls.</p>
          </div>

          {/* 🧠 Technical Support */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Advanced Technical Call Support</h4>
            <ul>
              <li>RSI, MACD, volume zones</li>
              <li>Breakout alerts and reversal detection</li>
              <li>Pre-market and swing setups</li>
              <li>Chart-based momentum tracking</li>
            </ul>
          </div>

          {/* 📘 Bonus Advisory */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">Bonus Financial Insights</h4>
            <ul>
              <li>Support & Resistance Mastery</li>
              <li>Mutual Fund Recommendations</li>
              <li>SGB Investment Strategy</li>
              <li>Sector-Based BANKex Advisory</li>
              <li>MTF Borrowing Plans & Margin Use</li>
            </ul>
          </div>

          {/* 💎 Benefits */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold">💎 Why Choose the Elite Plan?</h4>
            <ul>
              <li>✔️ 9 Months of non-stop, full-access advisory</li>
              <li>✔️ Unlimited calls across equity and commodities</li>
              <li>✔️ 65 premium crypto/foreign trades</li>
              <li>✔️ Daily technical indicators & risk alerts</li>
              <li>✔️ Deep financial support tools</li>
            </ul>
          </div>

          

          {/* ✅ Final CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Dominate Equity. Master Commodities. Conquer Crypto."
            </blockquote>
            <h5 className="text-warning">🚀 Ready to Trade Like an Elite?</h5>
            <p>
              Invest in the <strong>Elite Stock Subscription Plan</strong> for ₹55,000 – and enjoy 9 full months of unmatched professional-grade trading insights.
            </p>
            <Link onClick={ClickHandler} to="/about" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹55,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EliteStockSubscriptionPlan;
