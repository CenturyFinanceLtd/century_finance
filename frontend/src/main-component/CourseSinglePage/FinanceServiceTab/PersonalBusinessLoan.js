import React from "react";
import abimg from "../../../images/about/personal.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const PersonalBusinessLoan = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding bg-light">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            {/* Left Image Side */}
            <div className="col-lg-6 col-md-12">
              <div className="wpo-about-img position-relative text-center">
                <img src={abimg} alt="Appliance Loan" className="img-fluid rounded shadow" />
              </div>
            </div>

            {/* Right Content Side */}
            <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
              <div className="wpo-about-text">
                <div className="alert alert-primary text-center fw-bold fs-5 shadow">
                  Personal  – Quick Financing Made Simple
                </div>

                <h2 className="text-success mb-3">
                  Get access to *instant funds* to meet your *personal needs  goals* without the hassle of heavy paperwork or long wait times.
                </h2>

                <div className="p-3 mb-4 bg-white shadow-sm rounded border-start border-success border-5">
                  <h5 className="mb-3 text-primary">💡 Loan Overview:</h5>
                  <ol className="list-unstyled mb-0">
                    <li> <strong>Loan Amount:</strong>  ₹30,000 to ₹90,000</li>
                    <li> <strong>Interest Rate: Starts from **9% to 27% annually* (based on your credit score):</strong></li>
                    <li> <strong>*Loan Type*:</strong>  Unsecured – no collateral needed</li>
                    <li> <strong>Purpose:</strong>Personal Expenses (wedding, travel, education, etc.)</li>
                  </ol>
                </div>

                <div className="bg-light p-3 rounded border-start border-warning border-5 mb-4">
                  <h6 className="text-warning mb-2"> ✅Why Choose This Loan</h6>
                  <ol>
                    <li><strong>*Fast Approval:</strong> Quick processing & disbursal</li>
                    <li><strong>₹Flexible Repayment</strong>Choose EMIs that suit your budget</li>
                    <li> <strong>Credit-Score Based Rates</strong> Better credit = lower interest</li>
                    <li> <strong>No Collateral</strong> * Completely unsecured loan
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-3 rounded shadow-sm mb-4 border-start border-info border-5">
                  <h6 className="text-info mb-2">✅*Who Is It For?</h6>
                  <ol>
                    <li> <strong>Salaried Individuals</strong>looking for quick funds</li>
                    <li><strong>*Self-Employed Professionals</strong>* needing working capital
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">Pro Tip:</h4>
                  <ol>
                    <li><strong>Maintain a *CIBIL score of 750 or above* to unlock lower interest rates and higher loan amounts.</strong> </li>
                    <li><strong>*Personal Loan – Your Quick Solution for Urgent Needs</strong>
                      Whether it’s managing an emergency, planning a big event, or consolidating debt, a *Personal Loan* offers a fast and flexible way to access funds—*without collateral*.
                    </li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">Loan Overview:</h4>
                  <ol>
                    <li><strong>*Loan Amount.</strong> ₹30,000 to ₹90,000</li>
                    <li><strong>Interest Rate</strong>
                      From 9% to 27% per annum (depends on your *CIBIL score*).
                    </li>
                    <li><strong>Processing Fee.</strong> ₹500 (📎 *one-time only)</li>
                    <li><strong>Loan Type.</strong> Unsecured loan – no need to pledge any asset</li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅ *Eligibility Criteria – Who Can Apply?:</h4>
                  <ol>
                    <li><strong>*Loan Amount.</strong> ₹30,000 to ₹90,000</li>
                    <li><strong>Interest Rate</strong>
                      From 9% to 27% per annum (depends on your *CIBIL score*).
                    </li>
                    <li><strong>*Age: Must be between.</strong>21 to 60 years</li>
                    <li><strong>*Minimum Monthly Income.</strong> ₹15,000 or more</li>
                    <li><strong>Employment Status.</strong>Salaried: At least **6 months* with your current employer</li>
                    <li><strong>Self-Employed.</strong> (individual professionals/traders): *Minimum 1 year* of stable income</li>
                    <li><strong>Credit Score.</strong>CIBIL score of 750+* is required for approval and best interest rates</li>
                    <li><strong>Residential Stability.</strong>Must have lived at your *current address for at least 1 year</li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅*Documents Required – What You’ll Need:</h4>
                  <ol>
                    <li><strong>Identity Proof.</strong> Aadhaar Card & PAN Card</li>
                    <li><strong>Income Proof</strong>
                      Last *3–6 months of salary slips* (for salaried)
                      OR *bank statements* (for self-employed)
                      :
                    </li>
                    <li><strong>Address Proof.</strong> Utility bill (electricity/water)
                      * OR *Rent agreement*, etc.</li>
                    <li><strong>*Minimum Monthly Income.</strong> ₹15,000 or more</li>
                    <li><strong>Employment Status.</strong>Salaried: At least **6 months* with your current employer</li>
                    <li><strong>Self-Employed.</strong> (individual professionals/traders): *Minimum 1 year* of stable income</li>
                    <li><strong>Credit Score.</strong>CIBIL score of 750+* is required for approval and best interest rates</li>
                    <li><strong>Residential Stability.</strong>Must have lived at your *current address for at least 1 year</li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅Why Credit Score Matters?</h4>
                  <ol>
                    <li><strong>Your *CIBIL score* determines:.</strong></li>
                    <li><strong>eligibility</strong>
                      Your
                    </li>
                    <li><strong>The *interest rate* you’ll get.</strong>
                    </li>
                    <li><strong>* The *loan amount* you can access
                      .</strong></li>
                    <li><strong>A *higher score (750+).</strong>Lower interest & higher approval chance</li>
                    <li><strong> A *low score.</strong> Higher rejection risk or costly interest rates</li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅Things to Keep in Mind</h4>
                  <ol>
                    <li><strong>This is a *personal-use loan* – use it for emergencies, education, travel, wedding, etc..</strong></li>
                    <li><strong></strong>
                      Your
                    </li>
                    <li><strong>No guarantor or security required.</strong>* All loans are subject to verification and lender approval
                    </li>
                    <li><strong>Apply Now
                      .</strong>and take control of your finances—*quickly, safely, and hassle-free</li>
                    <li><strong>Late Payment Terms – What Happens If You Miss Your EMI.</strong>
                      Missing your EMI (Equated Monthly Installment) can lead to extra charges and affect your credit history. Here's a breakdown of what you need to know:
                    </li>
                    <li><strong>Grace Period.</strong>*  A *2-day grace period* is provided after your EMI due date
                      * This allows you *time to pay without penalty*, in case of minor delays
                    </li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅Late Payment Charges</h4>
                  <ol>
                    <li><strong>If you miss the 2-day grace period:
                      ..</strong></li>
                    <li><strong></strong>
                      Your
                    </li>
                    <li><strong>Late Fee.</strong>
                    </li>
                    <li><strong> A *flat charge of ₹500
                      .</strong> is added to your outstanding amount</li>
                    <li><strong>*Daily Interest Penalty.</strong>
                      A *10% compound interest per day* is applied on the *overdue EMI amount*This continues until full payment is made
                    </li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅Impact of Late Payment</h4>
                  <ol>
                    <li><strong>Your *CIBIL score may drop:
                      ..</strong></li>
                    <li><strong>Future loan approvals</strong>
                      may be affected
                    </li>
                    <li><strong>You may face *higher interest rates.</strong>on future borrowings
                    </li>
                    <li><strong>Tip to Get Approved
                      .</strong>
                      Maintain a *high CIBIL score, ensure **stable income, and provide **complete, verifiable documents* to boost your chances.</li>
                    <li><strong>*Daily Interest Penalty.</strong>
                      A *10% compound interest per day* is applied on the *overdue EMI amount*This continues until full payment is made
                    </li>
                  </ol>
                </div>
                {/* <div className="text-center mt-4">
                  <Link
                    onClick={ClickHandler}
                    to="/apply-loan"
                    className="btn btn-success btn-lg px-5 shadow rounded-pill">
                    Apply Now – Quick & Easy Process
                  </Link>
                </div>

                <p className="text-muted mt-3 text-center small">
                  Transparent charges • No hidden fees • Market-linked interest • 100% online process
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonalBusinessLoan;
