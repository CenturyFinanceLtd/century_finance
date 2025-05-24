import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";


const faqData = [
  {
    id: "panel1",
    question:
      "Are these plans suitable for beginners?",
    answerLines: [
      "Yes. Even basic plans are *beginner-friendly* with simplified instructions. Higher plans offer detailed guidance but may suit those with some trading experience.",
    ],
  },
  {
    id: "panel2",
    question: "What’s the difference between the plans?",
    answerLines: [
      " Number of Calls* (Fixed or Unlimited)" ,"Duration (16 Days to 12 Months)", "Market Segments Covered (Equity, Commodity, Crypto) ","Technical Tools (Basic to Advanced)" ,"Bonus Financial Services (SGB, SIP, MTF, Mutual Fund Advisory)" ,
    ],
  },
  {
    id: "panel3",
    question: "Do you follow regulatory guidelines?",
    answerLines: [
      "✅ Yes. We strictly follow:",
      "SEBI compliance",
      "NCPI & NAC norms",
      "Research and advisory guidelines as applicable",
    ],
  },
  {
    id: "panel4",
    question: "Are these calls safe for someone with no technical knowledge?",
    answerLines: [
      "Yes. Our calls are shared in *plain language* with:",
      "Entry price",
      "Stop-loss",
      "Exit levels",
      
    ],
  },
  {
    id: "panel5",
    question: "Is this service legal and SEBI-compliant?",
    answerLines: [
      "Yes. We operate under *strict guidelines* and do not:",
      "Offer guaranteed returns",
      "Handle client funds",
      "Promote unregulated products",
      "We focus on *education and strategy-backed market advisory* in line with SEBI's investor protection framework.",
    ],
  },
    {
    id: "panel6",
    question: "How are these calls delivered to me?",
    answerLines: [
      "WhatsApp",
      "Email",
      "By Call",
      "Telegram",
    ],
  },
    {
    id: "panel7",
    question: "Will I be able to trade even if I have a full-time job?",
    answerLines: [
      "Yes. Our plans are tailored for working professionals, with:",
      "Pre-market or early morning call dispatches",
      "Clear instructions (entry/exit/stop-loss)",
      "Optional *position trades* that don’t require minute-by-minute monitoring",
    ],
  },
  {
    id: "panel8",
    question: "Can I upgrade to a higher plan later?",
    answerLines: [
      "Absolutely. You can *upgrade anytime* by contacting our support team. The difference in pricing will be adjusted.",
      
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
    
    <div className={`containerwpo-benefits-section ${props.sectionClass || ""}`}>
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
