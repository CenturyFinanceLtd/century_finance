import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import CourseSinglePage from "../CourseSinglePage/ISTrainingProgramTabs/TrainingTab";
import Footer from "../../components/footer/Footer";
import { Button } from "reactstrap";
import "./Training.css";

const TrainingProgram = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <title>
          Institute & School Training Program - Century Finance Limited
        </title>
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle="Institutes & Schools Training Program"
        pagesub="Institutes & Schools"
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
            Financial Market Training Program For Schools and Educational
            Institutes
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

          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#1C1C1C",
              marginTop: "40px",
            }}>
            About Institute & School Training
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "0 auto",
            }}>
            Century Finance Limited is a SEBI-Certified financial services and
            education organization committed to empowering people and
            organizations via useful financial knowledge. By giving students,
            teachers and young professionals the necessary resources, techniques
            and market exposure to enable them to make wise financial decisions,
            we hope to foster financial confidence. Having a long history in the
            financial industry, we have created training programs especially for
            educational institutions and schools, making financial literacy both
            approachable and useful.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "20px auto",
            }}>
            Our courses provide a clear and interesting way to understand
            complicated financial ideas including foreign markets, commodities
            and stock. These seminars assist participants make the connection
            between theory and real-world market behavior by providing them with
            exposure to live trading and practical insights. In addition to
            teaching finance, century finance equips aspiring leaders with the
            critical thinking, strategic planning and self-assurance necessary
            to succeed in the dynamic financial industry.
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
                  Our Objective
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "#444",
                    lineHeight: "1.8",
                    maxWidth: "1000px",
                    margin: "0 auto",
                  }}>
                  To enhance students' financial literacy and decision making
                  skills by providing a clear understanding of the financial
                  market through foundational knowledge and practical, real
                  -time exposure.
                </p>
              </ul>

              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#1C1C1C",
                  marginTop: "50px",
                }}>
                What You’ll Learn
              </h3>
              <ol
                style={{
                  textAlign: "left",
                  maxWidth: "1000px",
                  margin: "20px auto",
                  fontSize: "1.05rem",
                  color: "#333",
                  lineHeight: "1.6",
                }}>
                <li>Basics of equity, commodity and international markets.</li>
                <li>
                  How to purchase, trade and understand typical market points.
                </li>
                <li>Concepts of support and resistance in price movement.</li>
                <li>Finding trading breakthrough and breakdown levels.</li>
                <li>Identifying patterns that are bullish and bearish.</li>
                <li>
                  Overview of financial instruments and investment planning.
                </li>
                <li>Comprehending volume analysis and candlestick patterns.</li>
                <li>Basic risk management.</li>
                <li>
                  Developing a methodical and analytical financial strategy.
                </li>
              </ol>

              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "#1C1C1C",
                  marginTop: "50px",
                }}>
                Key Features
              </h3>
              <ul
                style={{
                  textAlign: "left",
                  maxWidth: "1000px",
                  margin: "20px auto",
                  fontSize: "1.05rem",
                  color: "#333",
                  lineHeight: "1.6",
                }}>
                <li>✅ One day training session led by an expert.</li>
                <li>
                  ✅ Program approved by SEBI that grants certification upon
                  completion.
                </li>
                <li>
                  ✅ Concentrated education in the currency, commodities and
                  stock sectors.
                </li>
                <li>
                  ✅ Career boosting abilities and knowledge relevant to the
                  industry.
                </li>
                <li>
                  ✅ Content that is simplified for comprehension at the
                  beginning level.
                </li>
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
        </div>
      </section>

      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TrainingProgram;
