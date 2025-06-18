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
          content="Join the Explorer Course by Century Finance Limited. Dive into derivatives and advanced market strategies with a SEBI-certified certification."
        />
        <meta
          name="keywords"
          content="Stock Market Course, Derivatives, Century Finance, Trading Course, SEBI Certification"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Explorer Course" pagesub="Dive into Derivatives with Confidence" />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>
              Explorer Course
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#374151", marginTop: "0.75rem" }}>
              <strong>Enroll for Session</strong> – Rs. 4100 + GST
            </p>
            <p style={{ color: "#4b5563", fontSize: "1.05rem" }}>Join with Century Finance Limited</p>
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
              <span><strong>Duration:</strong> 6 Weeks</span>
              <span><strong>Focus:</strong> Dive into Derivatives</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>EMIs:</strong> 2 Easy Installments</span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Program Overview
            </h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              The Explorer Plan is an in-depth Explorer Course designed to equip individuals with comprehensive market mastery. It focuses on providing a daily lens into market dynamics, covering not just broad market movements but also granular sectoral performance and a global perspective on financial markets. This program aims to transform participants into informed and analytical market participants.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Skills You Gain</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1rem",
                color: "#334155",
                fontSize: "1rem",
              }}
            >
              <span>✅ Pattern Recognition</span>
              <span>✅ Market Interpretation</span>
              <span>✅ Derivatives</span>
              <span>✅ Financial Mindset</span>
              <span>✅ Forecasting</span>
              <span>✅ Risk Management</span>
              <span>✅ Investing</span>
            </div>
          </div>

          {/* Learning */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>What You’ll Learn</h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Index Insights: Bank Nifty, Nifty 50, Midcap, Dow Jones, Dollar Index, CSA & More.</li>
              <li>Global Market Overview: India, Europe & US</li>
              <li>Daily market summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of technical analysis</li>
              <li>Intro into derivatives: Options & Futures</li>
              <li>Weekly Stock Picks</li>
              <li>Global Economic Calendar Insights</li>
              <li>Breakout & Breakdown Patterns – Spot Games – Changing Price Moves</li>
              <li>How to go beyond trading & build a complete financial mindset</li>
            </ol>
          </div>

          {/* Modules */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Course Modules</h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Advanced Equity Mastery
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                This module takes you beyond the basics into deep equity specialization. You’ll explore the detailed behavior of indices like Nifty50, bank nifty and midcap with real time analysis. Understand how to predict and act on market shifts using advanced technical indicators and sector-wise data interpretation. Perfect your intraday and delivery strategies using live market case studies. 
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Futures & Options across P&C Market
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
               Learn to confidently trade in Future & Options across both equity and commodity markets. Understand contracts, expiry cycles, lot sizing and hedging strategies. Get hands-on-exposure to how F&O tools manage risks and maximize gains. 
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Practical Market Application & Live Analysis
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
               Apply all your learning in real - time market conditions. Use live charts and actual trades to understand breakouts, breakdowns, global economic events and their effect on indices and commodities. It focuses on decoding live markets and building a disciplined approach with weekly stock picks and calendar driven market insights.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#ecfccb",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              border: "1px solid #bbf7d0",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#166534" }}>
              Ready to Explore the Market?
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#065f46" }}>
              Enroll today with Century Finance and dive into a new level of financial insight!
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ExplorerCourse;
