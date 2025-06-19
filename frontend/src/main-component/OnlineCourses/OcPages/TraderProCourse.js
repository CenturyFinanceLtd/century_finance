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
          content="Enroll in the Trader Pro Course by Century Finance: a 10-week advanced trading course with SEBI-certified certification, real insights, and expert-led training."
        />
        <meta
          name="keywords"
          content="Trader Pro Course, Trading, Market Training, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Trader Pro Course" pagesub="Advanced Market Training with Real Insights" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>Trader Pro Course</h1>
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
              <span><strong>Fee:</strong> ₹6,300 + GST</span>
              <span><strong>Duration:</strong> 10 Weeks</span>
              <span><strong>Installments:</strong> 3 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Trader Pro Course is tailored for aspiring and active traders who want to master advance-level market strategies with a strong foundation in both technical and psychological aspects of trading. It blends theory with real-time market analysis, offering a detailed view of indices, global movement, derivatives and actionable trading frameworks. Learners gain expert insights into price behavior, chart analysis and market emotions — giving them the ability to make confident, well-informed trading decisions.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Macroeconomic Awareness &nbsp;||&nbsp; Advanced Technical Analysis &nbsp;||&nbsp; Derivatives Expertise &nbsp;||&nbsp; Breakout Strategies &nbsp;||&nbsp; BreakDown Strategies &nbsp;||&nbsp; Emotional Discipline &nbsp;||&nbsp; Consistency
            </p>
          </div>

          {/* Learnings */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ul style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
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
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Advanced Index Mastery & Global Correlation</strong></h4>
              <p>
                Deepen your command over Nifty 50, Bank Nifty, Fin Nifty, Midcap, Dow Jones etc. Find out how the market in the United States, India and Europe affect one another. With sector-based mapping and daily recaps, you may apply real-time insights to move in the global market. The basis of multi-market intelligence of the module.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Technical Analysis at Expert Level</strong></h4>
              <p>
                Develop your knowledge of candlestick psychology, chart patterns and support/resistance. Learn breakout/breakdown strategies with real-world examples. Dive into volume validation strategies, pattern configuration and bullish/bearish set-ups to acquire the accuracy that every professional trader needs.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Derivatives Mastery & Strategic Trading</strong></h4>
              <p>
                Examine future & options in detail, covering lot size, expiration tactics and hedging, to go beyond the fundamentals. Discover how to use position sizing, stop loss placement and the 1% rule to manage traders. This module also integrates real market emotions, candle psychology and trade psychology to prepare you for volatile sessions.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Live Market Practice & Risk Intelligence</strong></h4>
              <p>
                Engage in 2 live Q&A and 3 live trading sessions per month, with a focus on execution. Get weekly stock recommendations, research world economic calendars and create a customized risk management plan. Designed for serious traders, this final module makes you confident in handling uncertainty with discipline.
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

export default TraderProCourse;
