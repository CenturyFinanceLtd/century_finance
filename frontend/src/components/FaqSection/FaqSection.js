import React from "react";
// MUI Accordion imports
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import shape1 from "../../images/team/shape-1.svg";
import shape2 from "../../images/team/shape-2.svg";
import shape3 from "../../images/team/shape-3.svg";
import shape4 from "../../images/team/shape-4.svg";

// Your FAQ data (remains the same)
const faqData = [
  {
    id: "panel1",
    question:
      "Is this training suitable for beginners with no prior experience?",
    answerLines: [
      "Absolutely! Our training modules are designed to guide beginners step-by-step. We start with the basics of stock trading and gradually introduce advanced strategies, making sure you understand each concept before moving forward.",
    ],
  },
  {
    id: "panel2",
    question: "What makes your stock market training different from others?",
    answerLines: [
      "We combine expert market research with practical, hands-on learning. Our sessions are led by SEBI-certified advisors who bring real-time insights, trading strategies, and personalized mentoring to help you build both confidence and skill in stock trading.",
    ],
  },
  {
    id: "panel3",
    question: "What is the difference between trading and investing?",
    answerLines: [
      "Trading involves buying and selling stocks frequently to take advantage of short-term market movements.",
      "Investing is a long-term approach focused on building wealth over time by holding assets for years.",
      "Both require different strategies, risk tolerance, and levels of market knowledge.",
    ],
  },
  {
    id: "panel4",
    question: "How can I start investing in the stock market as a beginner?",
    answerLines: [
      "To start investing, you'll need to:",
      "Open a brokerage account.",
      "Set your investment goals.",
      "Research and choose the stocks or funds you want to invest in.",
      "Monitor your investments regularly.",
      "Start small and diversify to manage risk effectively.",
    ],
  },
  {
    id: "panel5",
    question: "What is the stock market, and how does it work?",
    answerLines: [
      "The stock market is a platform where investors can buy and sell shares of publicly traded companies. It works through a network of exchanges—such as the New York Stock Exchange (NYSE) or NASDAQ—where companies list their shares through an initial public offering (IPO), and investors trade those shares based on market demand.",
    ],
  },
];

const FaqSection = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Base styles for the AccordionSummary's content area
  const summaryContentBaseStyles = {
    "& .MuiAccordionSummary-content": {
      // Target the inner content div
      marginTop: "20px",
      marginBottom: "20px",
    },
  };

  // Active styles for AccordionSummary (when expanded)
  const activeSummaryStyles = {
    backgroundColor: "red", // Example: theme's primary color
    color: "white",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "white",
    },
    // Ensure text color within the content is also white when active
    "& .MuiAccordionSummary-content": {
      color: "white", // This will apply to the question text
      // We also need to re-apply margins here if they are not inherited or if activeSummaryStyles overrides them
      marginTop: "20px",
      marginBottom: "20px",
    },
  };

  return (
    <section className={`wpo-team-section section-padding ${props.pbClass}`}>
      <div className="container">
        <div className="wpo-section-title-s2">
          <small>FAQ's</small>
          <h2>
            Frequently&nbsp;
            <span>
              Asked
              <i className="shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 206 53"
                  fill="none">
                  <path d="M152.182 2.58319C107.878 0.889793 54.8748 6.13932 21.2281 18.6943C14.2699 21.4407 7.93951 24.7738 5.70192 28.7128C4.27488 31.2398 5.03121 33.954 7.69121 36.2925C14.8835 42.3911 31.9822 45.4011 46.8006 47.3115C78.3067 51.0179 113.672 51.7406 145.489 48.3204C167.194 46.0009 200.667 39.5923 199.399 28.5709C198.543 20.0621 180.437 14.5729 162.979 11.6178C138.219 7.469 111.131 6.00576 84.5743 5.86862C71.32 5.85789 58.0913 6.85723 45.6675 8.78436C33.512 10.7186 21.2709 13.4317 12.6602 17.5817C11.2246 18.2877 8.62449 17.4553 9.9973 16.6813C20.7486 11.2493 38.0215 7.73493 53.9558 5.76368C77.1194 2.90994 101.75 3.75426 125.339 5.14356C158.167 7.2615 207.554 13.5139 204.928 30.7413C203.629 36.0898 194.762 40.5057 184.681 43.5503C156.563 51.768 119.114 53.6844 85.6331 52.5265C65.1694 51.7477 44.4831 50.1855 25.9972 46.2442C11.4129 43.1186 -1.0337 37.8297 0.0679738 30.5063C2.14003 19.9035 31.4913 12.0006 52.6201 7.98775C71.2971 4.45904 91.3384 2.2302 111.674 1.24636C125.228 0.595237 138.962 0.539188 152.536 1.15931C153.475 1.20224 154.154 1.55523 154.051 1.94876C153.951 2.33872 153.115 2.62135 152.182 2.58319Z" />
                </svg>
              </i>
            </span>
            &nbsp;Questions
          </h2>
        </div>
        <div className="faq-accordion-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="wpo-benefits-item">
                {faqData.map((faqItem) => (
                  <Accordion
                    key={faqItem.id}
                    expanded={expanded === faqItem.id}
                    onChange={handleChange(faqItem.id)}>
                    <AccordionSummary
                      aria-controls={`${faqItem.id}bh-content`}
                      id={`${faqItem.id}bh-header`}
                      // Apply base styles, and merge active styles if expanded
                      sx={
                        expanded === faqItem.id
                          ? {
                              ...summaryContentBaseStyles,
                              ...activeSummaryStyles,
                            }
                          : summaryContentBaseStyles
                      }>
                      {faqItem.question}
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        marginTop: "20px", // This margin remains for the details section
                        marginBottom: "20px",
                      }}>
                      {faqItem.answerLines.map((line, index) => (
                        <p
                          key={index}
                          style={{
                            ...(faqItem.id === "panel4" && index > 0
                              ? { marginLeft: "1em", textIndent: "-1em" }
                              : {}),
                            ...(index < faqItem.answerLines.length - 1
                              ? { marginBottom: "0.5em" }
                              : {}),
                          }}>
                          {faqItem.id === "panel4" && index > 0
                            ? `• ${line}`
                            : line}
                        </p>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative shapes remain the same */}
      <div className="shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="shape-2">
        <img src={shape2} alt="" />
      </div>
      <div className="shape-3">
        <img src={shape3} alt="" />
      </div>
      <div className="shape-4">
        <img src={shape4} alt="" />
      </div>
    </section>
  );
};

export default FaqSection;
