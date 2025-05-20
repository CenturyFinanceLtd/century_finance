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
    icon: "🔰",
    title: "Foundation Blueprint",
    price: "₹1,900 to ₹3,000", // Re-used 'price' for 'priceText'
    duration: "2–3 Weeks",
    level: "Beginner Level",
    installmentOption: "2 Easy EMIs Available",
    whyChoose:
      "Start your trading journey with confidence through step-by-step guidance.",
    transformFrom: "“What is Sensex?” → To: “I understand how markets move”",
    tagline: "Begin your path from basics to expert level here.",
    // expandedDetails from previous step - user will update its content later
    expandedDetails: {
      takeaways: [
        "Grasp fundamental market mechanics.",
        "Identify key support and resistance levels.",
        "Understand price trends and market phases.",
        "Speak the language of the markets with essential lingo.",
      ],
      callToAction: "Build Your Foundation",
    },
  },
  {
    id: "ignite",
    courseNumber: 2,
    icon: "🔥",
    title: "Ignite Trader Mindset",
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
        "Develop a routine for daily market tracking.",
        "Analyze various market sectors effectively.",
        "Understand how indices move and why.",
        "Apply support & resistance with live examples.",
      ],
      callToAction: "Ignite Your Mindset",
    },
  },
  {
    id: "explorer",
    courseNumber: 3,
    icon: "🌐",
    title: "Explorer: Derivatives Unlocked",
    price: "₹4,100",
    duration: "6 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Learn derivatives and leverage smart trading strategies.",
    transformFrom: "“I’ve heard of Options” → To: “I understand how they work”",
    tagline: "Gain essential knowledge for smarter trading.",
    expandedDetails: {
      takeaways: [
        "Master the basics of Futures & Options without jargon.",
        "Analyze the impact of macro trends on markets.",
        "Recognize and interpret common chart patterns.",
        "Prepare for leveraged trading opportunities.",
      ],
      callToAction: "Explore Derivatives Now",
    },
  },
  {
    id: "advance",
    courseNumber: 4,
    icon: "🎯",
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
        "Interpret complex candlestick patterns.",
        "Understand and manage trading emotions.",
        "Implement robust risk management strategies.",
        "Make smarter, low-risk trading decisions.",
      ],
      callToAction: "Gain Your Edge",
    },
  },
  {
    id: "traderpro",
    courseNumber: 5,
    icon: "💼",
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
        "Learn to identify sector rotation and business cycles.",
        "Develop skills in monthly market forecasting.",
        "Create and manage a personal trading watchlist.",
        "Apply Gap Theory to your trading strategies.",
      ],
      callToAction: "Go Pro Today",
    },
  },
  {
    id: "marketmaster",
    courseNumber: 6,
    icon: "📊",
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
        "Master technical indicators like RSI, MACD, and Bollinger Bands.",
        "Gain practical experience with mock trading platforms.",
        "Learn to track and interpret market sentiment.",
        "Make indicators your trading superpower.",
      ],
      callToAction: "Conquer the Market",
    },
  },
  {
    id: "indexwizard",
    courseNumber: 7,
    icon: "💹",
    title: "Index Wizard",
    price: "₹8,500",
    duration: "14 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Understand global markets and diversify your portfolio.",
    transformFrom: "“I trade stocks” → To: “I understand global asset flows”",
    tagline: "Make your mark in the world of global trading.",
    expandedDetails: {
      takeaways: [
        "Analyze Forex and Commodity markets (USD-INR, Gold, Oil).",
        "Get an introduction to the Crypto market.",
        "Understand global asset interrelations.",
        "Perform in-depth global index analysis.",
      ],
      callToAction: "Become a Wizard",
    },
  },
  {
    id: "globalanalyst",
    courseNumber: 8,
    icon: "🌍",
    title: "Global Analyst",
    price: "₹9,600",
    duration: "16 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose:
      "Become an expert in long-term investing and global market analysis.",
    transformFrom: "“I follow news” → To: “I analyze global sentiment”",
    tagline: "Build a strong foundation for strategic investing.",
    expandedDetails: {
      takeaways: [
        "Utilize advanced sentiment indicators (OI, PCR).",
        "Build diversified long-term global portfolios.",
        "Analyze correlations between major international markets.",
        "Develop a strategic long-term investment vision.",
      ],
      callToAction: "Analyze Globally",
    },
  },
  {
    id: "wealthmentor",
    courseNumber: 9,
    icon: "💼", // Re-using icon, can be changed
    title: "Wealth Mentor",
    price: "₹10,700",
    duration: "18 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose: "Master professional risk management and grow your wealth.",
    transformFrom: "“I trade for profit” → To: “I manage risk like a pro”",
    tagline: "Develop institutional-level trading skills.",
    expandedDetails: {
      takeaways: [
        "Implement advanced options strategies (Iron Condor, Straddle).",
        "Master capital protection and hedging techniques.",
        "Understand and apply option Greeks effectively.",
        "Join psychology labs and pro trading communities.",
      ],
      callToAction: "Mentor Your Wealth",
    },
  },
  {
    id: "premiumvision",
    courseNumber: 10,
    icon: "👨‍🏫",
    title: "Premium Vision",
    price: "₹11,800",
    duration: "20 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose:
      "Boost your skills with expert mentorship and personalized guidance.",
    transformFrom: "“I’m learning solo” → To: “I get personal guidance”",
    tagline: "Grow faster with dedicated support.",
    expandedDetails: {
      takeaways: [
        "Receive personalized 1-on-1 mentorship.",
        "Access real-time educational trade signals.",
        "Get live strategy adjustments based on your progress.",
        "Accelerate your trading growth with expert help.",
      ],
      callToAction: "Achieve Premium Vision",
    },
  },
  {
    id: "ultraprime",
    courseNumber: 11,
    icon: "🧠",
    title: "Ultra Prime",
    price: "₹14,000",
    duration: "22 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose:
      "Get elite tools, AI support, and exclusive sessions for every market cycle.",
    transformFrom:
      "“I learn from YouTube” → To: “I access elite tools & knowledge”",
    tagline: "Maintain a consistent edge in the market.",
    expandedDetails: {
      takeaways: [
        "Gain lifetime access to course materials and updates.",
        "Utilize AI-powered tools for market scanning.",
        "Participate in weekly premium live sessions.",
        "Join the Elite Trader Circle for networking.",
      ],
      callToAction: "Go Ultra Prime",
    },
  },
  {
    id: "elitelegacy",
    courseNumber: 12,
    icon: "🏆",
    title: "Elite Legacy Trader",
    price: "₹18,000",
    duration: "24 Weeks",
    level: null,
    installmentOption: "3 Easy EMIs Available",
    whyChoose:
      "Join the top 1% community with exclusive networking and strategy retreats.",
    transformFrom:
      "“I’ve taken many courses” → To: “I’m part of the top 1% community”",
    tagline: "Build your legacy of financial success.",
    expandedDetails: {
      takeaways: [
        "Access an invite-only Investor Circle.",
        "Benefit from exclusive networking and strategy retreats.",
        "Build long-term value with a private community.",
        "Develop legacy-level wealth skills and gain high-level exposure.",
      ],
      callToAction: "Secure Your Legacy",
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
                      ⏳ {course.duration}
                      {course.level && ` | 🧠 ${course.level}`}
                    </span>
                  </div>

                  {course.installmentOption && (
                    <div className="card-installment-line">
                      💳 <em>{course.installmentOption}</em>
                    </div>
                  )}

                  <div className="card-why-choose">
                    <p>
                      📌 <em>Why choose this plan?</em>
                      <br />
                      {course.whyChoose}
                    </p>
                  </div>

                  <div className="card-transform">
                    <p>
                      📘 <em>Transform from:</em> {course.transformFrom}
                    </p>
                  </div>

                  <div className="card-tagline">
                    <p>💥 {course.tagline}</p>
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