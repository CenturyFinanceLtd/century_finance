import React, { useState } from "react";
// Your original image

const BasicPlan = ({ onBookNow }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  // Define inline styles to mimic the edX page design, but with your content
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
        {" "}
        {/* Bootstrap container */}
        <div style={styles.wrap} className="wpo-about-wrap">
          {/* Image Section (placed at the top, like a hero image) */}

          {/* Header & Price Section */}
          <div style={styles.headerPriceSection}>
            <small style={styles.smallTitle}>BASIC PLAN</small>
            <h1 style={styles.mainTitle}>
             One Day On-Campus Certified Financial Marketing Training

            </h1>

            <div style={styles.priceContainer}>
              <span style={styles.priceTag}>₹45,000 + GST</span>
              <button onClick={onBookNow} style={styles.bookNowBtn}>
                Book Now
              </button>
            </div>
            {/* Original content's first alert placed here for prominence */}
            <div
              style={{
                ...styles.alertCommon,
                ...styles.alertInfo,
                marginBottom: "0",
              }}
              className="alert alert-info">
              <strong style={styles.strongText}>
                Join with Century Finance Limited
              </strong>
              <br />
               <div style={styles.badgesContainer}>
                 <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                     1 Day training Session+Live Trading Session 
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
          {/* Objective Section */}
<div style={styles.contentSection}>
  <div style={styles.whiteBox}>
    <h2 style={styles.sectionHeading}>Our Objective</h2>
    <strong>To seamlessly connect academic-learning with real-world  financial market practices by offering students hand-on-hands exposure to trading concepts, market structure and industry tools. It aims to build a solid foundation for their transition into the professional world of finance. </strong>
  </div>
  </div>


          {/* Program Details Section */}
          <div style={styles.contentSection}>
            <h2 style={styles.sectionHeading}>Program Details</h2>
            <div
  style={{
    ...styles.alertCommon,
    backgroundColor: "#ffffff", // white background
    color: "#rgb(0 0 0)",           // black text
    border: "1px solid #dddddd" // light border for subtle separation
  }}
  className="alert alert-light"
>

              <ul style={styles.unorderedList} className="mb-0">
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>{" "}
                  <strong style={styles.strongText}>Designed for Final Year Students, only for Colleges and Universities
</strong>{" "}
                 
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>{" "}
                  <strong style={styles.strongText}>BBA,B.Com, BA-Economics, MBA or Finance related streams are eligible </strong>{" "}
                  

                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>{" "}
                  <strong style={styles.strongText}>Program fees:- Rs.45,000 per batch + GST
</strong>{" "}
                 
                </li>
                <li style={styles.listItem}>
                  <span style={styles.checkIcon}>✔</span>{" "}
                  <strong style={styles.strongText}>Digital  Certificate awarded on completion of Training.
</strong> 
                  
                </li>
              </ul>
            </div>
          </div>

          {/* Program Overview (with Read More/Show Less) */}
         {/* About Basic Plan */}
<div style={styles.contentSection}>
  <div style={styles.whiteBox}>
    <h2 style={styles.sectionHeading}>About Basic Plan</h2>
    
    <strong>It’s a one day, on-campus training program exclusively tailored for final-year students. It offers a practical exposure to equity, commodity and foreign exchange markets, delivered by experienced trainers.</strong>
  </div>



            {!isExpanded && (
              <button onClick={toggleContent} style={styles.showMoreBtn}>
                Read More
              </button>
            )}

            {isExpanded && (
              <>
            
<div style={styles.contentSection}>
  <h2 style={styles.sectionHeading}>Program Modules and Learning Outcomes</h2>
  <table style={{
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontFamily: '"Open Sans", sans-serif',
  }}>
    <thead>
      <tr style={{ backgroundColor: "#333333" }}>
        <th style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#ffffff",
          fontSize: "1em",
          textAlign: "left"
        }}>Module</th>
        <th style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#ffffff",
          fontSize: "1em",
          textAlign: "left"
        }}>What You’ll Learn</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ backgroundColor: "#2a2a2a", transition: "0.3s" }}>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Equity</td>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Understanding of stock exchange, trading mechanism and investment strategies.</td>
      </tr>
      <tr style={{ backgroundColor: "#1f1f1f", transition: "0.3s" }}>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Commodity</td>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Insights into commodity pricing and trading dynamics across agriculture, metals and energy sector.</td>
      </tr>
      <tr style={{ backgroundColor: "#2a2a2a", transition: "0.3s" }}>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Foreign Market</td>
        <td style={{
          padding: "12px",
          border: "1px solid #444",
          color: "#cccccc",
        }}>Key concepts of currency market, derivatives market and global economic influences.</td>
      </tr>
    </tbody>
  </table>
</div>



                <h3
                  style={{
                    ...styles.sectionHeading,
                    fontSize: "1.5em",
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}>
                  Program Highlights
                </h3>
                <div style={styles.badgesContainer}>
                  <span
                    style={{ ...styles.badgeCommon, ...styles.badgePrimary }}>
                    On-Campus Training
                  </span>
                  <span
                    style={{ ...styles.badgeCommon, ...styles.badgeSuccess }}>
                    Real Market Simulations
                  </span>
                  <span style={{ ...styles.badgeCommon, ...styles.badgeInfo }}>
                     Online Certification Assessment
                  </span>
                  <span
                    style={{ ...styles.badgeCommon, ...styles.badgeWarning }}>
                    Strategy Workshops
                  </span>
                 
                  
                </div>

                <h3
                  style={{
                    ...styles.sectionHeading,
                    fontSize: "1.5em",
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}>
                  Why Should Students Enroll?
                </h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span>Get real-time knowledge to financial market
                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> Build Interview ready knowledge to boost placement process

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span>Earn a recognized digital certificate to enhance your resume and linkedin

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span>Explore the career paths like CFA, advisor and research analyst.
                  </li>
                  
                </ul>

                <h3
                  style={{
                    ...styles.sectionHeading,
                    fontSize: "1.5em",
                    marginTop: "30px",
                    marginBottom: "15px",
                  }}>
                  Benefits For Educational Institutes:
                </h3>
                <ul style={styles.unorderedList}>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span>Offer industry-relevant training that complements academic learning.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span>Improve student placements outcomes through practical exposure.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> Strengthen your institute’s reputation as a career-focused education provider.

                  </li>
                  <li style={styles.listItem}>
                    <span style={styles.checkIcon}>✔</span> Hassle free execution- we handle all the aspects of training and certification.

                  </li>
                </ul>

                <div
                  style={{ ...styles.alertCommon, ...styles.alertLight }}
                  className="alert alert-light border mt-4">
                  <h4
                    style={{
                      ...styles.sectionHeading,
                      fontSize: "1.2em",
                      marginBottom: "10px",
                    }}>
                    Partner With Us
                  </h4>
                  <p style={styles.paragraph}>
                    Give your students the{" "}
                    <strong style={styles.strongText}>competitive edge</strong>{" "}
                    they need in today's finance industry.
                  </p>
                  <p style={{ ...styles.paragraph, marginBottom: "5px" }}>
                    📧 <strong style={styles.strongText}>Email:</strong>{" "}
                    <a
                      href="mailto:customerservice@centuryfinancelimited.com"
                      style={styles.alertLink}>
                      customerservice@centuryfinancelimited.com
                    </a>
                  </p>
                  <p style={styles.paragraph}>
                    🌐 <strong style={styles.strongText}>Website:</strong>{" "}
                    <a
                      href="https://www.centuryfinancelimited.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.alertLink}>
                      https://www.centuryfinancelimited.com/
                    </a>
                  </p>
                  <p style={{ ...styles.noteText, marginTop: "1rem" }}>
                    Note: Limited slots are available — advance booking is
                    highly recommended.
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

export default BasicPlan;
