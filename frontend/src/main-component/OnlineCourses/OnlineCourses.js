// OnlineCourse.js
import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./ExpandingCardGrid.css";
import PopupForm from "./PopupForm";

// ✅ Define coursesData directly here to fix the error
const coursesData = [
  {
    id: "foundation",
    courseNumber: 1,
    icon: "",
    title: "Foundation Course",
    price: "₹1,900",
    duration: "2 Weeks",
    level: "Beginner Level",
    installmentOption: "2 Easy EMIs Available",
    whyChoose: "Start your trading journey with confidence through step-by-step guidance.",
    transformFrom: "“What is Sensex?” → To: “I understand how markets move”",
    tagline: "Begin your path from basics to expert level here.",
    expandedDetails: {
      takeaways: [
        "Start your journey into the stock market with this beginner-friendly course...",
        "Why enroll? Because this is the foundation you need...",
        "Equity Specialization (India): Bank Nifty, Nifty 50, etc.",
        "U.S. Market Insights: Dow Jones, Dollar Index",
      ],
    },
  },
  {
    id: "ignite",
    courseNumber: 2,
    icon: "",
    title: "Ignite",
    price: "₹3,000",
    duration: "3 Weeks",
    installmentOption: "2 Easy EMIs Available",
    whyChoose: "Understand daily market dynamics and improve your trading decisions.",
    transformFrom: "“What’s happening in the market?” → To: “I can track it daily”",
    tagline: "Confidently analyze market movements every day.",
    expandedDetails: {
      takeaways: [
        "Track the market confidently and understand sector-wise movements.",
        "Use live examples of support and resistance.",
        "Daily Market Summary & Sectoral Analysis (Auto, Pharma, IT, FMCG)",
      ],
    },
  },
  // Add other course objects similarly...
];

const OnlineCourse = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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
        <meta name="description" content="Explore our expanding range of online finance courses." />
        <meta name="keywords" content="Online Courses, Finance, Trading, Investment, Century Finance" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Slabo+27px|Yesteryear" rel="stylesheet" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle={"Online Courses"} pagesub={"Courses"} bgImage="/bg-image/online.png" />

      <div className="wrapper-custom">
        <div className="header-custom">
          <h1 className="header-custom__title">Our Course Catalog</h1>
          <h2 className="header-custom__subtitle">Expand Your Financial Knowledge</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "15px",
          }}
        >
          <button
            className="open-popup-button"
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              backgroundColor: "#c02727",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={() => setIsPopupOpen(true)}
          >
            Register Now
          </button>
        </div>

        <div className="cards-custom">
          {coursesData.map((course) => {
            const isExpanded = expandedCardId === course.id;
            const isInactive = expandedCardId !== null && expandedCardId !== course.id;

            let cardClasses = "card-custom";
            if (isExpanded) cardClasses += " is-expanded";
            else cardClasses += " is-collapsed";
            if (isInactive) cardClasses += " is-inactive";

            return (
              <div key={course.id} className={cardClasses}>
                <div className="card-custom__inner" onClick={() => handleCardClick(course.id)}>
                  <div className="card-header-line">
                    <span className="card-course-icon">{course.icon}</span>
                    <h3 className="card-title-main">
                      {course.courseNumber}. <em>{course.title}</em> – {course.price}
                    </h3>
                  </div>
                  <div className="card-details-line">
                    <span className="card-duration-level">
                      {course.duration}
                      {course.level && ` | ${course.level}`}
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

                <div className="card-custom__expander">
                  <i className="fa fa-close" onClick={(e) => handleCloseClick(e)}></i>
                  <div className="expander-content-wrapper">
                    {course.expandedDetails?.takeaways?.length > 0 ? (
                      <>
                        <h4 className="expander-section-title">Description</h4>
                        <ul className="expander-takeaways-list">
                          {course.expandedDetails.takeaways.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p style={{ textAlign: "center", width: "100%" }}>More details coming soon!</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default OnlineCourse;
