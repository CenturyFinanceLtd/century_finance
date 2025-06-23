import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";

const CorporateTraining = ({ onBookNow }) => {
  const styles = {
    section: {
      padding: "40px 0",
      backgroundColor: "#f3f3f3",
      display: "flex",
      justifyContent: "center",
    },
    wrap: {
      backgroundColor: "#1c1c1c",
      color: "#fff",
      borderRadius: "8px",
      width: "95%",
      maxWidth: "960px",
      padding: "30px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    },
    title: {
      fontSize: "22px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#21E786",
    },
    mainHeading: {
      fontSize: "26px",
      fontWeight: "700",
      color: "#fff",
      marginBottom: "10px",
    },
    price: {
      fontSize: "20px",
      color: "#21E786",
      fontWeight: "600",
      marginBottom: "20px",
    },
    bookBtn: {
      backgroundColor: "#f44336",
      color: "#fff",
      border: "none",
      padding: "10px 25px",
      borderRadius: "4px",
      fontWeight: "bold",
      marginBottom: "20px",
      cursor: "pointer",
    },
    badgeContainer: {
      backgroundColor: "#2e3d4d",
      borderRadius: "6px",
      padding: "15px",
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      fontSize: "14px",
      color: "#fff",
      marginBottom: "30px",
    },
    whiteBox: {
      backgroundColor: "#fff",
      color: "#000",
      borderRadius: "6px",
      padding: "20px 25px",
      marginBottom: "20px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },
    heading: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "15px",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.7",
      marginBottom: "10px",
    },
    listItem: {
      fontSize: "16px",
      marginBottom: "8px",
      lineHeight: "1.6",
    },
  };

  return (
    <Fragment>
      <Helmet>
        <title>Corporate Training Program - Century Finance Limited</title>
      </Helmet>
      <Navbar />
      <PageTitle
        pageTitle="Corporate Training Program"
        pagesub="Corporate Training Program"
        bgImage="/bg-image/training.png"
      />
      <section style={styles.section}>
        <div style={styles.wrap}>
          <div>
            <div style={styles.title}>CORPORATE TRAINING PROGRAM</div>
            <div style={styles.mainHeading}>
              Empowering Professionals With Practical Financial Skills and Market Insights
            </div>
            <div style={styles.price}>₹60,000 + GST</div>
            <button style={styles.bookBtn} onClick={onBookNow}>Enroll for Session</button>
          </div>

          <div style={styles.badgeContainer}>
            <span>1 Day Training Session</span>
            <span>Complete Guidance for Stock Market</span>
            <span>SEBI-Certified Certification</span>
          </div>

          <div style={styles.whiteBox}>
            <div style={styles.heading}>About Corporate Training Program</div>
            <p style={styles.paragraph}>
              An intensive one-day training program by Century Finance Limited, aims to improve working professionals' financial literacy in the insurance, IT and finance industries. Through live workshops and hands-on demos, this program seeks to clarify intricate market ideas and offer real-time exposure to the stock market.
            </p>
            <p style={styles.paragraph}>
              Under the supervision of an expert, professionals can learn how to manage SIPs, measure profit and losses, comprehend expenses and even optimize portfolios for both personal and business success. Both new and seasoned investors are welcome to attend the seminar, which equips attendees with practical knowledge and tools to aid in their financial decision making. They gain confidence in their ability to successfully navigate the financial market through these interactive, fun sessions.
            </p>
          </div>

          <div style={styles.whiteBox}>
            <div style={styles.heading}>Objective</div>
            <p style={styles.paragraph}>
              To enhance financial knowledge and decision-making skills of professionals through practical market insights, live training and simplified strategies for effective investing, risk management and long-term wealth creation.
            </p>
          </div>

          <div style={styles.whiteBox}>
            <div style={styles.heading}>Skills</div>
            <p style={styles.paragraph}>
              Strategizing | Risk-Management | Diversification | Trading | Budgeting | Investing | Planning | Analysis
            </p>
          </div>

          <div style={styles.whiteBox}>
            <div style={styles.heading}>Modules Covered In The Training</div>
            <ul>
              <li style={styles.listItem}><strong>Basics Of The Market:</strong> Discover the working of commodities, indices and equities.</li>
              <li style={styles.listItem}><strong>Exposure To The Live Market:</strong> Analyze stock movements, observe real-time trading and practically implement techniques.</li>
              <li style={styles.listItem}><strong>Management of SIPs and Mutual Funds:</strong> Create, monitor and enhance SIPs, evaluate the return and performance of funds.</li>
              <li style={styles.listItem}><strong>Techniques Of Risk Management:</strong> Use easy tools and techniques to recognize, quantify and manage investment risk.</li>
              <li style={styles.listItem}><strong>Analysis Of Profit and Loss:</strong> Track transitions, compute fees and analyze the performance of the entire portfolio.</li>
              <li style={styles.listItem}><strong>Tools For Investment Planning:</strong> Use goal-based investment tools and SIP calculators to plan for the future.</li>
              <li style={styles.listItem}><strong>Stock Investing And Portfolio Management:</strong> Discover how to effectively manage family portfolios and use current holdings for margins.</li>
            </ul>
          </div>

          <div style={styles.whiteBox}>
            <div style={styles.heading}>What You’ll Learn In This One-Day Workshop?</div>
            <ul>
              <li style={styles.listItem}><strong>Obtain Financial Clarity:</strong> Understand how financial actions affect both short-term and long-term goals.</li>
              <li style={styles.listItem}><strong>Increase Your Confidence In Decision-Making:</strong> Learn to approach market actions with reason and professionalism.</li>
              <li style={styles.listItem}><strong>Boost Financial Awareness:</strong> Understand market behavior and apply real-world strategies.</li>
              <li style={styles.listItem}><strong>Build Wealth Strategically:</strong> Match your financial decisions to your career and life goals.</li>
              <li style={styles.listItem}><strong>Learn Through Real-Time Experience:</strong> Live demonstrations bring theoretical concepts to life.</li>
              <li style={styles.listItem}><strong>Enhance Risk Handling:</strong> Learn to identify, control and minimize financial risks with confidence.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default CorporateTraining;
