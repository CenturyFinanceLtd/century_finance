import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Helmet } from "react-helmet";
import './terms.css';

const TermsPage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Terms & Conditions - Century Finance Limited</title>
        <meta
          name="description"
          content="Read the Terms and Conditions for Century Finance Limited including eligibility, services, liabilities, user responsibilities, and more."
        />
        <meta
          name="keywords"
          content="Terms and Conditions, Century Finance, Financial Services, Legal Terms"
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Navbar />
      <PageTitle pageTitle="Terms & Conditions" pagesub="Terms & Conditions" />

      <section className="wpo-terms-section section-padding ">
        <div className="container">

          <div className="wpo-terms-wrap terms-c">
            <div className="wpo-terms-text">
              <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Terms and Conditions of Use for Century Finance Limited</h2>
              <p><strong>Effective Date:</strong> May 23, 2025</p>

              <p style={{ fontSize: "15px" }}>Welcome to Century Finance Limited. These Terms and Conditions ("Terms") govern your use of the Website and services provided by Century Finance Limited ("Company," "we," "our," or "us"). By accessing or using the Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree with these Terms, you must not use this Website or our services.
                READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY BEFORE USING THE SERVICES </p>

              <div className="terms">
                <h3>1. Eligibility and General Use</h3>
                <p>1.1 You affirm that you are at least 18 years of age and legally capable of entering into binding contracts under applicable laws. The services provided on this Website are not intended for minors or individuals legally prohibited from engaging in financial contracts.</p>
                <p>1.2 You agree to use the Website only for lawful purposes and in accordance with all applicable local, national, and international laws and regulations.</p>
                <p>1.3 We reserve the right to deny access to the Website or its services to any user without notice if we believe you are violating these Terms or any applicable law.</p>

                <h3>2. Account Registration</h3>
                <p>2.1 To access certain features of the Website, including financial tools, portfolio dashboards, advisory sessions, and educational resources, you may be required to register and create an account.</p>
                <p>2.2 You agree to provide true, accurate, current, and complete information during the registration process and to update such information to maintain its accuracy.</p>
                <p>2.3 You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.</p>
                <p>2.4 The Company reserves the right to suspend or terminate your account if it finds any discrepancy or misuse related to your registration information.</p>

                <h3>3. Description of Services</h3>
                <p>3.1 Century Finance Limited provides financial education, investment insights, digital tools, portfolio management simulators, and advisory materials intended to enhance financial literacy and planning.</p>
                <p>3.2 The services are designed for informational and educational purposes only and do not constitute professional investment, legal, tax, or accounting advice.</p>
                <p>3.3 While we strive to provide accurate and up-to-date information, the dynamic nature of financial markets means that some content may become outdated or superseded.</p>

                <h3>4. Financial Services and Investment Content</h3>
                <p>4.1 Any investment-related tools, articles, data, calculators, or graphical illustrations are purely illustrative. Decisions made based on these are at the user’s sole discretion and risk.</p>
                <p>4.2 We do not offer or endorse specific investments, securities, mutual funds, or strategies. All investment activities involve risk and may result in loss.</p>
                <p>4.3 Users are encouraged to consult licensed financial professionals before acting on any content or tools provided by the Website.</p>
                <p>4.4 Users acknowledge that investment returns are inherently subject to market fluctuations, volatility, and external economic factors. The Company does not guarantee any profit or return on investment, and past performance is not indicative of future results.</p>

                <h3>5. Payment and Fees</h3>
                <p>5.1 Access to certain services, including premium content, advisory modules, or specialized courses, may require payment of a fee.</p>
                <p>5.2 Fees are displayed at the time of transaction and must be paid in full using the accepted payment methods.</p>
                <p>5.3 Late payment or failure to settle dues may result in suspension of access, late fees, or additional administrative charges as determined by the Company’s internal policy.</p>
                <p>5.4 The Company may utilize third-party payment gateways to facilitate transactions. Users agree to abide by the terms and conditions of these payment providers.</p>
                <p>5.5 All charges are final, and unless otherwise specified in writing, no refunds will be issued once services are accessed or unlocked.</p>

                <h3>6. Non-Refundable Fees</h3>
                <p>6.1 Fees paid for online classes, webinars, investment simulators, portfolio reviews, or downloadable content are non-refundable under normal circumstances.</p>
                <p>6.2 Refunds may only be issued in cases of technical error, duplicate transaction, or failure to deliver access within 7 working days of confirmed payment, subject to case review.</p>
                <p>6.3 Users waive the right to demand refunds based on subjective dissatisfaction, perceived ineffectiveness, or misinterpretation of service scope.</p>

                <h3>7. Online Courses and Educational Access</h3>
                <p>7.1 The Company offers digital learning programs related to personal finance, market analysis, investment strategy, and wealth management.</p>
                <p>7.2 Users are granted a limited, non-transferable license to access course materials strictly for personal educational use.</p>
                <p>7.3 Course access is restricted to the registered user only. Sharing login credentials or materials may result in access revocation.</p>
                <p>7.4 Completion of a course does not constitute qualification as a certified financial advisor or planner.</p>

                <h3>8. Portfolio Tools and User-Generated Data</h3>
                <p>8.1 Our platform includes dashboards and utilities for simulating and managing hypothetical portfolios.</p>
                <p>8.2 These tools are intended to assist users in understanding financial planning, asset allocation, and risk evaluation.</p>
                <p>8.3 The Company does not guarantee the accuracy or predictive capability of any simulation, projection, or analysis tool provided.</p>
                <p>8.4 All data input into portfolio tools is considered user-generated. The Company is not responsible for results derived from erroneous or incomplete input.</p>

                <h3>9. Regulatory and Legal Compliance</h3>
                <p>9.1 Century Finance Limited operates in alignment with regulatory frameworks established by the Securities and Exchange Board of India (SEBI), Reserve Bank of India (RBI), and other governing bodies.</p>
                <p>9.2 The Company reserves the right to share user information with regulatory authorities when required by law or in the event of investigative directives.</p>
                <p>9.3 Users are advised that regulatory frameworks may evolve, and compliance requirements may affect the availability or scope of services.</p>

                <h3>10. Intellectual Property Rights</h3>
                <p>10.1 All Website content, including text, audio, video, tools, software code, logos, and brand elements, is protected by applicable copyright, trademark, and other intellectual property laws.</p>
                <p>10.2 Users may not copy, redistribute, modify, or reproduce any part of the Website or its materials without express written permission from Century Finance Limited.</p>

                <h3>11. Termination and Suspension of Services</h3>
                <p>11.1 The Company reserves the right to suspend or terminate your access to the Website and services at its sole discretion, without notice, for violations of these Terms or applicable laws.</p>
                <p>11.2 Termination will not affect obligations accrued prior to termination, including payment obligations.</p>
                <p>11.3 Users may voluntarily close their account by contacting support in writing, subject to settlement of all pending dues.</p>

                <h3>12. Limitation of Liability</h3>
                <p>12.1 The Company is not liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from or related to:</p>
                <ul>
                  <li>(a) The use or inability to use the Website;</li>
                  <li>(b) Errors, mistakes, or inaccuracies of content;</li>
                  <li>(c) Unauthorized access to or use of our servers;</li>
                  <li>(d) Any bugs, viruses, or the like transmitted through our Website;</li>
                  <li>(e) Financial or investment losses incurred based on use of the Website.</li>
                </ul>

                <h3>13. Disclaimer of Warranties</h3>
                <p>13.1 The Website and services are provided "as is" and "as available." We make no warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</p>
                <p>13.2 We do not guarantee that the Website will be uninterrupted, secure, or error-free.</p>

                <h3>14. Governing Law and Jurisdiction</h3>
                <p>14.1 These Terms shall be governed by and construed in accordance with the laws of India.</p>
                <p>14.2 Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in [Insert City], India.</p>

                <h3>15. Amendments and Updates</h3>
                <p>15.1 We may modify these Terms at any time. Changes will be posted on this page with an updated Effective Date.</p>
                <p>15.2 Your continued use of the Website after such changes constitutes your agreement to the revised Terms.</p>

                <h3>16. Compliance with Tax Laws</h3>
                <p>16.1 Users are solely responsible for reporting and fulfilling any tax obligations applicable to their use of the Website, including income from investments, services purchased, or benefits received.</p>
                <p>16.2 Century Finance Limited is not liable for your compliance with individual or business tax laws and shall not be held responsible for any penalties incurred due to non-compliance.</p>

                <h3>17. User Conduct and Responsibilities</h3>
                <p>17.1 Users agree not to misuse the Website or any service offered, including but not limited to:</p>
                <ul>
                  <li>Attempting unauthorized access to systems or networks,</li>
                  <li>Uploading viruses or malicious code,</li>
                  <li>Harassing, abusing, or harming other users,</li>
                  <li>Using automated means to access the platform without express permission.</li>
                </ul>
                <p>17.2 Any such conduct may result in immediate termination of services and potential legal action.</p>

                <h3>18. Communication and Notifications</h3>
                <p>18.1 By creating an account, you consent to receive communications via email, SMS, or other channels related to service updates, transactions, promotional offers, and regulatory notices.</p>
                <p>18.2 You may opt-out of non-essential marketing communications, but transactional and legal communications are mandatory.</p>

                <h3>19. Data Privacy</h3>
                <p>19.1 Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data.</p>
                <p>19.2 By using our services, you consent to the practices described in the Privacy Policy, including the transfer and storage of data as necessary to provide services.</p>

                <h3>20. Third-Party Links and Integrations</h3>
                <p>20.1 The Website may contain links to third-party websites, platforms, or services. These are provided for convenience only and do not imply endorsement.</p>
                <p>20.2 We are not responsible for the content, practices, or terms of any third-party services accessed through our Website.</p>

                <h3>21. Force Majeure</h3>
                <p>21.1 Century Finance Limited shall not be held liable for any delay or failure in performance resulting from causes beyond our reasonable control, including natural disasters, government orders, strikes, or internet outages.</p>

                <h3>22. Severability</h3>
                <p>22.1 If any provision of these Terms is found to be unenforceable or invalid under applicable law, that provision shall be modified to the minimum extent necessary or deemed severed, without affecting the validity of the remaining Terms.</p>

                <h3>23. Indemnification</h3>
                <p>23.1 You agree to indemnify, defend, and hold harmless Century Finance Limited and its affiliates, officers, directors, employees, agents, licensors, and partners from and against any and all claims, liabilities, damages, losses, expenses, or fees (including reasonable attorneys' fees) that arise from your violation of these Terms or your use of the Website.</p>

                <h3>24. Assignment</h3>
                <p>24.1 You may not assign or transfer your rights or obligations under these Terms without prior written consent from the Company. Any unauthorized assignment shall be null and void.</p>
                <p>24.2 We may assign or delegate any rights or obligations under these Terms without restriction.</p>

                <h3>25. Waiver</h3>
                <p>25.1 No waiver by the Company of any term or condition set forth in these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition.</p>
                <p>25.2 Any failure by the Company to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.</p>

                <h3>26. Entire Agreement</h3>
                <p>26.1 These Terms, along with our Privacy Policy and any other legal notices published by the Company, constitute the entire agreement between you and Century Finance Limited with respect to the Website.</p>
                <p>26.2 They supersede any prior agreements, communications, or understandings between you and the Company concerning the subject matter herein.</p>

                <h3>27. Feedback and Suggestions</h3>
                <p>27.1 Any feedback, comments, or suggestions you may provide regarding the Website or our services shall be deemed non-confidential and may be used by us at our discretion without any obligation to compensate you.</p>
                <p>27.2 We reserve the right to incorporate such feedback into future updates, services, or products.</p>

                <h3>28. Language and Interpretation</h3>
                <p>28.1 These Terms are drafted in English. Any translated version is provided solely for convenience, and the English version shall prevail in case of any discrepancy.</p>
                <p>28.2 Headings used in these Terms are for convenience only and do not affect the interpretation of any provision.</p>

                <h3>29. No Agency Relationship</h3>
                <p>29.1 Nothing in these Terms shall be construed as creating any partnership, joint venture, agency, or employment relationship between you and the Company.</p>
                <p>29.2 You agree that you have no authority to bind the Company in any respect.</p>

                <h3>30. Contact and Customer Support</h3>
                <p>30.1 If you have any queries, technical issues, complaints, or concerns, please contact us using the contact information provided in Section 16.</p>
                <p>30.2 We aim to respond to all inquiries within a reasonable timeframe and are committed to customer service excellence.</p>

                <h3>31. Advertising and Promotions</h3>
                <p>31.1 The Website may display advertisements and promotions from third parties. Your interactions with advertisers or promotional partners are solely between you and such third parties.</p>
                <p>31.2 The Company is not responsible or liable for any loss or damage incurred as a result of dealings with advertisers on our Website.</p>

                <h3>32. Technical Support and Maintenance</h3>
                <p>32.1 While we aim to ensure continuous availability of the Website, we may from time to time perform updates, upgrades, or maintenance that may result in service interruptions.</p>
                <p>32.2 We are not liable for any temporary unavailability or service interruptions arising from maintenance activities or unforeseen technical issues.</p>

                <h3>33. Security Responsibilities</h3>
                <p>33.1 Users are responsible for safeguarding their login credentials and for all activities carried out through their accounts.</p>
                <p>33.2 The Company employs standard security measures but does not guarantee immunity from unauthorized access, cyberattacks, or data breaches. Users agree to notify the Company immediately upon suspicion of unauthorized account activity.</p>

                <h3>34. Electronic Records and Signatures</h3>
                <p>34.1 You agree that any agreements made through the Website using electronic methods, such as checkboxes or digital signatures, are legally binding and satisfy all legal requirements for written contracts.</p>
                <p>34.2 These electronic records may be retained by the Company for audit and compliance purposes.</p>
                <h3>35. Geographic Restrictions</h3>
                <p>35.1 Century Finance Limited makes no representation that services or materials provided on the Website are appropriate or available for use in all locations.</p>
                <p>35.2 Accessing the Website from territories where its content is illegal or restricted is prohibited. Users who access the Website from such locations do so at their own risk and are responsible for compliance with local laws.</p>

                <h3>36. Monitoring and Enforcement</h3>
                <p>36.1 We reserve the right to monitor use of the Website to determine compliance with these Terms.</p>
                <p>36.2 The Company may investigate any complaints or reported violations and take any action deemed appropriate, including issuing warnings, suspending or terminating access, or reporting to law enforcement authorities.</p>

                <h3>37. Notice to California Residents (If Applicable)</h3>
                <p>37.1 Under California Civil Code Section 1789.3, California users of the Website are entitled to the following consumer rights notice: You may contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs.</p>
                <p>37.2 The Company's contact information is provided in Section 16.</p>

                <h3>38. Interpretation and Priority</h3>
                <p>38.1 In the event of any conflict between these Terms and any service-specific agreement, the latter shall take precedence to the extent of the conflict.</p>
                <p>38.2 These Terms are to be interpreted in accordance with fair business practices, and headings are provided for convenience only.</p>

                <h3>39. Reservation of Rights</h3>
                <p>39.1 All rights not expressly granted to you under these Terms are reserved by Century Finance Limited.</p>
                <p>39.2 The failure to enforce any provision of these Terms shall not be construed as a waiver of such provision or any other rights of the Company.</p>

                <h3>40. Remedies and Injunctive Relief</h3>
                <p>40.1 In addition to any other remedies available under law or equity, the Company shall be entitled to seek injunctive or equitable relief for any violation of these Terms.</p>
                <p>40.2 This includes preventing unauthorized use of proprietary materials or breaches of confidentiality obligations.</p>

                <h3>41. Feedback and User Submissions</h3>
                <p>41.1 You may voluntarily submit suggestions, feedback, or ideas to enhance our services. By doing so, you agree that such submissions are non-confidential and grant the Company an unrestricted license to use, reproduce, modify, or distribute them.</p>
                <p>41.2 The Company is not obligated to implement or compensate for any submitted feedback.</p>

                <h3>42. Service-Specific Terms</h3>
                <p>42.1 Certain services offered through the Website may be subject to additional terms and conditions. Where applicable, such terms will be presented prior to access or use of those services.</p>
                <p>42.2 In case of conflict, the service-specific terms shall prevail over these general Terms.</p>

                <h3>43. No Financial Supervision or Fiduciary Duty</h3>
                <p>43.1 Users acknowledge that Century Finance Limited is not a registered investment adviser or fiduciary under applicable financial law.</p>
                <p>43.2 Users are responsible for their own investment decisions, and the Company disclaims any duty of care or trust associated with fiduciary relationships.</p>

                <h3>44. Data Storage and Retention</h3>
                <p>44.1 All data collected through your use of the Website will be stored and retained in accordance with our Privacy Policy and applicable data protection regulations.</p>
                <p>44.2 Retention periods may vary based on regulatory or business needs and will be enforced using appropriate technological safeguards.</p>

                <h3>45. Legal Requests and Investigations</h3>
                <p>45.1 The Company reserves the right to cooperate with law enforcement and regulatory bodies in response to legal requests, subpoenas, investigations, or proceedings.</p>
                <p>45.2 Users waive any claims against the Company resulting from disclosures made in compliance with legal obligations. Responsibility for decisions made based on such content.</p>

                <h3>46. Technical Limitations and Disclaimers</h3>
                <p>46.1 While we endeavor to maintain the accuracy and reliability of Website content, technical limitations may lead to outdated, incomplete, or inaccurate information.</p>
                <p>46.2 The Company disclaims all responsibility for such inaccuracies and any resulting consequences.</p>

                <h3>47. Suspension for Policy Violations</h3>
                <p>47.1 We reserve the right to immediately suspend or permanently ban accounts for conduct deemed abusive, fraudulent, misleading, or in breach of legal obligations.</p>
                <p>47.2 Suspended users will be notified of the reason and duration of the suspension where applicable.</p>

                <h3>48. Business Transfers</h3>
                <p>48.1 In the event of a merger, acquisition, reorganization, or sale of assets, your information and contractual relationships may be transferred to a successor entity.</p>
                <p>48.2 The Terms will continue to apply to the transferred relationship unless otherwise notified.</p>

                <h3>49. Representations by Users</h3>
                <p>49.1 By using the Website, you represent and warrant that all information you provide is truthful, that you are authorized to enter into these Terms, and that your use complies with all laws and regulations.</p>
                <p>49.2 You further represent that you are not located in a country subject to export restrictions or listed on any government prohibited party list.</p>

                <h3>50. Support Availability</h3>
                <p>50.1 Support is available during business hours as specified on our Website. Response times may vary depending on the complexity of the issue.</p>
                <p>50.2 For urgent issues, users are encouraged to consult the help center or FAQ section prior to contacting support directly.</p>

                <h3>51. Age-Restricted Services</h3>
                <p>51.1 Some services or content on the Website may be restricted to users of a certain minimum age due to legal or content-related reasons.</p>
                <p>51.2 By accessing such services, you confirm that you meet the minimum age requirement applicable in your jurisdiction.</p>

                <h3>52. Copyright Infringement Claims</h3>
                <p>52.1 If you believe that any content on the Website infringes your copyright, please notify us in writing with sufficient details, including your contact information, the material in question, and a signed statement confirming your ownership.</p>
                <p>52.2 We will respond promptly to valid copyright claims and take appropriate remedial action, including content removal where necessary.</p>

                <h3>53. Voluntary Account Termination</h3>
                <p>53.1 Users may request account deletion at any time by contacting our support team. Upon verification, the Company will proceed to delete or anonymize the account data in accordance with our retention policy.</p>
                <p>53.2 Some transactional data may be retained to fulfill legal and regulatory obligations.</p>

                <h3>54. Subscription Renewals</h3>
                <p>54.1 Certain services on the Website may be provided through recurring subscriptions.</p>
                <p>54.2 By enrolling in such services, you authorize the Company to automatically renew the subscription at the end of each term unless canceled prior to renewal.</p>
                <p>54.3 Renewal fees and terms will be communicated in advance. Users may cancel auto-renewal through their account settings.</p>

                <h3>55. Beta Services</h3>
                <p>55.1 From time to time, the Company may offer beta or trial features for testing purposes.</p>
                <p>55.2 Such services are provided "as is" without warranty, and the Company may discontinue or alter them at any time without notice.</p>

                <h3>56. Service Downgrades and Feature Modifications</h3>
                <p>56.1 The Company reserves the right to modify or remove features of any service offering.</p>
                <p>56.2 Users will be notified of material changes, and may choose to continue, discontinue, or transition to alternative offerings.</p>

                <h3>57. Conflict Resolution Policy</h3>
                <p>57.1 In the event of a dispute or conflict, users agree to first attempt resolution through good faith negotiation with the Company.</p>
                <p>57.2 If the dispute remains unresolved, it may be submitted to mediation or arbitration before seeking court intervention, as specified in these Terms.</p>

                <h3>58. Mobile and App Use</h3>
                <p>58.1 If you access the Website through a mobile application, additional terms of the app store provider may apply.</p>
                <p>58.2 The Company is not responsible for any issues arising from third-party platforms or devices used to access our services.</p>

                <h3>59. Third-Party Terms and Licenses</h3>
                <p>59.1 Some components of the Website may use or reference third-party software, APIs, or services.</p>
                <p>59.2 Your use of these components is subject to the respective third-party terms and licenses, which you agree to by using the services.</p>

                <h3>60. Disclaimer of Investment Guarantees</h3>
                <p>60.1 All financial projections, simulations, or recommendations made through the Website are inherently speculative and depend on market conditions, economic trends, and personal factors.</p>
                <p>60.2 The Company expressly disclaims any guarantee of investment returns, income generation, or financial outcomes.</p>

                <h3>61. Accessibility Commitment</h3>
                <p>61.1 We strive to ensure that our Website and services are accessible to all users, including those with disabilities, and aim to conform to widely recognized accessibility standards.</p>
                <p>61.2 If you encounter accessibility issues, please contact us so that we can work to resolve them.</p>

                <h3>62. Consent to Monitoring</h3>
                <p>62.1 You acknowledge and agree that the Company may monitor and record your activities on the Website for the purposes of security, compliance, performance, and user experience improvement.</p>
                <p>62.2 Any recorded data will be handled in accordance with our Privacy Policy and applicable laws.</p>

                <h3>63. Termination of Inactive Accounts</h3>
                <p>63.1 The Company reserves the right to terminate accounts that have been inactive for a prolonged period, typically twelve (12) months or more.</p>
                <p>63.2 A notification will be sent before such termination. Data associated with terminated accounts may be deleted or archived.</p>

                <h3>64. Feedback Surveys and Reviews</h3>
                <p>64.1 Users may be invited to participate in surveys, reviews, or research projects. Participation is voluntary, and responses may be used for service improvement.</p>
                <p>64.2 Survey results may be aggregated and published without revealing personal identities.</p>

                <h3>65. Environmental Responsibility</h3>
                <p>65.1 The Company promotes paperless communication and encourages users to support sustainable practices in digital financial management.</p>
                <p>65.2 Where possible, users may opt into digital statements and notifications to reduce environmental impact.</p>

                <h3>66. Service Capacity Limitations</h3>
                <p>66.1 The Company may impose limits on service usage to maintain system integrity, including bandwidth caps, storage quotas, and usage rate limits.</p>
                <p>66.2 Users will be notified in advance if limits are being approached or exceeded, with recommendations for resolution.</p>

                <h3>67. Disclaimers Regarding External Content</h3>
                <p>67.1 The Website may link to or embed third-party content. The Company does not endorse or guarantee the accuracy of any third-party content.</p>
                <p>67.2 Users interact with third-party content at their own risk and are responsible for reading applicable terms and policies.</p>

                <h3>68. Educational Certification and Badging</h3>
                <p>68.1 Completion of courses may result in issuance of digital certificates or badges. These are for recognition of learning only and do not constitute formal accreditation.</p>
                <p>68.2 The Company does not guarantee acceptance or recognition of such certificates by third parties.</p>

                <h3>69. Multi-Device Access Policy</h3>
                <p>69.1 Your account may be accessed from multiple devices, but excessive concurrent sessions or suspicious activity may trigger a security review or temporary suspension.</p>
                <p>69.2 You are responsible for all actions taken under your account, regardless of device.</p>

                <h3>70. Contact Information</h3>
                <p>For any questions or grievances, please contact:</p>
                <p><strong>Century Finance Limited</strong></p>
                <p>Email:</p>
                <ul>
                  <li>General enquiry - <a href="mailto:general-inquiry@centuryfinancelimited.com">general-inquiry@centuryfinancelimited.com</a></li>
                  <li>Customer Service - <a href="mailto:customerservice@centuryfinancelimited.com">customerservice@centuryfinancelimited.com</a></li>
                </ul>

                <p>🌐 Website: <a href="https://centuryfinancelimited.com" target="_blank" rel="noopener noreferrer">https://centuryfinancelimited.com</a></p>
                <p>📬 Address: The Iconic Corenthum, 5th Floor, Tower C, Block A, Industrial Area, Sector 62, Noida, UTTAR PRADESH - 201301</p>
              </div>

            </div>
          </div>


        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default TermsPage;
