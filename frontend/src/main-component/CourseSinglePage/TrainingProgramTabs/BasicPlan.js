import React from "react";
import abimg from "../../../images/about/basic.png";
import shape from "../../../images/about/shape.png";
import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BasicPlan = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding pt-0">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-warning p-4 rounded mb-5" style={{ border: '1px solid red' }}>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <span className="h4 px-5 py-3 d-inline-block text-center">Get certified training in
                      Equity, Commodity &
                      Foreign Markets - all for
                      just *45,000 INR</span>
                  </div>
                  <div className="col-md-6">
                    <span className="h4 px-5 py-3 d-inline-block text-center">
                      Gain real-world skills,
                      expert mentorship, and a
                      certificate to boost your
                      finance career.
                    </span>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
                <div className="back-shape">
                  <img src={shape} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <div className="alert alert-warning p-4 border-danger mb-4">
                    Pay Just <strong className="text-danger">22500</strong> INR and remaining fee after completion of the course
                  </div>
                  <small>Basic Plan</small>
                  <h2>A New Different Way To Improve Your Skills.</h2>
                </div>
                <h3 className="mb-4"><strong>BASIC PLAN – CAREER-READY FINANCE & MARKET TRAINING</strong></h3>
                <h4 className="fw-bold">1. Equity Markets</h4>
                <p>Basics of stock markets: How they function, market participants, and key regulations
                  Technical vs. fundamental analysis: Interpreting charts, trends, and financial statements
                  Risk management, portfolio planning, and live case studies using market dashboards</p>
                <h4 className="fw-bold">2. Commodity Markets</h4>
                <p>Understanding commodity trading: Metals, energy, agri-products
                  Demand-supply dynamics and price movements
                  Tools, strategies, and mock trading experience in commodities</p>
                <h4 className="fw-bold">3. Foreign & Global Markets</h4>
                <p>Introduction to forex and international markets
                  Currency pairs, exchange rates, and macroeconomic factors
                  Trading platforms, analysis techniques, and understanding geopolitical impacts</p>
              </div>
            </div>
            <div className="col-12">
              <div className="alert alert-warning rounded p-5 mt-5">
                <h2 className="mb-4 fw-bold">Features:</h2>
                <p className="list-heading h4 text-dark fw-bold">1. Hands-On Learning Experience</p>
                <h6>Interactive Dashboard Access</h6>
                <p>Simulate real-time trading and apply strategies in a virtual environment.
                  Track global indices, commodity prices, and forex movements in one place.</p>
                <p className="list-heading h4 text-dark fw-bold">2. Live Training by Market Experts</p>
                <p>Learn directly from professionals with years of experience in trading and finance.</p>
                <p className="list-heading h4 text-dark fw-bold">3. Capstone Project</p>
                <p>Apply everything you’ve learned in a final simulation challenge — present your strategy, analyze risk,
                  and manage a live trading model.</p>
                <p className="list-heading h4 text-dark fw-bold">4. 1-on-1 Mentorship</p>
                <p>Personal guidance on career paths, job readiness, and how to build your financial profile.</p>
                <p className="list-heading h4 text-dark fw-bold">5. Certification & Outcomes</p>
                <p>Upon successful completion, receive a recognized certification that validates your market skills and adds
                  value to your job profile. Graduates of this programme have gone on to internships, analyst roles, and
                  postgraduate finance studies with confidence.</p>
              </div>
              <div className="alert alert-danger p-5 mt-5">
                <h2 className="mb-4 fw-bold">Who This Is For:</h2>
                <p>Final-year students in Commerce, Business, Economics, or Finance
                  Anyone seeking to build a strong foundation in market trading
                  Students aiming for careers in investment banking, portfolio management, research, or trading</p>
              </div>
              <p className="fw-bold py-4">Includes all learning materials, live classes, dashboard access, mentorship, and certification.</p>
              <h4 className="fw-bold">Why Join This Programme?</h4>
              <p>Tailored specifically for students with no prior trading experience
                Builds practical skills that employers seek
                Offers real-world tools, not just textbook knowledge
                Helps students stand out in job interviews and entrance exams
                Trains you to think like a market professional</p>
              <h3 className="fw-bold">📢 Important Note:</h3>
              <p><strong>
                This programme is exclusively for final-year students to ensure focused training and peer learning.
                🎯Only a limited number of seats are offered each batch for quality mentorship.</strong></p>
              <ul>
                <li className="mb-4"><strong>Enroll Now- Start Your Career Ahead of the Curve</strong></li>
                {/* <li><strong>Contact:</strong> [8815532159]</li> */}
                <li><strong>Email:</strong>{' '}
                  <a href="mailto:customerservice@centuryfinancelimited.com" onClick={ClickHandler} target="_blank" rel="noopener noreferrer">
                    customerservice@centuryfinancelimited.com
                  </a>{' , '}
                  <a href="mailto:general-inquiry@centuryfinancelimited.com" onClick={ClickHandler} target="_blank" rel="noopener noreferrer">
                    general-inquiry@centuryfinancelimited.com
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{' '}
                  <a href="https://centuryfinancelimited.com/" onClick={ClickHandler} target="_blank" rel="noopener noreferrer">
                    centuryfinancelimited.com
                  </a>
                </li>
              </ul>
              <Link onClick={ClickHandler} to="/about" className="theme-btn-s2">
                Learn More About Basic Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicPlan;
