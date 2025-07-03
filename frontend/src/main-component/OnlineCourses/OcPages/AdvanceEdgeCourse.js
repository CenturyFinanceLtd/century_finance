import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const AdvanceEdgeCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Advance Edge Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in the Advance Edge Course by Century Finance: an 8-week SEBI-certified program offering advanced market training, entry-exit mastery, derivatives strategy, and global economic insights."
        />
        <meta
          name="keywords"
          content="Advance Edge Course, Advanced Market Training, Stock Market Psychology, Derivatives Strategy, Chart Patterns, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Advance Edge Course" pagesub="Advanced Market Training for Smart Traders" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>ADVANCE EDGE COURSE</h1>
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
              <span><strong>Fee:</strong> ₹5,200 + GST</span>
              <span><strong>Duration:</strong> 8 Weeks</span>
              <span><strong>Installments:</strong> 2 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              Advanced Edge Course designed for smart traders seeking to elevate their skills with actionable insights. It provides advanced market training, building upon foundational knowledge to help traders master entry and exit signals and understand market psychology.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Technical Analysis &nbsp;||&nbsp; Market Psychology &nbsp;||&nbsp; Entry/Exit Strategy &nbsp;||&nbsp; Derivatives Trading &nbsp;||&nbsp; Financial Acumen &nbsp;||&nbsp; Risk Management &nbsp;||&nbsp; Market Interpretation
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Insights: Bank Nifty, Nifty 50, Midcap, Dow Jones, Dollar Index, CSA & More</li>
              <li>Global Market Overview: India, Europe & US</li>
              <li>Daily market summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of the technical analysis</li>
              <li>Intro into derivatives: Options & Future</li>
              <li>Weekly Stock Picks</li>
              <li>Global Economic Calendar Insights</li>
              <li>Breakout & Breakdown Patterns - Changing Price Moves</li>
              <li>Chart Patterns - Double Top, Head & Shoulders, Flags & More</li>
              <li>Basics about Candlesticks</li>
              <li>Bullish and Bearish Patterns - Read Market Psychology</li>
              <li>2x Live Q&A Sessions with Market Analysts</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Mastering Market Structure & Global Indices</strong></h4>
              <p>
                Dive deep into index behavior and sector impact with expert-led sessions. Analyze Nifty50, Bank Nifty, FinNifty and global indices like DAX, FTSE and Dow Jones. Learn how international markets interact and influence price action, with an emphasis on real world global market scenarios.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Daily Trends, Sectoral Mapping & Technical Strength</strong></h4>
              <p>
                Refine your trading decision using daily market summaries and sector-wise breakout across Auto, IT, Pharma and FMCG. Strengthen your technical foundation by decoding support & resistance, interpreting candlestick basics and exploring key chart patterns like Double Top and Flags for signals based traders.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Strategic Future & Options Trading</strong></h4>
              <p>
                Level up your F&O game by understanding contract mechanisms in both the equity and commodity market. Learn risk-managed trades, expiry setups and hedging strategies with live examples. Explore how breakouts and breakdown patterns define your entry/exit strategy and how bullish and bearish patterns reflect market psychology.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Market Psychology, Timing & Pro-Level Practice</strong></h4>
              <p>
                Decode market timing using global economic calendars and apply analysis in 2x live Q&A sessions with market experts. Get weekly stock picks curated by analysts and developmental frameworks to handle volatility. This module empowers you to act, not react - building smart, timely decisions rooted in discipline.
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

export default AdvanceEdgeCourse;
