// Same imports
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../../components/Navbar/Navbar";
import PageTitle from "../../../components/pagetitle/PageTitle";
import Scrollbar from "../../../components/scrollbar/scrollbar";
import Footer from "../../../components/footer/Footer";

const PremiumPlanCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Premium Plan Course - Century Finance Limited</title>
        <meta
          name="description"
          content="Join Century Finance's Premium Plan Course: 20 weeks of intensive training in advanced market strategies, derivatives, portfolio building, and global trading insights with SEBI-certified certification."
        />
        <meta
          name="keywords"
          content="Premium Plan, Trading Course, Market Mastery, Portfolio Building, SEBI Certification, Century Finance"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Premium Plan Course" pagesub="PremiumPlanCourse" />

      <section style={{ display: "flex", justifyContent: "center", padding: "4rem 1rem" }}>
        <div style={{ fontFamily: "Inter, sans-serif", color: "#1f2937", maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e65410" }}>PREMIUM PLAN COURSE</h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563", marginTop: "0.75rem" }}>
              Join with Century Finance Limited
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
                Enroll for Session <br /> Rs. 11,800 + GST
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
              <span><strong>20 Weeks</strong></span>
              <span><strong>5 EMIs</strong></span>
              <span><strong>Elite Market Mastery for Future Wealth Leaders</strong></span>
              <span><strong>SEBI-Certified Certification</strong></span>
            </div>
          </div>

          {/* Overview */}
          <div style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: "700", color: "#1e293b", marginBottom: "1rem" }}>Program Overview</h2>
            <p style={{ fontSize: "1.05rem", color: "#374151" }}>
              The Premium Plan is an all-inclusive advanced-level training designed for serious traders and long-term investors looking to gain proficiency in the international market. By including real-world case studies, portfolio building techniques, and in-depth exploration of derivatives, sentiment analysis, and asset allocation, this program goes beyond technical training. It provides access to strong trading tools, private investor communities, and exclusive insights—ideal for anyone seeking long-term success in the financial industry.
            </p>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>Skills You Gain</h3>
            <p style={{ color: "#374151", fontSize: "1rem" }}>
              Global Index &nbsp;||&nbsp; Macro Level Analysis &nbsp;||&nbsp; Advanced Derivatives &nbsp;||&nbsp; Portfolio Diversification &nbsp;||&nbsp; Market Sentiment &nbsp;||&nbsp; Trader Psychology &nbsp;||&nbsp; Strategic Planning
            </p>
          </div>

          {/* Learnings */}
          <div style={{ marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", marginBottom: "0.75rem", color: "#1f2937" }}>What You’ll Learn</h3>
            <ol style={{ paddingLeft: "1rem", color: "#374151", fontSize: "1rem", lineHeight: "1.75rem" }}>
              <li>Index & Global Insights: Nifty 50, Bank Nifty, Midcap, Fin Nifty, Dow Jones, DAX, FTSE</li>
              <li>Technical Analysis: RSI, MACD, Bollinger Bands, candlestick formations</li>
              <li>Daily Sector Recaps: FMCG, Pharma, IT, Auto</li>
              <li>Derivatives Mastery: Options, Futures, Breakouts, Gap Theory</li>
              <li>Advanced Risk Management: SLs, Position Sizing, Capital Protection</li>
              <li>Market Psychology: Emotion control and sentiment tracking</li>
              <li>Foreign Market, Commodities, and Inter-market correlations</li>
              <li>Real Investment Case Studies</li>
              <li>Portfolio Building, Diversification & Asset Allocation</li>
              <li>Global Economic Calendar, Open Interest Charts, Sentiment Trackers</li>
              <li>Monthly Outlooks and Custom Watchlists</li>
              <li>Mock Trading Platform Access</li>
              <li>Exclusive Access to Century Investors Community</li>
              <li>Weekly Trading Psychology Webinars and Live Discussions</li>
              <li>Watchlist Creation, Calendar Mapping, and Technical Review Sessions</li>
            </ol>
          </div>

          {/* Modules */}
          <div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "#1f2937", marginBottom: "1rem" }}>Modules</h3>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 1: Market Fundamentals & Core Technicals</strong></h4>
              <p>
                Lay the foundation with Index & Global Insights and gain proficiency in advanced charting tools like RSI, MACD and candlestick patterns. Learn the fundamentals of options & futures, volume & gap theory, and breakout/breakdown dynamics. Start daily sectoral recaps and use simulation trading platforms to apply these skills.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 2: Global Analysis & Market Psychology</strong></h4>
              <p>
                Examine global economic calendars, weekly stock selections, sentiment analysis tools and open interest charts to monitor institutional behavior. Master market psychology, SL placement, and risk management. Use structured simulation to build a macro-to-micro analysis framework and daily trading routine.
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h4><strong>Module 3: Personal Trading System & Live Execution</strong></h4>
              <p>
                Join 2 Q&A sessions and 3 live trading sessions each month to gain practical exposure. Learn about spreads, hedging models, and expiry day trades. Configure personalized watchlists, explore monthly market outlooks, and develop emotional control in high-volatility environments through exclusive webinars.
              </p>
            </div>

            <div>
              <h4><strong>Module 4: Portfolio Mastery, Diversification & Bonus Strategies</strong></h4>
              <p>
                Apply real investment case studies and learn sophisticated options strategies like iron condor, straddle, and strangle. Deep-dive into portfolio construction, asset allocation, and global asset correlations. Explore cross-market opportunities through commodities and forex, all with long-term wealth building in focus.
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

export default PremiumPlanCourse;
