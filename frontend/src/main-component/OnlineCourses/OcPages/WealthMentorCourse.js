import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const WealthMentorCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Wealth Mentor Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in the Wealth Mentor Course by Century Finance: an 18-week elite market mastery program for future financial leaders covering portfolio strategy, global indices, commodities, and SEBI-certified training."
        />
        <meta
          name="keywords"
          content="Wealth Mentor Course, Financial Training, Investment Strategies, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Wealth Mentor Course" pagesub="Ultimate Market Mastery for Future Wealth Leaders" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>WEALTH MENTOR COURSE</h1>
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
              <span><strong>Fee:</strong> ₹10,700 + GST</span>
              <span><strong>Duration:</strong> 18 Weeks</span>
              <span><strong>Installments:</strong> 5 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Wealth Mentor Course is the ultimate learning path for future financial leaders and market professionals. Global market expertise, practical investment strategies, sophisticated risk management and diversified portfolio methodologies are all combined in one curriculum. The course gives you the skills to confidently plan long-term investment across asset classes, including commodities and global indexes, evaluate market behavior and manage risk like an expert. It is perfect for traders and learners who want to develop lasting wealth.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Real-Time Chart Reading &nbsp;||&nbsp; Diversification Planning &nbsp;||&nbsp; Portfolio Construction &nbsp;||&nbsp; Sector Timing &nbsp;||&nbsp; Market Simulations &nbsp;||&nbsp; Volume Analysis &nbsp;||&nbsp; Market Psychology
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You'll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index & Global Insights: Nifty 50, Bank Nifty, Midcap, Fin Nifty, Dow Jones, DAX, FTSE.</li>
              <li>Technical Analysis: RSI, MACD, Bollinger Bands, candlestick formations.</li>
              <li>Daily Sector Recaps: FMCG, Pharma, IT, Auto.</li>
              <li>Derivatives Mastery: Options, Future, Breakouts, Gap Theory.</li>
              <li>Advanced Risk Management: SLs, Position sizing, Capital Protection.</li>
              <li>Market Psychology: Emotion control and sentiment tracking.</li>
              <li>Foreign Market, Commodities and Inter-market correlations.</li>
              <li>Real investment case studies.</li>
              <li>Portfolio Building, Diversification & Asset Allocation.</li>
              <li>Global economic calendar, open interest charts, sentiment trackers.</li>
              <li>Monthly outlooks and custom watchlists.</li>
              <li>Mock trading platform access</li>
              <li>2x Live Q&As + 3 Live trading sessions/month</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Technical & Index Foundation</strong></h4>
              <p>
                Learn how to use fundamental technical tools such as moving averages, RSI, MACD and key charts and candlestick patterns. Use sector-based daily recaps, gap theory and breakout/breakdown tactics to comprehend price behavior. For a solid foundation in index movement, investigate index-level insights across the Nifty50, Bank Nifty, DAX and FTSE.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Global Market Strategy & Risk Psychology</strong></h4>
              <p>
                Examine weekly stock selection, sentiment analysis tools and international economic calendar in detail to understand institutional behavior. Learn about business cycles, sector rotation and how to use open interest charts. Enhance decision making with structured risk management using the 1% rule, SL placement and emotional awareness.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Personalization, Trading routines & Live Market Engagement</strong></h4>
              <p>
                Create personalized trading plans and watchlists using a monthly market outlook. Use your approach in real time during 3 monthly live trading sessions and 2 Q&A sessions. Develop your execution procedure, sharpen your market psychology and move into options and future.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Wealth Building, Diversification & Cross Market Mastery</strong></h4>
              <p>
                With bonus modules on foreign exchange, commodities and cryptocurrency markets, you may increase your advantage. Examine real world investment case studies and linkages between global assets. Advanced risk management, asset allocation and portfolio development. Everything is in line for wealth building across asset classes in this last stage, which is perfect for long-term, worldwide growth.
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

export default WealthMentorCourse;
