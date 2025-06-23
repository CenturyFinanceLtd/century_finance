import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const faqData = [
  {
    id: "panel1",
    question: "Who can enroll in the century finance training programs?",
    answerLines: [
      "All students and professionals or learners who want to gain knowledge of the stock market and finance related domain. ",
    ],
  },
  {
    id: "panel2",
    question: "What is the difference between basic plan, premium plan and learning to earning plan?",
    answerLines: [
      "Basic Plan - Gives foundational knowledge of the stock market. ",
      "Premium Plan - Gives comprehensive training with live stimulation and advanced ideas. ",
      "Learning to Earning Plan - Combines internship, training and direct placement help for total career placement.",
      
    ],
  },
  {
    id: "panel3",
    question: "Will I receive certification after completion of training?",
    answerLines: [
      "✅Yes, all participants will receive digital certificates on the completion of  successful training and assessments. ",
      
    ],
  },
  {
    id: "panel4",
    question: "Are these programs available online or only in offline mode ?",
    answerLines: [
      "Currently, these training programs are available in offline mode  only but we offer online certification courses. ",
     
    ],
  },
  {
    id: "panel5",
    question: "Do training programs include placement assistance? ",
    answerLines: [
      "Yes, for now the  “Learning to Earning Model”  includes the internship and placement assistance. ",
     
    ],
  },

  
];

const FaqSection = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const activeSummaryStyles = {
    backgroundColor: "#21E786",
    color: "white",
    "& .MuiTypography-root": {
      color: "white",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      color: "white",
    },
  };

  return (
    <div className={`container wpo-benefits-section ${props.sectionClass || ""}`}>
      <div className="row">
        <div className="col-lg-12 col-12" style={{padding: "50px"}}>
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
                  sx={expanded === faqItem.id ? activeSummaryStyles : {}}
                >
                  <Typography>{faqItem.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {faqItem.answerLines.map((line, index) => (
                    <Typography
                      key={index}
                      component="p"
                      sx={faqItem.id === "panel4" && index > 0 ? { pl: 2 } : {}}
                      variant="body2"
                      gutterBottom={index < faqItem.answerLines.length - 1}
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
