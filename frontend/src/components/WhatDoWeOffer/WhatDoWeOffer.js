import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import abImg from "../../images/about/offer2.png";
import abImg2 from "../../images/about/offer3.png";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const CourseSection = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => setShowAll(!showAll);

  const offerings = [
    {
      title: "Training Programs",
      description:
        "SEBI-certified experts conduct well-organized stock market and finance courses. These courses cater to students at all levels, from those just starting out to more advanced learners.",
    },
    {
      title: "Call Subscription Plans",
      description:
        "Get research-based trading calls in Equity, Commodity markets delivered in real-time. Subscription options, including Premium and Platinum, let you choose a plan that fits your trading style.",
    },
    {
      title: "Online Classes",
      description:
        "Learn with flexibility through Century Finance online classes. These sessions offer an accessible and interactive way to dive into financial topics anytime, from anywhere.",
    },
    {
      title: "Portfolio Services",
      description:
        "Get professional support to create, handle, and improve your investment portfolio. These services aim to help you achieve steady financial growth.",
    },
    {
      title: "Investment Plans",
      description:
        "Find fixed-return plans like Smart Saver and Wealth Boost crafted to align with specific financial goals and personal risk tolerance.",
    },
    {
      title: "Finance Solutions",
      description:
        "Access various customized financial services designed to address individual finance needs and objectives. Loans with clear terms and adaptable options—from personal needs to business and appliances—ranging between ₹20,000 and ₹5,00,000 designed to suit both salaried and self-employed people.",
    },
    {
      title: "Comprehensive market training",
      description:
        "Learn stock market basics and trading methods through a planned course made to teach both new and mid-level learners.",
    },
    {
      title: "Personality Development for traders",
      description:
        "Develop confidence and decision-making skills through focused training.",
    },
    {
      title: "Paid Demo Sessions",
      description:
        "Experience a live trading environment guided by experts.",
    },
    {
      title: "Exposure to broader financial markets",
      description: (
        <ul>
          <li>Study capital markets, mutual funds, Foreign trading, and derivatives.</li>
          <li>Broaden your knowledge outside of stocks to explore other financial possibilities.</li>
        </ul>
      ),
    },
  ];

  const displayedOfferings = showAll ? offerings : offerings.slice(0, 5);

  return (
    <div className={`wpo-popular-area section-padding ${props.pClass}`}>
      <div className="container">
        <div className="wpo-section-title-s2">
          <small></small>
          <h2>
            What do &nbsp;
            <span style={{ color: "#21E786" }}>
              We Offer?
              <i className="shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 206 53"
                  fill="#21E786"
                >
                  <path d="M152.182 2.58319C107.878 0.889793 54.8748 6.13932 21.2281 18.6943C14.2699 21.4407 7.93951 24.7738 5.70192 28.7128C4.27488 31.2398 5.03121 33.954 7.69121 36.2925C14.8835 42.3911 31.9822 45.4011 46.8006 47.3115C78.3067 51.0179 113.672 51.7406 145.489 48.3204C167.194 46.0009 200.667 39.5923 199.399 28.5709C198.543 20.0621 180.437 14.5729 162.979 11.6178C138.219 7.469 111.131 6.00576 84.5743 5.86862C71.32 5.85789 58.0913 6.85723 45.6675 8.78436C33.512 10.7186 21.2709 13.4317 12.6602 17.5817C11.2246 18.2877 8.62449 17.4553 9.9973 16.6813C20.7486 11.2493 38.0215 7.73493 53.9558 5.76368C77.1194 2.90994 101.75 3.75426 125.339 5.14356C158.167 7.2615 207.554 13.5139 204.928 30.7413C203.629 36.0898 194.762 40.5057 184.681 43.5503C156.563 51.768 119.114 53.6844 85.6331 52.5265C65.1694 51.7477 44.4831 50.1855 25.9972 46.2442C11.4129 43.1186 -1.0337 37.8297 0.0679738 30.5063C2.14003 19.9035 31.4913 12.0006 52.6201 7.98775C71.2971 4.45904 91.3384 2.2302 111.674 1.24636C125.228 0.595237 138.962 0.539188 152.536 1.15931C153.475 1.20224 154.154 1.55523 154.051 1.94876C153.951 2.33872 153.115 2.62135 152.182 2.58319Z" />
                </svg>
              </i>
              ?
            </span>
          </h2>
        </div>

        <section className="wpo-about-section">
          <div className="container">
            <div className="wpo-about-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="wpo-about-text">
                    <p>
                      Century Finance Limited provides complete financial services. It includes expert-led training online courses, market advice, investment strategies, and adjustable loan plans. The company helps people learn and seize opportunities to gain confidence in finance.
                      <ol className="mt-4">
                        {displayedOfferings.map((item, index) => (
                          <li key={index}>
                            <strong>{item.title}</strong> – {item.description}
                          </li>
                        ))}
                      </ol>
                    </p>
                    <button
                      className="btn btn-outline-success mt-3"
                      onClick={toggleShow}
                      style={{
                        borderRadius: "8px",
                        padding: "6px 14px",
                        fontWeight: "bold",
                      }}
                    >
                      {showAll ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12 col-12">
                  <div
                    className="wpo-about-img-wrap"
                    style={{ marginLeft: "20px" }}
                  >
                    <div className="wpo-about-img-left">
                      <div className="wpo-about-img">
                        <img src={abImg} alt="" />
                      </div>
                    </div>
                    <div className="wpo-about-img-right">
                      <div className="wpo-about-img-inner">
                        <img src={abImg2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseSection;
