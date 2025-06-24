import React, { useState } from "react";

const PremiumPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleContent = () => setIsExpanded(!isExpanded);

   const styles = {

    section: {

      padding: "40px 0", // Overall section padding

      backgroundColor: "#f5f5f5", // Very light grey background for the overall page

      display: "flex",

      justifyContent: "center",

      alignItems: "flex-start", // Align content to the top

      minHeight: "100vh",

    },

    wrap: {

      backgroundColor: "#1a1a1a", // Dark background for the main content block

      color: "#ffffff", // Light text color for contrast

      padding: "0", // Inner padding will be handled by sub-sections

      borderRadius: "8px",

      width: "100%",

      maxWidth: "100%", // Adjusted max width to be slightly narrower like the edX content

      margin: "20px auto", // Margin top/bottom for wrap within section

      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",

      overflow: "hidden", // Ensure border-radius clips children

    },

    // --- Image Section ---

    imageSection: {

      padding: "30px 40px 0 40px", // Padding top only, will separate from title

      textAlign: "center",

    },

    mainImage: {

      maxWidth: "100%",

      height: "auto",

      borderRadius: "4px", // Slightly rounded corners for the image itself

      boxShadow: "0 2px 10px rgba(0,0,0,0.3)",

    },

    // --- Header & Price Section (similar to edX top area) ---

    headerPriceSection: {

      padding: "40px 40px 30px 40px", // Generous padding

      borderBottom: "1px solid #333333", // Separator

    },

    smallTitle: {

      fontFamily: '"Montserrat", sans-serif',

      color: "#bbbbbb", // Lighter grey for smaller titles

      fontSize: "1em",

      textTransform: "uppercase",

      letterSpacing: "1px",

      marginBottom: "10px",

      display: "block",

      fontWeight: "600",

    },

    mainTitle: {

      fontFamily: '"Montserrat", sans-serif',

      color: "#ffffff",

      fontSize: "2.5em", // Prominent size

      fontWeight: "700",

      lineHeight: "1.2",

      marginBottom: "20px",

    },

    priceContainer: {

      display: "flex",

      alignItems: "center",

      flexWrap: "wrap",

      marginBottom: "25px",

    },

    priceTag: {

      fontFamily: '"Montserrat", sans-serif',

      fontSize: "1.6em",

      fontWeight: "600",

      color: "#ffffff",

      marginRight: "20px",

    },

    bookNowBtn: {

      backgroundColor: "#e74c3c", // EdX-like orange-red button

      color: "#ffffff",

      border: "none",

      padding: "12px 30px",

      borderRadius: "5px",

      fontSize: "1.1em",

      fontWeight: "600",

      cursor: "pointer",

      transition: "background-color 0.3s ease",

      minWidth: "200px", // Ensure button has a good minimum width

    },

    // --- Content Sections ---

    contentSection: {

      padding: "30px 40px",

      borderBottom: "1px solid #333333", // Separator between sections

    },

    lastContentSection: {

      // For the last section, no bottom border

      padding: "30px 40px",

    },

    sectionHeading: {

      fontFamily: '"Montserrat", sans-serif',

      fontSize: "2em",

      fontWeight: "700",

      color: "#rgb(0 0 0)",

      marginBottom: "25px",

    },

    paragraph: {

      fontFamily: '"Open Sans", sans-serif', // Readable sans-serif

      color: "#cccccc", // Lighter text color for body

      lineHeight: "1.7",

      marginBottom: "15px",

      fontSize: "1em",

    },

    listItem: {

      fontFamily: '"Open Sans", sans-serif',

      color: "#cccccc",

      lineHeight: "1.6",

      marginBottom: "8px",

      fontSize: "1em",

      display: "flex",

      alignItems: "flex-start",

    },

    checkIcon: {

      color: "#27ae60", // Green for checkmark

      marginRight: "10px",

      fontSize: "1.2em",

      marginTop: "2px", // Align with text

    },

    unorderedList: {

      listStyle: "none", // Remove default bullets

      paddingLeft: "0",

      marginBottom: "20px",

    },

    alertCommon: {

      padding: "1.2rem",

      borderRadius: ".3rem",

      marginBottom: "1.5rem",

      border: "1px solid #444444", // Subtle border

      fontWeight: "500",

      backgroundColor: "#054509", // Slightly lighter dark background for alerts

      color: "#054509",

      fontFamily: '"Open Sans", sans-serif',

    },

    alertWarning: {

      backgroundColor: "#4a3a1f", // Darker warning tone

      color: "#f39c12",

    },

    alertInfo: {

      backgroundColor: "#1f3a4a", // Darker info tone

      color: "#3498db",

    },

    alertSuccess: {

      backgroundColor: "#2a4a2a", // Darker success tone

      color: "#2ecc71",

    },

    alertLight: {

      backgroundColor: "#2a2a2a",

      borderColor: "#444444",

      color: "#ffffff",

    },

    alertLink: {

      color: "#3498db", // Blue for links

      textDecoration: "underline",

      fontWeight: "600",

    },

    // --- Badges (Program Highlights) ---

    badgesContainer: {

      display: "flex",

      flexWrap: "wrap",

      gap: "10px",

      marginBottom: "25px",

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

    badgePrimary: { backgroundColor: "#6a6a6a" },

    badgeSuccess: { backgroundColor: "#2ecc71" }, // Brighter green

    badgeInfo: { backgroundColor: "#3498db" }, // Brighter blue

    badgeWarning: { backgroundColor: "#f39c12" }, // Brighter orange

    badgeDark: { backgroundColor: "#333333" },

    badgeSecondary: { backgroundColor: "#8d8d8d" },



    // --- Show More/Less Button ---

    showMoreBtn: {

      backgroundColor: "transparent",

      color: "#3498db",

      border: "none",

      padding: "10px 0",

      fontSize: "1em",

      cursor: "pointer",

      fontWeight: "600",

      transition: "color 0.3s ease",

      display: "block",

      marginTop: "10px",

      textAlign: "left",

    },

    // --- Text Utility Styles ---

    strongText: {

      fontWeight: "bold",

      color: "rgb(255 255 255)", // Ensure bold text stands out

    },

    noteText: {

      fontSize: "0.95rem",

      color: "#f39c12", // Warning color for notes

      fontStyle: "italic",

    },



whiteBox: {

  backgroundColor: "#ffffff",

  color: "#000000",

  borderRadius: "8px",

  padding: "30px 25px",

  marginBottom: "30px",

  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",

},



  };

  return (
    <section style={styles.section} className="wpo-about-section-s2">
      <div className="container">
        <div style={styles.wrap} className="wpo-about-wrap">

          {/* Header & Price Section */}
          <div style={styles.headerPriceSection}>
            <small style={styles.smallTitle}>PREMIUM PLAN</small>
            <h1 style={styles.mainTitle}>Enroll for Session</h1>

            <div style={styles.priceContainer}>
              <span style={styles.priceTag}>₹14,000 + GST</span>
              <button onClick={onBookNow} style={styles.bookNowBtn}>
                Book Now
              </button>
            </div>

            <div style={{ ...styles.alertCommon, ...styles.alertInfo, marginBottom: '0' }} className="alert alert-info">
              <strong style={styles.strongText}>Join with Century Finance Limited</strong>
              <br /><br />
              <div style={styles.badgesContainer}>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  1 Day training Session
                </span>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  Learn about Equity, Commodity & Foreign Exchange
                </span>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  SEBI-Certified Certification
                </span>
              </div>
            </div>
          </div>

          {/* About Section */}
           <div style={styles.contentSection}>
            <div style={styles.whiteBox}>
              <h2 style={styles.sectionHeading}>About Premium Plan</h2>
              <strong>
                The Premium Plan by Century Finance Limited is a comprehensive one-day financial education program aimed to provide students with a more profound and useful understanding of the financial industry. It covers the fundamentals of trading and market behavior, this curriculum offers advanced concepts that foster analytical and strategic thinking, actual trading exposure and one-on-one mentoring. Students are introduced to a dynamic and engaging financial learning experience that bridges the gap between classroom knowledge and real-world application through live demonstration and knowledgeable assistance. 

              </strong>
            </div>
          </div>
  <div style={styles.contentSection}>
            <div style={styles.whiteBox}>
              <h2 style={styles.sectionHeading}>Objective</h2>
              <strong>
               To equip students with advanced financial literacy, live trading exposure and professional insights, enabling them to make informed decisions and explore finance as a career. 

              </strong>
            </div>
          </div>
         

          {/* Program Details */}
           <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Program Details</h2>
            <div
              style={{
                ...styles.alertCommon,
                backgroundColor: "#ffffff",
                color: "#rgb(0 0 0)",
                border: "1px solid #dddddd",
              }}
              className="alert alert-light"
            >
              <ul style={styles.unorderedList} className="mb-0">
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                           Comprehensive 1 Day Session: An organized 3 hours program that provides a thorough grasp of real-world trading conditions by delving deeply into foreign exchange, commodities and equity markets. 

                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                           Exposure To The Live Market: Through the observation and analysis of real-time trading data, students acquire a practical understanding of trend analysis, market behavior and decision making procedures.


                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                           Expert Led Session: The curriculum, which is taught by seasoned financial experts, offers individualized mentoring to allay students' concerns and provide guidance during the session. 


                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                           Advanced Strategy Training: It improves analytical thinking and market interpretation by introducing technical techniques such as gap theory, volume analysis and candlestick patterns.

                </li>
              </ul>
            </div>
          </div>

          {/* Program Overview with toggle */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>What You’ll Learn</h2>
            <ul style={styles.unorderedList}>
              <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Gain a comprehensive understanding of the stock market.</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Gain knowledge of financial tools and investment planning, including portfolio diversification & goal based planning.</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Understanding volume analysis and gap theory helps in confirming market moves and identifying unique trading opportunities through price gaps.</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Learn to interpret candlestick patterns and use moving averages to confirm market trends and understand support/resistance zones.</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Live market simulation allows for the seamless transition from theoretical to practical trading behavior.</li>
            </ul>

            {!isExpanded && (
              <button onClick={toggleContent} style={styles.showMoreBtn}>
                Read More
              </button>
            )}

            {isExpanded && (
              <>
                <h3 style={{ ...styles.sectionHeading, fontSize: '1.5em', marginTop: '30px' }}>Benefit for Institute & School</h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Establishment of a SEBI-certified program with advanced features enhances the institution’s reputation for excellence, innovation and student success. </li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span> Students gain real-time practical exposure through live market access and one-on-one mentorship.</li>
                  <li style={styles.listItem}><span style={styles.checkIcon}>✔</span>Students gain exposure to potential career paths in finance, investment and stock market, enabling them to make informed decisions about their future. </li>
                </ul>

                <div style={{ ...styles.alertCommon, ...styles.alertLight }} className="alert alert-light border mt-4">
                  <h4 style={{ ...styles.sectionHeading, fontSize: '1.2em' }}>Partner With Us</h4>
                  <p style={styles.paragraph}>
                    Give your students the <strong style={styles.strongText}>competitive edge</strong> they need in today's finance industry.
                  </p>
                  <p style={styles.paragraph}>
                    📧 <strong style={styles.strongText}>Email:</strong> <a href="mailto:customerservice@centuryfinancelimited.com" style={styles.alertLink}>customerservice@centuryfinancelimited.com</a>
                  </p>
                  <p style={styles.paragraph}>
                    🌐 <strong style={styles.strongText}>Website:</strong> <a href="https://www.centuryfinancelimited.com/" target="_blank" rel="noopener noreferrer" style={styles.alertLink}>www.centuryfinancelimited.com</a>
                  </p>
                  <p style={styles.noteText}>
                    *Note: Limited slots are available — advance booking is highly recommended.*
                  </p>
                </div>

                <button onClick={toggleContent} style={styles.showMoreBtn}>
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
