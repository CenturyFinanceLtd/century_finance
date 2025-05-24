import React from "react";
import abimg from "../../../images/about/learning.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const VIPStockSubscriptionPlan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">

          {/* 🔔 Alert */}
          <div className="alert alert-dark text-center fw-bold" role="alert">
            👑 <strong>VIP Stock Subscription Plan</strong> – ₹65,000/- Paid
          </div>

          {/* 🌟 Header Block */}
          <div className="text-center mb-5 p-4 bg-white shadow rounded">
            <h2 className="text-primary">12 Months of Unmatched Market Intelligence, Technical Precision & Financial Power</h2>
            <p className="lead"><strong>Plan Fee:</strong> ₹65,000/-</p>
            <p><strong>Validity:</strong> 12 Months (Only Market Days)</p>
            <p><strong>Total Signals:</strong> Unlimited across all asset classes</p>
            <blockquote className="blockquote">✅ <em>"This plan is not just a subscription—it’s a strategic alliance."</em></blockquote>
          </div>

          {/* What Is It */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">What is the VIP Stock Subscription Plan?</h4>
            <p>
              The <strong>VIP Stock Subscription Plan</strong> is Century Finance's most powerful long-term trading plan. It spans 12 months and includes unlimited trading calls, technical analysis, and investment guidance for Equity, Commodity, and Crypto markets.
            </p>
          </div>

          {/* Who Is It For */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Who Is This Plan For?</h4>
            <ul>
              <li>✅ Seasoned Market Traders</li>
              <li>✅ Portfolio Managers & HNIs</li>
              <li>✅ Wealth Planners & Consultants</li>
              <li>✅ Full-Time Traders</li>
              <li>✅ Crypto Investors</li>
            </ul>
          </div>

          {/* Equity */}
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
            <p className="text-muted">Multiple daily calls with technical levels for active traders and investors.</p>
          </div>

          {/* Commodity */}
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
            <p className="text-muted">Real-time commodity strategies with risk management insights.</p>
          </div>

          {/* Crypto */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-info">Foreign / Crypto – Unlimited Calls</h4>
            <ul>
              <li>Bitcoin</li>
              <li>Ethereum</li>
              <li>Particle Network</li>
              <li>Solana</li>
            </ul>
            <p className="text-muted">Technical crypto guidance for fast-paced digital trading environments.</p>
          </div>

          {/* Technical Support */}
          <div className="mb-4 p-3 bg-light border rounded">
            <h4 className="text-success">Advanced Technical Call Support</h4>
            <ul>
              <li>RSI, MACD, Volume, Fibonacci</li>
              <li>Breakout / Breakdown alerts</li>
              <li>Support & Resistance tracking</li>
              <li>Real-time entry/exit updates</li>
            </ul>
          </div>

          {/* Financial Guidance */}
          <div className="mb-4 p-3 bg-white shadow-sm rounded">
            <h4 className="text-success">Bonus Financial Guidance</h4>
            <ul>
              <li>Mutual Fund (SIP/ELSS) Strategy</li>
              <li>Sovereign Gold Bond (SGB) Plans</li>
              <li>Margin Trading (MTF) Support</li>
              <li>Bankex Rotational Strategy</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-4 p-3 bg-warning text-dark rounded shadow-sm">
            <h4 className="fw-bold">💎 Why Choose the VIP Plan?</h4>
            <ul>
              <li>✔️ 12 Months Full Advisory Access</li>
              <li>✔️ Unlimited Equity, Commodity, and Crypto Calls</li>
              <li>✔️ Advanced Technical Analysis Tools</li>
              <li>✔️ Portfolio Management Assistance</li>
              <li>✔️ Personalized Market Insights</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mb-5 p-4 bg-light rounded shadow-sm">
            <blockquote className="blockquote mb-3">
              "Uninterrupted access. Premium calls. Strategic growth for serious traders."
            </blockquote>
            <h5 className="text-warning">🚀 Unlock a Year of Intelligent Trading</h5>
            <p>
              Join the <strong>VIP Stock Subscription Plan</strong> for ₹65,000 and receive elite signals, tools, and insight for 12 months.
            </p>
            <Link onClick={ClickHandler} to="/about" className="btn btn-primary btn-lg mt-2">
              Pay Now ₹65,000/-
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VIPStockSubscriptionPlan;
