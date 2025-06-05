import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Refund Policy - Century Finance Limited</title>
        <meta
          name="description"
          content="Read the refund and EMI policy for Century Finance Limited. Refunds are subject to deductions. EMI options are available based on course type."
        />
        <style>{`
          .refund-hero {
            background: linear-gradient(to right, #f8f8f8, #ffffff);
            padding: 60px 30px 40px 30px;
            text-align: center;
            animation: fadeIn 1s ease-in;
            width: 100%;
          }

          .refund-hero h1 {
            font-size: 36px;
            color: #b30000;
            font-weight: 800;
            margin-bottom: 10px;
          }

          .refund-hero p {
            font-size: 18px;
            color: #333;
            max-width: 1000px;
            margin: 0 auto;
          }

          .refund-policy-content {
            width: 100%;
            padding: 50px 8vw;
            background: #fff;
            font-family: 'Segoe UI', sans-serif;
            color: #1a1a1a;
            line-height: 1.8;
            text-align: justify;
            animation: fadeIn 1s ease-in;
          }

          .refund-policy-content h2,
          .refund-policy-content h3 {
            color: #b30000;
            font-weight: 700;
            margin-top: 40px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            font-size: 22px;
          }

          .refund-policy-content h2::before,
          .refund-policy-content h3::before {
            content: "✔️";
            margin-right: 10px;
          }

          .refund-policy-content h4 {
            font-size: 18px;
            color: #444;
            font-weight: 600;
            margin-top: 20px;
            margin-bottom: 10px;
          }

          .refund-policy-content ul {
            padding-left: 20px;
            margin-bottom: 20px;
          }

          .refund-policy-content ul li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
          }

          .refund-policy-content ul li::before {
            content: "•";
            position: absolute;
            left: 0;
            color: #b30000;
            font-size: 20px;
            line-height: 1;
          }

          .refund-policy-content a {
            color: #b30000;
            font-weight: 600;
            text-decoration: none;
          }

          .refund-policy-content a:hover {
            text-decoration: underline;
          }

          .alert {
            background: #eafaf1;
            border-left: 5px solid #28a745;
            padding: 14px 18px;
            margin: 20px 0;
            border-radius: 8px;
            font-weight: 500;
          }

          .cta-box {
            background-color: #fdf2f2;
            border-left: 6px solid #b30000;
            padding: 20px;
            margin-top: 40px;
            border-radius: 12px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            color: #900;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .refund-hero h1 {
              font-size: 26px;
            }

            .refund-policy-content {
              padding: 30px 5vw;
            }
          }
        `}</style>
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Refund Policy" pagesub="Refund Policy" />

      <div className="refund-hero">
        <h1>Refund & EMI Policy</h1>
        <p>
          We prioritize transparency and trust in all our financial policies. Please review the refund structure and installment guidelines before enrollment.
        </p>
      </div>

      <div className="refund-policy-content">
        <h2>Refund Eligibility & Deduction</h2>
        <p>
          Refund requests must be made within <strong>14 calendar days</strong> from the course activation date or the first orientation session, whichever comes first.
        </p>
        <p>
          Approved refunds will include a mandatory deduction between <strong>10% to 30%</strong> of the total course fee, based on the following:
        </p>
        <ul>
          <li>Course type and duration</li>
          <li>Accessed course content</li>
          <li>Timing of the refund request</li>
        </ul>

        <div className="alert">
          No full refunds will be processed under any condition. All approved refunds are subject to a minimum 10% deduction.
        </div>

        <h3>Registration Fee</h3>
        <ul>
          <li>Once registration is complete, the fee is <strong>strictly non-refundable</strong>.</li>
          <li>This applies irrespective of course start, progress, or attendance.</li>
        </ul>

        <h2>Installment Payment (EMI) Options</h2>
        <p>
          Century Finance Limited offers internal EMI options (no third-party involvement) tailored to course duration:
        </p>
        <h4>EMI Breakdown:</h4>
        <ul>
          <li><strong>Short-Term Courses (e.g., 2-week plans):</strong> 2-installment option available</li>
          <li><strong>Standard/Long-Term Courses:</strong> 3-installment option available</li>
        </ul>

        <h4>EMI Guidelines:</h4>
        <ul>
          <li>All installments are <strong>compulsory</strong> and must be paid on time.</li>
          <li>Late or missed payments may result in suspension or permanent revocation of course access.</li>
          <li>Refunds (if applicable) will not be processed unless all prior installments are cleared.</li>
        </ul>

        <h3>Non-Refundable Situations</h3>
        <ul>
          <li>Requests submitted after the 14-day eligibility period</li>
          <li>Courses accessed beyond 30% content completion</li>
          <li>Corporate, group, or bulk discounted plans</li>
          <li>Registration fee under any circumstance</li>
        </ul>

        <h3>How to Request a Refund</h3>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:support@centuryfinancelimited.com">support@centuryfinancelimited.com</a></li>
          <li>Include: Full name, registered email, enrollment ID, payment reference, and reason for refund</li>
          <li>Refunds (if approved) are processed within <strong>7–10 business days</strong></li>
        </ul>

        <h3>Grievance Redressal</h3>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:grievance@centuryfinancelimited.com">grievance@centuryfinancelimited.com</a></li>
          <li>Our support team will respond within <strong>15 business days</strong></li>
        </ul>

        <div className="cta-box">
          By enrolling, you agree to our refund and EMI policies. For support, contact us any time.
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
};

export default RefundPolicy;
