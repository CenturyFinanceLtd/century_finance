import React from "react";
import abimg from "../../../images/about/premium.png"; // Replace with actual Core image if needed
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const CoreSubscriptionPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/*  Alert Section */}
          <div className="alert alert-info text-center fw-bold" role="alert">
             <strong>Core Subscription Plan</strong> – ₹19,000/- Paid
          </div>

          {/*  Hero Info */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">Empowering Smarter Trades for 2 Full Months</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹19,000/-</p>
            <p><strong>Validity:</strong> 2 Months (Market Days)</p>
            <p><strong>Total Signals Provided:</strong> 60 Expert Calls</p>
            <blockquote className="blockquote">✅ <em>"The Core Subscription Plan is a robust, research-backed advisory service offering premium insights in Equity, Commodity, and Crypto markets for ambitious and diversified traders."</em></blockquote>
          </div>

          {/*  What Is It */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the Core Subscription Plan?</h4>
            <p>
             The <strong>Core Subscription Plan</strong> is a robust, research-backed advisory service that delivers premium trading insights across *Equity, Commodity, and Foreign (Crypto) Markets* for a duration of 2 months (market days only). <strong>60 expert signals</strong> in Equity, Commodity, and Foreign Markets over 2 months to help users build consistent returns.
            </p>
          </div>

          {/*  Who Is It For */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>Ambitious Traders aiming for 2-month portfolio growth</li>
              <li>Busy professionals wanting fast, expert insights</li>
              <li>Diversified investors covering stocks, commodities, and crypto</li>
              <li>New learners seeking structured market guidance</li>
              <li>Crypto adopters looking for research-backed ideas</li>
            </ul>
          </div>

          {/*  Equity Segment */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Equity Segment – 30 Actionable Calls</h4>
            <ul>
              <li>Sensex</li>
              <li>Bank Nifty</li>
              <li>Nifty</li>
              <li>Nifty Fifty</li>
              <li>Fin Nifty</li>
              <li>Midcap Nifty</li>
            </ul>
            <p className="text-muted">Ideal for index-based traders and equity investors.</p>
          </div>

          {/*  Commodity Segment */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-info">Commodity Segment – 20 Valuable Picks</h4>
            <ul>
              <li>Gold</li>
              <li>Silver</li>
              <li>Natural Gas</li>
              <li>Aluminium</li>
              <li>Zinc</li>
              <li>Copper</li>
              <li>Crude Oil</li>
            </ul>
            <p className="text-muted">Best suited for traders following domestic and international commodity movements.</p>
          </div>

          {/*  Crypto/Foreign */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Crypto/Foreign Segment – 10 Strategic Picks</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted"></p>
          </div>

          {/*  Why Choose */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold"> Why Choose the Core Plan?</h4>
            <ul>
              <li>✔️ Two months of full-market coverage</li>
              <li>✔️ 60 professionally curated calls (₹300 per signal)</li>
              <li>✔️ Real-time, research-backed recommendations</li>
              <li>✔️ Trusted by traders for strategic consistency</li>
              <li>✔️ Perfect for investors building a cross-market portfolio</li>
            </ul>
          </div>

          {/* ✅ Final CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Master every market move with structured expert insights — equity, commodities, and crypto included."
            </blockquote>
            <h5 className="text-warning"> Ready to Dominate the Market?</h5>
            <p>
              Join the <strong>Core Subscription Plan</strong> today and receive <strong>60 data-driven signals</strong> across a full 2-month journey.
            </p>
            <Link onClick={ClickHandler} to="" className="btn btn-primary btn-lg mt-2">
              Subscribe Now ₹19,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreSubscriptionPlan;
