import React from "react";
import abimg from "../../../images/about/premium.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PremiumSubscriptionPlan = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
                <div className="back-shape">
                  <img src={shape} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>Premium Subscription Plan</small>
                  <h2>Smart Trading Starts with Smart Decisions</h2>
                </div>
                <p>
                  The <strong>Premium Subscription Plan</strong> is a high-value, multi-market advisory service
                  designed for traders and investors who want <strong>daily, expert-driven market insights</strong> delivered
                  with clarity and precision.
                </p>
                <p>
                  For just ₹17,000, subscribers receive:
                  <ul>
                    <li>📈 45 expert calls across 30 active market days</li>
                    <li>🌐 Coverage in Equity, Commodity, and Crypto/Foreign Markets</li>
                    <li>🧠 Market-tested strategies and risk-managed recommendations</li>
                  </ul>
                </p>
                <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">
                  Pay Now ₹17,000/-
                </Link>
              </div>
            </div>
          </div>

          {/* Important Alert */}
          <div className="alert alert-danger text-center fw-bold py-3 px-4 mt-5 shadow-sm rounded">
            🚨 <strong>Important:</strong> This Premium Plan is built for <span className="text-warning">serious traders</span>
            and includes <span className="text-success">daily expert insights</span>, <span className="text-primary">risk-managed calls</span>, and
            <span className="text-info"> full market coverage</span> (Equity + Commodity + Crypto).
          </div>

          {/* Highlights Cards */}
          <div className="row g-4 mt-4">

            {/* Equity */}
            <div className="col-md-4">
              <div className="p-4 bg-primary text-white rounded shadow h-100">
                <h5 className="fw-bold">📊 Equity Calls</h5>
                <p>24 high-potential trades including Nifty, Sensex, Bank Nifty & more.</p>
                <p className="mb-0"><strong>Best for:</strong> Day & swing traders</p>
              </div>
            </div>

            {/* Commodity */}
            <div className="col-md-4">
              <div className="p-4 bg-success text-white rounded shadow h-100">
                <h5 className="fw-bold">⚖️ Commodity Calls</h5>
                <p>15 focused alerts for Gold, Crude, Silver, Copper & more.</p>
                <p className="mb-0"><strong>Great for:</strong> Global commodity investors</p>
              </div>
            </div>

            {/* Crypto */}
            <div className="col-md-4">
              <div className="p-4 bg-dark text-white rounded shadow h-100">
                <h5 className="fw-bold">🌍 Crypto/Foreign Markets</h5>
                <p>6 smart picks including Bitcoin, Ethereum, Solana & Particle.</p>
                <p className="mb-0"><strong>Ideal for:</strong> Web3 traders & DeFi enthusiasts</p>
              </div>
            </div>

            {/* Why Choose */}
            <div className="col-md-12">
              <div className="p-4 bg-warning text-dark rounded shadow mt-4">
                <h5 className="fw-bold">💼 Why Choose the Premium Plan?</h5>
                <ul className="mb-0">
                  <li>✔️ Complete coverage: Equity + Commodity + Crypto</li>
                  <li>✔️ SEBI-certified research team</li>
                  <li>✔️ Clear entry/exit/stop-loss with every call</li>
                  <li>✔️ Affordable expert-grade trading guidance</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSubscriptionPlan;
