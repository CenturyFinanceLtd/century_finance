import React from "react";
import abimg from "../../../images/about/appliance.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const ApplianceFurnitureLoan = () => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Image Side */}
            <div className="col-lg-6 col-md-12">
              <div className="wpo-about-img position-relative text-center">
                <img src={abimg} alt="Appliance Loan" className="img-fluid rounded shadow" />
                <div className="back-shape position-absolute top-0 end-0">
                  <img src={shape} alt="" />
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <div className="wpo-about-text">
                <div className="alert alert-primary text-center fw-bold fs-5 shadow">
                   Upgrade Now. Pay Later – Appliance & Furniture Loan
                </div>

                <h2 className="text-success mb-3">Furnish Your Dream Home Without Financial Stress</h2>

                <div className="p-3 mb-4 bg-white shadow-sm rounded border-start border-success border-5">
                  <h5 className="mb-3 text-primary">💡 Loan Highlights:</h5>
                  <ol className="list-unstyled mb-0">
                    <li> <strong>Loan Amount:</strong> ₹20,000 – ₹1,40,000</li>
                    <li> <strong>Interest Rate:</strong> 9% – 27%</li>
                    <li> <strong>Approval:</strong> Instant disbursal</li>
                    <li> <strong>Tenure:</strong> 6 – 24 months</li>
                    <li> <strong>No Collateral:</strong> 100% unsecured</li>
                  </ol>
                </div>

                <div className="bg-light p-3 rounded border-start border-warning border-5 mb-4">
                  <h6 className="text-warning mb-2">⚠️ Late Payment Terms</h6>
                  <ol>
                    <li><strong>Grace Period:</strong> 2 days post due date</li>
                    <li><strong>₹500 flat late fee</strong></li>
                    <li> <strong>10% daily compound interest on overdue EMI</strong></li>
                  </ol>
                  <p className="text-danger fw-bold mb-0"> Late payments affect your credit score!</p>
                </div>

                <div className="bg-white p-3 rounded shadow-sm mb-4 border-start border-info border-5">
                  <h6 className="text-info mb-2">✅ Eligibility Criteria:</h6>
                  <ol>
                    <li> <strong>Age 21–60 years</strong></li>
                    <li><strong> Salaried or Self-Employed</strong></li>
                    <li><strong>Salaried or Self-Employed</strong> </li>
                    <li> <strong>1 year residential stability</strong></li>
                    <li><strong>CIBIL score 750+</strong> </li>
                  </ol>
                </div>

                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2"> Documents Required:</h4>
                  <ol>
                    <li><strong>PAN & Aadhaar</strong> </li>
                    <li><strong>Address proof (bill/rent agreement)</strong> </li>
                    <li><strong>Salary slips / bank statement (salaried)</strong></li>
                    <li> <strong>Business proof & statements (self-employed)</strong></li>
                  </ol>
                </div>

                <div className="text-center mt-4">
                  <Link
                    onClick={ClickHandler}
                    to="/apply-loan"
                    className="btn btn-success btn-lg px-5 shadow rounded-pill">
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

export default ApplianceFurnitureLoan;
