import React, { useState } from "react";
 // Your original image

const LearningToEarningPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  // Define inline styles to mimic the edX page design, but with your content
  const styles = {
    section: {
      padding: '40px 0', // Overall section padding
      backgroundColor: '#f5f5f5', // Very light grey background for the overall page
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start', // Align content to the top
      minHeight: '100vh',
    },
    wrap: {
      backgroundColor: '#1a1a1a', // Dark background for the main content block
      color: '#ffffff', // Light text color for contrast
      padding: '0', // Inner padding will be handled by sub-sections
      borderRadius: '8px',
      width: '100%',
      maxWidth: '100%', // Adjusted max width to be slightly narrower like the edX content
      margin: '20px auto', // Margin top/bottom for wrap within section
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden', // Ensure border-radius clips children
    },
    // --- Image Section ---
    imageSection: {
        padding: '30px 40px 0 40px', // Padding top only, will separate from title
        textAlign: 'center',
    },
    mainImage: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px', // Slightly rounded corners for the image itself
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
    },
    // --- Header & Price Section (similar to edX top area) ---
    headerPriceSection: {
        padding: '40px 40px 30px 40px', // Generous padding
        borderBottom: '1px solid #333333', // Separator
    },
    smallTitle: {
      fontFamily: '"Montserrat", sans-serif',
      color: '#bbbbbb', // Lighter grey for smaller titles
      fontSize: '1em',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '10px',
      display: 'block',
      fontWeight: '600',
    },
    mainTitle: {
      fontFamily: '"Montserrat", sans-serif',
      color: '#ffffff',
      fontSize: '2.5em', // Prominent size
      fontWeight: '700',
      lineHeight: '1.2',
      marginBottom: '20px',
    },
    priceContainer: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: '25px',
    },
    priceTag: {
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '1.6em',
        fontWeight: '600',
        color: '#ffffff',
        marginRight: '20px',
    },
    bookNowBtn: {
        backgroundColor: '#e74c3c', // EdX-like orange-red button
        color: '#ffffff',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '5px',
        fontSize: '1.1em',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        minWidth: '200px', // Ensure button has a good minimum width
    },
    // --- Content Sections ---
    contentSection: {
        padding: '30px 40px',
        borderBottom: '1px solid #333333', // Separator between sections
    },
    lastContentSection: { // For the last section, no bottom border
        padding: '30px 40px',
    },
    sectionHeading: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: '2em',
      fontWeight: '700',
      color: '#ffffff',
      marginBottom: '25px',
    },
    paragraph: {
      fontFamily: '"Open Sans", sans-serif', // Readable sans-serif
      color: '#cccccc', // Lighter text color for body
      lineHeight: '1.7',
      marginBottom: '15px',
      fontSize: '1em',
    },
    listItem: {
      fontFamily: '"Open Sans", sans-serif',
      color: '#cccccc',
      lineHeight: '1.6',
      marginBottom: '8px',
      fontSize: '1em',
      display: 'flex',
      alignItems: 'flex-start',
    },
    checkIcon: {
      color: '#27ae60', // Green for checkmark
      marginRight: '10px',
      fontSize: '1.2em',
      marginTop: '2px', // Align with text
    },
    unorderedList: {
      listStyle: 'none', // Remove default bullets
      paddingLeft: '0',
      marginBottom: '20px',
    },
    alertCommon: {
      padding: '1.2rem',
      borderRadius: '.3rem',
      marginBottom: '1.5rem',
      border: '1px solid #444444', // Subtle border
      fontWeight: '500',
      backgroundColor: '#2a2a2a', // Slightly lighter dark background for alerts
      color: '#ffffff',
      fontFamily: '"Open Sans", sans-serif',
    },
    alertWarning: {
      backgroundColor: '#4a3a1f', // Darker warning tone
      color: '#f39c12',
    },
    alertInfo: {
      backgroundColor: '#1f3a4a', // Darker info tone
      color: '#3498db',
    },
    alertSuccess: {
      backgroundColor: '#2a4a2a', // Darker success tone
      color: '#2ecc71',
    },
    alertLight: {
      backgroundColor: '#2a2a2a',
      borderColor: '#444444',
      color: '#ffffff',
    },
    alertLink: {
      color: '#3498db', // Blue for links
      textDecoration: 'underline',
      fontWeight: '600',
    },
    // --- Badges (Program Highlights) ---
    badgesContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginBottom: '25px',
    },
    badgeCommon: {
      padding: "1em 1em",
      fontSize: "0.8em",
      fontWeight: "600",
      borderRadius: "4px",
      display: "inline-block",
      color: "#ffffff",
      textTransform: "",
      letterSpacing: "0.5px",
      backgroundColor: "#black", // General dark badge background
    },
    // Specific badge colors (can map existing ones to dark theme)
    badgePrimary: { backgroundColor: '#6a6a6a' },
    badgeSuccess: { backgroundColor: '#2ecc71' }, // Brighter green
    badgeInfo: { backgroundColor: '#3498db' }, // Brighter blue
    badgeWarning: { backgroundColor: '#f39c12' }, // Brighter orange
    badgeDark: { backgroundColor: '#333333' },
    badgeSecondary: { backgroundColor: '#8d8d8d' },

    // --- Show More/Less Button ---
    showMoreBtn: {
      backgroundColor: 'transparent',
      color: '#3498db',
      border: 'none',
      padding: '10px 0',
      fontSize: '1em',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'color 0.3s ease',
      display: 'block',
      marginTop: '10px',
      textAlign: 'left',
    },
    // --- Text Utility Styles ---
    strongText: {
        fontWeight: 'bold',
        color: '#ffffff', // Ensure bold text stands out
    },
    noteText: {
        fontSize: '0.95rem',
        color: '#f39c12', // Warning color for notes
        fontStyle: 'italic',
    },
  };

  return (
    <section style={styles.section} className="wpo-about-section-s2">
      <div className="container"> {/* Bootstrap container */}
        <div style={styles.wrap} className="wpo-about-wrap">

          {/* Image Section (placed at the top, like a hero image) */}
         

          {/* Header & Price Section */}
          <div style={styles.headerPriceSection}>
            <small style={styles.smallTitle}>LEARNING TO EARNING</small>
            <h1 style={styles.mainTitle}>Advanced 2-Day Certified Training in Financial Markets</h1>

            <div style={styles.priceContainer}>
                <span style={styles.priceTag}>1,40,000 + GST</span>
                <button onClick={onBookNow} style={styles.bookNowBtn}>
                    Book Now
                </button>
            </div>
            {/* Original content's first alert placed here for prominence */}
            <div style={{ ...styles.alertCommon, ...styles.alertInfo, marginBottom: '0' }} className="alert alert-info">
                <strong style={styles.strongText}>Join with Century Finance Limited</strong>
                <br />
                <br />
               <div style={styles.badgesContainer}>
                 <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                     2 Day training Session + Placement OpportunityLive + Trading Session 
                  </span>
                   <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                      Learn about Equity,Commodity & Foreign Exchange 
 

                  </span>
                    <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                       SEBI-Certified Certification
                  </span>
                </div>
            </div>
          </div>

          {/* Objective Section */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Objective</h2>
            <p style={styles.paragraph}>
             It is designed to focus final year students and to transform them into industry professionals through a structured path that include certified training, internship opportunities and real job placements. It aims to provide both technical competence and workplace readiness. 


            </p>
          </div>

          {/* Program Details Section */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Program Details</h2>
            <div style={{ ...styles.alertCommon, ...styles.alertSuccess }} className="">
              <ul style={styles.unorderedList} className="mb-0">
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Designed for Final Year Students, only for Colleges and Universities
</strong> 
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>BBA,B.Com, BA-Economics, MBA or Finance related streams are eligible 
</strong> 
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Program fees:- Rs 1,40,000 per batch + GST
</strong> 
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Digital Certificate awarded on completion of Training.
</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Program Overview (with Read More/Show Less) */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>About Learning to Earning Model</h2>
            <p style={styles.paragraph}>
                The <strong style={styles.strongText}> Learning to Earning model</strong> is a comprehensive career launchpad, not just a training program. It combines comprehensive financial education with practical internship experience and actual placement opportunity. By integrating market knowledge with soft skills, mentorship and hiring routes, it empowers students to step into the finance industry.  </p>

            {!isExpanded && (
                <button
                    onClick={toggleContent}
                    style={styles.showMoreBtn}
                >
                    Read More
                </button>
            )}

            {isExpanded && (
              <>
                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Day 1: Core Financial Market Training</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Equity:</strong> Understand how stock exchanges function, types of orders, trading platforms, and basic investment strategies.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Commodity:</strong> Learn about trading in agricultural, metal, and energy commodities, plus pricing factors and market behavior.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Foreign Exchange:</strong> Explore currency pair trading, INR exchange rates, and the global factors influencing foreign markets.
                  </li>
                </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Day 2: Advance Training and Placement Drive
                   <h3 style={styles.sectionHeading}>PHASE:01</h3>
</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Wealth-Building Instruments & Strategies</strong> Explore mutual funds, SIPs, and government-backed schemes like SGP and Banex to understand NAVs, return calculations, and long-term investment options for building sustainable wealth.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}> Advanced Trading & Portfolio Management
</strong> Gain insights into margin trading (MTF), risk management techniques, and practical portfolio planning including diversification, asset allocation, and investment goal setting.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Financial Tools:</strong> Gain hands-on experience with trading & advanced charting tools, real-time data and institutional platforms for research and trading analysis.

                  </li>
                  
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Investment Tools:</strong>Master asset allocation, risk profiling and portfolio rebalancing using professional tools to evaluate bonds, MTF and sovereign gold schemes.

                  </li>
                   <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Live Trading Session:</strong> Get a live session on the share market and learn how markets move and how people invest in the market.

                  </li>
                </ul>
                 <h3 style={styles.sectionHeading}>PHASE:02</h3>

                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Internship (2 Months)</strong> Eligible students scoring 60%+ in the assessment gain hands-on experience in live trading, market research and client interaction, with weekly mentor reviews.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}> Placement Opportunities

</strong> Top performers will get job offers from Century Finance.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}> Placement Process

</strong>
  <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Workshop:</strong> Interview training & career readiness


                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Assessment Test:</strong> 100 marks test 


                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Interview:</strong> Shortlisted candidates to deliver interview

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Final Selection:</strong> Based on internship performance + interview

                  </li>
                </ul>
                  </li>
                  </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Program Highlights</h3>
                <div style={styles.badgesContainer}>
                  <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>Interview Training</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeSuccess }}>Live Market Simulation</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeInfo }}>Certified Internship</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeWarning }}>Advanced Post-Placement Classes</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeDark }}>1:1 Mentorship</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeSecondary }}>Direct Job Offer for Top Performers</span>
                </div>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Why Should Students Enroll?</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Learn everything about the currencies, commodities and foreign market     .</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Engage in a certified internship with real-time trading and research.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Get one-on-one guidance from the professionals. </li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Create a compelling CV with practical exposure and knowledge.</li>
                 </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Benefits For Educational Institutes:</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Provides comprehensive training that is connected to careers.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Improves placement results and student employability.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Strengthen your institute’s profile as a career-focused campus.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Builds a long term relationship for future batches. </li>
                </ul>

                <div style={{ ...styles.alertCommon, ...styles.alertLight }} className="alert alert-light border mt-4">
                  <h4 style={{ ...styles.sectionHeading, fontSize: '1.2em', marginBottom: '10px' }}>Partner With Us</h4>
                  <p style={styles.paragraph}>
                    Give your students the <strong style={styles.strongText}>competitive edge</strong> they need in today's finance industry.
                  </p>
                  <p style={{ ...styles.paragraph, marginBottom: "5px" }}>
                    📧 <strong style={styles.strongText}>Email:</strong>{" "}
                    <a href="mailto:customerservice@centuryfinancelimited.com" style={styles.alertLink}>
                      customerservice@centuryfinancelimited.com
                    </a>
                  </p>
                  <p style={styles.paragraph}>
                    🌐 <strong style={styles.strongText}>Website:</strong>{" "}
                    <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={styles.alertLink}>
                      https://www.centuryfinancelimited.com/
                    </a>
                  </p>
                  <p style={{ ...styles.noteText, marginTop: '1rem' }}>
                    *Note: Limited slots are available — advance booking is highly recommended.*
                  </p>
                </div>

                <button
                  onClick={toggleContent}
                  style={styles.showMoreBtn}
                >
                  Show Less
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningToEarningPlan;