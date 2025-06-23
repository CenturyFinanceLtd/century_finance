import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./Training.css";
import FAQ from "./FaqSection"

const TrainingProgram = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    return (
      <Fragment>
        <Helmet>
          <title>Training Program - Century Finance Limited</title>
        </Helmet>
        <Navbar />
        <PageTitle
          pageTitle="Training Program"
          pagesub="Training Program"
          bgImage="/bg-image/training.png"
        />

        <section style={{ width: "100%", padding: "20" }}>
          <div
            style={{
              width: "100%",
              padding: "40px 0",
              backgroundColor: "#fff",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              borderRadius: "0px",
              textAlign: "center",
            }}>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#1C1C1C",
                marginBottom: "16px",
              }}>
              Learn Finance with Confidence: A Real-World Training Experience
            </h1>

            <div
              style={{
                width: "100px",
                height: "6px",
                backgroundColor: "#21E786",
                margin: "0 auto 30px auto",
                borderRadius: "4px",
                animation: "dividerSlide 1.2s ease-out",
              }}
            />

            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.8",
                maxWidth: "1000px",
                margin: "0 auto",
              }}>
              Century Finance Limited provides a one-day financial literacy and
              market education program that is aligned with industry standards,
              specifically designed for colleges, universities, institutes,
              schools and corporations.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.8",
                maxWidth: "1000px",
                margin: "0 auto",
              }}>
              Our certified sessions aim to establish a comprehensive foundation
              in equity market training, commodity market training and foreign
              exchange training, ensuring that financial education is practical,
              interactive and focused on career development.
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.8",
                maxWidth: "1000px",
                margin: "20px auto",
              }}>
              Whether you are a student embarking on your financial journey or a
              professional seeking to enhance your investment capabilities, our
              training integrates expert mentorship, live trading experiences
              and straightforward financial strategies. Participants will
              acquire a profound understanding of equity market operations, the
              complexity of commodity training and the effects of currency
              fluctuations on the global economy.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#444",
                lineHeight: "1.8",
                maxWidth: "1000px",
                margin: "20px auto",
              }}>
              Each session is conducted by SEBI-certified professionals, who
              provide real time simulations, market analysis tools and strategic
              decision making methodologies. Our programs effectively connect
              academic theory with practical applications, equipping learners
              with confidence to trade, invest and manage their portfolio
              successfully.
            </p>

            {isExpanded && (
              <div style={{ marginTop: "20px" }}>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 20,
                    maxWidth: "1000px",
                    margin: "0px auto 40px auto",
                    textAlign: "left",
                    fontSize: "1.05rem",
                    color: "#333",
                    lineHeight: "1.7",
                  }}>
                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: "#1C1C1C",
                    }}>
                    Why Our Training Program Matters
                  </h3>
                  <ol>
                    <li>
                      <strong>
                        Bridging The Gap Between Theory and Practical:
                      </strong>
                      <p>
                        The program converts theoretical knowledge into
                        practical financial skills through direct market
                        engagement and experiential training.
                      </p>
                    </li>
                    <li>
                      <strong>Fostering Financial Confidence Early:</strong>
                      <p>
                        Regardless of whether you’re a professional or a
                        student, understanding market dynamics, investment
                        strategies and risk management enhances your ability to
                        make informed financial choices.{" "}
                      </p>
                    </li>
                    <li>
                      <strong>Encompasses Core Market Segments:</strong>
                      <p>
                        Our training sessions include the equity market program,
                        commodity market program and foreign exchange training
                        program, providing comprehensive financial education
                        across all major sectors.{" "}
                      </p>{" "}
                    </li>
                    <li>
                      <strong>
                        Certification That Enhances Career Prospects:
                      </strong>
                      <p>
                        Participants are awarded SEBI certified digital
                        certificates, enhancing their academic qualification or
                        professional profiles in the finance and investment
                        sectors.{" "}
                      </p>
                    </li>
                    <li>
                      <strong>
                        Cultivating Critical Thinking & Market Insights:
                      </strong>
                      <p>
                        Students are equipped to assess market trends, analyze
                        data and make well informed decisions- capabilities that
                        are crucial for thriving in today’s ever evolving
                        financial landscape.{" "}
                      </p>
                    </li>
                  </ol>

                  <h3
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: "#1C1C1C",
                    }}>
                    Training Structure At Glance:
                  </h3>
                  <p>
                    An organized session designed to satisfy the learning
                    requirement of both professionals and students is the
                    Century Finance Training Program. The program, which is
                    intended for real world implementation, is broken up into
                    essential modules that concentrate on the foreign exchange,
                    equity and commodities. Here are the modules are as
                    follows:-{" "}
                  </p>

                  <ol>
                    <li>
                      <strong>Total Duration:</strong>
                      <p>
                        To guarantee comprehensive learning without over
                        burdening participants, each hour is devoted to a single
                        significant area of the financial market.{" "}
                      </p>
                    </li>
                    <li>
                      <strong>Core Modules:</strong>
                      <ul>
                        <li>
                          <strong>Equity:- </strong>It covers equity market,
                          stock analysis, price movement, support/resistance and
                          real time exposure to stock price charts and trading
                          behavior.{" "}
                        </li>
                        <li>
                          <strong>Commodities:-</strong> Overview of major
                          commodities, their demand supply factors, price
                          volatility, contract types and practical examples of
                          commodity trends and trades.
                        </li>
                        <li>
                          <strong>Foreign Exchange:-</strong> Leads to knowledge
                          of currency trading and the global foreign market,
                          discussing exchange rate determination, major currency
                          pair roles, geopolitical influences and foreign trade
                          and investment.{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Delivery Method:</strong>
                      <p>
                        Live expert-led sessions provide real-time trading
                        demonstrations, visual aids, real-world examples,
                        simplified technical tools, interactive Q&As, and
                        one-on-one guidance on live market platforms.{" "}
                      </p>
                    </li>
                    <li>
                      <strong>Tools & Techniques Used:</strong>
                      <p>
                        It covers candlestick charting, volume analysis, risk
                        reward ratios, SIP planning tools, goal calculators and
                        live portfolio tracking demonstrations.{" "}
                      </p>
                    </li>
                    <li>
                      <strong>Certification: </strong>
                      <p>
                        SEBI - certified digital certificate, awarded upon
                        completion, is a valid proof of real-world financial
                        skill building and market exposure, suitable for resumes
                        and profile enhancement.
                      </p>
                    </li>
                  </ol>
                </ul>
              </div>
            )}

            <Button
              style={{
                backgroundColor: "#21E786",
                borderColor: "#21E786",
                color: "#fff",
                marginTop: "30px",
                marginBottom: "30px",
                padding: "12px 25px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: "25px",
                transition: "background-color 0.3s",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Show Less" : "Read More"}
            </Button>

            {/* 🎯 Training Path Cards with Fixed Button Alignment */}
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "700",
                color: "#1C1C1C",
                marginTop: "50px",
              }}>
              Choose Your Training Path
            </h2>

            <div
              className="d-flex flex-wrap justify-content-center gap-4 mt-4"
              style={{ padding: "0 20px" }}>
              {[
                {
                  title: "University and Colleges Training Program",
                  description:
                    "End-to-end curriculum integration and placement-aligned programs.",
                  link: "/training-program/universities-and-colleges", // ✅ corrected
                },
                {
                  title: "Schools & Institutes Training Program",
                  description:
                    "Specialized programs for final-year students in finance and management.",
                  link: "/training-program/institutes-and-schools", // ✅ correct
                },
                {
                  title: "Corporate Training Program",
                  description:
                    "Customized upskilling solutions for working professionals and companies.",
                  link: "/training-program/corporate", // ✅ corrected
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(item.link)}
                  style={{
                    cursor: "pointer",
                    background: "#f8f9fa",
                    border: "1px solid #e0e0e0",
                    borderRadius: "16px",
                    padding: "30px 25px",
                    width: "300px",
                    minHeight: "330px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "0.3s",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.05)";
                  }}>
                  <div>
                    <h4
                      style={{
                        color: "#1C1C1C",
                        fontWeight: "bold",
                        fontSize: "1.3rem",
                      }}>
                      {item.title}
                    </h4>
                    <p
                      style={{
                        color: "#444",
                        marginTop: "10px",
                        fontSize: "1rem",
                      }}>
                      {item.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    style={{
                      backgroundColor: "#21E786",
                      borderColor: "#21E786",
                      color: "#fff",
                      marginTop: "auto",
                      fontWeight: "600",
                      borderRadius: "20px",
                    }}>
                    Explore
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <FAQ />
        <Footer />
        <Scrollbar />
      </Fragment>
    );
};

export default TrainingProgram;
