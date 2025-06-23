import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import { Button } from "reactstrap"; // ✅ Fixed missing Button import
import "./Training.css";

const TrainingProgram = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Fragment>
      <Helmet>
        <title>Corporate Training Program - Century Finance Limited</title>
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle="Corporate Training Program"
        pagesub="Corporate Training Program"
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
            Master the Market with Century Finance Training Programs
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
              fontSize: "1.25rem",
              color: "#444",
              maxWidth: "900px",
              margin: "0 auto 30px auto",
              lineHeight: "1.7",
            }}>
            <strong>
              Expert-led training programs designed to turn beginners into
              confident, skilled traders and investors.
            </strong>
          </p>

          <h2
            style={{
              fontSize: "2.2rem",
              fontWeight: "700",
              color: "#1C1C1C",
              marginTop: "40px",
            }}>
            About Century Finance Training Program
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "0 auto",
            }}>
            At Century Finance Limited, we believe successful trading begins
            with the right education. Our programs are curated for final-year
            college students, offering core financial literacy in
            <strong> Equity, Commodity, and Foreign markets</strong> — guided by
            SEBI-certified trainers.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "20px auto",
            }}>
            Through real-time simulations, market exposure, and personalized
            mentorship, we prepare you to navigate global finance with
            confidence and competence.
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
                  We bridge academic learning and real-world finance, empowering
                  students with job-ready skills, certification, and career
                  clarity.
                </p>
                <li>
                  ✅ <strong>Basic Plan:</strong> Bridge classroom concepts with
                  financial market realities.
                </li>
                <li>
                  ✅ <strong>Premium Plan:</strong> Career-focused training with
                  hands-on workshops and certification.
                </li>
                <li>
                  ✅ <strong>Learning to Earning:</strong> A full roadmap to
                  finance careers via internship & direct hiring.
                </li>
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
                <li>Fundamentals of Stock Market Trading and Investment</li>
                <li>Equity, Commodity & Forex Market Dynamics</li>
                <li>Technical & Fundamental Analysis</li>
                <li>Emotional Discipline and Trading Psychology</li>
                <li>Risk Management & Portfolio Building</li>
                <li>Interview Prep & Placement-Ready Confidence</li>
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
                <li>✅ Learn from SEBI-certified trainers</li>
                <li>✅ Live market simulations & demos</li>
                <li>✅ Industry-level financial tool exposure</li>
                <li>✅ Recognized Certifications</li>
                <li>✅ Internship & placement guidance (for eligible plans)</li>
              </ul>

              <div
                className="alert p-4 rounded mb-3"
                style={{
                  fontSize: "1.05rem",
                  marginTop: "40px",
                  backgroundColor: "#d4edda",
                  borderColor: "#21E786",
                  color: "#155724",
                }}>
                <strong>
                  Whether you're interested in Equity, Commodity, or Foreign
                  Exchange — Century Finance equips you with the tools, clarity,
                  and certification to launch your finance career confidently.
                </strong>
              </div>
              <div
                className="alert p-4 rounded"
                style={{
                  fontSize: "1.05rem",
                  backgroundColor: "#fff3cd",
                  borderColor: "#ffeeba",
                  color: "#856404",
                }}>
                <strong>
                  Take your first step toward financial mastery with Century
                  Finance Limited — where education meets opportunity.
                </strong>
              </div>
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

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TrainingProgram;
