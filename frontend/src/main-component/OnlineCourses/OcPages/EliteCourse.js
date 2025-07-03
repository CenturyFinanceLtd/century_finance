// Same imports
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const EliteCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Elite Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in Century Finance's Elite Course: a 24-week advanced training program combining AI tools, personalized mentorship, and SEBI-certified certification to help you master the markets."
        />
        <meta
          name="keywords"
          content="Elite Course, Trading Mastery, AI Trading, Portfolio Building, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Elite Course" pagesub="Ultimate Training for Future Wealth Leaders" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>Elite Course</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Your gateway to market mastery and long-term wealth with Century Finance.</strong>
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button
                style={{
                  backgroundColor: "#e65410",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = "/pay-now"}
              >
                Pay Now
              </button>
              <button
                style={{
                  backgroundColor: "#1f2937",
                  color: "#fff",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => window.location.href = "/book-course"}
              >
                Book Course
              </button>
            </div>

            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                backgroundColor: "#f9fafb",
                padding: "1.5rem 2rem",
                borderRadius: "12px",
                fontSize: "1rem",
                color: "#111827",
              }}
            >
              <span><strong>Fee:</strong> ₹18,000 + GST</span>
              <span><strong>Duration:</strong> 24 Weeks</span>
              <span><strong>Installments:</strong> 5 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              Century Finance’s Elite Course is a premium 24-week intensive program crafted for committed traders and investors ready to take on global markets. Blending deep technical insight with AI-powered tools, strategic mentorship, and real-world application, this course equips you with everything needed to build, grow, and lead in today’s financial world.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You’ll Master</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              AI-Powered Trading &nbsp;||&nbsp; Strategic Wealth Management &nbsp;||&nbsp; Portfolio Construction &nbsp;||&nbsp; Technical Chart Mastery &nbsp;||&nbsp; Sector Rotation &nbsp;||&nbsp; Economic Timing &nbsp;||&nbsp; Market Consolidation Recognition
            </p>
          </div>

          {/* Learnings */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Global Indices: Nifty 50, Bank Nifty, Dow Jones, DAX & more</li>
              <li>Core Technicals: RSI, MACD, Bollinger Bands, Candlestick Patterns</li>
              <li>Sector Deep-Dives: Daily analysis of FMCG, Pharma, IT, and Auto</li>
              <li>Options & Futures: Breakouts, Gaps, and Price Action Strategies</li>
              <li>Risk Management: Stop Loss, Capital Allocation, 1% Rule</li>
              <li>Open Interest & Sentiment Tools for Tactical Trading</li>
              <li>Mock Trades + Watchlist Development with Live Q&As</li>
              <li>3 Live Classes & 2 Doubt-Solving Sessions Each Month</li>
              <li>International Market Exposure: Commodities & Correlations</li>
              <li>Portfolio Design + Real Investment Case Studies</li>
              <li>Advanced Options Strategies: Straddle, Strangle, Iron Condor</li>
              <li>Weekly Webinars + Personalized Mentorship</li>
              <li>Instant Signal Access + 1-Year Premium Workshop Entry</li>
              <li>Lifetime Learning Access + Entry to Elite Investor Circle</li>
            </ol>
          </div>

          {/* Modules */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Market Fundamentals & Technical Foundation</strong></h4>
              <p>
                Build a rock-solid foundation in market structure, equity analysis, and technical indicators. Master tools like RSI, MACD, and Bollinger Bands while learning essential concepts like volume analysis, breakouts, and gap theory.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Strategy Building & Trader Psychology</strong></h4>
              <p>
                Learn the art of capital protection with effective risk management, trade sizing, and stop-loss techniques. Dive into institutional sentiment analysis, open interest interpretation, and the psychological discipline required to trade like a pro.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Advanced Strategy & Multi-Asset Exposure</strong></h4>
              <p>
                Upgrade to professional-grade strategies. Explore complex option trades like iron condor, straddle, and strangle. Develop your own trading systems, manage a diversified watchlist, and trade confidently across global assets.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Portfolio Leadership & Wealth Mastery</strong></h4>
              <p>
                Go beyond trading and into wealth leadership. Learn capital allocation, build real-world portfolios, and explore long-term strategies using AI tools, private mentorship, and access to the exclusive Elite Investor Circle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default EliteCourse;
