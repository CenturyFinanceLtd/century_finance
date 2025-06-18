import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const TraderProCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Trader Pro Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Advance your trading skills with Century Finance's Trader Pro Course. Learn advanced strategies, live trade with experts, and earn a SEBI-certified certification."
        />
        <meta
          name="keywords"
          content="Trader Pro, Advanced Trading Course, Derivatives, Century Finance, SEBI Certified, Technical Analysis"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Trader Pro Course" pagesub="Elevate Your Trading Expertise" />

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
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}> Trader Pro Course</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Join Century Finance Limited for a deep-dive into advanced market training with real insights and live sessions.</strong>
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
              <span><strong>Fee:</strong> ₹6,300 + GST</span>
              <span><strong>Duration:</strong> 10 Weeks</span>
              <span><strong>Level:</strong> Advanced</span>
              <span><strong>EMIs:</strong> 3 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Focus:</strong> Market Training, Global Insights, Technical Analysis</span>
            </div>
          </div>

          {/* Program Overview */}
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Program Overview</h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              The Trader Pro Course is tailored for aspiring and active traders who want to master advance-level market strategies with a strong foundation in both technical and psychological aspects of trading. It blends theory with real-time market analysis, offering a detailed view of indices, global movement, derivatives and actionable trading frameworks. Learners gain expert insights into price behavior, chart analysis and market emotions — giving them the ability to make confident, well-informed trading decisions.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Skills You Gain</h2>
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
              <span>✅ Macroeconomic Awareness</span>
              <span>✅ Advanced Technical Analysis</span>
              <span>✅ Derivatives Expertise</span>
              <span>✅ Breakout Strategies</span>
              <span>✅ Breakdown Strategies</span>
              <span>✅ Emotional Discipline</span>
              <span>✅ Consistency</span>
            </div>
          </div>

          {/* What You'll Learn */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> What You’ll Learn</h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Master major indices: Nifty50, Bank Nifty, Midcap, Fin Nifty, Dow Jones, DAX, FTSE</li>
              <li>Global market dynamics: India, Europe, US</li>
              <li>Daily sectoral recaps: Auto, IT, Pharma, FMCG</li>
              <li>Support & resistance levels, chart patterns, candlestick psychology</li>
              <li>Options and future trading fundamentals</li>
              <li>Breakout and breakdown strategies with weekly stock picks</li>
              <li>Global economic calendar usage</li>
              <li>Volume analysis and technical validation</li>
              <li>Risk management tools: SL, 1% Rule, position sizing</li>
              <li>Bullish/bearish patterns and emotion-based trading insights</li>
              <li>Live Learning: 2x Q&A + 3 Live trading sessions every month</li>
            </ol>
          </div>

          {/* Modules */}
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}> Course Modules</h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Advanced Index Mastery & Global Correlation
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                Deepen your command over Nifty 50, Bank Nifty, Fin Nifty, Midcap, Dow Jones etc. Find out how the market in the United States, India and Europe affect one another. With sector based mapping and daily recaps, you may apply real time insights to move in the global market. The basis of multi-market intelligence of the module.
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Technical Analysis at Expert Level
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
              Develop your knowledge of candlestick psychology, chart patterns and support/resistance. Learn breakout / breakdown strategies with real-world examples. Dive into volume validation strategies, pattern configuration and bullish/ bearish set-ups to acquire the accuracy that every professional trader needs. 

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Derivatives Mastery & Strategic Trading
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
               Examine future & options in detail, covering lot size, expiration tactics and hedging, to go beyond the fundamentals. Discover how to use position sizing, stop loss placement and the 1%  rule to manage traders. This module also integrates real market emotions, candle psychology and trade psychology to prepare you for volatile sessions.

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 4: Live Market Practice & Risk Intelligence
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
              Engage in 2 live Q&A  and 3 live trading sessions per month, with a focus on execution. Get weekly stock recommendations, research world economic calendars and create a customized risk management plan. Designed for serious traders, this final module makes you confident in handling uncertainty with discipline. 

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
              Enroll Now & Begin Your Trading Mastery!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Learn live from top mentors at Century Finance. Build accuracy, confidence, and consistency.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TraderProCourse;
