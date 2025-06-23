import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import CourseSinglePage from "../CourseSinglePage/ISTrainingProgramTabs/TrainingTab";
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
    fees: "₹ 10,000 + GST",
    topics: "Equity, Commodity, Foreign Exchange Market",
    certification: "Digital Certification (Post-Assessment)",
    features: "Real-time Market Exposure, Industry Awareness",
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
        <h2
          className="text-center fw-bold mb-4"
          style={{ color: "#21E786" }}>
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
        <title>Training Program - Century Finance Limited</title>
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle="Training Program"
        pagesub="Compare Plans"
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
           Financial Market Training Program For Schools and Educational Institutes 

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
            Century Finance Limited is a SEBI-Certified financial services and education organization committed to empowering people and organizations via useful financial knowledge. By giving students, teachers and young professionals the necessary resources, techniques and market exposure to enable them to make wise financial decisions, we hope to foster financial confidence. Having a long history in the financial industry, we have created training programs especially for educational institutions and schools, making financial literacy both approachable and useful. 

          </p>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#444",
              lineHeight: "1.8",
              maxWidth: "1000px",
              margin: "20px auto",
            }}>
           Our courses provide a clear and interesting way to understand complicated financial ideas including foreign markets, commodities and stock. These seminars assist participants make the connection between theory and real-world market behavior by providing them with exposure to live trading and practical insights. In addition to teaching finance, century finance equips aspiring leaders with the critical thinking, strategic planning and self-assurance necessary to succeed in the dynamic financial industry.
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
                 To enhance students' financial literacy and decision making skills by providing a clear understanding of the financial market through foundational knowledge and practical, real -time exposure. 

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
                <li>How to purchase, trade and understand typical market points.</li>
                <li>Concepts of support and resistance in price movement.</li>
                <li>Finding trading breakthrough and breakdown levels.</li>
                <li>Identifying patterns that are bullish and bearish.</li>
                <li>Overview of financial instruments and investment planning. </li>
                <li>Comprehending volume analysis and candlestick patterns.</li>
                <li>Basic risk management.</li>
                <li>Developing a methodical and analytical financial strategy. </li>
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
                <li>✅ Program approved by SEBI that grants certification upon completion.</li>
                <li>✅ Concentrated education in the currency, commodities and stock sectors.</li>
                <li>✅ Career boosting abilities and knowledge relevant to the industry.</li>
                <li>✅Content that is simplified for comprehension at the beginning level.</li>
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
