import React from "react";
import abimg from "../../../images/about/learning.png";
import shape from "../../../images/about/shape.png";

const LearningToEarningPlan = ({ onBookNow }) => {
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img position-relative text-center">
                <img
                  src={abimg}
                  alt="Learning to Earning Visual"
                  style={{ maxWidth: "100%", height: "auto", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                />
                <div
                  className="back-shape position-absolute"
                  style={{ bottom: "-30px", right: "-30px", zIndex: -1, opacity: 0.5 }}
                >
                  <img
                    src={shape}
                    alt="Background Shape"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>Learning To Earning Plan</small>
                  <h2>Complete Industry Training + Certification + Placement</h2>
                </div>

                <div className="alert alert-warning p-3 rounded mb-3">
                  <strong>Exclusively for Educational Institutions:</strong> Only Colleges & Universities can enroll batches.
                </div>

                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Eligibility:</strong> Final-Year Students (B.Com, BBA, MBA, BA-Economics, Finance-related streams)
                </div>

                <div className="alert alert-success p-3 rounded mb-3">
                  <strong>Program Objective:</strong> From Campus to Career: Empowering Students with Industry-Ready Financial Skills
                </div>

                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Program Fee:</strong> ₹1,40,000 per batch +GST(all types of taxes)
                  <br />
                  <strong>Certification:</strong> Digital certificates awarded upon successful assessment
                </div>

                <h5><strong>Program Structure – 3 Phases</strong></h5>

                <h6 className="mt-3"><strong>Phase 1: 2-Day On-Campus Training</strong></h6>
                <ul>
                  <li><strong>Day 1:</strong> Equity, Commodity, Foreign Markets</li>
                  <li><strong>Day 2:</strong> Mutual Funds, MTF, SGP, Banex, Portfolio Planning (All are cover  indepth)</li>
                </ul>

                <h6 className="mt-3"><strong>Phase 2: Internship / Live Project (2 Months)</strong></h6>
                <ul>
                  <li>Qualify the Assessment → Get selected for Internship</li>
                  <li>Hands-on experience with trading, market research, & client interaction</li>
                  <li>Weekly mentor evaluations</li>
                </ul>

                <h6 className="mt-3"><strong>Phase 3: Full-Time Job Opportunity</strong></h6>
                <ul>
                  <li>Top performers → Direct hiring in our company</li>
                  <li>Others → Referred via our industry network</li>
                </ul>

                <h5 className="mt-4"><strong>Placement Process – Step-by-Step</strong></h5>
                <ol>
                  <li><strong>Placement Workshop</strong> – Interview skills & readiness</li>
                  <li><strong>Assessment Test (100 Marks)</strong> – 60% to qualify for internship</li>
                  <li><strong>Interview Round</strong> – Shortlisted candidates face interviews</li>
                  <li><strong>Final Placement</strong> – Based on internship + interview</li>
                </ol>

                <h5 className="mt-4"><strong>Program Highlights</strong></h5>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge bg-primary p-2 px-3 rounded-pill">Live Market Simulation</span>
                  <span className="badge bg-success p-2 px-3 rounded-pill">Certified Internship</span>
                  <span className="badge bg-info text-dark p-2 px-3 rounded-pill">1:1 Mentorship</span>
                  <span className="badge bg-warning text-dark p-2 px-3 rounded-pill">Interview Training</span>
                  <span className="badge bg-dark p-2 px-3 rounded-pill">Advanced Post-Placement Classes</span>
                  <span className="badge bg-secondary p-2 px-3 rounded-pill">Direct Job Offer for Top Performers</span>
                </div>

                <h5 className="mt-4"><strong>Student Outcomes</strong></h5>
                <ul>
                  <li>Gain technical financial market knowledge</li>
                  <li>Experience real-world internship</li>
                  <li>Earn industry-recognized certification</li>
                  <li>Become confident, career-ready professionals</li>
                  <li>Pathway to full-time jobs</li>
                </ul>

                <h5 className="mt-4"><strong>Partner With Us</strong></h5>
                <div className="alert alert-light border">
                  <p>Help your students bridge the gap between academics and employment with our Learning to Earning Plan.</p>
                  <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
            📧 <strong>Email:</strong> <a href="customerservice@centuryfinancelimited.com" style={{ color: "grey", textDecoration: "underline" }}>customerservice@centuryfinancelimited.com</a>
          </p>
                  <p style={{ fontSize: "1rem" }}>
            🌐 <strong>Website:</strong> <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "underline" }}>https://www.centuryfinancelimited.com/</a>
          </p>
                  <p className="text-danger"><em>Note: Limited slots available — advance booking is highly recommended.</em></p>
                </div>

                <button onClick={onBookNow} className="btn btn-outline-dark mt-3">
                  Book Now (Fee: ₹1,40,000 per Batch)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningToEarningPlan;