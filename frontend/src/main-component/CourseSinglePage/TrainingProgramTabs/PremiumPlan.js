import React, { useState } from "react";
import abimg from "../../../images/about/premium.png";
import shape from "../../../images/about/shape.png";

const PremiumPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false); // toggle state

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="Premium Training Visual" />
                <div className="back-shape">
                  <img src={shape} alt="Background Shape" />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>Premium Plan</small>
                  <h3>Advanced 2-Day Certified Training in Financial Markets</h3>
                </div>

                <div className="alert alert-warning p-3 rounded mb-3">
                  <strong>Exclusively for Educational Institutions:</strong> Only Colleges & Universities can enroll batches.
                </div>
                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Eligibility:</strong> Final-Year Students (B.Com, BBA, MBA, BA-Economics, Finance-related streams)
                </div>
                <div className="alert alert-success p-3 rounded mb-3">
                  <strong>Purpose:</strong> Value-added program for placements, career training, and certification.
                </div>
                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Program Fee:</strong> ₹85,000 per batch +GST (all types of taxes)
                  <br />
                  <strong>Certification:</strong> Digital certificates awarded upon successful assessment
                </div>

                {!isExpanded && (
                  <div className="text-center">
                    <button
                      onClick={toggleContent}
                      className="btn btn-outline-primary rounded-pill px-4 mt-3"
                      style={{ padding: "10px 20px", fontSize: "1rem" }}
                    >
                      Read More
                    </button>
                  </div>
                )}

                {/* Expanded Content */}
                {isExpanded && (
                  <>
                    <p className="mt-4">
                      <strong>
                        Upgrade Learning. Empower Careers. Elevate Campus Placements.
                      </strong>
                    </p>
                    <p>
                      This program is exclusively available for educational institutions
                      to purchase on behalf of their final-year students. Ideal as a
                      value-added career program, pre-placement booster, or
                      industry-aligned certification course.
                    </p>

                    <h4><strong>2-Day On-Campus Training Structure</strong></h4>

                    <h5 className="mt-3"><strong>Day 1: Core Financial Market Training</strong></h5>
                    <ul>
                      <li><strong>Equity Markets:</strong> Stock market functions, platforms, technical & fundamental analysis</li>
                      <li><strong>Commodity Markets:</strong> Commodity types, pricing, hedging tools</li>
                      <li><strong>Foreign Markets:</strong> Global currencies, INR pairs, trade implications</li>
                    </ul>

                    <h5 className="mt-3"><strong>Day 2: Applied Investment & Strategy</strong></h5>
                    <ul>
                      <li><strong>Mutual Funds & SIPs:</strong> Types, return calculations, long-term wealth building</li>
                      <li><strong>SGP & Banex:</strong> Government gold schemes, bond exchanges</li>
                      <li><strong>Margin Trading (M.T.F.):</strong> Leverage investing & risk control</li>
                      <li><strong>Portfolio Planning:</strong> Asset allocation, investment strategy, risk profiles</li>
                    </ul>

                    <h5 className="mt-4"><strong>Program Highlights</strong></h5>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      <span className="badge bg-primary p-2 px-3 rounded-pill">On-Campus Training</span>
                      <span className="badge bg-success p-2 px-3 rounded-pill">Real Market Simulations</span>
                      <span className="badge bg-info text-dark p-2 px-3 rounded-pill">One-on-One Mentorship</span>
                      <span className="badge bg-warning text-dark p-2 px-3 rounded-pill">Strategy Workshops</span>
                      <span className="badge bg-dark p-2 px-3 rounded-pill">Online Certification Assessment</span>
                      <span className="badge bg-secondary p-2 px-3 rounded-pill">Recognized Certification</span>
                    </div>

                    <h5 className="mt-4"><strong>Why Students Need This</strong></h5>
                    <ul>
                      <li>Builds real-world financial & market skills</li>
                      <li>Prepares for job interviews & placement tests</li>
                      <li>Introduces investment awareness early</li>
                      <li>Exposure to tools, strategy, and risk analysis</li>
                      <li>Earns them a recognized professional certificate</li>
                    </ul>

                    <h5 className="mt-4"><strong>Why Institutions Should Invest</strong></h5>
                    <ul>
                      <li>Adds value to your academic offering</li>
                      <li>Improves placement statistics and reputation</li>
                      <li>No extra faculty effort – we handle delivery end-to-end</li>
                      <li>Scalable across batches with long-term impact</li>
                    </ul>

                    <div className="alert alert-light border mt-4">
                      <h5><strong>Partner With Us</strong></h5>
                      <p>
                        Give your students the <strong>competitive edge</strong> they need in today's finance industry.
                      </p>
                      <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                        📧 <strong>Email:</strong>{" "}
                        <a href="mailto:customerservice@centuryfinancelimited.com" style={{ color: "grey", textDecoration: "underline" }}>
                          customerservice@centuryfinancelimited.com
                        </a>
                      </p>
                      <p style={{ fontSize: "1rem" }}>
                        🌐 <strong>Website:</strong>{" "}
                        <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "underline" }}>
                          https://www.centuryfinancelimited.com/
                        </a>
                      </p>
                      <p className="text-danger">
                        <em>Note: Limited slots available — advance booking is highly recommended.</em>
                      </p>
                    </div>

                    {/* Show Less Button */}
                    <div className="text-center mt-4">
                      <button
                        onClick={toggleContent}
                        className="btn btn-outline-primary rounded-pill px-4"
                        style={{ padding: "10px 20px", fontSize: "1rem" }}
                      >
                        Show Less
                      </button>
                    </div>
                  </>
                )}

                {/* Payment Button */}
                <button onClick={onBookNow} className="btn btn-outline-dark mt-3">
                  Book Now (₹85,000 per Batch)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPlan;
