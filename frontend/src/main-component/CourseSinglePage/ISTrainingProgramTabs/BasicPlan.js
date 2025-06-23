import React, { useState } from "react";

const BasicPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  
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

      backgroundColor: "#2a2a2a", // Slightly lighter dark background for alerts

      color: "#ffffff",

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

      color: "rgb(0 0 0)", // Ensure bold text stands out

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
          <div style={styles.headerPriceSection}>
            <small style={styles.smallTitle}>BASIC PLAN</small>
            <h1 style={styles.mainTitle}>Enroll for Session</h1>

            <div style={styles.priceContainer}>
              <span style={styles.priceTag}>₹10,000 + GST</span>
              <button onClick={onBookNow} style={styles.bookNowBtn}>
                Book Now
              </button>
            </div>

            <div
              style={{
                ...styles.alertCommon,
                ...styles.alertInfo,
                marginBottom: "0",
              }}
              className="alert alert-info"
            >
              <strong style={styles.strongText}>
                Join with Century Finance Limited
              </strong>
              <br />
              <div style={styles.badgesContainer}>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  1 Day training Session
                </span>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  Knowledge
                </span>
                <span style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                  SEBI-Certified Certification
                </span>
              </div>
            </div>
          </div>

          <div style={styles.contentSection}>
            <div style={styles.whiteBox}>
              <h2 style={styles.sectionHeading}>About Basic Plan</h2>
              <strong>
                The basic plan is designed for students at schools and institutes who are new to finance and trading. It provides a one-day introduction to financial market basics with the goal of laying a solid foundation in global market, commodities and stock. Through interesting and useful activities, this approach assists kids in gaining an early understanding of financial literacy.
              </strong>
            </div>
          </div>

          <div style={styles.contentSection}>
            <div style={styles.whiteBox}>
              <h2 style={styles.sectionHeading}>Objective</h2>
              <strong>
                The basic concepts of the financial market and equip them with essential knowledge in equity, commodity and foreign market trading, helping them build financial awareness and confidence from an early stage.
              </strong>
            </div>
          </div>

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
                  Comprehensive 1-Day Session: The program will continue for 3 hours covering equity, commodity and foreign markets in a single day, providing beginner friendly learning in each segment.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Expert Led, Interactive Delivery: Market professionals lead sessions simplifying financial concepts through real-life examples, interactive discussion and visual representation, creating an accessible learning environment for students of all academic backgrounds.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Real Time Market Exposure: Students gain hands-on experience in real world trading environments, enhancing their understanding of market trends, price movement and basic trading behavior through exposure to live market data.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Recognized Certificate: Participants receive a SEBI-certified certificate upon completion, enhancing their academic credentials and introducing them to professional financial education standards at an early stage.
                </li>
              </ul>
            </div>
          </div>

          {isExpanded && (
            <>
              <h3 style={{ ...styles.sectionHeading, fontSize: "1.5em", marginTop: "30px", marginBottom: "15px" }}>
                What You’ll Learn
              </h3>
              <ul style={styles.unorderedList}>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  In-depth understanding of the functioning of the stock market within the global financial market.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Learn trade placement, price fluctuation and average purchase and sale points to make informed decisions.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Discover key price zones where trends pause or reverse, essential concepts in technical analysis.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Breakout and breakdown patterns are crucial in identifying when prices exceed levels, indicating significant buying or selling activity.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Experience real time market data, witness market charts movement and comprehend professional decision making in a dynamic environment.
                </li>
              </ul>

              <h3 style={{ ...styles.sectionHeading, fontSize: "1.5em", marginTop: "30px", marginBottom: "15px" }}>
                Benefit for Institute & School
              </h3>
              <ul style={styles.unorderedList}>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Integrating certified financial education by providing practical exposure beyond textbooks.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Program fosters real-world readiness by teaching students critical thinking about money, markets and economic behavior.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  Students develop financial awareness from an early age, acquiring a solid understanding of budgeting, planning and disciplined thinking habits from school or institute level.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  SEBI-certified training programs enhance institutional credibility by demonstrating a strong commitment to student development.
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>
                  The program is cost-effective, flexible and adaptable, making it a practical addition for schools and institutes of various sizes.
                </li>
              </ul>
            </>
          )}

          <button onClick={toggleContent} style={styles.showMoreBtn}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BasicPlan;
