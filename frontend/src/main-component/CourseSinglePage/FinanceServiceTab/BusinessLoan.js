import React from "react";
import abimg from "../../../images/about/appliance.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BusinessLoan = (props) => {
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
                  Business Loan – Fuel Your Business with Flexible Financing
                </div>

                <h2 className="text-success mb-3">
                   Running or expanding a business often needs timely access to funds. This *Business Loan* is specially crafted for entrepreneurs, shop owners, and self-employed professionals to manage cash flow, grow operations, or upgrade infrastructure—*without financial strain*.
                </h2>

                <div className="p-3 mb-4 bg-white shadow-sm rounded border-start border-success border-5">
                  <h5 className="mb-3 text-primary">*Loan Summary:</h5>
                  <ol className="list-unstyled mb-0">
                    <li> <strong>Loan Amount:</strong> ₹50,000 to ₹5,00,000</li>
                    <li> <strong>Interest Rate: 10% – 20% per annum *(depends on profile & business strength).</strong></li>
                    <li> <strong>Processing Fee:</strong>₹500 to ₹2,000 *(based on loan amount and risk category)</li>
                    <li> <strong>Suitable for working capital, equipment purchase, renovations, or business expansion.:</strong></li>
                  </ol>
                </div>

                <div className="bg-light p-3 rounded border-start border-warning border-5 mb-4">
                  <h6 className="text-warning mb-2">✅Eligibility Criteria – Who Can Apply</h6>
                  <ol>
                    <li><strong>Age Limit:</strong>Applicant must be *between 21 to 65 years of age</li>
                    <li><strong>*Business Vintage:</strong>Business must be *at least 1 year old</li>
                    <li> <strong>*Minimum Monthly Turnover:</strong>Business should generate *at least ₹30,000 per month*</li>
                    <li> <strong>Credit Score Requirement</strong>* A *CIBIL score of 750 or higher* is *preferred*
                      (can be either the individual's or business's credit score)
                    </li>
                    <li><strong>xamples: Electricity bill, rent agreement, shop act license, GST certificate, etc.:</strong>
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-3 rounded shadow-sm mb-4 border-start border-info border-5">
                  <h6 className="text-info mb-2">✅Documents Typically Required</h6>
                  <ol>
                    <li> <strong>Aadhaar Card & PAN Card (individual/business)</strong></li>
                    <li><strong>Business registration proof (Udyam, GST, Shop Act)</strong>
                    </li>
                    <li> <strong>Last 6 months' bank statements</strong></li>
                    <li><strong>Address proof (utility bill, rent agreement, etc.)</strong>
                    </li>
                    <li><strong>* Income documents or turnover proof (optional but helpful)
                    </strong>
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">Important Tips for Approval:</h4>
                  <ol>
                    <li><strong>
                      * ✅ Ensure *all documents are current and verifiable*</strong> </li>
                    <li><strong>✅ Maintain a *healthy banking history* with consistent deposits</strong>
                    </li>
                    <li><strong>✅ File *regular GST returns* or income proof to show business health</strong>
                    </li>
                    <li><strong>* ✅ Avoid defaults on past loans to *maintain a good credit score*
                    </strong>
                    </li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">*Documents Required for Business Loan Application:</h4>
                  <ol>
                    <li><strong>To ensure a smooth and fast approval process, make sure you have the following documents ready. These are essential to *verify your identity, business, and financial capacity*.
                    </strong></li>
                    <li><strong>Mandatory Documents</strong>
                      Aadhaar Card & PAN Card (Proprietor) Used to verify the applicant’s identity and track credit history.
                    </li>
                    <li><strong>*Business Registration Certificate or GST Certificate*.</strong> Confirms your business is officially recognized and operational.
                      Acceptable formats: Udyam/Udyog Aadhaar, GSTIN, Shop Act license, etc.</li>
                    <li><strong>*Last 6 Months’ Bank Statements (Business Account Preferred)*.</strong> Gives insight into your *business cash flow*, income, and transaction history.
                      Higher and consistent deposits can improve your chances.</li>
                    <li><strong>Income Tax Returns (if applicable)</strong> Demonstrates *declared income* and helps assess business profitability.
                      While not always mandatory, filing returns adds to credibility.
                    </li>
                    <li><strong>Valid Address Proof – Office and Residentia
                    </strong> Confirms stability at both business and home locations.
                      Acceptable documents: electricity bill, rent agreement, property tax receipt, etc.
                      Must show *at least 1 year at the current address*.

                    </li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2"> Late Payment Terms – Must Know Before Borrowing:</h4>
                  <ol>
                    <li><strong>Failing to repay on time can affect your credit and lead to additional charges. Here's what happens if you miss an EMI:.</strong></li>
                    <li><strong>Grace Period</strong>
                      2 days *(You have a 48-hour buffer to make the payment).
                    </li>
                    <li><strong>Late Fee.</strong>: ₹500 to ₹1,000 Charged after the grace period ends.</li>
                    <li><strong>*Daily Penalty.</strong>*10% compound interest per day* on the *overdue EMI amount*
                    </li>
                    <li><strong>❌Who Is Not Eligible? (Application May Be Rejected If...).</strong>Some common reasons why a business loan application may be denied:
                    </li>
                    <li><strong>🚫 *No Proof of Business Income*
                      .</strong>
                      If you can’t demonstrate regular income (via bank statement or ITR), lenders may see you as high risk.</li>
                    <li><strong>🚫 *Poor Credit History.</strong>Defaults, late payments, or a low CIBIL/business score reduce your chances.
                    </li>
                    <li><strong>🚫 *Unregistered or Informal Businesses*.</strong>If your business has no legal registration or GST/Udyam ID, it may be *ineligible* for financing.</li>
                  </ol>
                </div>
                <div className="bg-white p-3 rounded border-start border-secondary border-5">
                  <h4 className="text-secondary mb-2">✅Quick Tip to Improve Approval Chances:</h4>
                  <ol>
                    <li><strong>Maintain a clean credit history.</strong></li>
                    <li><strong>Regularly file ITR and GST</strong>
                    </li>
                    <li><strong>Ensure all your documents are *current and valid*
                      .</strong>
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

export default BusinessLoan;
