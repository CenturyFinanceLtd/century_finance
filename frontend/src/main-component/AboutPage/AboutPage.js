// frontend/src/main-component/AboutPage/AboutPage.js
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../../components/Navbar/Navbar"; // Adjusted path
import PageTitle from "../../components/pagetitle/PageTitle"; // Adjusted path
// import FunFact2 from "../../components/FunFact2/FunFact2"; // Adjusted path
import Scrollbar from "../../components/scrollbar/scrollbar"; // Adjusted path
import Footer from "../../components/footer/Footer"; // Adjusted path

// Assuming images are correctly placed relative to this file or in public folder
import abImg from "../../images/about/about-image-1.png";
import abImg2 from "../../images/about/about-image-2.png";

// Assuming your SCSS for this page is correctly linked via a global import or this component's specific import
// import './AboutPage.scss'; // Or similar if you have specific styles for this page

const AboutPage = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Helmet>
        <title>About Us - Century Finance Company</title> {/* Updated Title */}
        <meta
          name="description"
          content="Century Finance Company: Empowering futures through financial literacy, world-class training, investment solutions, and credit support."
        />
        <meta
          name="keywords"
          content="About Century Finance, Financial Training, Investment Solutions, Credit Support, Financial Literacy, Stock Advisory, Market Research"
        />
        <meta name="robots" content="noindex, nofollow"></meta>
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle={"About Us"}
        pagesub={"About"}
        bgImage="/bg-image/1.png"
      />
      <section className="wpo-about-section section-padding">
        <div className="container">
          <div className="wpo-about-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-img-wrap">
                  <div className="wpo-about-img-left">
                    <div className="wpo-about-img">
                      <img src={abImg} alt="Century Finance Expertise" />
                    </div>
                  </div>
                  <div className="wpo-about-img-right">
                    <div className="wpo-about-img-inner">
                      <img src={abImg2} alt="Century Finance Teamwork" />
                    </div>
                    <div className="exprience-wrap">
                      <div className="exprience">
                        <div className="icon">
                          <i className="fi flaticon-award"></i>{" "}
                          {/* Ensure flaticon is loaded */}
                        </div>
                        <div className="content">
                          {/* You can update this if needed, or use CountUp for dynamic numbers */}
                          <h3>25+</h3>
                          <p>Years Of Combined Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text">
                  <div className="wpo-section-title">
                    <small>About Century Finance Company</small>
                    <h2>
                      Empowering Futures,
                      <span>
                        {" "}
                        One Portfolio at a Time.
                        {/* You can keep or remove the SVG shape as per your design preference */}
                        {/* <i className="shape">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 53" fill="none">
                            <path d="M152.182...Z" /> 
                          </svg>
                        </i> */}
                      </span>
                    </h2>
                  </div>
                  <p>
                    At Century Finance Company, we believe financial literacy is
                    not a luxury—it’s a necessity. Founded with the mission to
                    democratize access to world-class financial training,
                    investment solutions, and credit support, we’ve built an
                    ecosystem where knowledge meets opportunity, and learning
                    leads to earning.
                  </p>
                  <p>
                    In a rapidly evolving financial world, we act as your
                    compass. From college students exploring the markets to
                    final-year graduates stepping into the finance industry, we
                    provide structured, real-world-ready education. Our
                    specialized training programs span Equity, Commodities, and
                    Global (Foreign) Markets giving you the tools to thrive in
                    competitive environments.
                  </p>
                  <p>
                    Through interactive online classes, personal mentorship,
                    placement support, and live market exposure, we transform
                    academic interest into professional competence. Our
                    “Learning to Earning” model is more than a course—it's a
                    launchpad for ambitious minds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Solutions Section */}
          <div
            className="wpo-about-text-section "
            style={{ paddingTop: "60px", paddingBottom: "30px" }}>
            {" "}
            {/* Added some spacing */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="wpo-section-title">
                  <h2>Financial Solutions That Work for You</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  We offer more than training—we offer trust. Whether you’re
                  seeking a strategic investment plan, an expertly managed
                  portfolio, or tailored financial products like personal,
                  business, or appliance loans our team ensures transparency,
                  flexibility, and reliability every step of the way. With
                  options ranging from ₹20,000 to ₹5,00,000, we serve salaried
                  professionals, self-employed individuals, and budding
                  entrepreneurs alike.
                </p>
              </div>
            </div>
          </div>

          {/* Smart Investing Section */}
          <div
            className="wpo-about-text-section "
            style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="wpo-section-title">
                  <h2>Smart Investing Made Simple</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  Our diverse investment plans—from Smart Saver to Wealth
                  Boost—cater to all financial goals and risk appetites. With
                  fixed returns, bonus benefits, and quarterly perks, we help
                  your money work smarter, not harder. Every plan is backed by
                  transparent interest rates, clearly defined timelines, and a
                  vision for wealth creation that aligns with your life goals.
                </p>
              </div>
            </div>
          </div>

          {/* Market Calls Section */}
          <div
            className="wpo-about-text-section "
            style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="wpo-section-title">
                  <h2>Market Calls That Matter</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  With tiered Call Subscription Plans—from Premium to Platinum
                  —we empower traders with high-accuracy insights across Equity,
                  Commodity, and Crypto segments. From Nifty to Bitcoin, we
                  deliver timely, research-backed calls to help you make
                  confident decisions in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div
            className="wpo-about-features-wrap "
            style={{ paddingTop: "30px" }}>
            {" "}
            {/* Added some spacing */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="wpo-section-title text-center">
                  <h2>Why Choose Century Finance?</h2>
                </div>
                <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅ Certified Training & Live Market Access
                  </li>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅ Flexible Plans & Affordable EMIs
                  </li>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅ Career-Focused Learning with Placement Assistance
                  </li>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅ Transparent Investment & Loan Options
                  </li>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅ Unlimited Call Subscriptions for Serious Traders
                  </li>
                  <li style={{ fontSize: "1.1em", marginBottom: "10px" }}>
                    ✅{" "}
                    <i>
                      Tailored Support for Students, Professionals &
                      Entrepreneurs
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vision and Mission Section */}

          <div className="row " style={{ paddingTop: "60px" }}>
            <div className="col-md-6 mb-4">
              <div className="wpo-section-title">
                <h3>Our Vision</h3>
              </div>
              <p>
                To create a financially empowered generation through education,
                opportunity, and actionable insight.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <div className="wpo-section-title">
                <h3>Our Mission</h3>
              </div>
              <p>
                To be India’s most trusted platform for financial learning,
                investing, and personal finance solutions—rooted in ethics,
                innovation, and impact.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* .container */}
      </section>
      {/* <FunFact2 /> */}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default AboutPage;
