import React from "react";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BasicPlusPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert Box */}
          <div className="alert alert-danger text-center fw-bold" role="alert">
             <strong>Basic Plus Plan</strong> – ₹14,000/- Paid
          </div>

          {/* 🌟 Intro */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Basic Plus Plan – Smart Market Advisory for Confident Traders</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹14,000/-</p>
            <p><strong>Validity:</strong> 16 Active Market Days</p>
            <p><strong>Total Signals Provided:</strong> 30 Market Calls</p>
            <blockquote className="blockquote">✅ <em>"Success in trading doesn’t come from guesswork — it comes from expert insight."</em></blockquote>
          </div>

          {/* 📌 What is the Plan */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Basic Plus Plan?</h4>
            <p>The <strong>Basic Plus Plan</strong> is a premium market advisory service that offers <strong>30 expert trading calls</strong> across Indian equity, commodities, and international crypto markets – all within just <strong>16 trading days</strong>.</p>
          </div>

          {/* 👤 Who is this for */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>Individual traders who want daily guidance</li>
              <li>Beginners looking to understand where to invest</li>
              <li>Experienced investors who want to save time and increase accuracy</li>
              <li>Anyone interested in the Indian stock market, commodity trading, or crypto</li>
            </ul>
          </div>

          {/* 📈 Equity */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity Segment – 15 High-Accuracy Calls</h4>
            <ul>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Nifty</li>
              <li>Nifty 50</li>
              <li>Fin Nifty</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">Ideal for intraday and swing traders in the Indian equity market.</p>
          </div>

          {/* ⚖️ Commodity */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Segment – 10 Profitable Calls</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">Great for hedgers, commodity investors, and risk-balanced traders.</p>
          </div>

          {/* 🌍 Crypto/Foreign */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Foreign/Crypto Segment – 5 Global Opportunities</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Perfect for those interested in crypto or diversifying beyond Indian markets.</p>
          </div>

          {/* 💎 Benefits */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="text-success">Why Choose This Plan?</h4>
            <ul>
              <li>✅ Expert-curated signals from professional analysts</li>
              <li>✅ Fast, reliable calls delivered during market hours</li>
              <li>✅ Covers 3 powerful markets: Equity, Commodity & Crypto</li>
              <li>✅ Helps you avoid loss-making trades and take confident actions</li>
              <li>✅ Affordable and high-value for serious market participants</li>
            </ul>
          </div>

         

          {/* ✅ CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <h4 className="text-warning">Ready to Make Smarter Trades?</h4>
            <p>Take the first step towards profitable trading.<br /><strong>Join the Basic Plus Plan now</strong> and receive calls that help you win the market.</p>
            <Link onClick={ClickHandler} to="" className="btn btn-primary btn-lg mt-3">
              Pay Now ₹14,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BasicPlusPlan;