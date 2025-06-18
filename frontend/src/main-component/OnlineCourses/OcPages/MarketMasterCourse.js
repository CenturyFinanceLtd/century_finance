import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const MarketMasterCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Market Master Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Become a market elite with Century Finance’s Market Master Course. Advanced insights, SEBI certification, and strategic training for serious traders."
        />
        <meta
          name="keywords"
          content="Market Master Course, Trading, SEBI Certification, Technical Analysis, Risk Management, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Market Master Course" pagesub="Master Trading at an Elite Level" />

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>
              MARKET MASTER COURSE
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              <strong>Become a master of market psychology, technical strategy, and global trends.</strong>
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
              <span><strong>Fee:</strong> ₹7,400 + GST</span>
              <span><strong>Duration:</strong> 12 Weeks</span>
              <span><strong>Level:</strong> Advanced</span>
              <span><strong>EMIs:</strong> 4 Installments</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
              <span><strong>Focus:</strong> Advanced Market Training, Strategic Execution</span>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Program Overview
            </h2>
            <p style={{ color: "#374151", fontSize: "1.05rem", marginTop: "0.75rem" }}>
              The Market Master Course is the more advanced level of training offered by Century Finance Limited and is intended for those who want to become elites in trading psychology, market behavior and strategic planning. In-depth industry knowledge, practical application and expert-level technical abilities are all combined in this course. From global economic analysis to customized trade execution tactics, it provides a comprehensive toolkit for traders who want to lead with clarity, assurance and consistency.
            </p>
          </div>

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
              <span>✅ Index Interpretation</span>
              <span>✅ Comparative Analysis</span>
              <span>✅ Technical Indicators</span>
              <span>✅ Volume Analysis</span>
              <span>✅ Capital Management</span>
              <span>✅ Risk Mastery</span>
              <span>✅ Strategic Planning</span>
            </div>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              What You’ll Learn
            </h2>
            <ol style={{ marginTop: "1rem", paddingLeft: "1.25rem", color: "#475569", lineHeight: "1.75" }}>
              <li>Index Mastery: Nifty 50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE</li>
              <li>Global Market Insights: Europe, US, India</li>
              <li>Daily Recaps & Sector Analysis: FMCG, IT, Pharma, Auto</li>
              <li>Support/Resistance, Patterns, Candlestick Psychology</li>
              <li>Derivatives Trading: Options & Futures Tactics</li>
              <li>Breakout/Breakdown Real-world Strategies</li>
              <li>Volume-based Trading Validation</li>
              <li>Risk Management Tools: SL, 1% Rule, Position Sizing</li>
              <li>Business Cycle Mastery & Sector Rotation</li>
              <li>Monthly Outlooks & Customized Watchlists</li>
            </ol>
          </div>

          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b" }}>
              Course Modules
            </h2>

            <div style={{ marginTop: "1.25rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 1: Index & Global Market Mastery
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                The program covers key indices like Nifty50, Bank Nifty, Midcap, and global benchmarks such as Dow Jones and FTSE, offering a global market perspective. It trains learners in sector mapping, daily market recaps and monthly outlooks to enhance trend analysis. With insights into global economic drivers and sector rotation, traders develop strategies aligned with market cycles and emerging opportunities. 

              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 2: Pro Technical Analysis & Volume Strategy
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                   This  module sharpens technical skills with advanced support & resistance strategies and in-depth understanding of chart patterns like double tops, head & shoulders and flags. Learners decode candlestick psychology to grasp trader emotions, while volume analysis helps identify strong trends, fakeouts and accumulation. Through breakout/ breakdown and gap theory , traders learn to confirm market direction and react to price gaps with precision</p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 3: Derivatives, Risk & Strategic Execution
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                      This module dives into options & future, covering strategies like hedging, expiry trades and spread. It strengthens your approach to risk management through the 1% rule, stop - loss placement and position sizing. You’ll also explore market psychology, understanding trader emotions and bias traps. With custom watchlist set-ups for pre-market and intraday trading, plus live trading sessions and Q&A, this section ensures hands-on, practical learning. 
              </p>
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#e65410" }}>
                Module 4: Institutional level Strategy & Leadership Skill
              </h3>
              <p style={{ color: "#374151", marginTop: "0.5rem" }}>
                    By analyzing the global economic calendar, this module helps traders predict important market movements and develops strategic depth. Learners stay ahead of trends with weekly stock recommendations and trade ideas that are carefully vetted by experts. It includes a macro-to-micro framework to link economic data to stock selection and market sentiment analysis to comprehend institutional behaviour. 
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
              Enroll Now & Lead the Market with Confidence!
            </h3>
            <p style={{ marginTop: "0.75rem", color: "#78350f" }}>
              Learn from expert mentors at Century Finance and transform into a market strategist.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default MarketMasterCourse;
