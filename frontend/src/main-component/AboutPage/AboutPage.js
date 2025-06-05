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
      <Navbar/>
      <PageTitle pageTitle={"About Us"} pagesub={"About"} bgImage="/bg-image/about.png" />
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
                    <small></small>
                    <h2>
                     Empowering futures in the
                      <span>
                        {" "}
                       Financial Market

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
                   At Century Finance Limited, we think financial literacy forms the base of true financial freedom. As a growing and reliable name in finance education and stock market training, We work hard to turn beginners into skilled investors and traders. With a team that includes experienced market experts and a SEBI-certified advisor, We provide programs suited to individuals at any level of knowledge or experience.
                  </p>
                  <p>
                    Our goal is clear. We aim to deliver useful and trustworthy learning that connects financial concepts to their practical uses. Whether it’s equity, commodities, forex, or mutual funds, our focused and hands-on methods help you make smart choices and grow long-term wealth.

                  </p>
                  <p>
                    Century Finance Limited is proudly headquartered in Dubai, with our main branch located in Mumbai, India. This strong presence across prominent financial hubs enables us to connect with a wider audience and deliver high-quality financial training and services with greater efficiency and impact.

                  </p>
                  <p>Century Finance Limited stands out by offering a complete package. It mixes technical training with personal growth lessons answering your questions and giving career advice. Whether you're just starting out or want to improve your abilities, we aim to help you at every point.
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
                  <h2>Financial Solutions That Match Your Goals
</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  We extend beyond training—we generate outcomes. Our services match your goals through custom investment plans, expert-managed portfolios, and easy loan options. Whether you work a job, manage a business, or start something new, we offer flexible loans ranging from ₹20,000 to ₹5,00,000. We ensure total transparency and trust.

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
                  <h2>Straightforward & Strategic Investment Plans
</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  
                </p>
              </div>
            </div>
          </div>
Century Finance Limited makes investing simple and focused on clear goals.Our tailored investment options—including the Smart Saver for dependable income and the Wealth Boost for accelerated returns—cater to varying financial objectives and risk appetites. Through competitive interest rates, clear timeframes, and professional support, we optimize your financial growth. Whether you're saving for a specific target or beginning to invest, We provide you  a dependable, profitable, and well-defined wealth-building journey.

          {/* Market Calls Section */}
          <div
            className="wpo-about-text-section "
            style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            <div className="row">
              <div className="col-lg-10 offset-lg-1 text-center">
                <div className="wpo-section-title">
                  <h2>Precise Market Call Subscriptions
</h2>
                </div>
                <p style={{ fontSize: "1.1em", lineHeight: "1.8" }}>
                  Through structured plans like Premium and Platinum, we deliver instant, analysis-driven recommendations across Equity, Commodity, and Foreign markets. From Nifty to Bitcoin, Century Finance provides traders with crucial data for confident decisions.

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
