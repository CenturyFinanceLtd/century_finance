import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import CourseSinglePage from "../CourseSinglePage/UCTrainingProgramTabs/TrainingTab";
import Footer from "../../components/footer/Footer";
import { Container, Row, Col, Card, CardBody, Button, Table } from "reactstrap";
import "./Training.css";

const plans = {
  basic: {
    id: "basic",
    name: "Basic Plan",
    duration: "1 Day",
    eligibility:
      "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
    exclusivity: "Only for College & Universities",
    fees: "₹45,000 + GST",
    topics: "Equity, Commodity, Foreign Exchange Market",
    certification: "Digital Certification (Post-Assessment)",
    features: "Real-time Market Exspore,u Industry Awareness",
    internship: "No",
    placement: "No",
    benefits: "Strengthens curriculum, boosts placement outcomes",
  },
  premium: {
    id: "premium",
    name: "Premium Plan",
    duration: "2 Days",
    eligibility:
      "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
    exclusivity: "Only for College & Universities",
    fees: "₹85,000 + GST",
    topics:
      "Equity, Commodity, Foreign Exchange Market, Mutual Funds, MTF, Banex, SGP, Portfolio Planning",
    certification: "Digital Certification (Post-Assessment)",
    features:
      "Strategy Workshops, Real Market Simulations, 1:1 Mentorship, Assessment",
    internship: "No",
    placement: "No",
    benefits: "Adds value to academics, improves placement reputation",
  },
  learning: {
    id: "learning",
    name: "Learning to Earning Model",
    duration: "Multi Phase: 2 Days + 2 month internship + Placement Support",
    eligibility:
      "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
    exclusivity: "Only for College & Universities",
    fees: "₹1,40,000 + GST",
    topics:
      "All modules from Premium plan in depth + Internship + Placement Training",
    certification: "Digital Certification + Certified Internship Certificate",
    features:
      "Internship, Live Trading, Placement Guidance, Advanced Training, Direct Hiring Opportunities",
    internship: "2 Month Internship with Weekly Mentorship",
    placement: "Yes + Interview Round + Direct Hiring for Top Performers",
    benefits: "Long-term career impact, campus-to-corporate model",
  },
};

const TrainingProgram = () => {
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (id) => {
    if (selectedPlans.includes(id)) {
      setSelectedPlans(selectedPlans.filter((plan) => plan !== id));
    } else if (selectedPlans.length < 3) {
      setSelectedPlans([...selectedPlans, id]);
    }
  };

  const renderCompareTable = () => {
    if (selectedPlans.length < 1) return null;

    return (
      <div
        style={{
          background: "#fff",
          padding: "39px",
          marginTop: "0",
        }}>
        <h2 className="text-center fw-bold mb-4" style={{ color: "#21E786" }}>
          Detailed Comparison of Selected Plans
        </h2>
        <Table bordered responsive hover>
          <thead style={{ backgroundColor: "#21E786", color: "#fff" }}>
            <tr>
              <th>Feature</th>
              {selectedPlans.map((planId) => (
                <th key={planId}>{plans[planId].name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "duration",
              "eligibility",
              "exclusivity",
              "fees",
              "topics",
              "certification",
              "features",
              "internship",
              "placement",
              "benefits",
            ].map((key) => (
              <tr key={key}>
                <th>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                {selectedPlans.map((id) => (
                  <td key={id}>{plans[id][key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          Finance Training Programs for Universities & Colleges | Century
          Finance
        </title>
        <meta
          name="description"
          content="Join hands with Century Finance to offer certified stock market & global trading training to your students. Designed for universities & colleges across India."
        />
        <meta
          name="keywords"
          content="Finance Training Programs, Finance Training Programs College & Universities, Training Programs College, Century Finance Training, Finance Universities Training Program"
        />
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle="Colleges & Universities Training Program"
        pagesub="Colleges & Universities Training Program"
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
            About College & Universities Training Program:
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "0 auto",
            }}>
            At Century Finance Limited, we believe that successful trading
            begins with the right education. Our comprehensive training program
            in equity market, commodity and foreign exchange are designed to
            help students at every level, especially those in their final year
            college and university. We offer the tactics, resources and
            self-assurance needed to end in the current fast- paced financial
            environment, regardless of your level of experience.
          </p>
          <p style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "0 auto",
            }}>
            Our training programs emphasize instruction that is applicable to
            the workplace. We guarantee that each participant is completely
            equipped to comprehend, evaluate and act in the stock market with
            clarity and confidence by using immersive courses, real-time market
            simulations and advice from SEBI-certified professionals. Students
            who successfully complete the program are awarded a recognized
            digital certificate that witnesses their abilities and demonstrates
            their dedication to career advancement.{" "}
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
                  At Century Finance Limited, Our stock market training courses
                  are carefully crafted for final year students with clear goals
                  to match their present learning style and gearing up their
                  future professional goals. Here’s what each plan aims to
                  deliver
                </p>
                <li>
                  ✅ <strong>Basic Plan:</strong>Tailored to connect classroom
                  concepts with real world financial market practices.
                </li>
                <li>
                  ✅ <strong>Premium Plan:</strong>To enhance career readiness
                  through hand-on-training, expert session and advance
                  certification - ideal for finance job seekers.
                </li>
                <li>
                  ✅ <strong>Learning to Earning:</strong> To transform students
                  into market ready professionals by providing practical skills,
                  hands-on-training experience and a well-defined roadmap for a
                  successful finance career.
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
                <li>✅ Live Demo Market Sessions</li>
                <li>✅ Insights of Financial Market</li>
                <li>✅ Recognized Certifications</li>
                <li>✅Understanding of Financial Tools</li>
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
                  Whether you're interested in the Equity Market training
                  program to understand stock fundamentals, the Commodity market
                  training program to explore physical asset trading, or the
                  Foreign exchange training program for global currency markets,
                  Century Finance equips you with eve
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

      <CourseSinglePage />

      <Container className="py-5">
        <h2 className="text-center mb-4 fw-bold" style={{ color: "#21E786" }}>
          Select Plans to Compare
        </h2>
        <Row className="g-4 justify-content-center">
          {Object.values(plans).map((plan) => (
            <Col md={4} key={plan.id}>
              <Card
                className="shadow-sm"
                style={{
                  border: selectedPlans.includes(plan.id)
                    ? "2px solid #21E786"
                    : "1px solid #dee2e6",
                }}>
                <CardBody>
                  <div className="form-check mb-2">
                    <input
                      type="checkbox"
                      id={plan.id}
                      className="form-check-input"
                      checked={selectedPlans.includes(plan.id)}
                      onChange={() => handleToggle(plan.id)}
                    />
                    <label
                      htmlFor={plan.id}
                      className="form-check-label fw-bold">
                      Compare
                    </label>
                  </div>
                  <h5 className="fw-bold" style={{ color: "#21E786" }}>
                    {plan.name}
                  </h5>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {selectedPlans.length > 0 && (
          <div className="text-center mt-4">
            <Button
              style={{
                backgroundColor: "#21E786",
                borderColor: "#21E786",
                color: "#fff",
              }}
              className="px-5 rounded-pill">
              Compare Plans ({selectedPlans.length})
            </Button>
          </div>
        )}
      </Container>
      {renderCompareTable()}
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TrainingProgram;
