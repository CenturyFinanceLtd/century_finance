// Same imports
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const IndexWizardCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Index Wizard Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Join the Index Wizard Course by Century Finance: a 14-week advanced program focused on index trading, technical mastery, and SEBI-certified certification to help you trade with confidence and clarity."
        />
        <meta
          name="keywords"
          content="Index Wizard Course, Index Trading, Market Training, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Index Wizard Course" pagesub="Advanced Market Training for Champions" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>Index Wizard Course</h1>
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
              <span><strong>Fee:</strong> ₹8,500 + GST</span>
              <span><strong>Duration:</strong> 14 Weeks</span>
              <span><strong>Installments:</strong> 4 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Index Wizard Course at Century Finance Limited, was designed for traders who want to focus on Index Trading with accuracy and assurance. This course is perfect for the learners who want to dominate major indices because it covers everything from sentiment tools and mock trading to sector analysis and advanced technicals. Learners are prepared to trade with strategy, structure and market clarity through an emphasis on technical proficiency, training psychology and real-time application.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Global Indices &nbsp;||&nbsp; Trading Platforms &nbsp;||&nbsp; Market Calendar &nbsp;||&nbsp; Sentiment Analysis &nbsp;||&nbsp; Candlestick Recognition &nbsp;||&nbsp; Interest Interpretation
            </p>
          </div>

          {/* Learnings */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Deep Dive: Master Indices like Nifty50, Bank Nifty, Fin Nifty, Dow Jones, DAX, FTSE</li>
              <li>Global Market Insights: Analyze movements from India, Europe and US</li>
              <li>Sectoral Analysis: Real-time recaps from Auto, Pharma, IT, FMCG</li>
              <li>Intermediate technicals: RSI, MACD, Moving Average, Bollinger Bands</li>
              <li>Derivatives & Breakout Strategies: option/Future, Volume, Gap Theory</li>
              <li>Risk Management: Master SL rules, psychology and position sizing</li>
              <li>Candlestick Mastery: Learn Doji, Harmer, Engulfing and more</li>
              <li>Sentiment Tools & Open Interest: Navigate market emotions with confidence</li>
              <li>Mock Trading Platform Access: Practice and sharpen skills in real-time</li>
              <li>Monthly Outlook & Custom Watchlist: Stay ahead of trends with strategic planning</li>
              <li>Live Learning: 2x Q&A + 3 Live trading sessions every month</li>
            </ol>
          </div>

          {/* Modules */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Market Foundation & Index Mastery</strong></h4>
              <p>
                This module covers major indices like Fin-nifty, midcap, Dow Jones & FTSE, providing global market exposure and understanding sectoral movements. Students learn technical tools like RSI, MACD and moving average, as well as support & resistance, chart patterns and candlestick psychology.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Technical Strategies & Trade Execution</strong></h4>
              <p>
                This module focuses on precision trading, covering candlestick mastery, volume analysis to detect fakeouts and accumulation zones and breakout for high confidence entries. You’ll explore gap theory, option & future including hedging, expiry-day trades and spread alongside risk management fundamentals like 1% rule, positioning size and SL placement.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Strategy Building & Sentiment Mastery</strong></h4>
              <p>
                Learners develop macro to micro frameworks to translate global economic signals into trade. They analyse global economic calendars, receive weekly stock picks and track institutional sentiments. This module introduces sector rotation analysis and an open interest chart for market momentum. With mock trading platform access allows real time application of strategies.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Practical Market Immersion and Personalization</strong></h4>
              <p>
                The module focuses on mastering custom watchlist creation for pre-market and intraday trades, receiving a monthly market outlook and participating in live Q&A sessions and trading sessions with experts. It integrates previous modules into a personalized trading blueprint, ideal for serious traders seeking strategic depth and professional level insights.
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

export default IndexWizardCourse;
