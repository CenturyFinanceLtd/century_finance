import React from "react";
import abimg from "../../../images/about/basic.png";
import shape from "../../../images/about/shape.png";



const Asian = ({ onBookNow }) => {
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
                  <small>Asian</small>
                  <h2>One-Day On-Campus Certified Financial Market Training</h2>
                </div>

                {/* Key Notes */}
                <div className="alert alert-warning p-3 rounded mb-3">
                  <strong>Exclusively for Educational Institutions:</strong> Only Colleges & Universities can enroll batches.
                </div>
                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Eligibility:</strong> Final-Year Students (B.Com, BBA, MBA, BA-Economics, Finance-related streams)
                </div>

                <div className="alert alert-info p-3 rounded mb-3">
                  <strong>Program Fee:</strong> ₹45,000 per batch +GST(all types of taxes)
                  <br />
                  <strong>Certification:</strong> Digital certificates awarded upon successful assessment
                </div>

                {/* Overview */}
                <div className="alert alert-success p-3 rounded mb-4">
                  <strong>Objective:</strong> Designed to bridge the gap between theoretical academic learning and real-world finance industry practices — ideal for final-year students preparing for placements and certifications.
                </div>

                {/* Course Content */}
                <h5><strong>Program Modules & Learning Outcomes</strong></h5>
                <table className="table table-bordered mt-2">
                  <thead className="table-light">
                    <tr>
                      <th>Module</th>
                      <th>Learning Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Equity Market</td>
                      <td>Deep dive into stock exchanges, trading systems, and investment strategies</td>
                    </tr>
                    <tr>
                      <td>Commodity Market</td>
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
            📧 <strong>Email:</strong> <a href="customerservice@centuryfinancelimited.com" style={{ color: "grey", textDecoration: "underline" }}>customerservice@centuryfinancelimited.com</a>
          </p>
                  <p style={{ fontSize: "1rem" }}>
            🌐 <strong>Website:</strong> <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={{ color: "grey", textDecoration: "underline" }}>https://www.centuryfinancelimited.com/</a>
          </p>
                  <p className="text-danger"><em>Note: Limited slots available — advance booking is highly recommended.</em></p>
                </div>
                 <button onClick={onBookNow} className="btn btn-outline-dark mt-3">
                  Book Now (₹45,000 per Batch)
                </button>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asian;