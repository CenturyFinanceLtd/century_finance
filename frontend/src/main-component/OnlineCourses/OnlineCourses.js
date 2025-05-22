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
    courseNumber: 1,
    icon: "",
    title: "Foundation Course",
    price: "₹1,900 ", // Re-used 'price' for 'priceText'
    duration: "2 Weeks",
    level: "Beginner Level",
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Start your trading journey with confidence through step-by-step guidance.",
    transformFrom: "“What is Sensex?” → To: “I understand how markets move”",
    tagline: "Begin your path from basics to expert level here.",
    // expandedDetails from previous step - user will update its content later
    expandedDetails: {
      takeaways: [
        "Start your journey into the stock market with this beginner-friendly course. If you’ve ever wondered, “What is Sensex?” or “How do I make money in the market?” — this course is designed just for you. We break down complex concepts into simple language, using visuals and real-life examples, so you never feel lost.", "Why enroll? Because this is the foundation you need to build confidence and avoid costly beginner mistakes. You’ll learn how the Indian and global markets work, what moves prices, and how to read price charts to spot smart entry and exit points.", "Why this course is unique:-This course is the starting point — it lays the groundwork. It’s designed for absolute beginners who want clear, simple explanations to build a solid foundation before moving to more advanced topics.", "Flexible Payment Plan:- To make your learning journey easier, we offer this course in 2 easy installments.A small interest fee applies to cover processing costs, helping you manage your budget comfortably while gaining valuable market knowledge!", "Equity Specialization (India):-Bank Nifty, Nifty 50, Fin Nifty, Midcap Nifty","European Market Overview:-CSA 40, FTSE 100, OMX, DAX","U.S. Market Insights:-Dow Jones, Gift Nifty, Dollar Index",
    ],
    },
  },
  {
    id: "ignite",
    courseNumber: 2,
    icon: "",
    title: "Ignite ",
    price: "₹3,000",
    duration: "3 Weeks",
    level: null, // No specific level mentioned in the new format for this one
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Understand daily market dynamics and improve your trading decisions.",
    transformFrom:
      "“What’s happening in the market?” → To: “I can track it daily”",
    tagline: "Confidently analyze market movements every day.",
    expandedDetails: {
      takeaways: [
        "Ready to move beyond basics?-This course builds daily habits to track the market confidently and understand sector-wise movements. Perfect for students and professionals wanting to develop market literacy.", "Why enroll?-Because knowing what’s happening daily can help you make timely decisions and spot opportunities others miss. You’ll learn to analyze market sectors, understand index movements, and use live examples of support and resistance.", "Why this course is unique:- the Foundation course focuses on daily market tracking and sector analysis, helping you develop a mindset to actively monitor and understand the market dynamics", "Flexible Payment Plan:-Enroll now with our convenient 2-installment plan, with  nominal interest charge. This helps you invest in your future without financial stress!", "Index Insights:- Bank Nifty, Nifty50, Fin Nifty, Midcap, Dow Jones, Dollar Index,CSA 40, FTSE 100, DAX & more.","Global Market Overview:- India, Europe, & U.S. Daily Market Summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)","Support & Resistance:- Master the foundation of technical analysis Understand Index Movers & Weightage",

      ],

    },
  },
  {
    id: "explorer",
    courseNumber: 3,
    icon: "",
    title: "Explorer: ",
    price: "₹4,100",
    duration: "6 Weeks",
    level: null,
    installmentOption: "2 Easy EMIs Available",
    whyChoose: "Learn derivatives and leverage smart trading strategies.",
    transformFrom: "“I’ve heard of Options” → To: “I understand how they work”",
    tagline: "Gain essential knowledge for smarter trading.",
    expandedDetails: {
      takeaways: [
        "Heard of Futures and Options but find them confusing? This course makes derivatives simple, helping you leverage your trades wisely.", "Why enroll?:- Because derivatives are powerful tools for growth and risk management — once you understand them clearly. You’ll learn macroeconomic trends, popular chart patterns, and how options trading works without jargon.", "Why this course is unique:- This course dives into derivatives — a completely new trading domain beyond basic stocks. It equips you with essential tools for more advanced strategies, setting the stage for further skill development.", "Flexible Payment Plan:- We provide a simple 2-part payment option to make the course affordable. Pay in 2 easy installments with a small interest fee to help you spread the investment over time.", "Index Insights:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE & more","Global Market Overview:- India, Europe & U.S. Daily Market Recap + Sectoral Analysis (Auto, Pharma, IT, FMCG)","Support & Resistance:-  Core of technical analysis","Intro to Derivatives:- Options & Futures Weekly Stock Picks , Global Economic Calendar Insights ,Breakout & Breakdown Patterns – Spot game-changing price moves ,Perfect for those ready to trade smarter, not harder"

      ],

    },
  },
  {
    id: "advance",
    courseNumber: 4,
    icon: "",
    title: "Advance Edge",
    price: "₹5,200",
    duration: "8 Weeks",
    level: null,
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Master trading psychology and risk management to gain your edge.",
    transformFrom: "“I read charts” → To: “I understand trader psychology”",
    tagline: "Control your emotions and make better decisions.",
    expandedDetails: {
      takeaways: [
         "Why enroll?Because trading psychology and risk management are the keys to consistent profits.", "Why this course is unique :this course targets mindset and risk control, which are crucial for long-term success but often overlooked.", "Flexible Payment Plan :-Take advantage of our 2-installment payment plan with a small interest charge, making it easier for you to invest in your trading future without upfront pressure.", "Index Insights:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE","Global Market Overview:- India, Europe & U.S.","Daily Market Recap + Sector Analysis:- (Auto, IT, Pharma, FMCG)","Support & Resistance:-Build your technical foundation","Intro to Derivatives:- Options & Futures","Weekly Stock Picks curated by experts","Global Economic Calendar guidance","Breakout & Breakdown Patterns:- Master entry/exit signals","Chart Patterns;- Double Top, Head & Shoulders, Flags & more","Candlestick Basics"," Read market psychology","2x Live Q&A Sessions with Market Analysts",
],

    },
  },
  {
    id: "traderpro",
    courseNumber: 5,
    icon: "",
    title: "Trader Pro",
    price: "₹6,300",
    duration: "10 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Learn strategy building and move beyond trading on tips.",
    transformFrom: "“I trade on tips” → To: “I create my own strategies”",
    tagline: "Plan your trades smartly with proven methods.",
    expandedDetails: {
      takeaways: [
      "Why enroll? :- Because strategic trading with a clear plan beats random guessing.", "Why this course is unique  :- This course teaches you how to think strategically about markets, moving from reactive to proactive trading. ", "Flexible Payment Plan:- Our easy 3-installment option lets you split the course fee into two manageable payments with a nominal interest charge, helping you start learning immediately!", "Index Mastery:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE","Global Market Overview:- India, Europe, U.S.","Daily Recaps + Sectoral Insights (Auto, IT, Pharma, FMCG):-Support & Resistance, Chart Patterns, Candlestick Psychology","Derivatives Deep Dive:-Options & Futures","Breakout & Breakdown Strategies:- Global Economic Calendar + Weekly Stock Picks","Volume Analysis :- Validate trends like a pro","Risk Management:-1% Rule, SL, Position Sizing,Market Emotion & Candle Psychology","Bullish/Bearish Patterns:- 2x Live Q&As + 3 Live Trading Sessions/month with analysts","Includes everything from Advance Edge Plan.",

      ],

    },
  },
  {
    id: "marketmaster",
    courseNumber: 6,
    icon: "",
    title: "Market Master",
    price: "₹7,400",
    duration: "12 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Analyze markets using technical indicators like a pro.",
    transformFrom: "“I guess trends” → To: “I analyze with indicators”",
    tagline: "Use charts and tools to trade confidently.",
    expandedDetails: {
      takeaways: [
       "Why enroll?:- Because mastering tools like RSI, MACD, and Bollinger Bands gives you an edge in predicting price moves. Plus, live practice builds confidence before real trades.", "Why this course is unique:- this one combines theory with live practice, giving you hands-on experience to build confidence.", "Flexible Payment Plan:- Enroll with our 3-installment plan  with a small interest fee. This makes your investment in market mastery easier to manage!", "Index Mastery:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE","Global Market Insights:-India, Europe, U.S.","Daily Recaps + Sector Analysis (Auto, IT, Pharma, FMCG)","upport & Resistance, Chart & Candlestick Patterns:- Options & Futures, Breakout/Breakdown Tactics, Volume Strategy Global Calendar + Weekly Stock Picks","Risk Management, Market Psychology, Gap Theory","Sector Rotation & Business Cycle Mastery","Monthly Market Outlook (India + Global)","Personalized Watchlist Setup:-2x Live Q&As + 3 Live Trading Sessions/month","Includes everything from Trader Pro Plan",
      ],

    },
  },
  {
    id: "indexwizard",
    courseNumber: 7,
    icon: "",
    title: "Index Wizard",
    price: "₹8,500",
    duration: "14 Weeks",
    level: null,
    installmentOption: "4 Easy EMIs Available",
    whyChoose: "Understand global markets and diversify your portfolio.",
    transformFrom: "“I trade stocks” → To: “I understand global asset flows”",
    tagline: "Make your mark in the world of global trading.",
    expandedDetails: {
      takeaways: [
     "Why enroll? :- Because the market isn’t just local — global asset flows impact your trades. ","Why this course is unique :- This course expands your market view globally — a significant step beyond local Indian markets taug", "Flexible Payment Plan :- Our 4-part installment option with a nominal interest fee lets you learn globally without financial worry—pay half now, half later!", "Index Deep Dive:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE","Global Market Insights:-India, Europe & U.S.","Daily Recaps + Sector Analysis (Auto, IT, Pharma, FMCG):-Support & Resistance, Chart & Candlestick Patterns","Intermediate Technicals:-RSI, MACD, Bollinger Bands, Moving Averages ,Options & Futures, Breakout/Breakdown, Volume Analysis, Gap Theory Global Economic Calendar + Weekly Stock Picks","Risk Management & Market Psychology","Sector Rotation & Business Cycle Trends:-Market Sentiment Tools + Open Interest Charts","Mock Trading Practice Platform Access","Candlestick Mastery:-Doji, Hammer, Engulfing & more ,Monthly Market Outlook + Custom Watchlist Setup","2x Live Q&As + 3 Live Trading Sessions/month",

      ],

    },
  },
  {
    id: "globalanalyst",
    courseNumber: 8,
    icon: "",
    title: "Global Analyst",
    price: "₹9,600",
    duration: "16 Weeks",
    level: null,
    installmentOption: "4 Easy EMIs Available",
    whyChoose:
      "Become an expert in long-term investing and global market analysis.",
    transformFrom: "“I follow news” → To: “I analyze global sentiment”",
    tagline: "Build a strong foundation for strategic investing.",
    expandedDetails: {
      takeaways: [
        "Focus on strategic, long-term investing with global market insights and portfolio building.", "Why enroll? :- Because understanding global market sentiment and correlations helps build strong, diversified portfolios for wealth growth.", "Why this course is unique:- This course is about investing, not just trading. It focuses on portfolio building and wealth creation with a global perspective.", "Flexible Payment Plan:- Make the investment easier with our 4-installment plan, paying in parts with a small interest fee to help spread the cost comfortably.", "Index Mastery:-Nifty50, Bank Nifty, Fin Nifty, Midcap, Dow Jones, DAX, FTSE","Global Market Insights:-India, Europe, U.S. Daily Recaps + Sector Analysis (Auto, IT, Pharma, FMCG) ,Chart & Candlestick Patterns, Support & Resistance","Intermediate Technicals :- RSI, MACD, Bollinger Bands, MAs ,Options, Futures, Breakouts/Breakdowns, Volume & Gap Theory ,Risk Management + Market Psychology ,Sector Rotation + Business Cycles ,Global Economic Calendar + Weekly Stock Picks ,Sentiment Tools + Open Interest Charts ,Mock Trading Platform Access ,Candlestick Mastery – Doji, Hammer, Engulfing ,Monthly Market Outlook + Custom Watchlist Setup ,2x Live Q&As + 3 Live Trading Sessions/month","Bonus Modules::- Forex & Commodities (Gold, Oil, USD-INR) ,Crypto Market Overview ,Global Asset Correlations ,Moving Averages as Dynamic Support/Resistance",

      ],
    },
  },
  {
    id: "wealthmentor",
    courseNumber: 9,
    icon: "", // Re-using icon, can be changed
    title: "Wealth Mentor",
    price: "₹10,700",
    duration: "18 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose: "Master professional risk management and grow your wealth.",
    transformFrom: "“I trade for profit” → To: “I manage risk like a pro”",
    tagline: "Develop institutional-level trading skills.",
    expandedDetails: {
      takeaways: [
        "Take your trading seriously with advanced options strategies, capital protection, and psychological coaching.", "Why enroll? :- Because managing risk is what separates winners from losers. Learn how to hedge, use complex options, and join professional trading groups for continuous growth.", "Why this course is unique: This course blends advanced trading techniques with professional-level psychological support and community learning.", "Flexible Payment Plan:- 5-installment payment plan with nominal interest—pay  ", "Index & Global Insights:-Nifty, Dow Jones, DAX, FTSE","Chart & Candlestick Patterns, Support/Resistance, RSI, MACD, Bollinger Bands , Options, Futures, Breakouts, Volume, Gap Theory","Daily Recaps + Sector Analysis (Auto, Pharma, IT, FMCG):- Risk Management + Market Psychology ,Sector Rotation + Business Cycles ,Global Economic Calendar + Weekly Stock Picks ,Open Interest Charts + Sentiment Tools , Mock Trading Practice + Candlestick Mastery , Monthly Outlook + Custom Watchlist Setup , 2x Live Q&As + 3 Live Trading Sessions/month","Bonus:-Forex, Commodities, Crypto & Global Correlations ,Real Investment Case Studies ,Portfolio Building, Diversification & Asset Allocation","Advanced Risk Control:-SLs, Sizing, Capital Protection","Includes everything in Global Analyst Plan. Perfect for traders ready to build wealth with confidence!",

      ],

    },
  },
  {
    id: "premiumPlan",
    courseNumber: 10,
    icon: "",
    title: "Premium Plan",
    price: "₹11,800",
    duration: "20 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Boost your skills with expert mentorship and personalized guidance.",
    transformFrom: "“I’m learning solo” → To: “I get personal guidance”",
    tagline: "Grow faster with dedicated support.",
    expandedDetails: {
      takeaways: [
        "Get personal mentorship and real-time trade signals to accelerate your growth.", "Why enroll? :- Because expert guidance and live feedback dramatically shorten your learning curve. You’ll get 1-on-1 calls, educational signals, and live strategy tweaks tailored to your progress.", "Why this course is unique:- Unlike all previous courses, this one offers personal coaching and live trade support, making it highly interactive and tailored to you.", "Flexible Payment Plan:- Our 5-installment plan allows you to pay comfortably in two parts with a small interest fee—start learning without delay!", "Index & Global Insights:-Nifty, Dow, DAX, FTSE","Advanced Charting :-RSI, MACD, Bollinger Bands, Candlesticks ,Options, Futures, Breakouts, Volume, Gap Theory , Daily Market Recaps + Sectoral Trends (Auto, Pharma, IT) , Risk Management + Market Psychology , Sector Rotation + Business Cycles , Market Sentiment Analysis + OI Charts , Global Calendar + Weekly Stock Picks , Mock Trading Access + Custom Watchlist Setup ,2x Live Q&As + 3 Live Trading Sessions/month","Bonus Power Modules:-Forex, Commodities, Crypto, Global Correlations ,Real Case Studies + Portfolio Building & Asset Allocation","Advanced Options Strategies;-Iron Condor, Straddle, Strangle ,Weekly Psychology Webinars ,Exclusive Access to Trader & Investor Community",

      ],

    },
  },
  {
    id: "ultraprime",
    courseNumber: 11,
    icon: "",
    title: "Ultra Prime",
    price: "₹14,000",
    duration: "22 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Get elite tools, AI support, and exclusive sessions for every market cycle.",
    transformFrom:
      "“I learn from YouTube” → To: “I access elite tools & knowledge”",
    tagline: "Maintain a consistent edge in the market.",
    expandedDetails: {
      takeaways: [
        "Join the elite with lifetime access, AI-powered tools, and exclusive live sessions.", "Why enroll?:- Because staying ahead requires constant updates, smart scanning tools, and networking with top traders — all included here.", "Why this course is unique:- This course provides lifelong learning and exclusive tools to stay at the cutting edge of market trading.", "Flexible Payment Plan:- Split your payment into 5 easy installments with a nominal interest fee, making elite learning accessible and budget-friendly.", "Global Index Mastery:- Nifty, Dow, DAX, FTSE","Advanced Charting:-RSI, MACD, Bollinger Bands, Candlesticks  ,Options, Futures, Volume, Breakouts & Gap Theory ,Daily Recaps + Sector Trends (Auto, Pharma, IT) ,Risk Management + Market Psychology ,Sector Rotation + Business Cycles ,OI Charts + Sentiment Tools ,Mock Trading + Custom Watchlist + Weekly Stock Picks, 2x Live Q&As + 3 Live Trading Sessions/month","Premium Add-ons:- Forex, Commodities, Crypto + Global Correlations ,Portfolio Building + Real Case Studies","Advanced Options:- Iron Condor, Straddle, Strangle ,Weekly Psychology Webinars + Strategy Customization ,Exclusive Trader Community + 1-on-1 Mentorship ,Priority Support + Real-Time Trade Signals (Edu Purpose)","Consolidation Mastery :– Spot key breakout zones"

      ],

    },
  },
  {
    id: "elite",
    courseNumber: 12,
    icon: "",
    title: "Elite ",
    price: "₹18,000",
    duration: "24 Weeks",
    level: null,
    installmentOption: "5 Easy EMIs Available",
    whyChoose:
      "Join the top 1% community with exclusive networking and strategy retreats.",
    transformFrom:
      "“I’ve taken many courses” → To: “I’m part of the top 1% community”",
    tagline: "Build your legacy of financial success.",
    expandedDetails: {
      takeaways: [
        "Become part of the top 1% investor community with exclusive access, retreats, and networking.", "Why enroll?:-Because building wealth and legacy requires high-level knowledge, community support, and continuous exposure to elite strategies. ", "Why this course is unique:- This is the ultimate program for those serious about long-term wealth and elite community access — beyond just trading skills.", "Flexible Payment Plan:- Enroll with confidence through our 5-installment payment plan (with a small interest fee), making this elite program financially manageable.", "Global Index Mastery:-Nifty, Dow, DAX, FTSE","Advanced Charting:-RSI, MACD, Bollinger Bands, Candlesticks ,Options, Futures, Volume, Breakouts, Gap & Divergence Strategies ,Daily Recaps + Sector Trends (Auto, Pharma, IT) ,Risk Management + Market Psychology ,Sector Rotation + Business Cycles  ,OI Charts + Sentiment Tools ,Mock Trading, Custom Watchlist, Weekly Stock Picks ,2x Live Q&As + 3 Live Trading Sessions/month","Premium Add-ons::- Premium Add-ons:- Forex, Commodities, Crypto + Global Correlations ,Real Case Studies + Portfolio Building ,Advanced Options (Iron Condor, Straddle, Strangle) ,Psychology Webinars + Strategy Customization ,1-on-1 Mentorship + Elite Trader Community ,Real-Time Trade Signals (Edu Use) ,Lifetime Module Access + 1-Yr Premium Workshop Access ,AI-Powered Tools + Entry to Elite Investor Circle"

      ],

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
                {/* MODIFIED .card-custom__inner for new content structure */}
                <div
                  className="card-custom__inner"
                  onClick={() => handleCardClick(course.id)}>
                  <div className="card-header-line">
                    <span className="card-course-icon">{course.icon}</span>
                    <h3 className="card-title-main">
                      {course.courseNumber}. <em>{course.title}</em> –{" "}
                      {course.price}
                    </h3>
                  </div>

                  <div className="card-details-line">
                    <span className="card-duration-level">
                      {course.duration}
                      {course.level && ` |  ${course.level}`}
                    </span>
                  </div>

                  {course.installmentOption && (
                    <div className="card-installment-line">
                      <em>{course.installmentOption}</em>
                    </div>
                  )}

                  <div className="card-why-choose">
                    <p>
                      <em>Why choose this plan?</em>
                      <br />
                      {course.whyChoose}
                    </p>
                  </div>

                  <div className="card-transform">
                    <p>
                      <em>Transform from:</em> {course.transformFrom}
                    </p>
                  </div>

                  <div className="card-tagline">
                    <p>{course.tagline}</p>
                  </div>

                  <div className="learn-btn">
                    <p>Learn More</p>
                  </div>
                </div>

                {/* Expander content remains the same as the previous step, using course.expandedDetails */}
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
                                Discription
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
                    {!course.expandedDetails && (
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