import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const GlobalAnalystCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Global Analyst Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Join the Global Analyst Course by Century Finance: a 16-week elite financial program covering global indices, commodities, forex, and SEBI-certified training."
        />
        <meta
          name="keywords"
          content="Global Analyst Course, Trading, Market Training, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Global Analyst Course" pagesub="Elite Global Market Mastery" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>Global Analyst Course</h1>
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
              <span><strong>Fee:</strong> ₹9,600 + GST</span>
              <span><strong>Duration:</strong> 16 Weeks</span>
              <span><strong>Installments:</strong> 2 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Global Analyst Course is Century Finance’s most comprehensive training experience, built for learners who want to master the global financial landscape. This elite program combines multi-market expertise, advanced technical tools and specialized modules in foreign markets and commodities. Learners will gain the skills to analyze global indices, track macroeconomic shifts and build strategies that respond to international trends — all backed by real-time market tools and expert mentorship.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Global Index &nbsp;||&nbsp; Foreign Market &nbsp;||&nbsp; Commodity Market &nbsp;||&nbsp; Sector Rotation &nbsp;||&nbsp; Option &nbsp;||&nbsp; Future &nbsp;||&nbsp; Derivatives &nbsp;||&nbsp; Trading Psychology
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Mastery: Nifty50, Bank Nifty, Midcap, Dow Jones, DAX, FTSE</li>
              <li>Global Market Insights: India, Europe and US markets</li>
              <li>Sector Analysis & Recaps: Focus on Auto, Pharma & FMCG</li>
              <li>Technical Indicators: RSI, MACD, Bollinger Bands, Moving Averages</li>
              <li>Derivatives Mastery: Options, Future, Breakouts, Volume & Gap Theory</li>
              <li>Risk & Psychology: Manage emotions and apply SL rules</li>
              <li>Charts & Candlestick Patterns: Learn Doji, Hammer, Engulfing</li>
              <li>Watchlist & Outlooks: Create custom setups and monthly views</li>
              <li>Mock Trading Practice: Platform access for simulation</li>
              <li>Live Learning: 2x Q&A + 3 Live sessions monthly</li>
              <li>Foreign Market & Commodities: Gold, Oil, USD-INR</li>
              <li>Global Asset Correlation</li>
              <li>Moving Averages as Dynamic Support/Resistance</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Index Mastery and Sector Fundamentals</strong></h4>
              <p>
                Begin by mastering key indices like Nifty50, Bank Nifty, Dow Jones and DAX while exploring global market trends across India, Europe and US. Learn how sectors influence movement, backed by daily recaps, chart patterns, support & resistance and candlestick psychology to build strong market intuition and strategic confidence.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Technical Tools and Trade Execution</strong></h4>
              <p>
                This module builds your practical skills with advanced indicators like RSI, MACD, Bollinger Bands and moving averages. You’ll master breakout/breakdown setups, gap theory, volume trends and candlestick patterns. Dive deep into option & future with strategies for expiry traders and hedging, while sharpening your risk management and market psychology for confident execution.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Global Strategy, Sentiment & Practice</strong></h4>
              <p>
                Transitioning from theory to global strategy, this module helps you decode global economic calendars, track institutional moves through sentiment tools and open interest charts and apply sector rotation with business cycle insights. Build a macro to micro approach for smart stock selection and refine your routine using mock trading platforms — all designed to strengthen your strategy with real world global market context.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Advanced Market Integration & Bonus Assets</strong></h4>
              <p>
                Refine your strategy with personalized watchlists, monthly market outlooks and hands-on learning through 2 live Q&As and 3 live trading sessions each month. Unlock advanced bonus modules covering foreign exchange, commodities, crypto market and global asset correlation to broaden your market exposure.
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

export default GlobalAnalystCourse;
