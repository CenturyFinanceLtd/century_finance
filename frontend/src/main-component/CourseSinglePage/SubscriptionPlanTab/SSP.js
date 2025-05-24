import React from "react";
import abimg from "../../../images/about/premium.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PremiumSubscriptionPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert Section */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
            💼 <strong>Premium Subscrpition Plan</strong> – 17,000/- Paid
          </div>

          {/* 🌟 Hero Info */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Premium Subscription Plan – High-Level Advisory Across Markets</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹17,000/-</p>
            <p><strong>Validity:</strong> 30 Active Market Days</p>
            <p><strong>Total Signals Provided:</strong> 45 Expert Calls</p>
            <blockquote className="blockquote">✅ <em>"Smart trading begins with smart insights and expert decisions."</em></blockquote>
          </div>

          {/* 📌 What Is It */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Premium Subscription Plan?</h4>
            <p>
              The <strong>Premium Subscription Plan</strong> is a high-value, multi-market advisory service designed for traders and investors who want <strong>daily, expert-driven market insights</strong> delivered with clarity and precision.
            </p>
          </div>

          {/* 👥 Who Is It For */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>Day & Swing Traders seeking consistent daily guidance</li>
              <li>Busy professionals who prefer ready-to-act signals</li>
              <li>New traders wanting to learn with confidence</li>
              <li>Crypto enthusiasts and diversified investors</li>
              <li>Portfolio builders looking to manage risk across sectors</li>
            </ul>
          </div>

          {/* 📊 Equity Segment */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity Segment – 24 High-Potential Calls</h4>
            <ul>
              <li>Nifty</li>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Fin Nifty</li>
              <li>Nifty 50</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">Best for intraday, swing, and short-term equity investors.</p>
          </div>

          {/* ⚖️ Commodity Segment */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Segment – 15 Targeted Calls</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Crude Oil</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
            </ul>
            <p className="text-muted">Ideal for those investing in global commodity trends.</p>
          </div>

          {/* 🌍 Crypto/Foreign */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Crypto/Foreign Segment – 6 Strategic Picks</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Solana</li>
              <li>Particle Network</li>
            </ul>
            <p className="text-muted">Best suited for Web3 investors and market diversifiers.</p>
          </div>

          {/* 💼 Why Choose */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold">💼 Why Choose the Premium Plan?</h4>
            <ul>
              <li>✔️ Full market coverage: Equity + Commodity + Crypto</li>
              <li>✔️ SEBI-certified research team</li>
              <li>✔️ Daily calls with clear entry/exit/stop-loss</li>
              <li>✔️ Affordable, expert-grade guidance</li>
              <li>✔️ Trusted by traders for performance and reliability</li>
            </ul>
          </div>

          {/* ✅ Final CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Trade with confidence, guided by experts who understand the market pulse."
            </blockquote>
            <h5 className="text-warning">Ready to Level Up Your Trades?</h5>
            <p>
              Secure your spot in our <strong>Premium Plan</strong> and receive professionally curated market calls across 30 days.
            </p>
            <Link onClick={ClickHandler} to="/about" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹17,000/-
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumSubscriptionPlan;
