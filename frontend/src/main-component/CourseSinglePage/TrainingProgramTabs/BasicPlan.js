import React, { useState } from "react";
import abimg from "../../../images/about/basic.png";
import shape from "../../../images/about/shape.png";

const BasicPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State to handle content toggle

  const toggleContent = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded content
  };

  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-lg-6 col-md-12 col-12 ">
              <div className="wpo-about-img position-relative text-center">
                <img
                  src={abimg}
                  alt="Basic Finance Training"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderRadius: "12px",
                    objectFit: "cover",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                />
                <div
                  className="back-shape position-absolute"
                  style={{ bottom: "-30px", right: "-30px", zIndex: -1, opacity: 0.5 }}
                >
                  <img
                    src={shape}
                    alt="Decorative Shape"
                    style={{ maxWidth: "150px", height: "auto" }}
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <h3>BASIC PLAN</h3>
                  <small>Enroll for Session<br />Rs. 45,000 + GST</small>
                  <h3>Join with Century Finance Limited
                  </h3>
                </div>
                <h5 className="mt-4"><strong>1 Day training Session</strong></h5>
                <h5 className="mt-4"><strong> Learn about Equity,Commodity &   Foreign Exchange </strong></h5>
                <h5 className="mt-4"><strong>SEBI-Certified Certification
                </strong></h5>
                {/* <ul className="mb-3">
                  <li>✅ Real-time exposure to the workings of financial markets</li>
                  <li>✅ Interview-focused knowledge for final-year placement preparation</li>
                  <li>✅ Digital certificate to add credibility to resumes & LinkedIn profiles</li>
                  <li>✅ Awareness of top finance careers — CFA, Research Analyst, Investment Advisor, and more</li>
                </ul> */}
                <h4 className="mt-4">One Day On-Campus Certified Financial Marketing Training<strong>
                </strong></h4>
                <h5 className="mt-4">About Basic Plan:<strong>
                </strong></h5>
                <ul className="mb-3">
                  <li>It’s a one day, on-campus training program exclusively tailored for final-year students. It offers a  </li>
                  <li>practical exposure to equity, commodity and foreign exchange markets, delivered by  </li>
                  <li>experienced trainers.</li>
                </ul>

                {/* Key Notes */}
                <div className="alert alert-warning p-3 rounded mb-3">
                  <strong>Objectives:
                  </strong>To seamlessly connect academic-learning with real-world  financial market practices by offering students hand-on-hands exposure to trading concepts, market structure and industry tools. It aims to build a solid foundation for their transition into the professional world of finance.
                </div>
                {/* <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Eligibility:</strong> Final-Year Students (B.Com, BBA, MBA, BA-Economics, Finance-related streams)
                </div>
                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Program Fee:</strong> ₹45,000 per batch +GST(all types of taxes)
                  <br />
                  <strong>Certification:</strong> Digital certificates awarded upon successful assessment
                </div>

                {/* Overview */}
                {/* <div className="alert alert-success p-3 rounded mb-4">
                  <strong>Objective:</strong> Designed to bridge the gap between theoretical academic learning and real-world finance industry practices — ideal for final-year students preparing for placements and certifications.
                </div> */}



                {/* Show More / Show Less Button */}
                <div className="text-center">
                  <button
                    onClick={toggleContent}
                    className="btn btn-outline-primary rounded-pill px-4 mt-3"
                    style={{ padding: "10px 20px", fontSize: "1rem" }}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>

                {/* Visible Content (Partial) */}




                {/* Expanded Content */}
                {isExpanded && (
                  <>
                    <h4 className="mt-4">Program Details:
                      <strong>
                      </strong></h4>
                    <ul className="mb-3">
                      <li>Designed for Final Year Students, only for Colleges and Universities
  </li>
                      <li>BBA,B.Com, BA-Economics, MBA or Finance related streams are eligible   </li>
                      <li>Program fees:- Rs.45,000 per batch + GST</li>
                      <li>Digital  Certificate awarded on completion of Training.</li>
                    </ul>

                    <h5><strong></strong></h5>
                    <table className="table table-bordered mt-2">
                      <thead className="table-light">
                        <tr>
                          <th>Program
                          </th>
                          <th>Program Modules and learning Outcomes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Module</td>
                          <td>What You’ll Learn</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Understanding pricing factors and trading in agri, metals, and energy commodities</td>
                        </tr>
                        <tr>
                          <td>Foreign Exchange</td>
                          <td>Essentials of currency markets, INR pairs, and international influences</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Student Benefits */}
                    <h5 className="mt-4"><strong>Why Should Students Attend?</strong></h5>
                    <ul className="mb-3">
                      <li>✅ Real-time exposure to the workings of financial markets</li>
                      <li>✅ Interview-focused knowledge for final-year placement preparation</li>
                      <li>✅ Digital certificate to add credibility to resumes & LinkedIn profiles</li>
                      <li>✅ Awareness of top finance careers — CFA, Research Analyst, Investment Advisor, and more</li>
                    </ul>
                    {/* Institution Benefits */}
                    <h5 className="mt-4"><strong>What Institutions Gain</strong></h5>
                    <ul className="mb-3">
                      <li>✔️ Industry-driven training to strengthen your academic offerings</li>
                      <li>✔️ Better placement results with job-oriented exposure</li>
                      <li>✔️ Enhanced brand image as a career-focused institute</li>
                      <li>✔️ No added burden — we manage training, assessments, and certification entirely</li>
                    </ul>

                    {/* Contact Details */}
                    <h5 className="mt-4"><strong>Get in Touch</strong></h5>
                    <div className="alert alert-light border mb-3">
                      <p>Want to bring this certified finance training to your campus?</p>
                      <p style={{ fontSize: "1rem", marginBottom: "5px" }}>
                        📧 <strong>Email:</strong> <a href="mailto:customerservice@centuryfinancelimited.com" style={{ color: "grey", textDecoration: "underline" }}>customerservice@centuryfinancelimited.com</a>
                      </p>
                      <p style={{ fontSize: "1rem" }}>
                        🌐 <strong>Website:</strong> <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "underline" }}>https://www.centuryfinancelimited.com/</a>
                      </p>
                      <p className="text-danger"><em>Note: Limited slots available — advance booking is highly recommended.</em></p>
                    </div>

                  </>
                )}


                {/* Payment Button */}
                <button
                  onClick={onBookNow}
                  className="btn btn-outline-dark mt-3"
                  style={{ padding: "12px 25px" }}
                >
                  Pay Now (₹45,000 per Batch)
                </button>



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPlan;
