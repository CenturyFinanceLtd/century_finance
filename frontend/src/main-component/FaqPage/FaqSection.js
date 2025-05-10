import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
  // Set 'panel1' as the default expanded panel
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Define active styles for reuse
  const activeSummaryStyles = {
    backgroundColor: "red",
    color: "white",
    "& .MuiTypography-root": {
      // Ensure Typography text is also white
      color: "white",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      // Ensure expand icon is also white
      color: "white",
    },
  };

  return (
    // The class names like "wpo-benefits-section" are from your snippet.
    // You might want to adjust them if this is part of a larger themed section.
    <div className={`wpo-benefits-section ${props.sectionClass || ""}`}>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="wpo-benefits-item">
            {faqData.map((faqItem) => (
              <Accordion
                key={faqItem.id}
                expanded={expanded === faqItem.id}
                onChange={handleChange(faqItem.id)}>
                <AccordionSummary
                  aria-controls={`${faqItem.id}bh-content`}
                  id={`${faqItem.id}bh-header`}
                  sx={expanded === faqItem.id ? activeSummaryStyles : {}}>
                  <Typography>{faqItem.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {faqItem.answerLines.map((line, index) => (
                    <Typography
                      key={index}
                      component="p" // Render each line as a paragraph
                      sx={faqItem.id === "panel4" && index > 0 ? { pl: 2 } : {}} // Indent list items for Q4
                      variant="body2" // Use a suitable variant
                      gutterBottom={index < faqItem.answerLines.length - 1} // Add bottom margin for all but last line
                    >
                      {faqItem.id === "panel4" && index > 0
                        ? `• ${line}`
                        : line}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
