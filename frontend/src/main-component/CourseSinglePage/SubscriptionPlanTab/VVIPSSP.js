import React from "react";
import abimg from "../../../images/about/learning.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const SuperSubscriptionPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert Section */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
            💎 <strong>Super Subscription Plan</strong> – ₹23,000/- Paid
          </div>

          {/* 🌟 Hero Info */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Super Subscription Plan – Your Ultimate Trading Toolkit for 3 Full Months</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹23,000/-</p>
            <p><strong>Validity:</strong> 3 Months (Market Days)</p>
            <p><strong>Total Signals:</strong> Unlimited Equity, 25 Commodity, 10 Crypto/Foreign</p>
            <blockquote className="blockquote">✅ <em>"It’s not just a plan—it’s your trading partner."</em></blockquote>
          </div>

          {/* 📌 What Is It */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Super Subscription Plan?</h4>
            <p>
              The <strong>Super Subscription Plan</strong> is our highest-tier, most powerful market advisory designed for serious and frequent traders. With unlimited equity calls and focused commodity/crypto guidance, this plan empowers daily market mastery.
            </p>
          </div>

          {/* 👥 Who Is It For */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>High-Volume Traders acting on unlimited stock calls</li>
              <li>Experienced Investors needing cross-market insight</li>
              <li>Financial Professionals tracking market momentum</li>
              <li>Crypto-Curious Investors exploring Web3 assets</li>
              <li>Active Daily Market Watchers seeking constant alerts</li>
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
            <p className="text-muted">Daily or multiple daily signals based on live market conditions and trend shifts.</p>
          </div>

          {/* ⚖️ Commodity Segment */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Segment – 25 Precision Picks</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">High-confidence calls for timing volatile commodity markets.</p>
          </div>

          {/* 🌍 Crypto/Foreign Segment */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Crypto/Foreign Market – 10 Strategic Calls</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Short-term trades and mid-term breakout alerts in top blockchain projects.</p>
          </div>

          {/* 💼 Why Choose */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold">💼 Why Choose the Super Plan?</h4>
            <ul>
              <li>✔️ 3 months of non-stop expert advisory</li>
              <li>✔️ Unlimited equity calls = maximum flexibility</li>
              <li>✔️ Premium research with proactive market alerts</li>
              <li>✔️ Unmatched value for active traders</li>
              <li>✔️ Coverage across stocks, commodities & crypto</li>
            </ul>
          </div>

         

          {/* ✅ Final CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Don’t just trade—trade like a pro with strategic support in every market condition."
            </blockquote>
            <h5 className="text-warning">🚀 Ready to Take Full Control of the Market?</h5>
            <p>
              Join the <strong>Super Subscription Plan</strong> today and unlock <strong>3 months of professional trading guidance</strong> across every major segment.
            </p>
            <Link onClick={ClickHandler} to="" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹23,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SuperSubscriptionPlan;
