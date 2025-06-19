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
          content="Enroll in the Market Master Course by Century Finance: a 12-week advanced market training focused on psychology, global insights, and SEBI-certified certification for smart traders."
        />
        <meta
          name="keywords"
          content="Market Master Course, Trading Psychology, Global Market Training, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Market Master Course" pagesub="Advanced Market Training for Smart Traders" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>Market Master Course</h1>
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
              <span><strong>Fee:</strong> ₹7,400 + GST</span>
              <span><strong>Duration:</strong> 12 Weeks</span>
              <span><strong>Installments:</strong> 4 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Market Master Course is the more advanced level of training offered by Century Finance Limited and is intended for those who want to become elites in trading psychology, market behavior and strategic planning. In-depth industry knowledge, practical application and expert-level technical abilities are all combined in this course. From global economic analysis to customized trade execution tactics, it provides a comprehensive toolkit for traders who want to lead with clarity, assurance and consistency.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Index Interpretation &nbsp;||&nbsp; Comparative Analysis &nbsp;||&nbsp; Technical Indicators &nbsp;||&nbsp; Volume Analysis &nbsp;||&nbsp; Capital Management &nbsp;||&nbsp; Risk Mastery &nbsp;||&nbsp; Strategic Planning
            </p>
          </div>

          {/* Learnings */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ul style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index Mastery: Nifty 50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE</li>
              <li>Global Market Insights: Comprehensive analysis of the European, American and Indian Market</li>
              <li>Daily Recaps & Sector Analysis (FMCG, IT, Pharma, Auto)</li>
              <li>Support & Resistance: Pattern analysis and candlestick psychology</li>
              <li>Option & Future: In-depth trading methods for derivatives</li>
              <li>Volume Strategy and breakout/breakdown tactics used in real-world situations</li>
              <li>Weekly Stock Picks & Global Economic Calendar</li>
              <li>Risk Management: Integrating technical accuracy with psychology</li>
              <li>Business Cycle Mastery and sector rotation</li>
              <li>Monthly Market Outlooks & Customized Watchlist: Tools for Strategic Execution</li>
              <li>Live Learning: 2x Q&A + 3 Live trading sessions every month</li>
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Index & Global Market Mastery</strong></h4>
              <p>
                The program covers key indices like Nifty50, Bank Nifty, Midcap, and global benchmarks such as Dow Jones and FTSE, offering a global market perspective. It trains learners in sector mapping, daily market recaps and monthly outlooks to enhance trend analysis. With insights into global economic drivers and sector rotation, traders develop strategies aligned with market cycles and emerging opportunities.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Pro Technical Analysis & Volume Strategy</strong></h4>
              <p>
                This module sharpens technical skills with advanced support & resistance strategies and in-depth understanding of chart patterns like double tops, head & shoulders and flags. Learners decode candlestick psychology to grasp trader emotions, while volume analysis helps identify strong trends, fakeouts and accumulation. Through breakout/breakdown and gap theory, traders learn to confirm market direction and react to price gaps with precision.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Derivatives, Risk & Strategic Execution</strong></h4>
              <p>
                This module dives into options & future, covering strategies like hedging, expiry trades and spread. It strengthens your approach to risk management through the 1% rule, stop-loss placement and position sizing. You’ll also explore market psychology, understanding trader emotions and bias traps. With custom watchlist set-ups for pre-market and intraday trading, plus live trading sessions and Q&A, this section ensures hands-on, practical learning.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Institutional Level Strategy & Leadership Skill</strong></h4>
              <p>
                By analyzing the global economic calendar, this module helps traders predict important market movements and develops strategic depth. Learners stay ahead of trends with weekly stock recommendations and trade ideas that are carefully vetted by experts. It includes a macro-to-micro framework to link economic data to stock selection and market sentiment analysis to comprehend institutional behaviour.
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

export default MarketMasterCourse;
