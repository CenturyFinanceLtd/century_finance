import React from 'react';
import PageTitle from '../components/pagetitle/PageTitle';
import Footer from '../components/footer';
import './legal.scss';

export default function RefundPolicy() {
  return (
    <div className="legal-page">
      <PageTitle title="Refund Policy" />
      <section className="legal-content tf-container">
        <div className="inner">
          <div className="refund-hero">
            <h1>Refund & EMI Policy</h1>
            <p>
              We prioritize transparency and trust in all our financial policies. Please review the
              refund structure and installment guidelines before enrollment.
            </p>
          </div>

          <h2>Refund Eligibility & Deduction</h2>
          <p>
            Refund requests must be made within <strong>14 calendar days</strong> from the course
            activation date or the first orientation session, whichever comes first.
          </p>
          <p>
            Approved refunds will include a mandatory deduction between <strong>10% to 30%</strong>
            of the total course fee, based on the following:
          </p>
          <ul>
            <li>Course type and duration</li>
            <li>Accessed course content</li>
            <li>Timing of the refund request</li>
          </ul>
          <div className="alert-box">
            No full refunds will be processed under any condition. All approved refunds are subject
            to a minimum 10% deduction.
          </div>

          <h3>Registration Fee</h3>
          <ul>
            <li>
              Once registration is complete, the fee is <strong>strictly non-refundable</strong>.
            </li>
            <li>This applies irrespective of course start, progress, or attendance.</li>
          </ul>

          <h2>Installment Payment (EMI) Options</h2>
          <p>
            Century Finance Limited offers internal EMI options (no third-party involvement)
            tailored to course duration:
          </p>
          <h4>EMI Breakdown:</h4>
          <ul>
            <li>
              <strong>Short-Term Courses (e.g., 2-week plans):</strong> 2-installment option
              available
            </li>
            <li>
              <strong>Standard/Long-Term Courses:</strong> 3-installment option available
            </li>
          </ul>
          <h4>EMI Guidelines:</h4>
          <ul>
            <li>
              All installments are <strong>compulsory</strong> and must be paid on time.
            </li>
            <li>
              Late or missed payments may result in suspension or permanent revocation of course
              access.
            </li>
            <li>
              Refunds (if applicable) will not be processed unless all prior installments are
              cleared.
            </li>
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
            <li>
              <strong>Email:</strong> <a href="mailto:support@centuryfinancelimited.com">support@centuryfinancelimited.com</a>
            </li>
            <li>
              Include: Full name, registered email, enrollment ID, payment reference, and reason for
              refund
            </li>
            <li>
              Refunds (if approved) are processed within <strong>7–10 business days</strong>
            </li>
          </ul>

          <h3>Grievance Redressal</h3>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:grievance@centuryfinancelimited.com">grievance@centuryfinancelimited.com</a>
            </li>
            <li>
              Our support team will respond within <strong>15 business days</strong>
            </li>
          </ul>

          <div className="cta-box">
            By enrolling, you agree to our refund and EMI policies. For support, contact us any
            time.
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
