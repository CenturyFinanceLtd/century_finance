// OnlineCourse.js
import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./ExpandingCardGrid.css";

const coursesData = [
  {
    id: "foundation",
    title: "Foundation Blueprint",
    duration: "2–3 Weeks",
    price: "₹1,900 to ₹3,000",
    description: `
        Transform from: “What is Sensex?” → To: “I understand how markets move”

        What You’ll Master:
      * Indian + Global Market Structure — explained simply
      * Support & Resistance: Identify market turning points like a pro
      * Price trends, market phases, essential trading lingo
        Best For: Total beginners who want clarity, not confusion
        Outcome: You’ll gain confidence to enter the market safely
    `,
    expandedDetails: {
      takeaways: [
        "Grasp fundamental market mechanics.",
        "Identify key support and resistance levels.",
        "Understand price trends and market phases.",
        "Speak the language of the markets with essential lingo.",
      ],
      // callToAction: "Build Your Foundation",
    },
  },
  {
    id: "ignite",
    title: "Ignite Trader Mindset",
    duration: "3 Weeks",
    price: "₹3,000",
    description: `
        Transform from: “What’s happening in the market?” → To: “I can track it daily”

        Includes Everything in Foundation Plan, Plus:
      * Daily Market Digest (India + Global)
      * Sector Analysis: Auto, Pharma, FMCG, IT etc.
      * Learn Index Movers, Weightage & Market Dynamics
      * Deep-Dive into Support & Resistance (with live market examples)
        Best For: Students & professionals who want market literacy
        Outcome: Start reading markets with daily clarity and confidence
    `,
    expandedDetails: {
      takeaways: [
        "Develop a routine for daily market tracking.",
        "Analyze various market sectors effectively.",
        "Understand how indices move and why.",
        "Apply support & resistance with live examples.",
      ],
      // callToAction: "Ignite Your Mindset",
    },
  },
  {
    id: "explorer",
    title: "Explorer: Derivatives Unlocked",
    duration: "6 Weeks",
    price: "₹4,100",
    description: `
        Transform from: “I’ve heard of Options” → To: “I understand how they work”

        Learn:
      * Basics of Futures & Options (no confusing jargon)
      * Macro Trends: RBI Policy, Inflation, Dollar impact
      * Chart Patterns: Double Tops, Breakouts, Head & Shoulders
        Best For: Those ready to go beyond buying/selling stocks
        Outcome: Build knowledge for smarter, leveraged trading
    `,
    expandedDetails: {
      takeaways: [
        "Master the basics of Futures & Options without jargon.",
        "Analyze the impact of macro trends on markets.",
        "Recognize and interpret common chart patterns.",
        "Prepare for leveraged trading opportunities.",
      ],
      // callToAction: "Explore Derivatives Now",
    },
  },
  {
    id: "advance",
    title: "Advance Edge",
    duration: "8 Weeks",
    price: "₹5,200",
    description: `
        Transform from: “I read charts” → To: “I understand trader psychology”

        Learn:
      * Candlestick Interpretation (single & combo patterns)
      * Psychology of Trading: Emotions, Greed, Fear
      * Risk Management: 1% Rule, Stop Loss Setup, Position Sizing
        Best For: Intermediate learners who want safe strategies
        Outcome: You’ll start making smart, low-risk trading decisions
    `,
    expandedDetails: {
      takeaways: [
        "Interpret complex candlestick patterns.",
        "Understand and manage trading emotions.",
        "Implement robust risk management strategies.",
        "Make smarter, low-risk trading decisions.",
      ],
      // callToAction: "Gain Your Edge",
    },
  },
  {
    id: "traderpro",
    title: "Trader Pro",
    duration: "10 Weeks",
    price: "₹6,300",
    description: `
        Transform from: “I trade on tips” → To: “I create my own strategies”

        Learn:
      * Sector Rotation + Business Cycles
      * Monthly Market Forecasting
      * Personal Watchlist Creation + Gap Theory
        Best For: Those serious about becoming independent traders
        Outcome: Strategize your trades with full market awareness
    `,
    expandedDetails: {
      takeaways: [
        "Learn to identify sector rotation and business cycles.",
        "Develop skills in monthly market forecasting.",
        "Create and manage a personal trading watchlist.",
        "Apply Gap Theory to your trading strategies.",
      ],
      // callToAction: "Go Pro Today",
    },
  },
  {
    id: "marketmaster",
    title: "Market Master",
    duration: "12 Weeks",
    price: "₹7,400",
    description: `
        Transform from: “I guess trends” → To: “I analyze with indicators”

        Learn:
      * RSI, MACD, Bollinger Bands, Moving Averages
      * Mock Trading Platforms for real-time learning
      * Sentiment Tracking: How emotions move the market
        Best For: Serious learners ready to use pro tools
        Outcome: Technical charts become your superpower
    `,
    expandedDetails: {
      takeaways: [
        "Master technical indicators like RSI, MACD, and Bollinger Bands.",
        "Gain practical experience with mock trading platforms.",
        "Learn to track and interpret market sentiment.",
        "Make indicators your trading superpower.",
      ],
      // callToAction: "Conquer the Market",
    },
  },
  {
    id: "indexwizard",
    title: "Index Wizard",
    duration: "14 Weeks",
    price: "₹8,500",
    description: `
        Transform from: “I trade stocks” → To: “I understand global asset flows”

        Learn:
      * Forex + Commodities: USD-INR, Gold, Oil etc.
      * Intro to Crypto Market & Global Asset Relations
      * Deeper Candlestick Patterns & Global Index Analysis
        Best For: Learners who want international exposure
        Outcome: Learn to position trades globally with confidence
    `,
    expandedDetails: {
      takeaways: [
        "Analyze Forex and Commodity markets (USD-INR, Gold, Oil).",
        "Get an introduction to the Crypto market.",
        "Understand global asset interrelations.",
        "Perform in-depth global index analysis.",
      ],
      // callToAction: "Become a Wizard",
    },
  },
  {
    id: "globalanalyst",
    title: "Global Analyst",
    duration: "16 Weeks",
    price: "₹9,600",
    description: `
        Transform from: “I follow news” → To: “I analyze global sentiment”

        Learn:
      * Sentiment Indicators, Open Interest, Put-Call Ratio
      * Long-Term Portfolio Building (Stocks, Mutual Funds, Index)
      * Understand correlation between US, Indian, & Asian markets
        Best For: Strategic investors who want long-term vision
        Outcome: Build a solid global portfolio with smart entries
    `,
    expandedDetails: {
      takeaways: [
        "Utilize advanced sentiment indicators (OI, PCR).",
        "Build diversified long-term global portfolios.",
        "Analyze correlations between major international markets.",
        "Develop a strategic long-term investment vision.",
      ],
      // callToAction: "Analyze Globally",
    },
  },
  {
    id: "wealthmentor",
    title: "Wealth Mentor",
    duration: "18 Weeks",
    price: "₹10,700",
    description: `
        Transform from: “I trade for profit” → To: “I manage risk like a pro”

        Learn:
      * Advanced Options: Iron Condor, Straddle, Greeks
      * Capital Protection & Hedging Techniques
      * Access to Weekly Psychology Labs + Pro Trading Groups
        Best For: Aspiring full-time traders
        Outcome: You’ll manage wealth like institutions do
    `,
    expandedDetails: {
      takeaways: [
        "Implement advanced options strategies (Iron Condor, Straddle).",
        "Master capital protection and hedging techniques.",
        "Understand and apply option Greeks effectively.",
        "Join psychology labs and pro trading communities.",
      ],
      // callToAction: "Mentor Your Wealth",
    },
  },
  {
    id: "premiumvision",
    title: "Premium Vision",
    duration: "20 Weeks",
    price: "₹11,800",
    description: `
        Transform from: “I’m learning solo” → To: “I get personal guidance”

        Learn:
      * Monthly 1-on-1 Mentorship Calls
      * Real-time Educational Trade Signals
      * Live Adjustments to Strategy Based on Your Progress
        Best For: Dedicated learners needing mentorship
        Outcome: Accelerate your growth with expert hands-on help
    `,
    expandedDetails: {
      takeaways: [
        "Receive personalized 1-on-1 mentorship.",
        "Access real-time educational trade signals.",
        "Get live strategy adjustments based on your progress.",
        "Accelerate your trading growth with expert help.",
      ],
      // callToAction: "Achieve Premium Vision",
    },
  },
  {
    id: "ultraprime",
    title: "Ultra Prime",
    duration: "22 Weeks",
    price: "₹14,000",
    description: `
        Transform from: “I learn from YouTube” → To: “I access elite tools & knowledge”

        Learn:
      * Lifetime Material Access + Updates
      * AI Tools for Market Scanning
      * Weekly Premium Live Sessions + Elite Trader Circle
        Best For: Long-term, high-value learners
        Outcome: Consistent edge in every market cycle
    `,
    expandedDetails: {
      takeaways: [
        "Gain lifetime access to course materials and updates.",
        "Utilize AI-powered tools for market scanning.",
        "Participate in weekly premium live sessions.",
        "Join the Elite Trader Circle for networking.",
      ],
      // callToAction: "Go Ultra Prime",
    },
  },
  {
    id: "elitelegacy",
    title: "Elite Legacy Trader",
    duration: "24 Weeks",
    price: "₹18,000",
    description: `
        Transform from: “I’ve taken many courses” → To: “I’m part of the top 1% community”

        All Benefits from Previous Plans, Plus:
      * Invite-only Investor Circle Access
      * Exclusive Networking, Strategy Retreats, Referrals
      * Long-Term Value + Private Community Access
        Best For: Wealth-builders, Entrepreneurs & Financial Educators
        Outcome: Legacy-level wealth skills + high-level exposure
    `,
    expandedDetails: {
      takeaways: [
        "Access an invite-only Investor Circle.",
        "Benefit from exclusive networking and strategy retreats.",
        "Build long-term value with a private community.",
        "Develop legacy-level wealth skills and gain high-level exposure.",
      ],
      // callToAction: "Secure Your Legacy",
    },
  },
];

const OnlineCourse = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (courseId) => {
    setExpandedCardId((prevId) => (prevId === courseId ? null : courseId));
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setExpandedCardId(null);
  };

  const handleEnrollClick = (courseTitle) => {
    alert(`Proceeding to enrollment for ${courseTitle}...`);
    // Here you would typically navigate to an enrollment page or open a modal
  };

  useEffect(() => {
    document.body.classList.add("expanding-card-grid-body-styles");
    return () => {
      document.body.classList.remove("expanding-card-grid-body-styles");
    };
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Online Courses - Century Finance Limited</title>
        <meta
          name="description"
          content="Explore our expanding range of online finance courses."
        />
        <meta
          name="keywords"
          content="Online Courses, Finance, Trading, Investment, Century Finance"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Slabo+27px|Yesteryear"
          rel="stylesheet"
        />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Online Courses"} pagesub={"Courses"} />

      <div className="wrapper-custom">
        <div className="header-custom">
          <h1 className="header-custom__title">Our Course Catalog</h1>
          <h2 className="header-custom__subtitle">
            Expand Your Financial Knowledge
          </h2>
        </div>

        <div className="cards-custom">
          {coursesData.map((course) => {
            const isExpanded = expandedCardId === course.id;
            const isInactive =
              expandedCardId !== null && expandedCardId !== course.id;

            let cardClasses = "card-custom";
            if (isExpanded) {
              cardClasses += " is-expanded";
            } else {
              cardClasses += " is-collapsed";
            }
            if (isInactive) {
              cardClasses += " is-inactive";
            }

            return (
              <div key={course.id} className={cardClasses}>
                <div
                  className="card-custom__inner"
                  onClick={() => handleCardClick(course.id)}>
                  <h3 className="card-title-custom">{course.title}</h3>
                  <div className="card-meta-custom">
                    <span className="card-duration">⏱️ {course.duration}</span>
                    <span className="card-price">💰 {course.price}</span>
                  </div>
                  <div className="card-description-inner-custom">
                    {course.description}
                  </div>
                  <i className="fa fa-folder-o card-icon-custom"></i>
                </div>

                <div className="card-custom__expander">
                  <i
                    className="fa fa-close"
                    onClick={(e) => handleCloseClick(e)}></i>
                  <div className="expander-content-wrapper">
                    {course.expandedDetails && (
                      <>
                        {course.expandedDetails.takeaways &&
                          course.expandedDetails.takeaways.length > 0 && (
                            <>
                              <h4 className="expander-section-title">
                                Key Takeaways:
                              </h4>
                              <ul className="expander-takeaways-list">
                                {course.expandedDetails.takeaways.map(
                                  (item, index) => (
                                    <li key={index}>{item}</li>
                                  )
                                )}
                              </ul>
                            </>
                          )}
                        {course.expandedDetails.callToAction && (
                          <button
                            className="expander-cta-button"
                            onClick={() => handleEnrollClick(course.title)}>
                            {course.expandedDetails.callToAction}
                          </button>
                        )}
                      </>
                    )}
                    {!course.expandedDetails && ( // Fallback if expandedDetails is missing for some reason
                      <p style={{ textAlign: "center", width: "100%" }}>
                        More details coming soon!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;
