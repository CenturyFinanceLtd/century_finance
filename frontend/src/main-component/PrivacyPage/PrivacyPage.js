import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import "./PrivacyPage.css"

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Century Finance Limited</title>
        <meta name="description" content="Read the privacy policy of Century Finance Limited to understand how your data is used, stored, and protected." />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Privacy Policy" pagesub="Privacy Policy" />

      <div className="privacy-policy-section section-padding privacy-policy" style={{ padding: "40px" }}>
        <div className="container">
          <h2>Privacy Policy</h2>
          <p><strong>Century Finance Limited</strong><br />
            <strong>Effective Date:</strong> May 24, 2025</p>

          <p>At Century Finance Limited ("we", "our", or "us"), your privacy is our priority. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information (PI) when you interact with our services, whether online or offline, including through our website https://centuryfinancelimited.com, online classes, financial products, or customer support.</p>

          <p>By accessing or using our services, you consent to the practices described in this Privacy Policy.</p>

          <h3>1. Personal Information We Collect</h3>
          <p>We may collect and process the following types of Personal Information:</p>
          <ul>
            <li><strong>A. Identification Data:</strong> Full name, gender, date of birth, nationality, PAN card, Aadhaar number, and other KYC documentation</li>
            <li><strong>B. Contact Data:</strong> Residential address, phone number, email address</li>
            <li><strong>C. Financial Data:</strong> Bank account details, investment details and transaction history, credit or debit card information for payment purposes</li>
            <li><strong>D. Transactional Data:</strong> Payment records, enrollment history in courses and advisory services, subscription information</li>
            <li><strong>E. Technical and Usage Data:</strong> IP address, browser type, device identifiers, website interaction behavior, course engagement analytics</li>
            <li><strong>F. Communication Data:</strong> Support tickets, emails, call logs, chatbot interactions</li>
          </ul>

          <h3>2. Purpose and Legal Basis for Processing Your Personal Information</h3>
          <ul>
            <li>To provide access to courses, advisory, and financial services – <strong>Performance of a contract</strong></li>
            <li>To conduct identity verification (KYC/AML) – <strong>Legal obligation</strong></li>
            <li>To process transactions and provide customer support – <strong>Legitimate interest</strong></li>
            <li>To notify users of changes, updates, or offers – <strong>Consent / Legitimate interest</strong></li>
            <li>For internal reporting, research, and service improvement – <strong>Legitimate interest</strong></li>
            <li>To comply with SEBI, RBI, or government regulations – <strong>Legal obligation</strong></li>
            <li>To manage risk, fraud prevention, and account security – <strong>Legitimate interest</strong></li>
          </ul>

          <h3>3. How We Share Your Personal Information</h3>
          <p>We do not sell or rent your personal information. However, we may share your data with:</p>
          <ul>
            <li>Regulatory bodies (SEBI, RBI, income tax departments) for compliance</li>
            <li>Technology providers (web hosting, CRM systems, email platforms)</li>
            <li>Payment gateways and financial institutions for transaction processing</li>
            <li>Legal and professional advisors to manage risk and ensure compliance</li>
            <li>Third-party analytics providers under secure agreements for service enhancement</li>
          </ul>
          <p>All partners and vendors are contractually obligated to protect your data and use it only for agreed-upon purposes.</p>

          <h3>4. International Transfers</h3>
          <p>Some of our data processing services and storage solutions may be located outside India. When transferring personal data internationally:</p>
          <ul>
            <li>We use standard contractual clauses approved under applicable data protection laws.</li>
            <li>We ensure equal or higher levels of data protection through binding agreements.</li>
          </ul>

          <h3>5. Personal Information Security</h3>
          <ul>
            <li>SSL encryption for data transmission</li>
            <li>Firewalls and intrusion detection systems</li>
            <li>Role-based access restrictions</li>
            <li>Regular data backups and vulnerability assessments</li>
            <li>Staff training in data privacy and cyber hygiene</li>
          </ul>
          <p>No system is 100% secure. We urge you to maintain strong passwords and avoid sharing sensitive details over public networks.</p>

          <h3>6. Your Rights</h3>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Request access to your data</li>
            <li>Ask for correction of inaccurate data</li>
            <li>Request deletion of your information (subject to legal retention requirements)</li>
            <li>Withdraw consent at any time (where processing is based on consent)</li>
            <li>Request data portability (where technically feasible)</li>
            <li>Object to or request restrictions on processing</li>
          </ul>
          <p>To exercise your rights, please email: <strong>[Insert Contact Email]</strong>. We aim to respond within 7–14 business days.</p>

          <h3>7. Complaints and Dispute Resolution</h3>
          <p>If you have concerns about your personal information:</p>
          <ul>
            <li>Contact us first via <strong>[Insert Contact Email]</strong> or through our website</li>
            <li>If unresolved, you may escalate the issue to a relevant Data Protection Authority</li>
          </ul>

          <h3>8. Data Retention Policy</h3>
          <p>We retain your information as long as necessary for:</p>
          <ul>
            <li>Completing the purposes for which it was collected</li>
            <li>Complying with legal or regulatory requirements</li>
            <li>Resolving disputes and enforcing our agreements</li>
          </ul>
          <p>When data is no longer needed, we securely delete or anonymize it.</p>

          <h3>9. Cookies and Website Tracking</h3>
          <p>Our website uses cookies and similar technologies to:</p>
          <ul>
            <li>Enhance your browsing experience</li>
            <li>Personalize content and offers</li>
            <li>Track site performance and traffic</li>
            <li>Understand user behavior for improvement</li>
          </ul>
          <p>You can manage your cookie preferences via your browser settings.</p>

          <h3>10. Refund & Course Access Policy</h3>
          <p>All course purchases, advisory subscriptions, and digital products are delivered instantly and involve access to proprietary information. Therefore, we do not offer refunds once access is granted.</p>
          <p>We encourage users to review course details and reach out with questions before enrolling.</p>

          <h3>11. Changes to This Policy</h3>
          <p>We may update this Privacy Policy to reflect legal or operational changes. The most current version will be posted on our website. We encourage users to review this page periodically.</p>
        </div>
      </div>

      <Footer />
      <Scrollbar />
    </>
  );
};

export default PrivacyPolicy;
