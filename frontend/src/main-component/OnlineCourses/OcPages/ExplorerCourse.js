import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const ExplorerCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Explorer Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in the Explorer Course by Century Finance: a 6-week SEBI-certified program covering equity mastery, F&O trading, live market analysis, global insights and more."
        />
        <meta
          name="keywords"
          content="Explorer Course, Derivatives Training, Stock Market Course, Technical Analysis, Financial Mindset, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Explorer Course" pagesub="Achieve Market Mastery with Global & Practical Exposure" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>EXPLORER COURSE</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Join with Century Finance Limited</strong>
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
              <span><strong>Fee:</strong> ₹4,100 + GST</span>
              <span><strong>Duration:</strong> 6 Weeks</span>
              <span><strong>Installments:</strong> 2 Easy EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Explorer Plan is an in-depth Explorer Course designed to equip individuals with comprehensive market mastery. It focuses on providing a daily lens into market dynamics, covering not just broad market movements but also granular sectoral performance and a global perspective on financial markets. This program aims to transform participants into informed and analytical market participants.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Pattern Recognition &nbsp;||&nbsp; Market Interpretation &nbsp;||&nbsp; Derivatives &nbsp;||&nbsp; Financial Mindset &nbsp;||&nbsp; Forecasting &nbsp;||&nbsp; Risk Management &nbsp;||&nbsp; Investing
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ul style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Insights: Bank Nifty, Nifty 50, Midcap, Dow Jones, Dollar Index, CSA & More</li>
              <li>Global Market Overview: India, Europe & US</li>
              <li>Daily market summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of the technical analysis</li>
              <li>Intro into derivatives: Options & Future</li>
              <li>Weekly Stock Picks</li>
              <li>Global Economic Calendar Insights</li>
              <li>Breakout & Breakdown Patterns - Spot Games - Changing Price Moves</li>
              <li>How to go beyond trading & build a complete financial mindset</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Advanced Equity Mastery</strong></h4>
              <p>
                This module takes you beyond the basics into deep equity specialization. You’ll explore the detailed behavior of indices like Nifty50, Bank Nifty, and Midcap with real-time analysis. Understand how to predict and act on market shifts using advanced technical indicators and sector-wise data interpretation. Perfect your intraday and delivery strategies using live market case studies.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Future & Options across P&C Market</strong></h4>
              <p>
                Learn to confidently trade in Futures & Options across both equity and commodity markets. Understand contracts, expiry cycles, lot sizing and hedging strategies. Get hands-on exposure to how F&O tools manage risks and maximize gains.
              </p>
            </div>

            <div>
              <h4><strong>Module 3: Practical Market Application & Live Analysis</strong></h4>
              <p>
                Apply all your learning in real-time market conditions. Use live charts and actual trades to understand breakouts, breakdowns, global economic events and their effect on indices and commodities. It focuses on decoding live markets and building a disciplined approach with weekly stock picks and calendar-driven market insights.
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

export default ExplorerCourse;
