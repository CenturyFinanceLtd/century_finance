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
          content="Master index trading with Century Finance’s Index Wizard Course. Focused insights, SEBI certification, and real-time strategy training for index professionals."
        />
        <meta
          name="keywords"
          content="Index Wizard Course, Index Trading, SEBI Certification, Century Finance, Technical Analysis, Sentiment Tools"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Index Wizard Course" pagesub="Dominate the Indices with Precision" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>INDEX WIZARD COURSE</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Enroll for Session</strong> – ₹8,500 + GST
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
              <span><strong>Duration:</strong> 14 Weeks</span>
              <span><strong>Level:</strong> Advanced</span>
              <span><strong>EMIs:</strong> 4 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Focus:</strong> Market Champions Training</span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Program Overview</h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
The Index Wizard Course at Century Finance Limited, was designed for traders who want to focus on Index Trading with accuracy and assurance. This course is perfect for the learners who want to dominate major indices because it covers everything from sentiment tools and mock trading to sector analysis and advanced technicals. Learners are prepared to trade with strategy, structure and market clarity through an emphasis on technical proficiency, training psychology and real-time application.            </p>
          </div>

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
              <span>✅ Global Indices</span>
              <span>✅ Trading Platforms</span>
              <span>✅ Market Calendar</span>
              <span>✅ Sentiment Analysis</span>
              <span>✅ Candlestick Recognition</span>
              <span>✅ Interest Interpretation</span>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>What You’ll Learn</h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Index Deep Dive: Master Indices like Nifty50, Bank Nifty, Fin Nifty, Dow Jones, DAX, FTSE.</li>
              <li>Global Market Insights: Analyze movements from India, Europe and US.</li>
              <li>Sectoral Analysis : Real-time recaps from Auto, Pharma, IT, FMCG</li>
              <li>Intermediate technicals: RSI, MACD, Moving Average, Bollinger Bands</li>
              <li>Derivatives & Breakout Strategies: option/Future, Volume, Gap Theory </li>
              <li>Risk Management: Master SL rules, psychology and position sizing.</li>
              <li>Candlestick Mastery: Learn Doji, Harmer, Engulfing and more</li>
              <li>Sentiment Tools & Open Interest: Navigate market emotions with confidence</li>
              <li>Mock Trading Platform Access: Practice and sharpen skills in real-time</li>
              <li>Monthly Outlook & Custom Watchlist: Stay ahead of trends with strategic planning</li>
              <li>Live Learning: 2x Q&A + 3 Live trading sessions every month</li>
            </ol>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>Course Modules</h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Market Foundation & Index Mastery
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
This module covers major indices like Fin-nifty, midcap, Dow Jones & FTSE, providing global market exposure and understanding sectoral movements. Students learn technical tools like RSI, MACD and moving average, as well as support & resistance, chart patterns and candlestick psychology. 
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Technical Strategies & Trade Execution
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
This module focuses on precision trading, covering candlestick mastery, volume analysis to detect fakeouts and accumulation zones and breakout for high confidence entries. You’ll explore gap theory, option & future including hedging, expiry-day trades and spread alongside risk management fundamentals like 1% rule, positioning size and SL placement. 
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Strategy Building & Sentiment Mastery
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
Learners develop macro to micro frameworks to translate global economic signals into trade. They analyse global economic calendars, receive weekly stock picks and track institutional sentiments. This module introduces sector rotation analysis and an open interest chart for market momentum. With mock trading platform access allows real time application of strategies. The focus remains on building clarity, conviction and consistency in trade planning and market leadership.              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 4: Practical Market Immersion and Personalization
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
The module focuses on mastering custom watchlist creation for pre-market and intraday trades, receiving a monthly market outlook and participating in live Q&A sessions and trading sessions with experts. It integrates previous modules into a personalized trading blueprint, ideal for serious traders seeking strategic depth and professional level insights. 
              </p>
            </div>
          </div>

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
              Enroll Now & Transform Your Index Trading Strategy!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Century Finance’s expert mentors will help you master the art of index-based trading.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default IndexWizardCourse;
