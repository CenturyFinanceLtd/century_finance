import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const UltraPrimeCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Ultra Prime Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Enroll in the Ultra Prime Course by Century Finance: a 22-week elite SEBI-certified program designed for future wealth leaders, combining global market analysis, advanced strategies, and real-time mentorship."
        />
        <meta
          name="keywords"
          content="Ultra Prime Course, Investment Framework, Advanced Trading, SEBI Certification, Century Finance, Global Indices, Mentorship, Portfolio Building"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Ultra Prime Course" pagesub="Elite Training for Future Wealth Leaders" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>ULTRA PRIME COURSE</h1>
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
              <span><strong>Fee:</strong> ₹14,000 + GST</span>
              <span><strong>Duration:</strong> 22 Weeks</span>
              <span><strong>Installments:</strong> 5 EMIs</span>
              <span><strong>Certification:</strong> SEBI-Certified</span>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Ultra Prime Course is the highest-tier trading and investment mastery program offered by Century Finance Limited. This exclusive course is designed for aspirational traders and future wealth leaders, combining real-time monitoring, advanced option strategies and strategic market instruction. Through technical proficiency in the international market, portfolio diversification and strategic planning, it equips students to not only trade like pros but also create lasting wealth.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Investment Framework &nbsp;||&nbsp; Real Time Signals &nbsp;||&nbsp; Mentorship-Based Growth &nbsp;||&nbsp; Portfolio Building &nbsp;||&nbsp; Global Index Analysis &nbsp;||&nbsp; Trading Psychology &nbsp;||&nbsp; Community Engagement
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You’ll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index & Global Insights: Nifty 50, Bank Nifty, Midcap, Fin Nifty, Dow Jones, DAX, FTSE</li>
              <li>Technical Analysis: RSI, MACD, Bollinger Bands, candlestick formations</li>
              <li>Daily sector Recaps: FMCG, Pharma, IT, Auto</li>
              <li>Derivatives Mastery: Options, Future, Breakouts, Gap Theory</li>
              <li>Advanced Risk Management: SLs, Position sizing, Capital Protection</li>
              <li>OI & Sentiment Tools: Enhance your setups with professional-level indicators</li>
              <li>Mock Trading & Custom Watchlist: Applied learning and professional strategies</li>
              <li>Live Training Access: 2x Q&A + 3 live sessions every month</li>
              <li>Foreign Market, Commodities, Global Asset Correlations</li>
              <li>Portfolio Building & Real Investment Case Studies</li>
              <li>Advance Options: Iron Condor, Straddle, Strangle</li>
              <li>Weekly Webinars + 1-on-1 Strategy Mentorship</li>
              <li>Priority Support + Real-Time Signals</li>
              <li>Consolidation Mastery: Spot breakout zones with precision</li>
            </ol>
          </div>

          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Course Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Technical Foundation & Global Market Exposure</strong></h4>
              <p>
                This module builds a strong foundation in trading with key focus on technical analysis and global indices like Nifty, Dow, DAX and FTSE. Learn charting tools such as RSI, MACD and candlestick patterns, along with volume analysis, gap theory and basics of options and futures. Sector insights and mock trading help you practice and strengthen your skills in a real-world context.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Sentiment Tools, Risk Strategy & Trading Psychology</strong></h4>
              <p>
                This module sharpens your market approach with sentiment tools like open interest charts and emotional discipline. Learn smart money analysis, risk management and trading psychology to avoid common pitfalls. Weekly stock selection, business cycle and sector rotation all aid in improved trading timing, and psychology webinars help you maintain a positive outlook.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Personal Strategy Building & Live Market Actions</strong></h4>
              <p>
                This module elevates your trading with personalized strategies, custom watchlists and monthly market outlooks. Participate in live trading and Q&A sessions to experience the market in real time. Gain a worldwide edge by learning sophisticated option methods and engaging in cross-asset trading with foreign exchange and commodities.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Portfolio Development, Mentorship & Professional Edge</strong></h4>
              <p>
                This module focuses on capital growth, portfolio building and strategic allocation. Learn through real investment case studies, gain one-on-one mentorship and join a professional trading community. With access to trade signals, consolidation strategies and premium support, you’ll integrate all skills to lead confidently as a future-ready trader.
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

export default UltraPrimeCourse;
