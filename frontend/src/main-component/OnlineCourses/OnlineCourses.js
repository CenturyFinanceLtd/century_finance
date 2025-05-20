import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const courses = [
  {
    title: "Foundation Blueprint",
    duration: "2–3 Weeks",
    price: "₹1,900 to ₹3,000",
    description: `
       Transform from: “What is Sensex?” → To: “I understand how markets move”\n
       What You’ll Master:
      * Indian + Global Market Structure — explained simply
      * Support & Resistance: Identify market turning points like a pro
      * Price trends, market phases, essential trading lingo
       Best For: Total beginners who want clarity, not confusion
      Outcome: You’ll gain confidence to enter the market safely
    `
  },
  {
    title: "Ignite Trader Mindset",
    duration: "3 Weeks",
    price: "₹3,000",
    description: `
       Transform from: “What’s happening in the market?” → To: “I can track it daily”\n
       Includes Everything in Foundation Plan, Plus:
      * Daily Market Digest (India + Global)
      * Sector Analysis: Auto, Pharma, FMCG, IT etc.
      * Learn Index Movers, Weightage & Market Dynamics
      * Deep-Dive into Support & Resistance (with live market examples)
       Best For: Students & professionals who want market literacy
       Outcome: Start reading markets with daily clarity and confidence
    `
  },
  {
    title: "Explorer: Derivatives Unlocked",
    duration: "6 Weeks",
    price: "₹4,100",
    description: `
       Transform from: “I’ve heard of Options” → To: “I understand how they work”\n
       Learn:
      * Basics of Futures & Options (no confusing jargon)
      * Macro Trends: RBI Policy, Inflation, Dollar impact
      * Chart Patterns: Double Tops, Breakouts, Head & Shoulders
       Best For: Those ready to go beyond buying/selling stocks
       Outcome: Build knowledge for smarter, leveraged trading
    `
  },
  {
    title: "Advance Edge",
    duration: "8 Weeks",
    price: "₹5,200",
    description: `
       Transform from: “I read charts” → To: “I understand trader psychology”\n
       Learn:
      * Candlestick Interpretation (single & combo patterns)
      * Psychology of Trading: Emotions, Greed, Fear
      * Risk Management: 1% Rule, Stop Loss Setup, Position Sizing
       Best For: Intermediate learners who want safe strategies
       Outcome: You’ll start making smart, low-risk trading decisions
    `
  },
  {
    title: "Trader Pro",
    duration: "10 Weeks",
    price: "₹6,300",
    description: `
       Transform from: “I trade on tips” → To: “I create my own strategies”\n
       Learn:
      * Sector Rotation + Business Cycles
      * Monthly Market Forecasting
      * Personal Watchlist Creation + Gap Theory
       Best For: Those serious about becoming independent traders
       Outcome: Strategize your trades with full market awareness
    `
  },
  {
    title: "Market Master",
    duration: "12 Weeks",
    price: "₹7,400",
    description: `
       Transform from: “I guess trends” → To: “I analyze with indicators”\n
       Learn:
      * RSI, MACD, Bollinger Bands, Moving Averages
      * Mock Trading Platforms for real-time learning
      * Sentiment Tracking: How emotions move the market
       Best For: Serious learners ready to use pro tools
       Outcome: Technical charts become your superpower
    `
  },
  {
    title: "Index Wizard",
    duration: "14 Weeks",
    price: "₹8,500",
    description: `
       Transform from: “I trade stocks” → To: “I understand global asset flows”\n
       Learn:
      * Forex + Commodities: USD-INR, Gold, Oil etc.
      * Intro to Crypto Market & Global Asset Relations
      * Deeper Candlestick Patterns & Global Index Analysis
       Best For: Learners who want international exposure
       Outcome: Learn to position trades globally with confidence
    `
  },
  {
    title: "Global Analyst",
    duration: "16 Weeks",
    price: "₹9,600",
    description: `
       Transform from: “I follow news” → To: “I analyze global sentiment”\n
       Learn:
      * Sentiment Indicators, Open Interest, Put-Call Ratio
      * Long-Term Portfolio Building (Stocks, Mutual Funds, Index)
      * Understand correlation between US, Indian, & Asian markets
       Best For: Strategic investors who want long-term vision
       Outcome: Build a solid global portfolio with smart entries
    `
  },
  {
    title: "Wealth Mentor",
    duration: "18 Weeks",
    price: "₹10,700",
    description: `
       Transform from: “I trade for profit” → To: “I manage risk like a pro”\n
       Learn:
      * Advanced Options: Iron Condor, Straddle, Greeks
      * Capital Protection & Hedging Techniques
      * Access to Weekly Psychology Labs + Pro Trading Groups
       Best For: Aspiring full-time traders
       Outcome: You’ll manage wealth like institutions do
    `
  },
  {
    title: "Premium Vision",
    duration: "20 Weeks",
    price: "₹11,800",
    description: `
       Transform from: “I’m learning solo” → To: “I get personal guidance”\n
       Learn:
      * Monthly 1-on-1 Mentorship Calls
      * Real-time Educational Trade Signals
      * Live Adjustments to Strategy Based on Your Progress
       Best For: Dedicated learners needing mentorship
       Outcome: Accelerate your growth with expert hands-on help
    `
  },
  {
    title: "Ultra Prime",
    duration: "22 Weeks",
    price: "₹14,000",
    description: `
       Transform from: “I learn from YouTube” → To: “I access elite tools & knowledge”\n
       Learn:
      * Lifetime Material Access + Updates
      * AI Tools for Market Scanning
      * Weekly Premium Live Sessions + Elite Trader Circle
       Best For: Long-term, high-value learners
       Outcome: Consistent edge in every market cycle
    `
  },
  {
    title: "Elite Legacy Trader",
    duration: "24 Weeks",
    price: "₹18,000",
    description: `
       Transform from: “I’ve taken many courses” → To: “I’m part of the top 1% community”\n
       All Benefits from Previous Plans, Plus:
      * Invite-only Investor Circle Access
      * Exclusive Networking, Strategy Retreats, Referrals
      * Long-Term Value + Private Community Access
       Best For: Wealth-builders, Entrepreneurs & Financial Educators
       Outcome: Legacy-level wealth skills + high-level exposure
    `
  },
];

const OnlineCourse = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Online Courses - Century Finance Limited</title>
        <meta name="description" content="Get in touch with Century Finance Limited for any inquiries or support. We're here to help with your financial needs." />
        <meta name="keywords" content="Contact, Century Finance, Financial Services, Support, Contact Us" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Online Courses"} pagesub={"Online Courses"} />

      <section style={{ backgroundColor: "#eef5f9", padding: "40px 20px" }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px"
        }}>
          {courses.map((course, index) => (
            <div key={index} style={{
              border: "1px solid #cfd8dc",
              borderRadius: "12px",
              padding: "24px",
              background: "#ffffff",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}>
              <div>
                <h3 style={{ fontSize: "20px", color: "#2c3e50" }}>{course.title}</h3>
                <p style={{ color: "#777" }}>⏱️ {course.duration} | 💰 {course.price}</p>
                <pre style={{ whiteSpace: "pre-wrap", fontSize: "14px", color: "#333" }}>
                  {course.description}
                </pre>
              </div>
              <button style={{
                marginTop: "20px",
                backgroundColor: "#2980b9",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "10px",
                cursor: "pointer",
                transition: "background 0.3s ease"
              }}
              onClick={() => alert(`More info about ${course.title} coming soon!`)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;
