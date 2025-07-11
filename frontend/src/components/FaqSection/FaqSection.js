import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import shape1 from "../../images/team/shape-1.svg";
import shape2 from "../../images/team/shape-2.svg";
import shape3 from "../../images/team/shape-3.svg";
import shape4 from "../../images/team/shape-4.svg";

const faqData = [
  {
    id: "panel1",
    question:
      " Is this training suitable for beginners with no prior experience?",
    answerLines: [
      "Absolutely! At Century Finance, we create training programs to help everyone, even those who are just starting out. We begin by teaching the basics and expand your understanding using practical exercises, live market simulations, and clear instructions from trainers certified by SEBI.",
    ],
  },
  {
    id: "panel2",
    question: "What makes your stock market training different from others?",
    answerLines: [
      "Century Finance Limited takes a hands-on approach that focuses on results. We mix classroom concepts with real-world market exposure, live question-solving sessions, and one-on-one guidance. Supported by SEBI-certified experts, we aim to turn knowledge into income using our special “Learning to Earning” method.",
    ],
  },
  {
    id: "panel3",
    question: "What is the difference between trading and investment?",
    answerLines: [
      "Trading means selling and purchasing things like stocks, or commodities to make profits. Investment takes a longer approach where people buy and keep assets like mutual funds or stocks to grow wealth over a longer time.",
    ],
  },
  {
    id: "panel4",
    question: "How can investing be started in the stock market as a beginner  ?",
    answerLines: [
      "For investing, you need to open a Demat and trading account through a registered stockbroker. Understand how the stock market works and figure out your financial goals. Start investing small amounts across a variety of options.",
    ],
  },
  {
    id: "panel5",
    question: "What is the stock market & how does it work?",
    answerLines: [
      "The stock market is a platform where investors buy and sell shares of the publicly listed company.",
      "When companies require capital, they raise it by issuing shares through an IPO. These shares get traded on stock exchanges such as NSE or BSE. Share prices change based on demand, news events, and company performance. Investors can gain profits either by selling shares at a higher price or by earning dividends. The stock market helps grow the economy by funding companies and opening up chances to create wealth.",
    ],
  },
];

const FaqSection = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const summaryContentBaseStyles = {
    "& .MuiAccordionSummary-content": {
      marginTop: "20px",
      marginBottom: "20px",
    },
  };

  const activeSummaryStyles = {
    backgroundColor: "#21E786",
    color: "white",
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "white",
    },
    "& .MuiAccordionSummary-content": {
      color: "white",
      marginTop: "20px",
      marginBottom: "20px",
    },
  };

  return (
    <section className={`wpo-team-section section-padding ${props.pbClass}`}>
      <div className="container">
        <div className="wpo-section-title-s2">
          <small></small>
          <h2>
            Frequently&nbsp;
            <span style={{ color: "#21E786" }}>
              Asked
              <i className="shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 206 53"
                  fill="#21E786"
                >
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
                    onChange={handleChange(faqItem.id)}
                  >
                    <AccordionSummary
                      aria-controls={`${faqItem.id}bh-content`}
                      id={`${faqItem.id}bh-header`}
                      sx={
                        expanded === faqItem.id
                          ? {
                              ...summaryContentBaseStyles,
                              ...activeSummaryStyles,
                            }
                          : summaryContentBaseStyles
                      }
                    >
                      {faqItem.question}
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    >
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
                          }}
                        >
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
