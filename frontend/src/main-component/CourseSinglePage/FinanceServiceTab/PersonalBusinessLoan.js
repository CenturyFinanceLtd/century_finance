import React, { useState } from "react";
import abimg from "../../../images/about/personal.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PersonalBusinessLoan = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">

            {/* Left Image Side */}
            <div className="col-lg-6 col-md-12">
              <div className="wpo-about-img position-relative text-center">
                <img src={abimg} alt="Loan" className="img-fluid rounded shadow" />
              </div>
            </div>

            {/* Right Content Side */}
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <div className="wpo-about-text">
                <div className="alert alert-primary text-center fw-bold fs-5 shadow">
                  Personal & Business Loans – Finance Made Simple, Fast & Flexible
                </div>

                <h2 className="text-success mb-3">
                  Whether you're managing personal priorities or expanding your business, Century Finance provides seamless, quick, and flexible loan options — without the paperwork headaches.
                </h2>

                {/* Always visible: Personal Loan section */}
                <div className="p-3 mb-4 bg-white shadow-sm rounded border-start border-success border-5">
                  <h5 className="mb-3 text-primary">Personal Loan</h5>
                  <ul className="list-unstyled mb-0">
                    <li><strong>Loan Amount:</strong> ₹30,000 – ₹90,000</li>
                    <li><strong>Tenure:</strong> Up to 60 months</li>
                    <li><strong>Interest Rate:</strong> 9% – 27% Annually</li>
                    <li><strong>Processing Fee:</strong> ₹500 (one-time only)</li>
                  </ul>
                </div>

                {/* Expandable: All remaining content */}
                {showMore && (
                  <>
                    <div className="p-3 mb-4 bg-white shadow-sm rounded border-start border-primary border-5">
                      <h5 className="mb-3 text-primary">Business Loan</h5>
                      <ul className="list-unstyled mb-0">
                        <li><strong>Loan Range:</strong> ₹50,000 to ₹5,00,000 Lakh</li>
                        <li><strong>Interest Rate:</strong> 10% – 20% Annually</li>
                        <li><strong>Processing Fee:</strong> ₹500 to ₹2,000 (based on loan size)</li>
                      </ul>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm mb-4 border-start border-info border-5">
                      <h6 className="text-info mb-2">Eligibility Criteria:</h6>
                      <ol>
                        <li><strong>Age:</strong> 21–60 years</li>
                        <li><strong>Occupation:</strong> Salaried or Self-Employed</li>
                        <li><strong>Residential Stability:</strong> 1 year</li>
                        <li><strong>CIBIL Score:</strong> 750+</li>
                        <li><strong>Monthly Turnover:</strong> At least ₹30,000</li>
                      </ol>
                    </div>

                    <div className="bg-light p-3 rounded border-start border-warning border-5 mb-4">
                      <h6 className="text-warning mb-2">Late Payment Terms</h6>
                      <ol>
                        <li><strong>Grace Period:</strong> 2 days post due date</li>
                        <li><strong>Late Fee:</strong> ₹500 – ₹1,000</li>
                        <li><strong>Penalty:</strong> 10% daily compound interest on overdue EMI</li>
                      </ol>
                      <p className="text-danger fw-bold mb-0">Late payments affect your credit score!</p>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm border-start border-info border-5">
                      <h6 className="text-info mb-2">Documents Required (For All Loans)</h6>
                      <ul>
                        <li>✅ PAN Card</li>
                        <li>✅ Aadhaar Card</li>
                        <li>✅ 6 Months Bank Statement</li>
                        <li>✅ Salary Slips / ITR (if self-employed)</li>
                        <li>✅ Business Proof (for Business Loans)</li>
                      </ul>
                    </div>

                    <div className="bg-light p-3 rounded border-start border-warning border-5 mt-4">
                      <h6 className="text-warning mb-2">Why Choose Century Finance?</h6>
                      <ul>
                        <li>✔️ Transparent Interest Rates – no hidden charges</li>
                        <li>✔️ Flexible EMI Options – personalized to your repayment capacity</li>
                        <li>✔️ Fast Online Process – fully digital, minimal waiting</li>
                        <li>✔️ Support-Driven Team – we guide, not push</li>
                      </ul>
                    </div>
                  </>
                )}

                {/* Read More / Less Toggle */}
                <div className="text-center mt-3">
                  <button
                    className="btn btn-outline-primary rounded-pill px-4"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                </div>

                {/* Apply Now Button */}
                <div className="text-center mt-4">
                  <Link
                    onClick={ClickHandler}
                    to="/apply-loan"
                    className="btn btn-success btn-lg px-5 shadow rounded-pill"
                  >
                    Apply Now – Quick & Easy Process
                  </Link>
                </div>

                <p className="text-muted mt-3 text-center small">
                  Transparent charges • No hidden fees • Market-linked interest • 100% online process
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalBusinessLoan;
