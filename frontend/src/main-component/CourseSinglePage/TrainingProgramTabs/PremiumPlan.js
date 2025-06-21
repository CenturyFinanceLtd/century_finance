import React, { useState } from "react";
 // Your original image

const PremiumPlan = ({ onBookNow }) => {
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
      backgroundColor:'rgb(42, 74, 42)', // Slightly lighter dark background for alerts
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
      backgroundColor: '#', // Darker success tone
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
            <small style={styles.smallTitle}>PR EMIUM PLAN</small>
            <h1 style={styles.mainTitle}>2 Days Certified Training in Financial Markets</h1>

            <div style={styles.priceContainer}>
                <span style={styles.priceTag}>₹85,000 + GST</span>
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
                     2 Day training Session+Live Trading Session 
                  </span>
                   <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                      Learn about Core & Advanced Market  

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
              This value-driven training is meticulously designed to bridge the gap between academic knowledge and real-world financial acumen. It focuses on equipping final-year students with in-depth market insights, effective trading strategies, and career-focused live training sessions - empowering them to excel in financial placements and confidently step into the job market.
            </p>
          </div>

          {/* Program Details Section */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Program Details</h2>
            <div style={{ ...styles.alertCommon, ...styles.alertSuccess }} className="alert alert-success">
              <ul style={styles.unorderedList} className="mb-0">
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Target Audience:</strong> Exclusively for Final Year Students of Colleges and Universities.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Eligibility:</strong> Students from BBA, B.Com, BA-Economics, MBA, or other Finance-related streams.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Program Fee:</strong> ₹85,000 per batch + GST (all applicable taxes).
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Certification:</strong> A Digital Certificate will be awarded upon successful completion of the training.
                </li>
              </ul>
            </div>
          </div>

          {/* Program Overview (with Read More/Show Less) */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Program Overview</h2>
            <p style={styles.paragraph}>
                This <strong style={styles.strongText}>Premium Plan</strong> offers a two-day, intensive on-campus training program crafted exclusively for final-year students. It provides a practical deep dive into the fundamentals of the stock market, coupled with advanced insights into practical investment strategies and comprehensive portfolio planning. The program is led by seasoned trainers, dedicated to equipping students with the essential skills to thrive in the dynamic financial market.
            </p>

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
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Equity:</strong> Understand the fundamentals of the stock market, navigate trading platforms, and explore various investing methods.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Commodity:</strong> Gain insights into different commodity types, factors influencing pricing, and how to hedge through future contracts.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Foreign Exchange:</strong> Examine major currency pairs, analyze INR movements, and grasp the dynamics of the global forex market.
                  </li>
                </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Day 2: Applied Investment & Strategy</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Mutual Funds & SIP:</strong> Learn about long-term investment planning, the advantages of SIPs, and how mutual funds work.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>SGP & Banex:</strong> Comprehend the nuances of Sovereign Gold Bonds and bond exchanges.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Margin Trading:</strong> Delve into margin requirements, associated risks, positioning strategies, and leveraged trading.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Financial Tools:</strong> Learn to analyze live charts and utilize price action tools for making strategic trading decisions.
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> <strong style={styles.strongText}>Investment Tools:</strong> Discover how to use SIP calculators, portfolio trackers, and mutual fund screeners for efficient wealth planning.
                  </li>
                </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Program Highlights</h3>
                <div style={styles.badgesContainer}>
                  <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>On-Campus Training</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeSuccess }}>Real Market Simulations</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeInfo }}>One-on-One Mentorship</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeWarning }}>Strategy Workshops</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeDark }}>Online Certification Assessment</span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeSecondary }}>Recognized Certification</span>
                </div>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Why Should Students Enroll?</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Gain hands-on exposure to real-world financial markets and essential investment tools.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Sharpen interview skills and enhance placement readiness with expert-led sessions.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Develop awareness of wealth creation, smart investing and financial planning.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Learn to analyze market trends, build strategies and manage risk effectively.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Earn a recognized digital certificate to strengthen your resume and Linkedin profile.</li>
                </ul>

                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px', marginBottom: '15px' }}>Benefits For Educational Institutes:</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Enhance academic programs with advanced, industry-relevant financial training.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Boost placement performance through skill-based, practical education.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> No added work for college-we manage end-to-end delivery and certification.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Scalable across batches with long-term impact.</li>
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

export default PremiumPlan;