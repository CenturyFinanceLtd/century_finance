import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import CourseSinglePage from "../CourseSinglePage/TrainingProgramTabs/TrainingTab";
import { Container, Row, Col, Table, Button } from "reactstrap";

const plans = {
  basic: {
    name: "Basic Plan",
    duration: "1 Day",
    eligibility: "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
    exclusivity: "Only for College & Universities",
    fees: "₹45,000 + GST",
    topics: "Equity, Commodity, Foreign Exchange Market",
    certification: "Digital Certification (Post-Assessment)",
    features: "Real-time Market Exposure, Industry Awareness",
    internship: "No",
    placement: "No",
    benefits: "Strengthens curriculum, boosts placement outcomes",
  },
  premium: {
    name: "Premium Plan",
    duration: "2 Days",
    eligibility: "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
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
    name: "Learning to Earning Model",
    duration: "Multi Phase: 2 Days + 2 month internship + Placement Support",
    eligibility: "Final Year Students (B.Com, BBA, MBA, BA.Eco, Finance stream)",
    exclusivity: "Only for College & Universities",
    fees: "₹1,40,000 + GST",
    topics: "All modules from Premium plan in depth + Internship + Placement Training",
    certification: "Digital Certification + Certified Internship Certificate",
    features:
      "Internship, Live Trading, Placement Guidance, Advanced Training, Direct Hiring Opportunities",
    internship: "2 Month Internship with Weekly Mentorship",
    placement: "Yes + Interview Round + Direct Hiring for Top Performers",
    benefits: "Long-term career impact, campus-to-corporate model",
  },
};

const TrainingProgram = () => {
  const [selectedPlans, setSelectedPlans] = React.useState(["basic", "premium"]);

  const handleSelect = (index, planKey) => {
    const newSelection = [...selectedPlans];
    newSelection[index] = planKey;
    setSelectedPlans(newSelection);
  };

  const renderComparisonRow = (label, field) => (
    <tr key={label}>
      <th style={{ backgroundColor: "#F4F4F4", color: "#1C1C1C" }}>{label}</th>
      <td style={{ color: "#333" }}>{plans[selectedPlans[0]][field]}</td>
      <td style={{ color: "#333" }}>{plans[selectedPlans[1]][field]}</td>
    </tr>
  );

  return (
    <Fragment>
      <Helmet>
        <title>Training Program - Century Finance Limited</title>
        <meta
          name="description"
          content="Get in touch with Century Finance Limited for any inquiries or support. We're here to help with your financial needs."
        />
        <meta
          name="keywords"
          content="Contact, Century Finance, Financial Services, Support, Contact Us"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />
      <PageTitle
        pageTitle={"Training Program"}
        pagesub={"Training Program"}
        bgImage="/bg-image/training.png"
      />

      {/* === Introductory Text Block === */}
     {/* === Branded Hero Content Section === */}
{/* === Enhanced Branded Hero Content Section === */}
{/* === Marvelously Styled Hero Content Section === */}
{/* === Full-Width Marvelous Hero Section === */}
<section
  style={{
    width: "100%",
    background: "linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%)",
    padding: "90px 0",
    borderBottom: "8px solid #E22728",
  }}
>
  <div
    style={{
      width: "100%",
      padding: "60px 8vw",
      backgroundColor: "#fff",
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      borderRadius: "0px",
      textAlign: "center",
    }}
  >
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "800",
        color: "#1C1C1C",
        marginBottom: "16px",
      }}
    >
      Master the Market with Century Finance Training Programs
    </h1>

    {/* Elegant Red Divider */}
    <div
      style={{
        width: "100px",
        height: "6px",
        backgroundColor: "#E22728",
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
      }}
    >
      <strong>
        Expert-led training programs designed to turn beginners into confident,
        skilled traders and investors.
      </strong>
    </p>

    <h2
      style={{
        fontSize: "2.2rem",
        fontWeight: "700",
        color: "#1C1C1C",
        marginTop: "40px",
      }}
    >
      About Century Finance Training Program
    </h2>
    <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto" }}>
      At Century Finance Limited, we believe successful trading begins with the right education.
      Our programs are curated for final-year college students, offering core financial literacy in
      <strong> Equity, Commodity, and Forex markets</strong> — guided by SEBI-certified trainers.
    </p>

    <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.8", maxWidth: "1000px", margin: "20px auto" }}>
      Through real-time simulations, market exposure, and personalized mentorship,
      we prepare you to navigate global finance with confidence and competence.
    </p>

    <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#1C1C1C", marginTop: "50px" }}>
     Our Objective
    </h3>
    <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: "1.8", maxWidth: "1000px", margin: "0 auto" }}>
      We bridge academic learning and real-world finance, empowering students with
      job-ready skills, certification, and career clarity.
    </p>

    <ul
      style={{
        listStyle: "none",
        padding: 0,
        maxWidth: "1000px",
        margin: "40px auto",
        textAlign: "left",
        fontSize: "1.05rem",
        color: "#333",
        lineHeight: "1.7",
      }}
    >
      <li>✅ <strong>Basic Plan:</strong> Bridge classroom concepts with financial market realities.</li>
      <li>✅ <strong>Premium Plan:</strong> Career-focused training with hands-on workshops and certification.</li>
      <li>✅ <strong>Learning to Earning:</strong> A full roadmap to finance careers via internship & direct hiring.</li>
    </ul>

    <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#1C1C1C", marginTop: "50px" }}>
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
      }}
    >
      <li>Fundamentals of Stock Market Trading and Investment</li>
      <li>Equity, Commodity & Forex Market Dynamics</li>
      <li>Technical & Fundamental Analysis</li>
      <li>Emotional Discipline and Trading Psychology</li>
      <li>Risk Management & Portfolio Building</li>
      <li>Interview Prep & Placement-Ready Confidence</li>
    </ol>

    <h3 style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#1C1C1C", marginTop: "50px" }}>
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
      }}
    >
      <li>✅ Learn from SEBI-certified trainers</li>
      <li>✅ Live market simulations & demos</li>
      <li>✅ Industry-level financial tool exposure</li>
      <li>✅ Recognized Certifications</li>
      <li>✅ Internship & placement guidance (for eligible plans)</li>
    </ul>

    <div className="alert alert-success p-4 rounded mb-3" style={{ fontSize: "1.05rem", marginTop: "40px" }}>
      <strong>
        Whether you're interested in Equity, Commodity, or Foreign Exchange —
        Century Finance equips you with the tools, clarity, and certification to launch your finance career confidently.
      </strong>
    </div>

    <div className="alert alert-warning p-4 rounded" style={{ fontSize: "1.05rem" }}>
      <strong>Take your first step toward financial mastery with Century Finance Limited — where education meets opportunity.</strong>
    </div>
  </div>

  {/* Animation Keyframes */}
  <style>
    {`
      @keyframes dividerSlide {
        from {
          transform: scaleX(0);
          opacity: 0;
        }
        to {
          transform: scaleX(1);
          opacity: 1;
        }
      }
    `}
  </style>
</section>





      {/* === Plan Comparison Table === */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ color: "#1C1C1C", fontWeight: "bold" }}>
          Compare Our Training Plans
        </h2>

        <Row className="mb-4">
          {[0, 1].map((index) => (
            <Col md="6" className="text-center" key={index}>
              <h5 style={{ color: "#888888" }}>Select Plan {index + 1}</h5>
              {Object.keys(plans).map((key) => (
                <Button
                  key={key}
                  style={{
                    backgroundColor: selectedPlans[index] === key ? "#E22728" : "#888888",
                    border: "none",
                    margin: "5px",
                    color: "#fff",
                    fontWeight: "500",
                    padding: "10px 20px",
                    borderRadius: "6px",
                  }}
                  onClick={() => handleSelect(index, key)}
                >
                  {plans[key].name}
                </Button>
              ))}
            </Col>
          ))}
        </Row>

        <Table bordered responsive hover style={{ borderColor: "#E22728" }}>
          <thead>
            <tr style={{ backgroundColor: "#E22728", color: "#fff" }}>
              <th>Feature</th>
              <th>{plans[selectedPlans[0]].name}</th>
              <th>{plans[selectedPlans[1]].name}</th>
            </tr>
          </thead>
          <tbody>
            {renderComparisonRow("Duration", "duration")}
            {renderComparisonRow("Eligibility", "eligibility")}
            {renderComparisonRow("Exclusivity", "exclusivity")}
            {renderComparisonRow("Program Fees", "fees")}
            {renderComparisonRow("Topics Covered", "topics")}
            {renderComparisonRow("Certification", "certification")}
            {renderComparisonRow("Key Features", "features")}
            {renderComparisonRow("Internship Included", "internship")}
            {renderComparisonRow("Placement Assistance", "placement")}
            {renderComparisonRow("Institutional Benefits", "benefits")}
          </tbody>
        </Table>
      </Container>

      <CourseSinglePage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TrainingProgram;
