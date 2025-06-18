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
          content="Take your trading to the next level with Century Finance's Advance Edge Course. Master technical analysis, derivatives, market psychology, and more in our SEBI-certified advanced training program."
        />
        <meta
          name="keywords"
          content="Advanced Trading Course, Technical Analysis, Derivatives, Century Finance, Market Psychology, SEBI Certification"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Advance Edge Course" pagesub="Train Like a Smart Trader" />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            color: "#1f2937",
          }}
        >
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>
              Advance Edge Course
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>
                Advanced Market Training Program for Smart Traders 
              </strong>
            </p>
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
              <span><strong>Fee:</strong> ₹5200 + GST</span>
              <span><strong>Duration:</strong> 8 Weeks</span>
              <span><strong>Level:</strong> Advanced</span>
              <span><strong>EMIs:</strong> 2 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Focus:</strong> Market Psychology, Technical Mastery, Derivatives</span>
            </div>
          </div>

          {/* Program Overview */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Program Overview
            </h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
             Advanced Edge Course designed for smart traders seeking to elevate their skills with actionable insights. It provides advanced market training, building upon foundational knowledge to help traders master entry and exit signals and understand market psychology.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Skills You Gain
            </h2>
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
              <span>✅ Technical Analysis</span>
              <span>✅ Market Psychology</span>
              <span>✅ Entry/Exit Strategy</span>
              <span>✅ Derivatives Trading</span>
              <span>✅ Risk Management</span>
              <span>✅ Financial Acumen</span>
              <span>✅ Market Interpretation</span>
            </div>
          </div>

          {/* What You'll Learn */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              What You’ll Learn
            </h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Index insights: Nifty 50, Bank Nifty, Midcap, Dow Jones, Dollar Index & CSA</li>
              <li>Global Market Overview: India, US & Europe</li>
              <li>Daily market summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)</li>
              <li>Support & Resistance: Enhance the foundation of the technical analysis</li>
              <li>Weekly Stock Picks</li>
              <li>Global Economic Calendar Insights</li>
              <li>Breakout & Breakdown Patterns - Changing Price Moves</li>
              <li>Chart Patterns - Double Top, Head & Shoulders, Flags & More</li>
              <li>Basics about Candlesticks</li>
              <li>Bullish and Bearish Patterns - Read Market Psychology</li>
              <li>2x Live Q&A Sessions with Market Analysts</li>
            </ol>
          </div>

          {/* Modules */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Course Modules
            </h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Mastering Market Structure & Global Indices
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
               Dive deep into index behavior and sector impact with expert-led sessions. Analyze Nifty50, Bank Nifty, FinNifty and global indices like DAX, FTSE and Dow Jones. Learn how international markets interact and influence price action, with an emphasis on real world global market scenarios. 

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Daily Trends, Sectoral Mapping & Technical Strength
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
               Refine your trading decision using daily market summaries and sector-wise breakout across Auto, IT, Pharma and FMCG. Strengthen your technical foundation by decoding support & resistance, interpreting candlestick basics and exploring key chart patterns like Double Top and Flags for signals based traders. 

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Strategic Future & Options Trading
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
    Level up your F&O game by understanding contract mechanisms in both the equity and commodity market. Learn risk-managed trades, expiry setups and hedging strategies with live examples. Explore how breakouts and breakdown patterns define your entry/exit strategy and how bullish and bearish patterns reflect market psychology. 

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 4: Market Psychology, Timing & Pro-Level Practice
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                Decode market timing using global economic calendars and apply analysis in 2x live Q&A sessions with market experts. Get weekly stock picks curated by analysts and developmental frameworks to handle volatility. This module empowers you to act, not react - building smart, timely decisions rooted in discipline. 

              </p>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "3rem",
              backgroundColor: "#fef9c3",
              borderRadius: "12px",
              padding: "2rem",
              textAlign: "center",
              border: "1px solid #fde68a",
            }}
          >
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", color: "#92400e" }}>
              Enroll Now & Unlock Pro-Level Trading Mastery!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Join Century Finance Limited’s Advance Edge Course and take the leap toward confident,
              strategic investing.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AdvanceEdgeCourse;
